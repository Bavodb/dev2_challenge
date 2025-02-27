document.addEventListener("DOMContentLoaded", function () {
    // Voor puzzel 1
    console.log(
      "Hint: De eerste letters van 'Nieuwe Ontdekkingen Wekken Toewijding En Natuur.' helpen je verder, maar ze moeten herordend worden."
    );
  
    // Voor puzzel 2
    const hintButton = document.getElementById("hintButton");
    if (hintButton) {
      hintButton.addEventListener("click", function () {
        alert("Banaan = 8");
      });
    }
  
    // Voor puzzel 3 
    let guessTheAnimal = "otpondezdui";
    sessionStorage.setItem("geheime hint", guessTheAnimal);
  
  //   Voor als je de juiste of foute code invoert. 
    const codeForm = document.getElementById("codeForm");
    if (codeForm) {
      codeForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const codeInput = document.getElementById("codeInput");
        if (codeInput) {
          const code = codeInput.value.trim().toLowerCase(); 
  
          if (code === "newton24duizendpoot") {
            alert("Gefeliciteerd! Je hebt de kluis gekraakt!");
          } else {
            alert("Fout! Probeer opnieuw.");
          }
        }
      });
    }
  });
  