  document.addEventListener('DOMContentLoaded', () => {
    const mob_nav = document.querySelector('.mob-btn');
    const nav_head=document.querySelector('.header');


const toggleLis = document.querySelectorAll('.toggle-li');
const assistElements = document.querySelectorAll('.do');
const sample = document.querySelectorAll('.sample');




toggleLis.forEach((toggleLi, index) => {
  toggleLi.addEventListener('click', () => {
    // Toggle 'active' class for the clicked .do element
    
    assistElements[index].classList.toggle('active');
    sample[index].classList.toggle('active');
    

    // Hide other .do elements if they are not the clicked one
    for (let i = 0; i < assistElements.length; i++) {
      if (i != index) {
        assistElements[i].classList.remove('active');
      }
    }
  });
});

assistElements.forEach((assistElement) => {
  assistElement.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

document.addEventListener('click', (event) => {
  let isClickedInsideToggleLi = false;
  let isClickedInsideDo = false;

  toggleLis.forEach((toggleLi) => {
    if (toggleLi.contains(event.target)) {
      isClickedInsideToggleLi = true;
    }
  });

  assistElements.forEach((assistElement) => {
    if (assistElement.contains(event.target)) {
      isClickedInsideDo = true;
    }
  });

  if (!isClickedInsideToggleLi && !isClickedInsideDo) {
    assistElements.forEach((assistElement) => {
      assistElement.classList.remove('active');
    });
  }
});

// ith vere model
    const tog = () => {
      nav_head.classList.toggle("active");
    }

    mob_nav.addEventListener('click', tog);


  });

