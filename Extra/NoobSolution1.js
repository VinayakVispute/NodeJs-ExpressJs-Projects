const axios = require("axios");

async function getTotalGoals(team, year,competition) {
    let response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?name=${competition}&year=${year}&team1=${team}`);
    let responsePerMatch = response.data; // Remove unnecessary await

    let response2 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?name=${competition}&year=${year}&team2=${team}`);
    let responsePerMatch2 = response2.data; // Remove unnecessary await

    let sum = 0;
    for (let i = 0; i < responsePerMatch.total_pages; i++) {
        let responseData = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?name=${competition}&year=${year}&team1=${team}&page=${i + 1}`);
        responseData.data.data.forEach((item) => {
            sum += Number(item.team1goals);
        });
    }

    for (let i = 0; i < responsePerMatch2.total_pages; i++) {
        let responseData2 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?name=${competition}&year=${year}&team2=${team}&page=${i + 1}`);
        responseData2.data.data.forEach((item) => {
            sum += Number(item.team2goals);
        });
    }
  console.clear();
console.log("This is Answer :",sum);
    return sum;
}



async function getWinnerTotalGoals(competition, year) {
const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`);
const responsePerMatch = await response?.data;
const winner = responsePerMatch?.data[0]?.winner;
  console.log(responsePerMatch);
  console.log(winner);
  getTotalGoals(winner,year,competition)
}

getWinnerTotalGoals("UEFA Champions League",2011);
