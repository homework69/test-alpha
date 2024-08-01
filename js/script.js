document.body.addEventListener('click', function (e) {
  if (
    e.target.className === 'dropdown-active' ||
    e.target.className === 'dropdown-content-val' ||
    e.target.className === 'dropdown-active_arrow' ||
    e.target.className === 'dropdown-application_active' ||
    e.target.className === 'dropdown-active_arrow' ||
    e.target.className === 'dropdown-content-application'
  ) {
    e.preventDefault();
  }
  if (
    e.target.className === 'dropdown-active' ||
    e.target.className === 'dropdown-active_arrow'
  ) {
    document.querySelector('.dropdown-content').style.display = 'flex';
  } else {
    document.querySelector('.dropdown-content').style.display = 'none';
  }
  if (
    e.target.className === 'dropdown-application_active' ||
    e.target.className === 'dropdown-active_arrow'
  ) {
    document.querySelector('.dropdown-content_application').style.display =
      'flex';
  } else {
    document.querySelector('.dropdown-content_application').style.display =
      'none';
  }
});

function makeSelection(selection) {
  document.querySelector('.dropdown-active').innerHTML =
    selection + '<img src="images/services-arrow.svg" alt="">';
  document.querySelector('.dropdown-content').style.display = 'none';
}
function makeApplication(selection) {
  document.querySelector('.dropdown-application_active').innerHTML =
    selection + '<img src="images/application-arrow.svg" alt="">';
  document.querySelector('.dropdown-content_application').style.display =
    'none';
}

const btns = document.querySelectorAll('.pagecrm_price-btn');
const modal = document.querySelector('.pagecrm_modal');
const modalsuccess = document.querySelector('.pagecrm_success');
const modalBlock = document.querySelector('.pagecrm_modal-block');
const openSuccess = document.querySelector('.pagecrm_modal-submit');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (e) => {
    modal.classList.add('active');
    modalBlock.classList.add('active');
  });
}

function closeModal() {
  modal.classList.remove('active');
  modalBlock.classList.remove('active');
}
function closeSuccess() {
  modalsuccess.style.display = 'none';
}

modalBlock.addEventListener('click', (e) => {
  e.stopPropagation();
});
document
  .querySelector('.pagecrm_success-block')
  .addEventListener('click', (e) => {
    e.stopPropagation();
  });

function clearInputs() {
  let inpVal1 = (document.querySelector('.pagecrm_modal-name').value = '');
  let inpVal2 = (document.querySelector('.pagecrm_modal-email').value = '');
}
function validateForm(e) {
  e.preventDefault();

  let inpVal1 = document.querySelector('.pagecrm_modal-name').value;
  let inpVal2 = document.querySelector('.pagecrm_modal-email').value;

  if (inpVal1.trim() !== '' && inpVal2.trim() !== '') {
    closeModal();
    clearInputs();
    modalsuccess.style.display = 'flex';
  }
}
const searchModal = document.querySelector('.search-modal');
const searchWrapper = document.querySelector('.search-wrapper');

function openSearch() {
  searchModal.classList.add('active');
  searchWrapper.classList.add('active');
}

searchModal.addEventListener('click', (e) => {
  if (
    e.target.className == 'search-wrapper active' ||
    e.target.className == 'search-control' ||
    e.target.className == 'search-button'
  ) {
    e.stopPropagation();
  } else {
    searchModal.classList.remove('active');
    searchWrapper.classList.remove('active');
  }
});


const btnBurger = document.querySelector('.menu-burger_btn')
const burgerList = document.querySelector('.pagecrm_header-list')


document.body.addEventListener('click', (e) => {
  if (e.target.className != 'menu-images') {
    burgerList.classList.remove('active')
  }else{
    burgerList.classList.add('active')
  }
})