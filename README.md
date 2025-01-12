# Finanças Pessoais

Aplicação simples para gerenciamento de finanças de maneira simples e eficiente. Adicione, edite e exclua transações enquanto acompanha o saldo automaticamente.


---

## Funcionalidades

- Adicionar novas transações.
- Editar transações existentes.
- Excluir transações desnecessárias.
- Visualizar saldo atualizado com base nas transações registradas.

**Captura de Tela da Interface Principal:**  

![image](https://github.com/user-attachments/assets/dd8dc3bf-2bbd-43f9-aacd-798552a75b7e)


---

## Estrutura do Projeto

```plaintext
FINANCAS-PESSOAIS/
├── js/
│   ├── api.js              # Comunicação com a API (JSON Server).
│   ├── balance.js          # Cálculo e exibição do saldo.
│   ├── dom.js              # Manipulação do DOM e renderização.
│   ├── main.js             # Inicialização da aplicação.
│   ├── transactions.js     # Lógica de transações.
├── node_modules/           # Dependências instaladas.
├── db.json                 # Banco de dados simulado com JSON Server.
├── index.css               # Estilos principais do projeto.
├── index.html              # Estrutura HTML do projeto.
├── package.json            # Configuração do projeto Node.js.
├── package-lock.json       # Controle de versão das dependências.
```

---

## Pré-requisitos

Antes de iniciar, certifique-se de que os seguintes programas estão instalados na sua máquina:

- [Node.js](https://nodejs.org/)
- [JSON Server](https://github.com/typicode/json-server)

---

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/dmardoqueu/financas-pessoais.git
   cd financas-pessoais
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor JSON:
   ```bash
   npm run serve
   ```

4. Abra o arquivo `index.html` no navegador ou utilize uma extensão como **Live Server** para rodar o projeto localmente.

---

## Como Utilizar

### Adicionar Transações
- Preencha o formulário com o nome e valor da transação.
- Clique no botão **Salvar** para adicioná-la ao histórico.

---

### Editar Transações
- Clique no botão **Editar** ao lado da transação.
- Faça as alterações e clique em **Salvar** novamente.


---

### Excluir Transações
- Clique no botão **Excluir** para remover uma transação do histórico.

---

### Visualizar o Saldo
- O saldo será atualizado automaticamente conforme as transações são adicionadas, editadas ou excluídas.

---

Made by [@dmardoqueu](github.com/dmardoqueu)
