document.addEventListener("DOMContentLoaded", () => {
    fetch('data/agenda.csv')
      .then(response => response.text())
      .then(data => {
        const linhas = data.trim().split('\n').slice(1); 
        const lista = document.getElementById("lista-eventos");
  
        linhas.forEach(linha => {
          const [data, titulo, link] = linha.split(',');
          const li = document.createElement('li');
          li.className = 'bg-white p-4 rounded-lg shadow text-center hover:-translate-y-2 transition-all duration-300 text-center';
  
          let conteudo = data.trim()
            ? `<strong>${data}:</strong> ${titulo}`
            : `<strong>Em breve:</strong> ${titulo}`;
  
          if (link && link.trim()) {
            conteudo += `<br><a href="${link.trim()}" target="_blank" class="inline-block mt-2 text-blue-600 hover:underline">Ver mais</a>`;
          }
  
          li.innerHTML = conteudo;
          lista.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar eventos:", error);
      });
  });
  