/* eslint-disable linebreak-style */
document.body.insertAdjacentHTML('beforeend', ' <div class="container"> <div class="keyboard_wrapp"> <div class="keyboard_lights"></div> <div class="keyboard_keys"> <div class="row"> <div class="keys">`</div> <button class="keys key1" datacode = "1" >1</button> <button class="keys">2</button> <div class="keys">3</div> <div class="keys">4</div> <div class="keys">5</div> <div class="keys">6</div> <div class="keys">7</div> <div class="keys">8</div> <div class="keys">9</div> <div class="keys">0</div> <div class="keys">-</div> <div class="keys">=</div> <div class="keys backspace_key">Backspace</div> </div> <div class="row"> <div class="keys tab_key">Tab</div> <div class="keys">Q</div> <div class="keys">W</div> <div class="keys">E</div> <div class="keys">R</div> <div class="keys">T</div> <div class="keys">Y</div> <div class="keys">U</div> <div class="keys">I</div> <div class="keys">O</div> <div class="keys">P</div> <div class="keys">[</div> <div class="keys">]</div> <div class="keys slash_key">&#92;</div> </div> <div class="row"> <div class="keys caps_lock_key">Caps Lock</div> <div class="keys">A</div> <div class="keys">S</div> <div class="keys">D</div> <div class="keys">F</div> <div class="keys">G</div> <div class="keys">H</div> <div class="keys">J</div> <div class="keys">K</div> <div class="keys">L</div> <div class="keys">;</div> <div class="keys">"</div> <div class="keys enter_key">Enter</div> </div> <div class="row"> <div class="keys shift_key shift_left">Shift</div> <div class="keys">Z</div> <div class="keys">X</div> <div class="keys">C</div> <div class="keys">V</div> <div class="keys">B</div> <div class="keys">N</div> <div class="keys">M</div> <div class="keys">,</div> <div class="keys">.</div> <div class="keys">/</div> <div class="keys arrowU">&uarr;</div> <div class="keys shift_key shift_right">Shift</div> </div> <div class="row"> <div class="keys ctrl_key ctrl_left">Ctrl</div> <div class="keys win_key">Win</div> <div class="keys alt_key alt_left">Alt</div> <div class="keys space_key"></div> <div class="keys alt_key alt_right">Alt</div> <div class="keys ctrl_key ctrl_right">Ctrl</div> <div class="keys arrowL">&larr;</div> <div class="keys arrowD">&darr;</div> <div class="keys arrowR">&rarr;</div> </div> </div> </div> <div> Virtual keyboard is on Windows OS</div> <textarea class="text" id="MyText" type="text" autofocus> </textarea> ');
const keys = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space_key');
const ctrlKey = document.querySelector('.ctrl_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLock = document.querySelector('.caps_lock_key');
const arrowD = document.querySelector('.arrowD');
const arrowR = document.querySelector('.arrowR');
const arrowL = document.querySelector('.arrowL');
const arrowU = document.querySelector('.arrowU');
const textarea = document.querySelector('textarea');
const btns = document.getElementsByClassName('keys');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('mousedown', (e) => {
    textarea.focus();
    e.preventDefault();
    if (btns[i].getAttribute('lowerCaseName') === 'ctrl' || btns[i].getAttribute('lowerCaseName') === 'alt' || btns[i].getAttribute('lowerCaseName') === 'shift' || btns[i].getAttribute('lowerCaseName') === 'caps lock' || btns[i].getAttribute('lowerCaseName') === 'backspace') {
      btns[i].classList.add('active');
      textarea.setRangeText(
        '',
        textarea.selectionStart,
        textarea.selectionEnd,
        'end',
      );
    } else if (btns[i].getAttribute('lowerCaseName') === 'tab') {
      btns[i].classList.add('active');
      textarea.setRangeText(
        '    ',
        textarea.selectionStart,
        textarea.selectionEnd,
        'end',
      );
    } else if (btns[i].getAttribute('lowerCaseName') === 'enter') {
      btns[i].classList.add('active');
      textarea.setRangeText(
        '\n',
        textarea.selectionStart,
        textarea.selectionEnd,
        'end',
      );
    } else {
      btns[i].classList.add('active');
      textarea.setRangeText(
        keys[i].getAttribute('lowerCaseName'),
        textarea.selectionStart,
        textarea.selectionEnd,
        'end',
      );
    }
    textarea.focus();
  });
}

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('mouseup', (e) => {
    textarea.focus();
    e.preventDefault();
    if (btns[i].getAttribute('lowerCaseName') === 'Ctrl' || btns[i].getAttribute('lowerCaseName') === 'Alt' || btns[i].getAttribute('lowerCaseName') === 'Shift') {
      btns[i].classList.remove('active');
    } else if (btns[i].getAttribute('lowerCaseName') === 'Tab') {
      btns[i].classList.remove('active');
    } else {
      btns[i].classList.remove('active');
    }
    textarea.focus();
  });
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code === 'Space') {
      // e.preventDefault();
      spaceKey.classList.add('active');
    }
    if (e.key === 'ArrowDown') {
      arrowD.classList.add('active');
    }
    if (e.key === 'ArrowRight') {
      arrowR.classList.add('active');
    }
    if (e.key === 'ArrowLeft') {
      arrowL.classList.add('active');
    }
    if (e.key === 'ArrowUp') {
      arrowU.classList.add('active');
    }
    if (e.key === 'Control') {
      ctrlKey.classList.add('active');
    }
    if (e.key === 'Tab') {
      e.preventDefault();
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.toggle('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      // e.preventDefault();
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.key === 'Control') {
      ctrlKey.classList.remove('active');
      ctrlKey.classList.add('remove');
    }
    if (e.key === 'ArrowDown') {
      arrowD.classList.remove('active');
      arrowD.classList.add('remove');
    }
    if (e.key === 'ArrowUp') {
      arrowU.classList.remove('active');
      arrowU.classList.add('remove');
    }
    if (e.key === 'ArrowLeft') {
      arrowL.classList.remove('active');
      arrowL.classList.add('remove');
    }
    if (e.key === 'ArrowRight') {
      arrowR.classList.remove('active');
      arrowR.classList.add('remove');
    }
    if (e.code === 'Tab') {
      e.preventDefault();
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.remove('remove');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});

textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();

    textarea.setRangeText(
      '    ',
      textarea.selectionStart,
      textarea.selectionStart,
      'end',
    );
  }
});
