const fotosPerPage = 6;
let currentPage = 1;

const fotos = [
    "AlissonEPato.jpg",
    "Aniversario.jpg",
    "Bandeira.png",
    "Burse.jpg",
    "Classico.jpg",
    "Elenco.webp",
    "Estadio.jpg",
    "Fernandes.webp",
    "FFC.webp",
    "Mascote.webp",
    "Uniforme.webp"
];

function showPage(page) {
    const start = (page - 1) * fotosPerPage;
    const end = start + fotosPerPage;
    const fotosToShow = fotos.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    fotosToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= fotos.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * fotosPerPage < fotos.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);