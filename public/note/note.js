async function save() {
  var note = document.getElementById('note').value
  var data = {
    "note": note,
    "save": "save"
  }

  console.log(note);

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(note)
  // };
  //
  // // fetch('/save', options).then(response => {
  // //   console.log(options);
  // //   console.log("save");
  // //   const res = response.json()
  // //   console.log(res);
  // // })
  //
  // const request = async () => {
  //   const response = await fetch('/save', options);
  //   const json = await response.json();
  //   console.log(json);
  // }
  //
  // request();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/save', options);
  const json = await response.json();
  console.log(json);

}
