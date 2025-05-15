const { test, expect } = require('@playwright/test');

test('Verificar campo de username vazio e exibir erro', async ({ page }) => {
  // Acessa a página de login
  await page.goto('https://www.saucedemo.com/');

  // Preenche apenas o campo de senha
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Clica no botão de login
  await page.click('[data-test="login-button"]');

  // Verifica se a mensagem de erro está visível
  await expect(page.locator('text=Epic sadface: Username is required')).toBeVisible();
});
