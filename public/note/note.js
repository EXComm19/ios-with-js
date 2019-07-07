window.onload = function () {
  document.getElementById('note').value = localStorage.getItem("note")

  document.getElementById('note').onkeyup = function () {
    const note = document.getElementById('note').value
    // const data = {
    //   "note": note,
    //   "status": "saved"
    // }
    localStorage.setItem("note", note)
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }
    // fetch('/api', options)
  }
}
