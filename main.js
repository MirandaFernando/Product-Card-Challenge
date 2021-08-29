const selectColor = (element) => {
    const items = document.querySelectorAll(".colors__item");
    const selectedStr = "colors__item--selected";
  
    for (const item of items) {
      if (item.classList.contains(selectedStr)) {
        item.classList.remove(selectedStr);
      }
    }
    element.classList.add(selectedStr);
};

const selectSize = (element) => {
    const items = document.querySelectorAll(".sizes__item");
    const selectedStr = "sizes__item--selected";
  
    for (const item of items) {
      if (item.classList.contains(selectedStr)) {
        item.classList.remove(selectedStr);
        item.style.setProperty("background-color", "--alto");
      }
    }
    element.classList.add(selectedStr);
};