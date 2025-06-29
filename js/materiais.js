document.addEventListener("DOMContentLoaded", () => {
  fetch("data/materiais.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("cards-container");
      const filtroTags = document.getElementById("filtro-tags");

      const todasTags = new Set();
      data.forEach(item => item.tags?.forEach(tag => todasTags.add(tag)));

      // Ajustes aqui para deixar os botões maiores
      const classeBase = "px-5 py-2 rounded-full text-base font-medium transition-all"; // Aumentado padding e tamanho da fonte
      const classeAtivo = "bg-blue-600 text-white hover:bg-blue-700 shadow-md"; // Adicionado sombra para destaque
      const classeInativo = "bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900"; // Melhorado hover

      let botaoAtivo = null;

      // Botão "Todos"
      const botaoTodos = document.createElement("button");
      botaoTodos.textContent = "Todos";
      botaoTodos.className = `${classeBase} ${classeAtivo}`;
      botaoTodos.addEventListener("click", () => {
        renderCards(data);
        atualizarBotaoAtivo(botaoTodos);
      });
      filtroTags.appendChild(botaoTodos);
      botaoAtivo = botaoTodos;

      // Botões de tag
      todasTags.forEach(tag => {
        const botao = document.createElement("button");
        botao.textContent = tag;
        botao.className = `${classeBase} ${classeInativo}`;
        botao.addEventListener("click", () => {
          const filtrados = data.filter(item => item.tags?.includes(tag));
          renderCards(filtrados);
          atualizarBotaoAtivo(botao);
        });
        filtroTags.appendChild(botao);
      });

      function atualizarBotaoAtivo(novoBotao) {
        if (botaoAtivo) {
          botaoAtivo.className = `${classeBase} ${classeInativo}`;
        }
        novoBotao.className = `${classeBase} ${classeAtivo}`;
        botaoAtivo = novoBotao;
      }

      function renderCards(lista) {
        container.innerHTML = "";
        lista.forEach((item, index) => {
          if (!item.titulo || !item.link) return;

          const card = document.createElement("div");
          card.className = "p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center";
          card.setAttribute("data-aos", "fade-up");
          card.setAttribute("data-aos-delay", `${100 + index * 50}`);

          let tagsHtml = "";
          // Mantendo as tags dentro do card um pouco maiores também, para consistência
          if (item.tags && item.tags.length > 0) {
            tagsHtml = `
              <div class="mt-3 flex flex-wrap justify-center gap-2">
                ${item.tags.map(tag => `
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full">${tag}</span>
                `).join('')}
              </div>
            `;
          }

          card.innerHTML = `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">
              <h3 class="text-xl font-semibold text-blue-700 mb-2">${item.titulo}</h3>
              <p class="text-gray-600 text-sm mb-4">${item.descricao || ''}</p>
            </a>
            ${tagsHtml}
          `;

          container.appendChild(card);
        });
      }

      renderCards(data);
    })
    .catch(error => console.error("Erro ao carregar os materiais:", error));
});