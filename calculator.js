function insert(number) {
  let numberClick = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = numberClick + number
}

function clean() {
  document.getElementById('result').innerHTML = ''
}

function cleanBack() {
  let result = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = result.substring(
    0,
    result.length - 1
  )
}

function calculate() {
  let result = document.getElementById('result').innerHTML
  if (result) {
    document.getElementById('result').innerHTML = eval(result)
  } else {
    alert('Nothing to Calculate!')
  }
}
