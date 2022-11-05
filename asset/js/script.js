const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

ul.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('navbar')) {
    a.forEach((a) => {
      console.info(a.className);
      a.className = 'navbar';
    });
    event.target.classList.add('active');
  }
});

const search = document.querySelector('.search');
const btn = document.querySelector('.button');

btn.addEventListener('click', function () {
  fetch(`https://api.jikan.moe/v4/anime?q=${search.value}&limit=12`)
    .then((res) => res.json())
    .then((data) => {
      const animes = data.data;
      let card = '';
      for (const anime of animes) {
        card += showCard(anime);
      }
      const content = document.getElementById('content');
      content.innerHTML = card;
    });
});

const navbar = document.querySelectorAll('ul li');
navbar.forEach((n) => {
  const judul = n.textContent;
  n.addEventListener('click', function pageload(n) {
    fetch(`https://api.jikan.moe/v4/anime?q=${judul}&limit=12`)
      .then((res) => res.json())
      .then((data) => {
        const animes = data.data;
        let card = '';
        for (const anime of animes) {
          card += showCard(anime);
        }
        const content = document.getElementById('content');
        content.innerHTML = card;
      });
  });
});

function showCard(anime) {
  return `<div class="card">
  <div class="head-card">
    <img src="${anime.images.jpg.image_url}" alt="" />
  </div>
  <div class="body-card">
    <h3>${anime.title}</h3>
    <p>Score : ${anime.score}</p>
    <p>Status : ${anime.status}</p>
    <p>Type : ${anime.type}</p>
  </div>
  </div>`;
}

window.addEventListener('load', function () {
  fetch(`https://api.jikan.moe/v4/anime?q=ninja hatori&limit=12`)
    .then((res) => res.json())
    .then((data) => {
      const animes = data.data;
      let card = '';
      for (const anime of animes) {
        card += showCard(anime);
      }
      const content = document.getElementById('content');
      content.innerHTML = card;
    });
});
