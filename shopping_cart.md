---
layout: default
title: "Gi&#7887; h&#224;ng"
permalink: /shopping-cart/
---

<div class="row">
    <div class="col-md-10">
        <article class="post">
            <br />
            <header class="post-header">
                <h4>{{ page.title }}</h4>
            </header>
            <div class="post-content">
                <table class="table">
                <thead>
                    <tr>
                        <!-- <th>M&#227; h&#224;ng</th> -->
                        <th>T&#234;n h&#224;ng</th>
                        <th>S&#7889; l&#432;&#7907;ng</th>
                        <th></th>
                        <th></th>
                        <th class="text-right">&#272;&#417;n gi&#225;</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody class="cart">
                    </tbody>
                    <tfoot>
                        <tr>
                            <!-- <td></td> -->
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right">T&#7893;ng c&#7897;ng: <strong class="total"></strong></td>
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
                    <h4>Thông tin khách hàng</h4>
                    <div class="recent">
                        <ul>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">M&#227; &#273;&#7863;t h&#224;ng</span>
                                    <input type="text" name="customer_order_id" id="input-order-id" required readonly/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">T&#234;n</span>
                                    <input type="text" name="customer_name" required/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Điện thoại</span>
                                    <input type="tel" name="customer_phone" required/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;" required>Địa chỉ</span>
                                    <input type="text" name="customer_address"/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px;">Email</span>
                                    <input type="email" name="customer_email" placeholder="Không bắt buộc"/>
                                </label>
                            </li>
                            <li>
                                <label style="display: block;">
                                    <span style="display: inline-block; text-align: right; width: 100px; vertical-align: top;">Lời nh&#7855;n</span>
                                    <textarea name="customer_comment" rows="2" placeholder="Không bắt buộc"></textarea>
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
            <input name="customer_comment" type="text">
            <input name="id" type="text">
            <input name="name" type="text">
            <input name="quantity" type="text">
            <input name="price" type="text">
        </form>
    </div>
</div>