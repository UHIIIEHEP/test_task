

  class modalWindow {
    constructor (opt={}){
      this.visible = opt.visible;
      this.parent = opt.parent;
      this.content = opt.content;
    };
    
    create(){
      const modal = document.createElement('div');
      modal.classList = 'modal__page page';
      this.visible ? '': modal.classList.add('page_close');
      this.parent.appendChild(modal);
      this.view = modal;

      const overlay = document.createElement('div');
      overlay.classList = 'page__overlay overlay';
      overlay.addEventListener('click', ()=>{
        this.hide();
      })
      modal.appendChild(overlay);
      
      const moduleOut = document.createElement('div');
      moduleOut.classList = 'page__moduleOut moduleOut';
      modal.appendChild(moduleOut);
      this.view.moduleOut = moduleOut;

      const btnClose = document.createElement('div');
      btnClose.classList = 'moduleOut__btn-close btn-close';
      btnClose.addEventListener('click', ()=>{
        this.hide();
      })
      moduleOut.appendChild(btnClose);

      const titleModule = document.createElement('div');
      titleModule.classList = 'moduleOut__titleModule titleModule';
      moduleOut.appendChild(titleModule);
      this.view.titleModule = titleModule;

      const content = document.createElement('div');
      content.classList = 'moduleOut__content content';
      content.innerHTML = this.content;
      moduleOut.appendChild(content);
    };

    toggleVisibility(){
      this.view.classList.toggle('page_close')
    }

    hide(){
      this.view.classList.add('page_close')
    }

    setTitle(value) {
      this.view.titleModule.innerText = value;
    }

    setSize(value){
      this.view.moduleOut.style.width = value +'px'
    }
  };

  export default  modalWindow;
