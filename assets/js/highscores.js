
//  Add highScores from localstorage to highscores page

function displayScores() {
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    scores.sort(function(a, b){return b.score-a.score});

    // add scores to list
    scores.forEach(function(score) {
        var liField = document.createElement("li");
        liField.textContent = score.initials + " :: " + score.score;

        // display
        var ulEl = document.getElementById("high-scores");
        ulEl.appendChild(liField);
    });   
}

function removeScores() {
    window.localStorage.removeItem("scores");
    document.location.reload();
}

document.getElementById("removeScores").onclick = removeScores;


displayScores(); // runs function