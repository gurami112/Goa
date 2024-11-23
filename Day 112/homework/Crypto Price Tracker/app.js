document.getElementById('crypto-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const crypto = document.getElementById('crypto-name').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
        if (!response.ok) {
            throw new Error('Cryptocurrency not found');
        }
        const data = await response.json();
        if (data.length === 0) {
            throw new Error('Cryptocurrency not found');
        }

        const cryptoInfo = `
            <h2>${data[0].name} (${data[0].symbol.toUpperCase()})</h2>
            <p><strong>Current Price:</strong> $${data[0].current_price}</p>
            <p><strong>Market Cap:</strong> $${data[0].market_cap}</p>
            <p><strong>24h Change:</strong> ${data[0].price_change_percentage_24h}%</p>
        `;
        resultDiv.innerHTML = cryptoInfo;
    } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
});