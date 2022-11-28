const urlRIR = "https://madappgang.com/";

function search(url) {
  fetch(url).then((res) => console.log(res.text));
}

search(urlRIR);
