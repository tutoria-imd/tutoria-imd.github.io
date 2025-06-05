fetch('data/horarios_tutores.csv') 
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        const data = results.data;
        const container = document.getElementById('csvDisplay');
        
        if (data.length === 0) {
          container.innerHTML = "<p class='text-red-500'>Nenhum dado encontrado.</p>";
          return;
        }

        // Criar tabela com Tailwind
        const table = document.createElement('table');
        table.className = 'min-w-full table-auto border border-gray-300 shadow-sm text-sm';

        // Cabeçalho
        const thead = document.createElement('thead');
        thead.className = 'bg-blue-100 text-blue-900 font-semibold';
        const headerRow = document.createElement('tr');
        
        Object.keys(data[0]).forEach(header => {
          const th = document.createElement('th');
          th.textContent = header;
          th.className = 'px-4 py-2 border';
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Corpo
        const tbody = document.createElement('tbody');
        data.forEach((row, rowIndex) => {
          const tr = document.createElement('tr');
          tr.className = rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50';

          Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            td.className = 'px-4 py-2 border text-center';
            tr.appendChild(td);
          });

          tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        container.innerHTML = ''; // Limpa antes de adicionar
        container.appendChild(table);
      },
      error: function(error) {
        document.getElementById('errorMessage').innerHTML =
          "<p class='text-red-500'>Erro ao carregar o CSV: " + error.message + "</p>";
      }
    });
  });
