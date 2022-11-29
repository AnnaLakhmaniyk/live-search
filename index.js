let si;

let counter = -1;

let naborIN = new Set();
let arr = new Set();

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
  // console.log(`сканується: ${scanURI}`);

  let str = await fetch(scanURI).then((resp) => resp.text());

  let scanDoc = new DOMParser().parseFromString(str, "text/html");
  let arrHrefs = [...scanDoc.getElementsByTagName("a")].map((i) => i.href);
  let aIN = arrHrefs.filter((i) => {
    if (i.includes("@")) {
      const indexEl = i.indexOf(":") + 1;
      arr.add(i.slice(indexEl));
      return;
    }

    return i.includes(location.origin);
  });

  aIN
    .map((i) => i.replace(/\?.+/g, "").replace(/\#.+/g, ""))
    .map((i) => naborIN.add(i));
  return (counter += 1);
};

si = setInterval(scaner, 5000);

//---------------------------------

// var src = document.getElementById("src").value;
// var parser = new DOMParser();
// var htmlDoc = parser.parseFromString(src, "text/html");

///логіка отримання силки на сторінці

// const scanURI = location.origin;
// let arr = new Set();
// let nabor = new Set();
// console.log(arr);
// console.log(nabor);

// const parser = async () => {
//   let str = await fetch(location.origin).then((resp) => resp.text());
//   let scanDoc = new DOMParser().parseFromString(str, "text/html");

//   [...scanDoc.getElementsByTagName("a")]
//     .map((i) => i.href)
//     .filter((i) => {
//       if (i.includes("@")) {
//         const indexEl = i.indexOf(":") + 1;
//         arr.add(i.slice(indexEl));
//         return;
//       }

//       return i.includes(location.origin);
//     })
//     .map((i) => i.replace(/\?.+/g, "").replace(/\#.+/g, ""))
//     .map((i) => nabor.add(i));
// };

// parser();

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
