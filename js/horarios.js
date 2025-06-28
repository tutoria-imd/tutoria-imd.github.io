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

        const tutores = [...new Set(data.map(row => row.Tutor).filter(Boolean))];

        const select = document.createElement('select');
        select.className = 'mb-4 px-4 py-2 border rounded bg-white text-blue-900';
        select.innerHTML = `<option value="">Selecione um tutor</option>` +
          tutores.map(tutor => `<option value="${tutor}">${tutor}</option>`).join('');
        
        container.appendChild(select);
        const tableWrapper = document.createElement('div');
        container.appendChild(tableWrapper);

        function renderTabela(tutorSelecionado) {
          tableWrapper.innerHTML = ''; // limpa tabela anterior
          const dadosFiltrados = data.filter(row => row.Tutor === tutorSelecionado);

          if (dadosFiltrados.length === 0) return;

          const table = document.createElement('table');
          table.className = 'min-w-full table-auto border border-gray-300 shadow-sm text-sm';

          // Cabeçalho 
          const thead = document.createElement('thead');
          thead.className = 'bg-blue-100 text-blue-900 font-semibold';
          const headerRow = document.createElement('tr');

          const headers = Object.keys(dadosFiltrados[0]).slice(1, -1);
          headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            th.className = 'px-4 py-2 border';
            headerRow.appendChild(th);
          });

          thead.appendChild(headerRow);
          table.appendChild(thead);

          // Corpo
          const tbody = document.createElement('tbody');
          dadosFiltrados.forEach((row, rowIndex) => {
            const tr = document.createElement('tr');
            tr.className = rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50';

            const values = Object.values(row).slice(1, -1);
            values.forEach(value => {
              const td = document.createElement('td');
              td.textContent = value;
              td.className = 'px-4 py-2 border text-center';
              tr.appendChild(td);
            });

            tbody.appendChild(tr);
          });

          table.appendChild(tbody);
          tableWrapper.appendChild(table);
        }

        select.addEventListener('change', (e) => {
          const tutor = e.target.value;
          renderTabela(tutor);
        });
      }
    });
  });
