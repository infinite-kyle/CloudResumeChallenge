const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://hexxukvzdg.execute-api.us-east-1.amazonaws.com/default/cloud-resume-challenge-view-counter");
    let data = await response.json();
    counter.innerHTML = `Visitors: ${data} `;
}

updateCounter();