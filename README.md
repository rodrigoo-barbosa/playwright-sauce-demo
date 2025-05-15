
# ⚙️ Testes Automatizados - SauceDemo utilizando Playwright

Este projeto contém testes automatizados criados com **Playwright**, utilizando **Node.js** e **Visual Studio Code**, aplicados na aplicação de demonstração [SauceDemo](https://www.saucedemo.com/).

---

## ✅ Casos de Teste Implementados

### 🔐 LOGIN-001 - Login com credenciais válidas
- **Funcionalidade:** Tela de Login
- **Descrição:** Verificar login com usuários válidos
- **Dados de Entrada:**
  - Usuários: `standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`, `error_user`, `visual_user`
  - Senha: `secret_sauce`
- **Passos:**
  1. Acessar o site: https://www.saucedemo.com
  2. Informar o nome de usuário
  3. Informar a senha
  4. Clicar em "Login"
- **Resultado Esperado:** Usuário redirecionado para `/inventory.html`
- **Pós-condição:** Usuário autenticado

---

### ⚠️ LOGIN-002 - Login com username vazio
- **Funcionalidade:** Tela de Login
- **Descrição:** Verificar mensagem de erro ao tentar logar sem preencher o nome de usuário
- **Dados de Entrada:** Apenas senha válida
- **Passos:**
  1. Acessar o site
  2. Preencher apenas a senha
  3. Clicar no botão de login
- **Resultado Esperado:** Mensagem: `"Epic sadface: Username is required"`
- **Pós-condição:** Não aplicável

---

### 🔓 LOGOUT-001 - Realizar logout com sucesso
- **Funcionalidade:** Logout
- **Descrição:** Verificar a ação de logout de um usuário autenticado
- **Pré-condição:** Usuário deve estar logado
- **Passos:**
  1. Clicar no menu de opções (ícone com 3 barras)
  2. Clicar em "Logout"
- **Resultado Esperado:**
  - Menu com opções: All Items, About, Logout, Reset App State
  - Usuário deslogado e redirecionado para a tela de login
- **Pós-condição:** Não aplicável

---

### 🛒✅ COMPRA-001 - Realizar compras de itens com sucesso
- **Funcionalidade:** Compra de Itens
- **Descrição:** Verificar se o usuário é capaz de concluir uma compra com sucesso
- **Pré-condição:** Usuário logado
- **Passos:**
  1. Acessar a tela de inventário
  2. Adicionar "Sauce Labs Backpack" ao carrinho
  3. Adicionar "Sauce Labs Bolt T-Shirt" ao carrinho
  4. Clicar no carrinho
  5. Iniciar checkout
  6. Preencher dados: First Name, Last Name, Zip/Postal Code
  7. Clicar em "Continue"
  8. Clicar em "Finish"
  9. Clicar em "Back Home"
- **Resultado Esperado:**
  - Itens adicionados corretamente ao carrinho
  - Informações visíveis durante o checkout
  - Mensagem de sucesso:
    ```
    Thank you for your order!
    Your order has been dispatched, and will arrive just as fast as the pony can get there!
    ```
  - Retorno à tela de produtos
- **Pós-condição:** Não aplicável

---

## 🛠️ Tecnologias Utilizadas

- Playwright
- Node.js
- JavaScript
- Visual Studio Code

---

## 🚀 Como executar os testes

### Pré-requisitos:
- Node.js instalado
- Playwright instalado (`npx playwright install`)

### Passos:
1. Clone o repositório:
```bash
git clone https://github.com/rodrigoo-barbosa/playwright-sauce-demo
```
2. Acesse a pasta do projeto:
```bash
cd nome-do-projeto
```
3. Instale as dependências:
```bash
npm install
```
4. Execute todos os testes com navegador visível:
```bash
npx playwright test --headed
```
5. Execute um teste específico:
```bash
npx playwright test tests/login-usuario-vazio.spec.js --headed
```
6. Ou use a interface interativa:
```bash
npx playwright test --ui
```

---

## 📈 Recursos adicionais do Playwright

- Suporte a múltiplos navegadores (Chromium, Firefox, WebKit)
- Execução em paralelo por padrão
- Relatórios HTML automáticos com `--reporter html`

---

## 👨‍💻✍️ Autor

Desenvolvido por Rodrigo Barbosa
