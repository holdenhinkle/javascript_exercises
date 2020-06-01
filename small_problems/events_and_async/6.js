let selectMenuOneOptions = {
  vertebrate:	['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  warmblooded:	['Bear', 'Whale', 'Ostrich'],
  coldblooded:	['Salmon', 'Turtle'],
  mammal:	['Bear', 'Whale'],
  bird:	['Ostrich'],
};

let selectMenuTwoOptions = {
  bear:	['Vertebrate', 'Warm-blooded', 'Mammal'],
  turtle:	['Vertebrate', 'Cold-blooded'],
  whale:	['Vertebrate', 'Warm-blooded', 'Mammal'],
  salmon:	['Vertebrate', 'Cold-blooded'],
  ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
};

let selectMenuOneId = 'animal-classifications';
let selectMenuTwoId = 'animals'

document.addEventListener('DOMContentLoaded', function() {
  function modifySelectMenu(selectOptions, selectMenuIdToChange, selection) {
    selection = selection.toLowerCase().match(/\w/g).join('');
    let options = document.querySelectorAll('#' + selectMenuIdToChange + ' option');

    Array.prototype.slice.call(options).forEach(option => {
      if (option.value === 'Animals' || option.value === 'Classifications') return;

      if (selectOptions[selection].includes(option.value)) {
        option.classList.remove('hide');
      } else {
        option.classList.add('hide');
      }
    });
  }

  document.addEventListener('change', function(e) {
    let el = e.target;

    if (el.id === 'animal-classifications') {
      modifySelectMenu(selectMenuOneOptions, selectMenuTwoId, el.value);
    } else if (el.id === 'animals') {
      modifySelectMenu(selectMenuTwoOptions, selectMenuOneId, el.value);
    }
  });

  document.querySelector('button').addEventListener('submit', function(e) {
    e.preventDefault;
    document.getElementsByTagName('option.hide').classList.remove('hide');
  })
});
