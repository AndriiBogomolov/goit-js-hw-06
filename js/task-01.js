const items = document.querySelectorAll(".item");
const itemsNbr = items.length;

console.log(`Number of categories: ${itemsNbr}`);

items.forEach((title) => {
  let elementTitle = title.querySelector("h2").textContent;
  let oneTitleElements = title.querySelectorAll("li");
  let oneTitleElementsNbr = oneTitleElements.length;
  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElementsNbr}`);
});
