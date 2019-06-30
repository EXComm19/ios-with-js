async function save() {
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
  };

  const response = await fetch('/api', options);
  const json = await response.json();
  console.log(json);
}
