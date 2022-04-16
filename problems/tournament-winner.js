/* 

We need to return the wining team from the competition.
We receive an array of arrays which will represent the 2 teams 
facing each other. Each index in the array represents one round.

We also receive a results array which will have 2 indexes 0 and 1. 

If 1 in results, that means the home team won, otherwise the away team won. [1 = home team win, 0 = away team win]

We traverse the competitions array and we will store the current teams in a hashtable.

For every round, we will add the winning team to the hasthable if it wasn't there before and give it 3 points. 
If already there, we will add another 3 points.

We will determine the team with the most points from the hashtable and keep track of it with the currentBestTeam variable. 

We will return the current best team at the end of our traversal.

Big O Notation:

O(n) time 

where n is the length of the competitions array.

O(k) space 

where k is the scores hashTable will store k + 1 keys since the
scores hashTable will have the currentBestTeam key on it.

*/

function tournamentWinner(competitions, results) {
  const scores = {}
  let currentBestTeam = ''
  scores[currentBestTeam] = 0

  for (let index = 0; index < competitions.length; index++) {
    const [homeTeam, awayTeam] = competitions[index]
    const result = results[index]
    const winningTeam = result === 1 ? homeTeam : awayTeam

    if (winningTeam in scores) {
      scores[winningTeam] += 3
    } else {
      scores[winningTeam] = 3
    }

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam
    }
  }

  return currentBestTeam
}
