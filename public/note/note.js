function save() {
  note = document.getElementById('note').value

  const data = {
    note
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch('/save', options).then(response => {
    console.log("log");
    const res = response.json()
    console.log(res);
  })
}
