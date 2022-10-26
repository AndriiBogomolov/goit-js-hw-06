const allItems = document.querySelectorAll(".item");
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItemsQty}`);

allItems.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;
  let oneTitleElements = element.querySelectorAll("li");
  let oneTitleElementsQty = oneTitleElements.length;
  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElementsQty}`);
});
