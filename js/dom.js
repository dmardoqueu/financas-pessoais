export function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

export function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

export function createTransactionAmount(amount) {
    const span = document.createElement('span')
    const formatter = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })
    span.textContent = formatter.format(amount)
    span.classList.add('transaction-amount', amount > 0 ? 'credit' : 'debit')
    return span
}

export function resetForm() {
    const form = document.querySelector('form')
    form.reset()
    form.querySelector('#id').value = ''
}
