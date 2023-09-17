const getData = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const movies = JSON.parse(xhr.responseText);
        showMovies(movies);
      } else {
        console.log("Error happened", xhr.status);
      }
    }
  });

  xhr.open("GET", url);
  xhr.send();
};

const showMovies = (movies) => {
  const main = document.querySelector("#main");
  movies.forEach((movie) => {
    const mainEl = document.createElement("div");
    mainEl.innerHTML = `
    <h1>Episode:${movie.episodeId}</h1>
    <h2>Movie Title:${movie.name}</h2>
    <ul id="characters-${movie.id}"></ul>
    <p>${movie.openingCrawl}</p>
    `;
    main.append(mainEl);
    getCharacters(movie.characters, movie.id);
  });
};

const getCharacters = (charactersUrls, id) => {
  charactersUrls.forEach((url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const characterInfo = JSON.parse(xhr.responseText);
          const allCharacters = document.querySelector(`#characters-${id}`);
          const liEl = document.createElement("li");
          liEl.innerText = characterInfo.name;
          allCharacters.append(liEl);
        } else {
          console.log("Error happened", xhr.status);
        }
      }
    });
    xhr.open("GET", url);
    xhr.send();
  });
};

getData("https://ajax.test-danit.com/api/swapi/films");
