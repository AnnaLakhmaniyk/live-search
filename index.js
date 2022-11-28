let naborIN = new Set();
console.log(naborIN);

let si;

let counter = -1;

const scaner = async () => {
  if (counter === -1) {
    naborIN.add(location.origin);
    counter += 1;
    return console.log("----start----");
  }

  if (counter >= [...naborIN].length) {
    clearInterval(si);
    return console.log("----end----");
  }

  const scanURI = [...naborIN][counter];
  console.log(`сканується: ${scanURI}`);

  let str = await fetch(scanURI).then((resp) => resp.text());

  let naborIN = new Set();

  let scanDoc = new DOMParser().parseFromString(str, "text/html");
  let arrHrefs = [...scanDoc.getElementsByTagName("a")].map((i) => i.href);
  let aIN = arrHrefs.filter((i) => i.includes(location.origin));

  aIN
    .map((i) => i.replace(/\?.+/g, "").replace(/\#.+/g, ""))
    .map((i) => naborIN.add(i));
  return (counter += 1);
};

si = setInterval(scaner, 5000);

//---------------------------------

var src = document.getElementById("src").value;
var parser = new DOMParser();
var htmlDoc = parser.parseFromString(src, "text/html");

// window.addEventListener("DOMContentLoaded", () => {
//   const body = document.querySelector("body");

//   const hrefLink = [];

//   function recursy(element) {
//     element.childNodes.forEach((node) => {
//       if (node.nodeName.match(/^A/)) {
//         console.log(node.href);
//         hrefLink.push(node.href);
//       } else {
//         recursy(node);
//       }
//     });
//   }

//   recursy(body);

//   function arrEl(ar) {
//     ar.forEach((elem) => {
//       if (elem.includes("@")) {
//         // console.log(elem);
//         // console.log(elem.indexOf(":"));
//         const indexEl = elem.indexOf(":") + 1;

//         console.log(elem.slice(indexEl));
//       }
//     });
//   }
//   arrEl(hrefLink);
// });
