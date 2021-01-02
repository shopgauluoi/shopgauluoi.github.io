function filterFunction() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("input-search");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("grid");
  cards = cardContainer.getElementsByClassName("product-item");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}