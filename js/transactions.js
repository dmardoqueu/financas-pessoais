import { createTransactionContainer, createTransactionTitle, createTransactionAmount } from './dom.js'
import { deleteTransaction } from './api.js'
import { updateBalance } from './balance.js'

let transactions = []

export function setTransactions(data) {
    transactions = data
}

export function addTransaction(transaction) {
    transactions.push(transaction)
}

export function updateTransactionList(transaction) {
    const index = transactions.findIndex((t) => t.id === transaction.id)
    transactions[index] = transaction
}

export function removeTransaction(id) {
    const index = transactions.findIndex((t) => t.id === id)
    if (index > -1) transactions.splice(index, 1)
}

export function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditButton(transaction)
    const deleteBtn = createDeleteButton(transaction.id)

    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}

function createEditButton(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
}

function createDeleteButton(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () => {
        try {
            await deleteTransaction(id)
            document.querySelector(`#transaction-${id}`).remove()
            removeTransaction(id)
            updateBalance(transactions)
        } catch (error) {
            alert(error.message)
        }
    })
    return deleteBtn
}
