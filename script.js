// Insert your own API keys here
const premierLeagueAPIKey = 'YOUR_FOOTBALL_DATA_API_KEY';
const nbaAPIKey = 'YOUR_NBA_API_KEY';
const nflAPIKey = 'YOUR_NFL_API_KEY';

// Premier League (Soccer) API Integration
async function fetchPremierLeagueData() {
    try {
        const response = await fetch(`https://api.football-data.org/v2/competitions/PL/matches`, {
            headers: { 'X-Auth-Token': premierLeagueAPIKey }
        });
        const data = await response.json();
        displayPremierLeagueMatches(data.matches);
    } catch (error) {
        console.error('Error fetching Premier League data:', error);
    }
}

function displayPremierLeagueMatches(matches) {
    const randomIndex = Math.floor(Math.random() * matches.length);
    const match = matches[randomIndex];
    document.getElementById('soccerPrediction').innerText = 
        `Match: ${match.homeTeam.name} vs ${match.awayTeam.name} \nDate: ${new Date(match.utcDate).toLocaleString()}`;
}

// NBA (Basketball) API Integration
async function fetchNBAGames() {
    try {
        const response = await fetch(`https://www.balldontlie.io/api/v1/games?per_page=10`);
        const data = await response.json();
        displayNBAGames(data.data);
    } catch (error) {
        console.error('Error fetching NBA data:', error);
    }
}

function displayNBAGames(games) {
    const randomIndex = Math.floor(Math.random() * games.length);
    const game = games[randomIndex];
    document.getElementById('basketballPrediction').innerText = 
        `Match: ${game.home_team.full_name} vs ${game.visitor_team.full_name} \nDate: ${new Date(game.date).toLocaleString()}`;
}

// NFL (American Football) API Integration
async function fetchNFLGames() {
    try {
        const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules`, {
            headers: { 'Ocp-Apim-Subscription-Key': nflAPIKey }
        });
        const data = await response.json();
        displayNFLGames(data);
    } catch (error) {
        console.error('Error fetching NFL data:', error);
    }
}

function displayNFLGames(games) {
    const randomIndex = Math.floor(Math.random() * games.length);
    const game = games[randomIndex];
    document.getElementById('footballPrediction').innerText = 
        `Match: ${game.AwayTeam} vs ${game.HomeTeam} \nDate: ${new Date(game.Date).toLocaleString()}`;
}

// Call these functions on button clicks

function predictBasketball() {
    fetchNBAGames();
}

function predictSoccer() {
    fetchPremierLeagueData();
}

function predictFootball() {
    fetchNFLGames();
}
