function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  function getDelay(max) {
    return (Math.floor(Math.random() * max) + 1) * 1000;
  }

  counter = 0;

  let timer = setInterval(function() {
    counter += 1;
    console.log(counter);

    if (counter > callbacks.length) {
      clearInterval(timer);
    }
  }, 1000);

  callbacks.forEach(callback => {
    setTimeout(callback, getDelay(callbacks.length));
  });
}

randomizer(callback1, callback2, callback3);

randomizer();