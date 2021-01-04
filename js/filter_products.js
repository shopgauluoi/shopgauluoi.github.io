function filterFunction() {
    var input, filter, cards, cardContainer, title;
    var productBrands;

    input = document.getElementById("input-search");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("product-item");
    productBrands = document.getElementsByClassName("product-brand");

    for (var i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-product-name");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

    if (filter.length == "") {
        show_hide_product_brand(productBrands, "");
    } else {
        show_hide_product_brand(productBrands, "none");
    }
}

function show_hide_product_brand(productBrands, flag) {
    // flag: "" or "none"
    for (var i = 0; i < productBrands.length; i++) {
        productBrands[i].style.display = flag;
    }
}