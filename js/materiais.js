document.addEventListener("DOMContentLoaded", () => {
    Papa.parse("data/materiais.csv", {
      download: true,
      header: true,
      complete: function (results) {
        const container = document.getElementById("cards-container");
        results.data.forEach((item, index) => {
          if (!item.titulo || !item.link) return;
  
          const card = document.createElement("div");
          card.className = "p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center";
          card.setAttribute("data-aos", "fade-up");
          card.setAttribute("data-aos-delay", `${100 + index * 50}`);
  
          card.innerHTML = `
            <a href="${item.link}" target="_blank">
                <h3 class="text-xl font-semibold text-blue-700 mb-2">${item.titulo}</h3>
                <p class="text-gray-600 text-sm mb-4">${item.descricao}</p>
            </a>
          `;
          container.appendChild(card);
        });
      }
    });
  });
  