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
            const characters = movieData.characters;

            if (characters && characters.length > 0) {
                characters.forEach((characterURL) => {
                    request(characterURL, (characterError, characterResponse, characterBody) => {
                        if (!characterError) {
                            const characterData = JSON.parse(characterBody);
                            console.log(characterData.name);
                        } else {
                            console.error('Error fetching character:', characterError);
                        }
                    });
                });
            } else {
                console.log('No characters found for the given movie ID.');
            }
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});
