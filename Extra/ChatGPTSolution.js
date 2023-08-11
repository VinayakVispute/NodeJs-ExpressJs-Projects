const axios = require('axios'); // Import the Axios library

async function getWinnerTotalGoals(competition, year) {
    try {
        // Query competition information
        const compUrl = `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`;
        const compResponse = await axios.get(compUrl);
        const winnerTeam = compResponse.data.data[0].winner;

        // Query match information for home team
        const homeMatchesUrl = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team1=${winnerTeam}`;
        const homeMatchesResponse = await axios.get(homeMatchesUrl);
        const homeMatchesData = homeMatchesResponse.data;

        // Query match information for visiting team
        const awayMatchesUrl = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team2=${winnerTeam}`;
        const awayMatchesResponse = await axios.get(awayMatchesUrl);
        const awayMatchesData = awayMatchesResponse.data;

        // Sum up goals scored by the winner's team
        let totalGoals = 0;
        homeMatchesData.data.forEach(match => {
            totalGoals += parseInt(match.team1goals);
        });
        awayMatchesData.data.forEach(match => {
            totalGoals += parseInt(match.team2goals);
        });

        return totalGoals;
    } catch (error) {
        throw error;
    }
}

// Example usage
const competition = "UEFA Champions League";
const year = 2011;
getWinnerTotalGoals(competition, year)
    .then(totalGoals => {
        console.log(totalGoals); // Output: 28
    })
    .catch(error => {
        console.error(error);
    });
