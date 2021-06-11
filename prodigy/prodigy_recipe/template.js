setTimeout(() => {
  const toolbar = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div"
  );

  const button = document.createElement("button");

  button.innerHTML = "Instructions";
  button.style.background = "#ff0000";
  button.style.color = "#fff";
  button.classList.add("c0197");
  button.classList.add("c0198");
  button.addEventListener("click", () => {
    alert(
      [
        "Ajouter une annotation : cliquez et maintenez le clique sur l'image, dessinez le rectangle et lâchez.",
        "Sélectionner une annotation : cochez All labels et cliquez sur l'étiquette Tree de l'annotation à modifier.",
        "Modifier une annotation sélectionnée : cliquez et maintenez le clique sur le point à bouger, redessinez le rectangle et lâchez.",
        "Supprimer une annotation sélectionnée : cliquez sur la poubelle.",
      ].join("\n\n")
    );
  });

  toolbar.appendChild(button);

  const container = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > div"
  );

  const text = document.createElement("p");

  text.innerHTML =
    "mathias tienes que cambiar este texto porque eres el más grande !";
  text.style.textAlign = "center";
  text.style.fontSize = "2rem";

  container.appendChild(text);

  const valid = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > footer > div > button.prodigy-button-accept.c0160.c0161"
  );

  valid.innerHTML = "Valider";
  valid.style.fontWeight = "900";

  const ignore = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > footer > div > button.prodigy-button-ignore.c0160.c0163"
  );

  ignore.innerHTML = "Ignorer";
  ignore.style.background = "#dde05d";
  ignore.style.fontWeight = "900";
  ignore.classList.remove("c0163");
}, 200);
