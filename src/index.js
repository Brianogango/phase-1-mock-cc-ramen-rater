const API="http://localhost:3000/ramens";
el('new-ramen').addEventListener('submit', createNewRamen)
//Load ramen
fetch(API)
.then(res=>res.json())
.then(renderRamens);

function renderRamens(ramens) {
  ramens.forEach(renderRamen)
}
function renderRamen(ramen) {
  const ramenMenuDiv=document.getElementById('ramen-menu');
  
  const ramenImage =document.createElement('img');
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);

  ramenImage.addEventListener("click", e =>renderDetails(ramen));
}
function renderDetails(ramen) {
  console.log(ramen.image);
  const detailImage = el("detail-image");
  const name = el("name");
  const restaurant = el("restaurant")
  const ratingDisplay = el("rating-display")
  const commentDisplay = el("comment-display")


  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

function createNewRamen(e) {
  e.preventDefault();
  const newRamen={
name:e.target.name.value,
image:e.target.image.value,
restaurant: e.target.restaurant.value,
rating:e.target.rating.value,
comment:e.target['new-comment'].value,
  };
  renderRamen(newRamen);
  e.target.reset();
}
function el(elementName){
  return document.getElementById(elementName)
}