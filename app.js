import { createElement } from "./utils/functions.js";

const formulaire = document.querySelector("form");
const output = document.getElementById("output");
const formData = new FormData(formulaire);
const divAff = document.querySelector(".aff");
const input = document.querySelectorAll("input");
// const inputTab = Array.from(input);
// console.log(inputTab);
const nom = createElement("p", {
  class: "para",
});
const prenom = createElement("p", {
  class: "para",
});
const suggestion = createElement("p", {
  class: "para",
});
const btn = createElement("button", {
  class: "btn btn-primary",
});
const loading = createElement("div", {
  class: "arc",
});
btn.innerText = "Supprimer";
btn.style.backgroundColor = "red";
divAff.appendChild(nom);
divAff.appendChild(prenom);
divAff.appendChild(suggestion);

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    console.log("hello");
  }, 2000);

  //   console.log(document.getElementById("floatingInput").value);
  formData.append("Nom", document.getElementById("floatingInput").value);
  formData.append("Prénom", document.getElementById("floatingInput2").value);
  formData.append(
    "Suggestion",
    document.getElementById("floatingTextarea").value
  );
  // const inputTab = Array.from(input);
  // inputTab.forEach((val) => {
  //   console.log(val.value);
  // });
  // affichage();
  const affichage = new Promise((resolve, reject) => {
    resolve(divAff.appendChild(loading));
  });

  affichage
    .then((aff) => {
      console.log(aff);
      return new Promise((resolve, reject) => {
        const time = setTimeout(() => {
          resolve("attente de 2 secondes");
        }, 2000);
        return time;
      });
    })
    .then((to) => {
      console.log(to);
      return new Promise((resolve, reject) => {
        resolve(divAff.removeChild(loading));
      });
    })
    .then((remove) => {
      console.log(remove);
      return new Promise((resolve, reject) => {
        const time2 = setTimeout(() => {
          resolve("attente de 2 secondes");
        }, 2000);
        return time2;
      });
    })
    .then((att) => {
      console.log(att);
      return new Promise((resolve, reject) => {
        for (const [key, value] of formData) {
          if (key === "Nom") {
            nom.innerText = value;
          }
          if (key === "Prénom") {
            prenom.innerText = value;
          }
          if (key === "Suggestion") {
            suggestion.innerText = value;
          }
          divAff.appendChild(btn);
        }
      });
    });

  btn.addEventListener("click", () => {
    nom.innerText = "";
    prenom.innerText = "";
    suggestion.innerText = "";
    divAff.removeChild(btn);
  });
});

async function affichage() {
  divAff.appendChild(loading);
  await wait(1000);
  divAff.removeChild(loading);
  await wait(1000);
  for (const [key, value] of formData) {
    if (key === "Nom") {
      nom.innerText = value;
    }
    if (key === "Prénom") {
      prenom.innerText = value;
    }
    if (key === "Suggestion") {
      suggestion.innerText = value;
    }
    divAff.appendChild(btn);
  }
}

function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}
