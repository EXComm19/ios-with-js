window.onload = function () {
  document.getElementById('note').value = localStorage.getItem("note")

  document.getElementById('note').onkeyup = function () {
    const note = document.getElementById('note').value
    localStorage.setItem("note", note)
  }
}
