const rowsPerPage = 25;
const totalRows = 250;
let currentPage = 1;
const totalPages = Math.ceil(totalRows / rowsPerPage);

// Generar datos de ejemplo
const data = [];
for (let i = 1; i <= totalRows; i++) {
    data.push({
        estado: `Estado ${i}`,
        plantel: `Plantel ${i}`,
        programa: `Programa ${i}`,
        especialidad: `Especialidad ${i}`,
        web: `<a href='#'>Enlace ${i}</a>`
    });
}

// Renderizar la tabla con los datos de la página actual
function renderTable() {
    const tableBody = document.querySelector("#techTable tbody");
    tableBody.innerHTML = "";
    
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);
    
    paginatedData.forEach(item => {
        const row = `<tr>
                        <td>${item.estado}</td>
                        <td>${item.plantel}</td>
                        <td>${item.programa}</td>
                        <td>${item.especialidad}</td>
                        <td>${item.web}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
    
    document.getElementById("pageInfo").innerText = `Página ${currentPage} de ${totalPages}`;
    document.getElementById("btnPrev").disabled = currentPage === 1;
    document.getElementById("btnNext").disabled = currentPage === totalPages;
}

// Función para ir a la página anterior
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

// Función para ir a la siguiente página
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

// Cargar la primera página al iniciar
window.onload = renderTable;
