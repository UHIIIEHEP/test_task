class paramsMenu {
  constructor(opt={}){
    this.items = opt.items;
    this.parent = opt.parent;
    this.elements = opt.elements;
    this.default = opt.default;
  }

  create() {
    const  selectors = document.createElement('div');
    selectors.classList ='params__selectors selectors';

    this.parent.appendChild(selectors);
    this.view = selectors;

    this.items.forEach(item => {
      const selector = document.createElement('div');
      selector.classList ='selectors__selector selector';
      if (item == this.default){
        selector.classList.add('selected');
      };
      selector.innerText = item;
      selector.addEventListener('click', (event) => {
        this.toggleSelected();
        this.setSize();
      })

      selectors.appendChild(selector);
      this.view.selector = selector;
    })
  }

  toggleSelected(){
    const allSelector = document.getElementsByClassName('selector');
    for (let i = 0; i < allSelector.length; i++){
      allSelector[i].classList.remove('selected');
    }
    event.target.classList.add('selected')
  }

  setSize(){
    let size = this.default;
    if (event !== undefined) {
      size = event.target.innerHTML
    }
    this.elements.forEach(elem => {
      elem.setSize(size);
    });
  }

}

export default paramsMenu;