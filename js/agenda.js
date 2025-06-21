document.addEventListener("DOMContentLoaded", () => {
  fetch('data/agenda.json')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById("lista-eventos");

      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'bg-white p-4 rounded-lg shadow text-center hover:-translate-y-2 transition-all duration-300 text-center';

        let conteudo = item.data && item.data.trim()
          ? `<strong>${item.data}:</strong> ${item.titulo}`
          : `<strong>Em breve:</strong> ${item.titulo}`;

        if (item.link && item.link.trim()) {
          conteudo += `<br><a href="${item.link.trim()}" target="_blank" class="inline-block mt-4 px-4 py-1 bg-white text-gray-700 text-sm font-semibold rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out">Ver mais</a>`;
        }

        li.innerHTML = conteudo;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar eventos:", error);
    });
});
