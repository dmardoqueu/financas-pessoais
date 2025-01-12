export function updateBalance(transactions) {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formatter = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })
    balanceSpan.textContent = formatter.format(balance)
}
