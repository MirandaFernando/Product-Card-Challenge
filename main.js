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

const setShoe = (element) => {
    changeShoe(element.id);
}

const changeShoe = (color_id) => {
  const elements = document.querySelectorAll(".card__shoe");
  const selectedStr = "card__shoe--selected";
  for (const element of elements) {
    if (element.classList.contains(selectedStr)) {
      element.classList.remove(selectedStr);
    }
  }
  setColor(color_id, selectedStr);
}

const setColor = (color_id, selectedStr) => {
  if (color_id == "colors__item-blue") {
    document.getElementById("shoe_blue").classList.add(selectedStr);
    document.getElementById("card_main").classList.add("change-color-animation");
    document.getElementById('card_main').style.backgroundImage = 'var(--blue)';
    document.querySelector('.container__add-cart').style.backgroundColor = 'var(--dodger-blue)';
    document.querySelector('.sizes__item--selected').style.backgroundColor = 'var(--dodger-blue)';
    document.querySelector('.container__product-new').style.backgroundColor = 'var(--dodger-blue)';
    setTimeout(function() {
      document.querySelector('.back-banner').style.backgroundImage = 'var(--blue)';
      document.getElementById("card_main").classList.remove("change-color-animation");
    }, 1000);
  }
  else if (color_id == "colors__item-red"){
    document.getElementById("shoe_red").classList.add(selectedStr)
    document.getElementById("card_main").classList.add("change-color-animation");
    document.getElementById("card_main").style.backgroundImage = 'var(--red)';
    document.querySelector('.container__add-cart').style.backgroundColor = 'var(--sunset-orange)';
    document.querySelector('.sizes__item--selected').style.backgroundColor = 'var(--sunset-orange)';
    document.querySelector('.container__product-new').style.backgroundColor = 'var(--sunset-orange)';
    setTimeout(function() {
      document.querySelector('.back-banner').style.backgroundImage = 'var(--red)';  
      document.getElementById("card_main").classList.remove("change-color-animation");
    }, 1000);   
  }
  else if (color_id == "colors__item-green"){
    document.getElementById("shoe_green").classList.add(selectedStr)
    document.getElementById("card_main").classList.add("change-color-animation");
    document.getElementById("card_main").style.backgroundImage = 'var(--green)';
    document.querySelector('.container__add-cart').style.backgroundColor = 'var(--jungle-green)';
    document.querySelector('.sizes__item--selected').style.backgroundColor = 'var(--jungle-green)';
    document.querySelector('.container__product-new').style.backgroundColor = 'var(--jungle-green)';
    setTimeout(function() {
      document.querySelector('.back-banner').style.backgroundImage = 'var(--green)';
      document.getElementById("card_main").classList.remove("change-color-animation");
    }, 1000);  
  }
  else if (color_id == "colors__item-black"){
    document.getElementById("shoe_black").classList.add(selectedStr)
    document.getElementById("card_main").classList.add("change-color-animation");
    document.getElementById("card_main").style.backgroundImage = 'var(--black2)';
    document.querySelector('.container__add-cart').style.backgroundColor = 'var(--black)';
    document.querySelector('.sizes__item--selected').style.backgroundColor = 'var(--black)';
    document.querySelector('.container__product-new').style.backgroundColor = 'var(--black)';
    setTimeout(function() {
      document.querySelector('.back-banner').style.backgroundImage = 'var(--black2)';
      document.getElementById("card_main").classList.remove("change-color-animation");
    }, 1000);  
  }
  else if (color_id == "colors__item-orange"){
    document.getElementById("shoe_orange").classList.add(selectedStr)
    document.getElementById("card_main").classList.add("change-color-animation");
    document.getElementById("card_main").style.backgroundImage = 'var(--orange)';
    document.querySelector('.container__add-cart').style.backgroundColor = 'var(--flush-orange)';
    document.querySelector('.sizes__item--selected').style.backgroundColor = 'var(--flush-orange)';
    document.querySelector('.container__product-new').style.backgroundColor = 'var(--flush-orange)';
    setTimeout(function() {
      document.querySelector('.back-banner').style.backgroundImage = 'var(--orange)';
      document.getElementById("card_main").classList.remove("change-color-animation");
    }, 1000);   
  }  
}

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

const setColorSize = (element) => {
  const items = document.querySelectorAll(".colors__item");
  const selectedStr = "colors__item--selected";
  for (const item of items) {
    if (item.classList.contains(selectedStr)) {
      const backgroundColor = item.style.backgroundColor;
      console.log(backgroundColor)
      element.style.backgroundColor = backgroundColor;
    }
  }
}


