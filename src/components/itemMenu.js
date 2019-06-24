class itemMenu {
  constructor(opt={}){
    this.parent = opt.parent;
    this.content = opt.content;
    this.controlledElemnt = opt.controlledElemnt;
  }

  create(){
    const item = document.createElement('div');
    item.classList = "nav__item item";
    item.addEventListener('click', ()=>{
      this.toggleVisibility();
    })
    this.parent.appendChild(item);
    this.view = item;

    const wrapper = document.createElement('div');
    wrapper.classList = 'item__wrap';
    wrapper.innerText = this.content;
    item.appendChild(wrapper);   
    this.controlledElemnt.setTitle(this.content);
  }

  toggleVisibility(){
    this.controlledElemnt.toggleVisibility();    
    const allModal = document.getElementsByClassName('modal__page');
    for (let i = 0; i < allModal.length; i++){
      if (allModal[i] !== this.controlledElemnt.view){
        allModal[i].classList.add('page_close');
      }
    }
  }
}

export default itemMenu;