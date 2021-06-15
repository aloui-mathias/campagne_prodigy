
function reverse(n) {  // Reverse the order of the children of Node n
  var kids = n.childNodes;                  // Get the list of children
  var numkids = kids.length;                // Figure out how many there are
  for (var i = numkids - 1; i >= 0; i--) {  // Loop through them backwards
    var c = n.removeChild(kids[i]);         // Remove a child
    n.appendChild(c);                       // Put it back at its new position
  }
}


const main = () => {

  // Change the toolbar above the image

  const toolbar = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div"
  );

  toolbar.style.justifyContent = "start";

  // Add instructions button  

  const button = document.createElement("button");

  button.innerHTML = "Instructions";
  button.style.background = "#ff0000";
  button.style.color = "#fff";
  button.classList.add("c0197");
  button.classList.add("c0198");
  button.style.marginLeft = "auto";
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

  // Translate "All lables" to "Afficher les étiquettes"

  const textLabelsToggle = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div.c0180 > label > span'
  );

  textLabelsToggle.innerHTML = "Afficher les étiquettes"



  // Change container

  const container = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > div"
  );

  // Change size of the frame around the image

  const frame = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div'
  );

  // Change the size of the image

  const image = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-content.c01111.c01110.c0175.c01112 > div > div > div > canvas'
  );

  image.style.width = "100%";
  image.style.height = "100%";


  frame.style.maxWidth = 'unset';


  // Remove the title with label "Tree"

  const title = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.prodigy-title.c0182.c0177.c0183'
  );

  title.style.display = "none";


  // Change buttons order

  const buttons = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > footer > div'
  );

  reverse(buttons);

  // Change the valid button

  const valid = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > footer > div > button.prodigy-button-accept.c0160.c0161"
  );

  valid.innerHTML = "Valider";
  valid.style.fontWeight = "900";
  valid.style.width = "60%";


  // Remove the reject button

  const reject = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > footer > div > button.prodigy-button-reject.c0160.c0162'
  );

  reject.style.display = "none";


  // Change the ignore button

  const ignore = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > footer > div > button.prodigy-button-ignore.c0160.c0163"
  );

  ignore.innerHTML = "Ignorer";
  ignore.style.background = "#dde05d";
  ignore.style.fontWeight = "900";
  ignore.classList.remove("c0163");
  ignore.style.width = "20%";


  // Change the undo button

  const undo = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > footer > div > button.prodigy-button-undo.c0160.c0164'
  );

  undo.style.width = "20%";

}

const waitForElement = (selector, fn) => {
  const interval = setInterval(() => {
    const element = document.querySelector(selector);

    if (element) {
      clearInterval(interval);
      fn();
    }
  }, 10);
}

waitForElement('#root', main);