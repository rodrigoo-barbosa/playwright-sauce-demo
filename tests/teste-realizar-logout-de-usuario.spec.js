import { test, expect } from '@playwright/test'

test.describe('Função de logout de usuário', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
  })

  test('Verificar a ação de logout da conta do usuário atual logado', async ({ page }) => {
    // Realiza login
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()

    // Abre o menu lateral
    await page.locator('#react-burger-menu-btn').click()

    // Verifica se os itens do menu estão visíveis
    await expect(page.getByText('All Items')).toBeVisible()
    await expect(page.getByText('About')).toBeVisible()
    await expect(page.getByText('Logout')).toBeVisible()
    await expect(page.getByText('Reset App State')).toBeVisible()

    // Realiza logout
    await page.locator('[data-test="logout-sidebar-link"]').click()

    // Verifica se voltou à página de login
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(page.locator('[data-test="login-button"]')).toBeVisible()
  })
})
