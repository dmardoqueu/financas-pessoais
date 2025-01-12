const BASE_URL = 'http://localhost:3000/transactions'

export async function fetchTransactions() {
    const response = await fetch(BASE_URL)
    if (!response.ok) throw new Error('Erro ao buscar as transações.')
    return await response.json()
}

export async function createTransaction(data) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) throw new Error('Erro ao criar a transação.')
    return await response.json()
}

export async function updateTransaction(id, data) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) throw new Error('Erro ao atualizar a transação.')
    return await response.json()
}

export async function deleteTransaction(id) {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    if (!response.ok) throw new Error('Erro ao excluir a transação.')
}
