(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");




var routes = [
    {
        component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"],
        path: "**"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shop-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_shopping_basket_shopping_basket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shopping-basket/shopping-basket.component */ "./src/app/components/shopping-basket/shopping-basket.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"],
                _components_shopping_basket_shopping_basket_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingBasketComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-basket/shopping-basket.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/shopping-basket/shopping-basket.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctYmFza2V0L3Nob3BwaW5nLWJhc2tldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shopping-basket/shopping-basket.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/shopping-basket/shopping-basket.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <h3>\n      <i class=\"material-icons\">shopping_basket</i>\n      Your Shopping Basket\n    </h3>\n  </div>\n</div>\n<br />\n<div *ngFor=\"let cartItem of cartItems\" class=\"row\">\n  <div class=\"small-12 columns\">\n    <h6>\n      {{cartItem.product.name}}:\n    </h6>\n    <h6>\n      <span class=\"text--bold js-cart-total\">Quantity: {{cartItem.quantity}}</span>&nbsp;&nbsp;\n      <span (click)=\"removeItem(cartItem)\">\n        <a href=\"javascript:void(0)\"> <i class=\"material-icons\" style=\"font-size:15px;color:red;\">backspace</i></a>\n      </span>\n    </h6>\n    <h6>\n      <span class=\"text--bold js-cart-total\">Price: </span>\n      <span class=\"text--red text--bold js-cart-total\">{{cartItem.price | currency:\"PHP\":\"symbol\" }}</span>\n    </h6>\n  </div>\n  <br /><br><br><br><br>\n</div>\n\n<div *ngIf=\"cartItems.length > 0\" class=\"row\" style=\"text-align: right;\">\n  <div class=\"small-12 columns\">\n    <h5 class=\"text--bold\">\n      TOTAL: \n      <span class=\"text--red js-cart-total\"> {{totalPrice | currency:\"PHP\":\"symbol\" }}</span>\n    </h5>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <a class=\"success button large expanded\" [attr.disabled]=\"cartItems.length === 0 ? true : null\"\n      routerLink=\"/checkout\">Proceed To Checkout</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns text-center\">\n    or\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <button type=\"button\" class=\"secondary button small expanded js-btn-empty-cart\"\n      [attr.disabled]=\"cartItems.length === 0 ? true : null\" (click)=\"emptyCart()\">\n      Empty shopping basket\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-basket/shopping-basket.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/shopping-basket/shopping-basket.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShoppingBasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBasketComponent", function() { return ShoppingBasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/basket.service */ "./src/app/services/basket.service.ts");



var ShoppingBasketComponent = /** @class */ (function () {
    function ShoppingBasketComponent(basketService) {
        this.basketService = basketService;
        this.totalPrice = 0;
    }
    ShoppingBasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basketService.cartItems.subscribe(function (data) {
            _this.getTotalPrice(data);
        });
    };
    ShoppingBasketComponent.prototype.getTotalPrice = function (data) {
        var price = 0;
        this.cartItems = data;
        this.cartItems.forEach(function (x) {
            price += x.price;
        });
        this.totalPrice = price;
    };
    ShoppingBasketComponent.prototype.removeItem = function (cartItem) {
        if (cartItem.quantity === 1) {
            this.basketService.cartItems.next(this.cartItems.filter(function (x) { return x.product.name != cartItem.product.name; }));
        }
        cartItem.quantity -= 1;
        cartItem.price -= cartItem.product.price;
        this.getTotalPrice(this.cartItems);
    };
    ShoppingBasketComponent.prototype.emptyCart = function () {
        this.basketService.cartItems.next([]);
    };
    ShoppingBasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-basket',
            template: __webpack_require__(/*! ./shopping-basket.component.html */ "./src/app/components/shopping-basket/shopping-basket.component.html"),
            styles: [__webpack_require__(/*! ./shopping-basket.component.css */ "./src/app/components/shopping-basket/shopping-basket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]])
    ], ShoppingBasketComponent);
    return ShoppingBasketComponent;
}());



/***/ }),

/***/ "./src/app/components/store/store.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"small-12 medium-8 columns\">\n    <h3>Pick your favourite juices...</h3>\n    <ul class=\"product-list\">\n      <li *ngFor=\"let product of products\" class=\"product-container\">\n        <div class=\"row\">\n          <div class=\"medium-3 columns text-center\">\n            <img src=\"assets/{{product.imageUrl}}.jpg\" class=\"product_image\" />\n            <!-- <img src=\"../../../assets/images/{{product.imageUrl}}.jpg\" class=\"product_image\" /> -->\n          </div>\n          <div class=\"medium-9 columns\">\n            <h4>\n              <span class=\"text--bold js-product-name\">{{product.name}}</span>\n              <small class=\"product_price js-product-price\">{{product.price | currency:'PHP':'symbol'}}</small>\n            </h4>\n            <p class=\"js-product-desc\" [innerHtml]=\"product.description\"></p>\n\n            <p>\n              <button type=\"button\" class=\"button success large js-btn-add\" (click)=\"addProductToBasket(product)\">Add\n                To Basket</button>\n            </p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"small-12 medium-4 columns\">\n    <app-shopping-basket></app-shopping-basket>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/store/store.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n  list-style-type: none;\n  margin: 0; }\n\n.product-container {\n  padding: 2rem 3rem 0 0;\n  position: relative;\n  border: 1px solid #EFEFEF;\n  margin: 10px 0; }\n\n.product-container:hover {\n    box-shadow: 0 0 5px rgba(50, 50, 50, 0.3); }\n\n.product-container .product_image {\n    max-height: 250px; }\n\n.product-container .product_price {\n    float: right;\n    margin-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS9DOlxcVXNlcnNcXEFydmluXFxhcmNoLXdvcmtzcGFjZVxcc2hvcFxcc3JjXFxtYWluXFxzaG9wLXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdG9yZVxcc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsU0FBUyxFQUFBOztBQUdYO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUpsQjtJQU9JLHlDQUFzQyxFQUFBOztBQVAxQztJQVdJLGlCQUFpQixFQUFBOztBQVhyQjtJQWVJLFlBQVk7SUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAzcmVtIDAgMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoNTAsNTAsNTAsMC4zKTtcclxuICAgIH1cclxuICBcclxuICAgIC5wcm9kdWN0X2ltYWdlIHtcclxuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvZHVjdF9wcmljZSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/store/store.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/store/store.component.ts ***!
  \*****************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/basket.service */ "./src/app/services/basket.service.ts");
/* harmony import */ var src_app_model_cart_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/cart-item */ "./src/app/model/cart-item.ts");





var StoreComponent = /** @class */ (function () {
    function StoreComponent(productService, basketService) {
        this.productService = productService;
        this.basketService = basketService;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (res) {
            _this.products = res;
        });
        this.basketService.cartItems.subscribe(function (data) {
            _this.cartItems = data;
        });
    };
    StoreComponent.prototype.addProductToBasket = function (product) {
        var productExists = false;
        this.cartItems.forEach(function (x) {
            if (x.product.name === product.name) {
                x.quantity += 1;
                x.price += product.price;
                productExists = true;
            }
        });
        if (!productExists) {
            var cartItem = new src_app_model_cart_item__WEBPACK_IMPORTED_MODULE_4__["CartItem"]();
            cartItem.product = product;
            cartItem.quantity = 1;
            cartItem.price = product.price;
            this.cartItems.push(cartItem);
        }
        this.basketService.cartItems.next(this.cartItems);
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/components/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/components/store/store.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/model/cart-item.ts":
/*!************************************!*\
  !*** ./src/app/model/cart-item.ts ***!
  \************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem() {
        this.quantity = 0;
        this.price = 0;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/services/basket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/basket.service.ts ***!
  \********************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BasketService = /** @class */ (function () {
    function BasketService() {
        this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    BasketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasketService);
    return BasketService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://localhost:8080/shop-product';
    }
    ProductService.prototype.getProducts = function () {
        return this.httpClient.get(this.apiURL + "/products");
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Arvin\arch-workspace\shop\src\main\shop-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map