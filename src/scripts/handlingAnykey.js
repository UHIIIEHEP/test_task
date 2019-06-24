document.addEventListener("keydown", (event) => {
  if(event.keyCode == 27){
    document.arrayModal.forEach(elem => {
      elem.hide();
    });
  }
})