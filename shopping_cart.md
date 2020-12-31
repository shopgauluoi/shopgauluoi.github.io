---
layout: default
title: "Shopping Cart Summary"
permalink: /shopping-cart/
---

<div class="row">
    <div class="col-md-8">
        <article class="post">
            <header class="post-header">
            <h1>{{ page.title }}</h1>
            </header>
            <div class="post-content">
                <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                        <th>Unit price</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody class="cart">
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">Total: <strong class="total"></strong></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div id="remove-or-checkout">
                    <div style="float: left;">
                        <button class="btn btn-danger mr-2" onClick="cartLS.destroy()">Clear cart</button>
                    </div>
                    <div style="float: right;">
                        <button class="btn btn-primary mr-2" id="btn-checkout" onClick="checkoutOrder();" disabled>Checkout</button>
                    </div>
                </div>
                <br />
                <br />
                <div id="customer-info" style="clear: both;" hidden>
                    <h3>Shipping information</h3>
                    <div class="recent">
                        <ul>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Order id:</span>
                                    <input type="text" name="customer_order_id" id="input-order-id" required disabled/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Name</span>
                                    <input type="text" name="customer_name" required/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Phone</span>
                                    <input type="tel" name="customer_phone" required/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Email</span>
                                    <input type="email" name="customer_email"/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Address</span>
                                    <input type="text" name="customer_address"/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div style="float: right;">
                        <button class="btn btn-primary mr-2" id="btn-order" onClick="placeOrder();">Place order</button>
                    </div>
                </div>
                <div id="alert-msg" class="alert" role="alert"></div>
            </div>
        </article>
    </div>
    <div>
        <form name="submit-to-google-sheet" id="submit-form" hidden>
            <input name="customer_order_id" type="text">
            <input name="customer_name" type="text">
            <input name="customer_phone" type="text">
            <input name="customer_email" type="text">
            <input name="customer_address" type="text">
            <input name="id" type="text">
            <input name="name" type="text">
            <input name="quantity" type="text">
            <input name="price" type="text">
        </form>
    </div>
</div>