document.addEventListener("DOMContentLoaded", () => {
  fetch("data/dicas.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("cards-container");

      data.forEach((item, index) => {
        if (!item.titulo || !item.link) return;

        const card = document.createElement("a");
        card.className = "p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center";
        card.setAttribute("href", item.link);
        card.setAttribute("target", "_blank");
        card.setAttribute("rel", "noopener noreferrer");
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", `${100 + index * 50}`);

        card.innerHTML = `
          <h3 class="text-2xl font-bold text-blue-800 mb-3">${item.titulo}</h3>
          <p class="text-gray-700 text-base leading-relaxed">${item.descricao || 'Nenhuma descrição disponível.'}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => console.error("Erro ao carregar o JSON:", error));
});