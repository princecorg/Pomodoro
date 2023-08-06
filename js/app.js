// variables

let workTittle = document.getElementById('work')
let breakTittle = document.getElementById('break')

let workTime = 25
let breakTime = 5

let seconds = 0

//define timer display

function timerDisplay (chrono) {
  let chronoString = chrono.toString()
  chronoString = chronoString.length < 2 ? '0' + chronoString : chronoString
  return chronoString
}

window.onload = () => {
  document.getElementById('minutes').innerHTML = timerDisplay(workTime)
  document.getElementById('seconds').innerHTML = timerDisplay(seconds)

  workTittle.classList.add('active')
}

// start timer
function start () {
  // change button
  document.getElementById('start').style.display = 'none'
  document.getElementById('reset').style.display = 'block'

  // change the time
  seconds = 59

  let workMinutes = workTime - 1
  let breakMinutes = breakTime - 1

  breakCount = false

  // countdown
  let timerFunction = () => {
    //change the display
    document.getElementById('minutes').innerHTML = timerDisplay(workMinutes)
    document.getElementById('seconds').innerHTML = timerDisplay(seconds)

    // start
    seconds = seconds - 1

    if (seconds === 0) {
      workMinutes = workMinutes - 1
      if (workMinutes === -1) {
        if (!breakCount) {
          // start break
          workMinutes = breakMinutes
          breakCount = true

          // change the painel
          workTittle.classList.remove('active')
          breakTittle.classList.add('active')
        } else {
          // continue work
          workMinutes = workTime - 1
          breakCount = false

          // change the painel
          breakTittle.classList.remove('active')
          workTittle.classList.add('active')
        }
      }
      seconds = 59
    }
  }

  // start countdown
  setInterval(timerFunction, 1000) // 1000 = 1s
}

// reset timer
function reset () {
  location.reload()
}
