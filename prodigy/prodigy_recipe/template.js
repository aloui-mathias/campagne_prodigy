
function reverse(n) {  // Reverse the order of the children of Node n
  var kids = n.childNodes;                  // Get the list of children
  var numkids = kids.length;                // Figure out how many there are
  for (var i = numkids - 1; i >= 0; i--) {  // Loop through them backwards
    var c = n.removeChild(kids[i]);         // Remove a child
    n.appendChild(c);                       // Put it back at its new position
  }
}


const createDialog = () => {

  const dialog = document.createElement('div');

  const dialogTitle = document.createElement('div');

  dialogTitle.innerHTML = "Bienvenue dans la campagne d'annotations !";
  dialogTitle.style.padding = "2%";
  dialogTitle.style.fontSize = "4rem";

  dialog.appendChild(dialogTitle);

  const dialogIntro = document.createElement('div');

  dialogIntro.innerHTML = "Corriger les annotations et aider à l'amélioration d'un algorithme de Deep-Learning :-)"
  dialogIntro.style.fontSize = "2rem";
  dialogIntro.style.padding = "2%";

  dialog.appendChild(dialogIntro)

  const dialogInstruction = document.createElement('div');

  dialogInstruction.innerHTML = [
    "Instructions :",
    "- Pour ajouter une annotation, dessinez le rectangle en maintenant le clique.",
    "- Pour pouvoir modifier les annotations, cochez \"Modifier ou supprimer des annotations\" :",
    "- Pour changer la taille et la position, cliquez sur l'étiquette de l'annotation puis bougez les points.",
    "- Pour supprimer, cliquez sur l'étiquette de l'annoation puis cliquez sur la poubelle.",
    " Pour annuler toutes vos modifications, cliquez sur la double flèche circulaire.",
    "",
    "Une fois l'image annotée, cliquez sur \"Valider\".",
    "Si vous souhaitez passer une image, cliquez sur \"Ignorer\".",
    "Si vous voulez retourner à l'image précédente, cliquez sur la flèche en bas à gauche.",
    "",
    "Pour revoir ses intructions, cliquez sur le bouton rouge \"Instructions\"."
  ].join('<br/>');
  dialogInstruction.style.textAlign = "left";
  dialogInstruction.style.fontSize = "2rem";
  dialogInstruction.style.padding = "2%";

  dialog.appendChild(dialogInstruction)

  const dialogButton = document.createElement("button");

  dialogButton.innerHTML = "Fermer";
  dialogButton.style.background = "rgb(255 0 0)";
  dialogButton.style.color = "#fff";
  dialogButton.classList.add("c0197");
  dialogButton.classList.add("c0198");
  dialogButton.style.margin = "auto";
  dialogButton.style.fontSize = "2rem";
  dialogButton.style.margin = '2rem';
  dialogButton.style.padding = '1rem 2rem';
  dialogButton.addEventListener("click", closeDialog);

  dialog.appendChild(dialogButton);

  dialog.id = 'dialog';

  dialog.style.position = "absolute";
  dialog.style.background = "rgb(246, 246, 246)";
  dialog.style.top = "-5%";
  dialog.style.left = "0%";
  dialog.style.padding = "2%";
  dialog.style.margin = "3%";
  dialog.style.textAlign = "center";
  dialog.style.height = "fit-content";
  dialog.style.width = "94%";
  dialog.style.border = "10px solid #54606e";
  dialog.style.zIndex = "500";

  const boardSpace = document.querySelector('#board > div.c0176');
  boardSpace.appendChild(dialog);

}

const closeDialog = () => {
  document.getElementById('dialog').style.display = "none";
}

const openDialog = () => {
  document.getElementById('dialog').style.display = "block";
}

const main = () => {

  // Change place allow for toolbar

  const toolbarWrapper = document.querySelector(
    '#root > div.c012 > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184'
  );

  toolbarWrapper.style.height = "fit-content";

  // Change the size of the div for the toolbar

  const toolbarDiv = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178'
  );

  toolbarDiv.style.height = "100%";

  // Change the toolbar above the image

  const toolbar = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div"
  );

  reverse(toolbar);

  toolbar.style.height = "100%";
  toolbar.style.alignContent = "center";
  toolbar.style.alignItems = "center";
  toolbar.style.padding = "2%";

  // Change the size of the sub div in the toolbar

  toolbar.childNodes[0].style.width = "80%";
  toolbar.childNodes[0].style.height = "100%";
  toolbar.childNodes[1].style.width = "100%";
  toolbar.childNodes[1].style.height = "100%";

  toolbar.childNodes[1].style.alignContent = "center";
  toolbar.childNodes[1].style.textAlign = "center";

  // Change the size of the checkbox

  // const checkbox = document.querySelector(
  //   '#\38 039f50a-0d44-44f8-be22-ada5973497ba'
  // );

  // checkbox.style.transform = "scale(1.5)";

  // Change the size of the delete button

  const deleteButton = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div:nth-child(1) > button:nth-child(1)'
  );

  deleteButton.style.width = "10%";
  deleteButton.style.minWidth = "fit-content";
  deleteButton.style.height = "auto";

  const deleteImage = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div:nth-child(1) > button:nth-child(1) > svg'
  );

  deleteImage.style.width = "40px";
  deleteImage.style.height = "40px";

  // Change the size of the revert button

  const revertButton = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div:nth-child(1) > button:nth-child(2)'
  );

  revertButton.style.width = "10%";
  revertButton.style.minWidth = "fit-content";
  revertButton.style.height = "auto";

  const revertImage = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div:nth-child(1) > button:nth-child(2) > svg'
  );

  revertImage.style.width = "40px";
  revertImage.style.height = "40px";

  // Hide button to select rectangle

  const recButton = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div.c0180 > button'
  );

  recButton.style.display = "none";

  // Translate "All lables" to "Afficher les étiquettes"

  const textLabelsToggle = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-title-wrapper.c0184 > div.c0178 > div > div.c0180 > label > span'
  );

  textLabelsToggle.innerHTML = "Modifier ou supprimer<br/>des annotations"
  textLabelsToggle.style.fontSize = "1.5rem";

  // Change the checkbox

  toolbar.childNodes[1].childNodes[1].childNodes[0].style.transform = "scale(1.5)";
  toolbar.childNodes[1].childNodes[1].childNodes[0].style.margin = "2%";
  toolbar.childNodes[1].childNodes[1].childNodes[0].style.cursor = "pointer";

  toolbar.childNodes[1].childNodes[1].style.display = "flex";
  toolbar.childNodes[1].childNodes[1].style.flexDirection = "row";
  toolbar.childNodes[1].childNodes[1].style.alignContent = "center";
  toolbar.childNodes[1].childNodes[1].style.alignItems = "center";

  // Change the size of the container

  const container = document.querySelector(
    "#root > div > main > div.prodigy-annotator.c0149 > div"
  );

  container.style.height = "calc(100% - 200px)";
  container.style.paddingBottom = "unset";


  // Change size of the frame around the image

  const frame = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div'
  );

  frame.style.maxWidth = 'unset';
  frame.style.height = "100%";
  frame.style.alignContent = "unset";
  frame.style.flexDirection = "column";


  // Change the size of the div below the toolbar

  const board = document.querySelector(
    '#root > div.c012 > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-content.c01111.c01110.c0175.c01112'
  );

  board.style.flexGrow = "1";
  board.style.padding = "unset";
  board.id = "board";


  const crosshair = document.querySelector(
    '#board > div > div.c0179'
  );

  crosshair.style.setProperty('display', 'flex', 'important');
  crosshair.style.alignItems = "center";
  crosshair.style.justifyContent = "center";
  crosshair.style.height = "100%";
  crosshair.style.width = "100%";


  const c0179 = document.querySelector(
    '#board > div > div.c0179'
  );

  c0179.style.cursor = 'auto';
  c0179.style.flexWrap = 'wrap';
  c0179.style.setProperty('display', 'flex', 'important');
  c0179.style.flexDirection = 'column';
  c0179.style.alignItems = 'center';
  c0179.style.justifyContent = 'space-evenly';
  c0179.style.height = '100%';
  c0179.style.alignContent = 'center';
  c0179.style.width = '100%';

  // Add instructions button  

  const button = document.createElement("button");

  button.innerHTML = "Instructions";
  button.style.background = "#ff0000";
  button.style.color = "#fff";
  button.classList.add("c0197");
  button.classList.add("c0198");
  button.style.marginLeft = "0px";
  button.style.fontSize = "1.5rem";
  button.style.padding = "1%";
  button.addEventListener("click", openDialog);

  c0179.appendChild(button);

  // Change the size of the image

  const image = document.querySelector(
    '#root > div > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-content.c01111.c01110.c0175.c01112 > div > div > div > canvas'
  );

  image.style.cursor = 'crosshair';

  height = image.height
  width = image.width

  // Change the size of the image presentation

  const presentation = document.querySelector(
    '#root > div.c012 > main > div.prodigy-annotator.c0149 > div > div > div.prodigy-content.c01111.c01110.c0175.c01112 > div > div > div'
  );

  presentation.style.width = width;
  presentation.style.height = height;

  // image.style.padding = "0px";
  // image.style.border = "0px";
  // image.style.background = "transparent";
  // image.style.position = "absolute";
  // image.style.margin = "auto";
  // image.style.display = "block";
  // image.style.width = "300px";
  // image.style.height = "300px";
  // image.style.top = "0";
  // image.style.bottom = "0";
  // image.style.left = "0";
  // image.style.right = "0";

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

  // Make buttons more round

  const c0197 = document.querySelector(
    '.c0197'
  );

  c0197.style.borderRadius = '25px';

  undo.style.width = "20%";

  setTimeout(createDialog, 300);

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    document.querySelector('#root > div > main > div.prodigy-sidebar-wrapper.c017 > div > header > div > button').click();
  });

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