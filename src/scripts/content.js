

import modalWindow from '../components/modalWindow.js'
import itemMenu from '../components/itemMenu.js'
import paramsModals from '../components/paramsModals.js'

import contentText from './text.js';

const app__modal = document.getElementsByClassName('modal')[0]; //переделать под отдельный блок wrap-modal
const app__nav = document.getElementsByClassName('nav')[0];
const app__params = document.getElementsByClassName('params')[0];

let firstElement = true;
let arrayModal = [];

for (let key in contentText){
  const modal = new modalWindow({
    parent: app__modal,
    visible: firstElement,
    content: contentText[key].content
  });

  firstElement = firstElement ? false:'';
  modal.create();
  modal.setTitle();

  const item = new itemMenu({
    parent: app__nav,
    content: contentText[key].textItem,
    controlledElemnt: modal
  });
  item.create();
  arrayModal.push(modal);
}
document.arrayModal = arrayModal;
const blockParams = new paramsModals({
  parent: app__params,
  items: ["400", "600", "800", '1000'],
  default: 600,
  elements: arrayModal
});
blockParams.create();
blockParams.setSize();
