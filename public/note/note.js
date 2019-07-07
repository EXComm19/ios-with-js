window.onload = function () {
  $.get("note.txt", function (data) {
    document.getElementById('note').value = data;
  });

  document.getElementById('note').onkeyup = function () {
    var note = document.getElementById('note').value
    var data = {
      "note": note,
      "status": "saved"
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/api', options)
  }
}
