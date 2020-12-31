const scriptURL = "https://script.google.com/macros/s/AKfycbyGzqig0akyhYjYTQRSoxm1-GfuIuP9Kl19xOPQVRyntQIGw-3TzKT5CQ/exec";

// update shopping cart status when there is an event
$(document).ready(function(){
    updateCartNotification();
    if (window.location.href.indexOf("shopping-cart") > -1) {
        cartSummary();    
    }
});

cartLS.onChange(updateCart);

function updateCart(){
    updateCartNotification();
    if (window.location.href.indexOf("shopping-cart") > -1) {
        cartSummary();
    }
}

function add2cart(product_identifier, product_name, product_price){
    var product_quantity = 0;

    product_quantity = document.getElementById("product-" + product_identifier + "-quantity").value;
    product_quantity = parseInt(product_quantity);

    cartLS.add({id: product_identifier, name: product_name, price: product_price}, product_quantity)
}

function updateCartNotification(){
    var cart_icon = document.getElementById("badge-total-items");
    var totalItems = getTotalItems();

    if (totalItems > 0) {
        cart_icon.innerHTML = totalItems;
    } else {
        cart_icon.innerHTML = "";
    }
}

function cartSummary(){
    var btn_checkout = document.getElementById("btn-checkout");
    var btn_order = document.getElementById("btn-order");
    var totalItems = getTotalItems();
    
    if (totalItems > 0) {
        btn_checkout.disabled = false;
    } else {
        btn_checkout.disabled = true;
        btn_order.disabled = true;
    }
    renderCart(cartLS.list());
}

function getTotalItems(){
    var totalItems = 0;
    var listItems = cartLS.list();

    // count total items
    for (var i=0; i < listItems.length; i++){
        totalItems += listItems[i].quantity;
    }

    return totalItems;
}

function renderCart(items) {
    const $cart = document.querySelector(".cart")
    const $total = document.querySelector(".total")

    $cart.innerHTML = items.map((item) => `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td style="width: 60px;">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},1)">+</button>
                </td>
                <td style="width: 60px;">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},-1)">-</button>
                </td>
                <td class="text-right">${item.price}k &#8363;</td>
                <td class="text-right"><Button class="btn btn-warning" onClick="cartLS.remove(${item.id})">Delete</Button></td>
            </tr>`).join("")

    $total.innerHTML = cartLS.total() + "k &#8363;";
}

function checkoutOrder(){
    var customer_info_div = document.getElementById("customer-info");
    var remove_or_checkout_div = document.getElementById("remove-or-checkout");
    var input_order = document.getElementById('input-order-id');
    var d = new Date();

    remove_or_checkout_div.hidden = true;
    customer_info_div.hidden = false;

    // add date time as order id
    input_order.value = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getHours() + '.' + d.getMinutes() + '.' + d.getSeconds();
}

function placeOrder(){
    var customer_div = document.getElementById('customer-info');
    var customer_inputs = document.querySelectorAll('#customer-info input');
    var alert_msg = document.getElementById("alert-msg");
    var validFlag = true;
    var customer_info = {};
    var my_form = document.getElementById("submit-form");

    for (var i = 0; i < customer_inputs.length; i++){
        if (!customer_inputs[i].checkValidity()) {
            validFlag = false;
        }
        customer_info[customer_inputs[i].name] = customer_inputs[i].value;
    }

    if (!validFlag) {
        alert_msg.classList.add("alert-danger");
        alert_msg.innerHTML = "Missing required information"
    } else {
        orders_info = combine_customer_orders(customer_info);

        for (var i = 0; i < orders_info.length; i++) {
            order2form(orders_info[i]);

            fetch(scriptURL, { method: 'POST', body: new FormData(my_form)})
                .then(response => {
                    my_form.reset();
                    // console.log("Order has been placed!");
                })
                .catch(error => {
                    // console.log("Error!");
                });
        }
        customer_div.hidden = true;

        alert_msg.classList.remove("alert-danger");
        alert_msg.classList.add("alert-success");
        alert_msg.innerHTML = "Order <strong>" + customer_info["customer_order_id"] + "</strong> has been successfully placed.";

        // reset information
        for (var i = 0; i < customer_inputs.length; i++){
            customer_inputs[i].value = '';
        }
        cartLS.destroy();
    }
}

function combine_customer_orders(customer_info) {
    // combine customer and order information to form records to update into google sheet
    // Args:
    //      customer_info: javascript object about customer: name, phone, email and address
    // Return:
    //      orders_info: javascript object concatenating customer and orders.
    var orders_info = [];
    var order_info = {};

    items = cartLS.list();
    for (var i = 0; i < items.length; i++) {
        order_info = {};
        item = items[i];

        for (var key of Object.keys(customer_info)) {
            order_info[key] = customer_info[key];
        }

        for (var key of Object.keys(item)) {
            order_info[key] = item[key];
        }

        orders_info.push(order_info);
    }

    return orders_info;
}

function order2form(order_info){
    // combine the information to fill the submit-to-google-sheet form
    // Args:
    //      order_info: object containing information of the customer and the item formation in the cartLS.list()
    var form_inputs = document.querySelectorAll("#submit-form input");

    for (var i = 0; i < form_inputs.length; i++) {
        form_inputs[i].value = order_info[form_inputs[i].name]
    }
}