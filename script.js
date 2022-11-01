let isExplorer = true;
function changeCard(event) {
  const card = event.currentTarget;
  const bg = isExplorer ? "ignite" : "explorer";
  isExplorer = !isExplorer;
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`;
}
