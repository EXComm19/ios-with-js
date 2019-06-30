function save() {
  note = document.getElementById('note').value

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }

  fetch('/save', options).then(response => {
    const res = response.json()
    console.log(res);
  })
}
