const btnEl= document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "hupWukd/43g4kDztCEWrtw==r7osiTp2LGJ2Ft7b";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke () {

try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
   btnEl.innerText = "Updating...";
    const response = await fetch(apiURL, options);
    const data = await response.json()
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerHTML = data[0].joke
} catch (error) {
    jokeEl.innerHTML = "An error happend, try again later"
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
}

   
}

btnEl.addEventListener("click", getJoke)  