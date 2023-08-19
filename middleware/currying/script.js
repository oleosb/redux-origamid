const li = Array.from(document.querySelectorAll("li"));

// const getElementAttr = (key) => {
//   return function (el) {
//     return el.getAttribute(key);
//   };
// };

const getElementAttr = (key) => (el) => el.getAttribute(key); 

const getAttrDataSlide = getElementAttr("data-slide");
const getAttrId = getElementAttr("id");

const dataSlide = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log(dataSlide, idList);
