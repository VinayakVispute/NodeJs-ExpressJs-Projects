const axios = require("axios");

async function getTotalGoals(team, year, competition) {
    let response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?name=${competition}&year=${year}&team1=${team}`);
    let responsePerMatch = response.data;

    let response2 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?name=${competition}&year=${year}&team2=${team}`);
    let responsePerMatch2 = response2.data;

    let sum = 0;
        
        responsePerMatch.data.forEach((item) => {
            sum += Number(item.team1goals);
        });
        
        responsePerMatch2.data.forEach((item) => {
            sum += Number(item.team2goals);
        });

    console.log("This is Answer :", sum);
    return sum;
}

async function getWinnerTotalGoals(competition, year) {
    const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`);
    const responsePerMatch = response?.data;
    const winner = responsePerMatch?.data[0]?.winner;

    console.log(responsePerMatch);
    console.log(winner);
    
    await getTotalGoals(winner, year, competition);
}

getWinnerTotalGoals("UEFA Champions League", 2011);
