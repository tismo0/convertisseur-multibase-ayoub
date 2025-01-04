// Fonction pour convertir entre bases
function convertMultiBase() {
  const input = document.getElementById('multiInput').value.trim();
  const fromBase = parseInt(document.getElementById('fromBase').value, 10);
  const toBase = parseInt(document.getElementById('toBase').value, 10);
  const resultElement = document.getElementById('multiResult');

  try {
    // Convertir l'entrée vers une base commune (décimal)
    const decimalValue = parseInt(input, fromBase);
    if (isNaN(decimalValue)) throw new Error("Entrée invalide dans la base source.");

    // Convertir le nombre décimal vers la base cible
    const convertedValue = decimalValue.toString(toBase).toUpperCase();

    // Mettre en avant le résultat converti
    resultElement.innerHTML = `Résultat : ${input} en base ${fromBase} est <span class="result-highlight">${convertedValue}</span> en base ${toBase}`;
  } catch (error) {
    resultElement.textContent = `Erreur : ${error.message}`;
  }
}

// Fonction pour tester les couleurs
function testColor() {
  const colorInput = document.getElementById('colorInput').value.trim();
  const colorDisplay = document.getElementById('colorDisplay');
  const colorFeedback = document.getElementById('colorFeedback');

  // Vérifier si le code couleur est valide
  const hexRegex = /^#([0-9A-Fa-f]{6})$/;

  if (hexRegex.test(colorInput)) {
    colorDisplay.style.backgroundColor = colorInput;
    colorFeedback.textContent = "";
  } else {
    colorDisplay.style.backgroundColor = "transparent";
    colorFeedback.textContent = "Code couleur invalide !";
    colorFeedback.classList.add("error");
  }
}
