const request = require('request');

const movieID = process.argv[2];

if (!movieID) {
    console.error('Please provide a movie ID as the first argument.');
    process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else {
        try {
            const movieData = JSON.parse(body);
            console.log(movieData.title);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});
