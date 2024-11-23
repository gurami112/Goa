document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('movie-title').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch(`https://www.omdbapi.com/?t=${title}&apikey=7eb361b2`)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "False") {
                throw new Error(data.Error);
            }

            const movieInfo = `
                <img src="${data.Poster}" alt="${data.Title} poster" width="150">
                <div>
                    <h2>${data.Title} (${data.Year})</h2>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
                </div>
            `;
            resultDiv.innerHTML = movieInfo;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>${error.message}</p>`;
        });
});