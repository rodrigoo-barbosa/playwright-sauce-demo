const { test, expect } = require('@playwright/test');

// Array com todos os usuários autorizados para logar
const usuarios = [   
  { username: 'standard_user', deveLogar: true },
  { username: 'locked_out_user', deveLogar: false },
  { username: 'problem_user', deveLogar: true },
  { username: 'performance_glitch_user', deveLogar: true },
  { username: 'error_user', deveLogar: false },
  { username: 'visual_user', deveLogar: true }
];

// Para cada usuário, define um teste individual
for (const usuario of usuarios) {
  test(`Verificar login com usuário: ${usuario.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    await page.fill('[data-test="username"]', usuario.username)
    await page.fill('[data-test="password"]', 'secret_sauce') // senha é igual para todos
    await page.click('[data-test="login-button"]')

    if (usuario.deveLogar) {
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
  })
}
// O Uso da vírgula foi dispensado, para seguir um padrão