const { test, expect } = require('@playwright/test');

test('Verificar se usuário é capaz de realizar compras de produtos com sucesso', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/')

  // Realiza login do usuário 'standard_user'
  await page.fill('[data-test="username"]', 'standard_user')
  await page.fill('[data-test="password"]', 'secret_sauce')
  await page.click('[data-test="login-button"]')
  await page.click('#react-burger-menu-btn') // menu lateral

  // Seleciona os itens para compra e verifica se a quantidade do carrinho é incrementada
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

  await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2')

  // Verifica se os itens selecionados anteriormente estão visíveis na página
  await page.click('[data-test="shopping-cart-badge"]')
  await expect(page.locator('text=Sauce Labs Backpack')).toBeVisible()
  //await expect(page.locator('text=Sauce Labs Bolt T-Shirt')).toBeVisible();   // Ativar esta linha, o teste falha porque encontra o texto tanto no carrinho, quanto na listagem da página
  await expect(page.locator('.cart_item:has-text("Sauce Labs Bolt T-Shirt")')).toBeVisible() // Aqui verifica texto somente na página de carrinho
  

  // Preenche o formulário de Checkout
  await page.click('[data-test="checkout"]')
  await expect(page).toHaveURL(/.*checkout-step-one.html/)
  await page.fill('[data-test="firstName"]', 'Rodrigo')
  await page.fill('[data-test="lastName"]', 'Barbosa')
  await page.fill('[data-test="postalCode"]', '69000000')
  await page.click('[data-test="continue"]')

  // Verifica novamente se os itens estão visíveis na página de confirmação
  await expect(page.locator('text=Sauce Labs Backpack')).toBeVisible()
  //await expect(page.locator('text=Sauce Labs Bolt T-Shirt')).toBeVisible(); //Procura texto no carrinho e na listagem da página
  await expect(page.locator('.cart_item:has-text("Sauce Labs Bolt T-Shirt")')).toBeVisible(); // Procura somente na página do carrinho
  

  // Confirma pedido
  await page.click('[data-test="finish"]');
  await expect(page).toHaveURL(/.*checkout-complete.html/)
  await expect(page.locator('text=Thank you for your order!')).toBeVisible()
  await expect(page.locator('text=Your order has been dispatched')).toBeVisible()

  // Retorna para tela inicial
  await page.click('[data-test="back-to-products"]')
  await expect(page).toHaveURL(/.*inventory.html/)
})
