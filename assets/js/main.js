const restartBtn = document.getElementById('restart'),
      switchSecondTab = document.getElementById('switchSecondTab'),
      backFirstTab = document.getElementById('backFirstTab'),
      switchThirdTab = document.getElementById('switchThirdTab'),
      backSecondTab = document.getElementById('backSecondTab'),
      lastBtn = document.getElementById('Tancks'),

      stageCustomer = document.getElementById('stageCustomer'),
      stageShipping = document.getElementById('stageShipping'),
      stagePayment = document.getElementById('stagePayment'),

      tabCustomer = document.getElementById('tabCustomer'),
      tabShipping = document.getElementById('tabShipping'),
      tabPayment = document.getElementById('tabPayment'),
      tabs = document.getElementById('tab__block'),
      content = document.querySelectorAll('.tab__content');

//MAP
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};

//Validation
$.validator.addMethod('regex', function(value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
});
$("#phone").inputmask("+380 (99) 999-99-99");

$('#customer-information-form').validate({
    rules: {
        firstname : {
            required: true,
            minlength: 3,
            regex: "[A-Za-z]"
        },
        phone: {
            required: true,
            minlength: 9,
            regex: "[0-9]+"
        },
    },
    messages: {
        firstname: {
            required: 'Введите имя минимум 3 символа',
        },
        lastName: { 
            required:'Минимум 3 символа',
        },
        phone: { 
            required:'Введите ваш номер'
        }
    }
  });

// TABS
function listTwo() {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
    }

    stageShipping.classList.add('active');
    tabShipping.classList.add('active');
}

function listThri() {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
    }

    stagePayment.classList.add('active');
    tabPayment.classList.add('active');
}

function listOne() {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
    }

    stageCustomer.classList.add('active');
    tabCustomer.classList.add('active');
}
