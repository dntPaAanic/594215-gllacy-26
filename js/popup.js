var popupOverlay = document.querySelector('.pop-up-overlay');
var popupOpenButton = document.querySelector('.contacts__button');
var popupCloseButton = popupOverlay.querySelector('.feedback__close-button');
var popupForm = popupOverlay.querySelector('.feedback__form');
var popupInputName = popupForm.querySelector('input[type="text"]');
var popupInputEmail = popupForm.querySelector('input[type="email]');
var popupInputMessage = popupForm.querySelector("textarea");
var popupFields = popupForm.querySelectorAll('.input');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

var removeError = function() {
  for (var i = 0; i < popupFields.length; i++) {
    if (popupFields[i].classList.contains('feedback--error')) {
      popupFields[i].classList.remove('feedback--error');
    }
  }
};

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  removeError();
  popupOverlay.classList.add('pop-up-overlay--active');
  if (storageName && storageEmail) {
    popupInputName.value = storageName;
    popupInputEmail.value = storageEmail;
    popupInputMessage.focus();
  } else {
    popupInputName.focus();
  }
  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popupOverlay.classList.remove('pop-up-overlay--active');
      popupOpenButton.focus();
    }
  });
});

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupOverlay.classList.remove('pop-up-overlay--active');
  popupOpenButton.focus();
});

popupForm.addEventListener('submit', function(evt) {
  removeError();
  for (var i = 0; i < popupFields.length; i++) {
    var field = popupFields[i].offsetWidth;
    if(!popupFields[i].value) {
      evt.preventDefault();
      popupFields[i].offsetWidth = field;
      popupFields[i].classList.add('feedback--error');
      popupFields[i].focus();
      return;
    }
  }
  if (isStorageSupport) {
    localStorage.setItem('name', popupInputName.value);
    localStorage.setItem('email', popupInputEmail.value);
  }
});

