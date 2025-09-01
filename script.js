const data = [
  {
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    description: "Um grupo de amigos enfrenta criaturas de outra dimensão na pequena cidade de Hawkins."
  },
  {
    title: "Pantanal",
    image: "https://pbs.twimg.com/media/FR6Ov0KWUAErsKv.jpg",
    description: "Remake da clássica novela brasileira, com cenários deslumbrantes e muito drama familiar."
  },
  {
    title: "Breaking Bad",
    image: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    description: "Um professor de química entra no mundo do crime para garantir o futuro da sua família."
  },
  {
    title: "Velozes e Furiosos",
    image: "https://m.media-amazon.com/images/I/81T9u0+o5-L._AC_UF894,1000_QL80_.jpg",
    description: "Corridas, ação e família. Uma das franquias mais populares do cinema."
  }
];

const content = document.getElementById("content");
const search = document.getElementById("search");

// Função para exibir os cards
function showCards(items) {
  content.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-content">
        <div class="card-title">${item.title}</div>
        <div class="card-description">${item.description}</div>
      </div>
    `;

    content.appendChild(card);
  });
}

// Filtro de busca
search.addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();
  const filtered = data.filter(item => item.title.toLowerCase().includes(text));
  showCards(filtered);
});

// Exibir todos ao carregar
showCards(data);
