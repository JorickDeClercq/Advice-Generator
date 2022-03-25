document.addEventListener('click', function(e) {
    // Check if the button was clicked
    if(!event.target.matches('.button')) return;

    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => renderAdvice(data))
        .catch(() => renderError());
})

function renderAdvice(data) {
    const adviceId = document.getElementById("advice__id");
    const adviceText = document.getElementById("advice__text");

    adviceId.innerHTML = data.slip.id;
    adviceText.innerHTML = data.slip.advice;
}

function renderError() {
    alert("Whoops, something went wrong. Please try again later!");
}