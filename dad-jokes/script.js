const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// async/await version
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const json = await res.json();

  jokeEl.innerHTML = json.joke;
}

// Promise version using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
