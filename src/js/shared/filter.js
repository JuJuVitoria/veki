export function aplicarForm(e) {
  e.preventDefault();

  const paisInput = document.getElementById('paisSearch').value.toLowerCase().trim();
  const categoriaInput = document.getElementById('fCategoriaSearch').value;

  const cards = document.querySelectorAll('.card-emergencia');

  let encontrou = false;

  cards.forEach((card) => {
    const pais = card.dataset.pais.toLowerCase();
    const categoria = card.dataset.categoria;

    const matchPais = pais.includes(paisInput);
    const matchCategoria = categoriaInput === "" || categoria === categoriaInput;

    if (matchPais && matchCategoria) {
      card.style.display = "flex";
      encontrou = true;
    } else {
      card.style.display = "none";
    }
  });

  if (!encontrou) {
    console.log('')
  }
}