document.getElementById('github-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('github-username').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            const userInfo = `
                <h2>${data.name} (@${data.login})</h2>
                <img src="${data.avatar_url}" alt="${data.login}'s avatar" width="100">
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Public Repos: ${data.public_repos}</p>
                <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
            `;
            resultDiv.innerHTML = userInfo;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>${error.message}</p>`;
        });
});