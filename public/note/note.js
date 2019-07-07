window.onload = function() {
  $.get("note.txt", function(data) {
    document.getElementById('note').value = data;
  });

  document.getElementById('note').onkeyup = async function() {
    var note = document.getElementById('note').value
    var data = {
      "note": note,
      "save": "saved"
    }

    console.log('save');

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const res = await fetch('/api', options);
    const json = await res.json();
    await console.log(json);
  }
}
