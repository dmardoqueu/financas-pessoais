import { fetchTransactions, createTransaction, updateTransaction } from './api.js'
import { renderTransaction, setTransactions, addTransaction, updateTransactionList } from './transactions.js'
import { resetForm } from './dom.js'
import { updateBalance } from './balance.js'

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const transactions = await fetchTransactions()
        setTransactions(transactions)
        transactions.forEach(renderTransaction)
        updateBalance(transactions)
    } catch (error) {
        alert('Erro ao carregar as transações.')
    }
})

document.querySelector('form').addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    try {
        if (id) {
            const transaction = await updateTransaction(id, { name, amount })
            updateTransactionList(transaction)
            document.querySelector(`#transaction-${id}`).remove()
            renderTransaction(transaction)
        } else {
            const transaction = await createTransaction({ name, amount })
            addTransaction(transaction)
            renderTransaction(transaction)
        }

        resetForm()
        updateBalance(transactions)
    } catch (error) {
        alert(error.message)
    }
})
