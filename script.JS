import { config } from './config.js';

let ul = document.querySelector("ul");
let inputNumeroPage = document.querySelector("#numPage");
let btnRecherchez = document.querySelector('#btnRecherchez');
let research = document.getElementById("research");
let numeroPage;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.API_KEY}`
  }
};

let resulats = [];
research.addEventListener("input" , (e) =>{
    let valeurBarreResearch = e.target.value.toLowerCase();
    let resultat = resulats.filter(item => item.title.toLowerCase().includes(valeurBarreResearch));
    afficherRecherche(resultat);
})


function afficherRecherche(resultat) {
  ul.innerHTML = '';
  resultat.forEach(item => {
      let li = document.createElement("li");
      ul.appendChild(li);
      let title = document.createElement("p");
      title.textContent = item.title;
      li.appendChild(title);
      let image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        li.appendChild(image);
  });
}


btnRecherchez.addEventListener("click", function(event) {
  event.preventDefault();

  numeroPage = inputNumeroPage.value;
  console.log(numeroPage);

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=' + numeroPage, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      ul.innerHTML = ""; // Nettoyer la liste précédente
      resulats = response.results;
      for (let index = 0; index < response.results.length; index++) {
        let li = document.createElement("li");
        ul.appendChild(li);

        let title = document.createElement("p");
        title.textContent = response.results[index].title;
        li.appendChild(title);

        let image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${response.results[index].poster_path}`;
        li.appendChild(image);
      }
    })
    .catch(err => console.error(err));

});