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
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _customer_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.guard */ "./src/app/customer.guard.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");
/* harmony import */ var _components_order_pipeline_order_pipeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/order-pipeline/order-pipeline.component */ "./src/app/components/order-pipeline/order-pipeline.component.ts");








var routes = [
    {
        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"],
        path: ""
    },
    {
        component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"],
        path: "login"
    },
    {
        component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"],
        path: "store",
        canActivate: [_customer_guard__WEBPACK_IMPORTED_MODULE_5__["CustomerGuard"]]
    },
    {
        component: _components_order_pipeline_order_pipeline_component__WEBPACK_IMPORTED_MODULE_7__["OrderPipelineComponent"],
        path: "pipeline",
        canActivate: [_customer_guard__WEBPACK_IMPORTED_MODULE_5__["CustomerGuard"]]
    },
    {
        component: _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"],
        path: "checkout",
        canActivate: [_customer_guard__WEBPACK_IMPORTED_MODULE_5__["CustomerGuard"]]
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
            template: "<app-main></app-main>"
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");
/* harmony import */ var _components_order_pipeline_order_pipeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/order-pipeline/order-pipeline.component */ "./src/app/components/order-pipeline/order-pipeline.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"],
                _components_shopping_basket_shopping_basket_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingBasketComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
                _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationComponent"],
                _components_order_pipeline_order_pipeline_component__WEBPACK_IMPORTED_MODULE_11__["OrderPipelineComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"medium-12 columns\">\n    <h1>Thank you for your order, it will be dispatched shortly!</h1>\n  </div>\n</div>\n<br />\n<br />\n<div class=\"row\">\n  <div class=\"medium-8 small-12 columns small-centered text-center\">\n    <a routerLink=\"/store\" class=\"button success large expanded\">Continue Shopping!</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/basket.service */ "./src/app/services/basket.service.ts");



var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(basketService) {
        this.basketService = basketService;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.basketService.cartItems.next([]);
    };
    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/components/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.css */ "./src/app/components/confirmation/confirmation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <h5 for=\"username\" class=\"text--bold\" >Enter your name: </h5>\n        <input type=\"text\" formControlName=\"customerName\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.customerName.errors }\" />\n        <div *ngIf=\"submitted && f.customerName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.customerName.errors.required\">Username is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Submit</button>\n      </div>\n    </form>\n\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_model_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/customer */ "./src/app/model/customer.ts");






var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(formBuilder, router, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerService = customerService;
        this.submitted = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    Object.defineProperty(CustomerComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    CustomerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var name = this.f.customerName.value;
        this.customerService.getCustomer(name.trim()).subscribe(function (data) {
            if (data.message === "SUCCESS") {
                _this.customer = data.customer;
                _this.saveSessionNavigate();
            }
            else {
                var customer = new src_app_model_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
                customer.name = name.trim();
                _this.customerService.createCustomer(customer).subscribe(function (data) {
                    _this.customer = data;
                    _this.saveSessionNavigate();
                }, function (error) {
                    console.log("error in saving customer");
                });
            }
        }, function (error) {
            console.log("error in getting customer data");
        });
    };
    CustomerComponent.prototype.saveSessionNavigate = function () {
        sessionStorage.setItem('customer', JSON.stringify(this.customer));
        this.customerService.customer = this.customer;
        this.router.navigate(["store"]);
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <div class=\"top-bar-left\">\n    <ul class=\"dropdown menu\" data-dropdown-menu>\n      <li class=\"menu-text\">\n        <h4>\n          <i class=\"material-icons md-48\">face</i>\n          Welcome to Arvin Bugarin's Store!\n        </h4>\n      </li>\n    </ul>\n  </div>\n  <div class=\"top-bar-right\" *ngIf=\"hasSession()\">\n    <ul class=\"dropdown menu\" data-dropdown-menu>\n      <li class=\"menu-text\">\n        <h6>\n          <a routerLink=\"/store\" class=\"text--bold\">STORE</a>\n          &nbsp;&nbsp; &nbsp;\n          <a routerLink=\"/pipeline\" class=\"text--bold\">ORDERS</a>\n          &nbsp;&nbsp; &nbsp;\n          <a href=\"javascript:void(0)\" (click)=\"signout()\" class=\"text--bold\">SIGNOUT</a>\n        </h6>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/basket.service */ "./src/app/services/basket.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MainComponent = /** @class */ (function () {
    function MainComponent(basketService, customerService, router) {
        this.basketService = basketService;
        this.customerService = customerService;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.signout = function () {
        sessionStorage.clear();
        this.basketService.cartItems.next([]);
        this.customerService.customer = undefined;
        this.router.navigate(['login']);
    };
    MainComponent.prototype.hasSession = function () {
        if (sessionStorage.getItem('customer')) {
            return true;
        }
        return false;
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/order-pipeline/order-pipeline.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/order-pipeline/order-pipeline.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItcGlwZWxpbmUvb3JkZXItcGlwZWxpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/order-pipeline/order-pipeline.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/order-pipeline/order-pipeline.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h5 class=\"text--bold js-cart-total\">Recent Orders For {{customer.name}} :</h5>\n  <table class=\"table\">\n    <thead>\n      <tr class=\"table-success\">\n        <th>Order Ref#</th>\n        <th>Items</th>\n        <th>Total Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngIf=\"orders.length === 0\">\n        <tr>\n          <td colspan=\"3\" style=\"text-align:center\">no recent orders...</td>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"orders.length > 0\">\n        <tr *ngFor=\"let order of orders\">\n          <td>{{order.id}}</td>\n          <td>\n            <ng-container *ngFor=\"let item of order.items\">\n              <p>\n                {{item.product.name}} <span class=\"text--red text--bold\">({{item.quantity}}\n                  {{item.quantity===1?'pc':'pcs'}})</span>\n              </p>\n            </ng-container>\n          </td>\n          <td>\n              <span class=\"text--bold\" >\n                  {{getTotalPrice(order.items) | currency:\"PHP\":\"symbol\" }}\n              </span>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/order-pipeline/order-pipeline.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-pipeline/order-pipeline.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrderPipelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipelineComponent", function() { return OrderPipelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");




var OrderPipelineComponent = /** @class */ (function () {
    function OrderPipelineComponent(orderService, customerService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.orders = [];
    }
    OrderPipelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCustomer();
        this.orderService.getAllOrdersByCustomer(this.customer.id).subscribe(function (data) {
            _this.orders = data;
        });
    };
    OrderPipelineComponent.prototype.getCustomer = function () {
        this.customer = this.customerService.customer;
        if (this.isEmpty(this.customer)) {
            this.customer = JSON.parse(sessionStorage.getItem('customer'));
            this.customerService.customer = this.customer;
        }
    };
    OrderPipelineComponent.prototype.getTotalPrice = function (items) {
        var totalPrice = 0;
        items.forEach(function (x) {
            totalPrice += x.price;
        });
        return totalPrice;
    };
    OrderPipelineComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    OrderPipelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-pipeline',
            template: __webpack_require__(/*! ./order-pipeline.component.html */ "./src/app/components/order-pipeline/order-pipeline.component.html"),
            styles: [__webpack_require__(/*! ./order-pipeline.component.css */ "./src/app/components/order-pipeline/order-pipeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], OrderPipelineComponent);
    return OrderPipelineComponent;
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

module.exports = "<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <h3>\n      <i class=\"material-icons\">shopping_basket</i>\n      {{customer?.name}}\n      <br> Shopping Basket\n    </h3>\n  </div>\n</div>\n<br />\n<div *ngFor=\"let cartItem of cartItems\" class=\"row\">\n  <div class=\"small-12 columns\">\n    <h6>\n      {{cartItem.product.name}}:\n    </h6>\n    <h6>\n      <span class=\"text--bold js-cart-total\">Quantity: {{cartItem.quantity}}</span>&nbsp;&nbsp;\n      <span style=\"float:right;\">\n        <span (click)=\"addItem(cartItem)\">\n          <a href=\"javascript:void(0)\"> <i class=\"material-icons text--bold\"\n              style=\"font-size:15px;color:blue;\">add</i>plus</a>\n        </span>\n        &nbsp;&nbsp;\n        <span style=\"float:right;\" (click)=\"removeItem(cartItem)\">\n          <a href=\"javascript:void(0)\"> <i class=\"material-icons text--bold\"\n              style=\"font-size:15px;color:red;\">remove</i>minus</a>\n        </span>\n      </span>\n    </h6>\n    <h6>\n      <span class=\"text--bold js-cart-total\">Price: </span>\n      <span class=\"text--red text--bold js-cart-total\">{{cartItem.price | currency:\"PHP\":\"symbol\" }}</span>\n    </h6>\n  </div>\n  <br /><br><br><br><br>\n</div>\n\n<div *ngIf=\"cartItems.length > 0\" class=\"row\" style=\"text-align: right;\">\n  <div class=\"small-12 columns\">\n    <h5 class=\"text--bold\">\n      TOTAL:\n      <span class=\"text--red js-cart-total\"> {{totalPrice | currency:\"PHP\":\"symbol\" }}</span>\n    </h5>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <a class=\"success button large expanded\" [attr.disabled]=\"cartItems.length === 0 ? true : null\"\n      href=\"javascript:void(0)\" (click)=\"submitOrder()\">Checkout and Submit Order</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns text-center\">\n    or\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <button type=\"button\" class=\"secondary button small expanded js-btn-empty-cart\"\n      [attr.disabled]=\"cartItems.length === 0 ? true : null\" (click)=\"emptyCart()\">\n      Empty shopping basket\n    </button>\n  </div>\n</div>"

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
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ShoppingBasketComponent = /** @class */ (function () {
    function ShoppingBasketComponent(basketService, customerService, orderService, router) {
        this.basketService = basketService;
        this.customerService = customerService;
        this.orderService = orderService;
        this.router = router;
        this.totalPrice = 0;
    }
    ShoppingBasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basketService.cartItems.subscribe(function (data) {
            _this.getTotalPrice(data);
        });
        this.getCustomer();
    };
    ShoppingBasketComponent.prototype.getCustomer = function () {
        this.customer = this.customerService.customer;
        if (this.isEmpty(this.customer)) {
            this.customer = JSON.parse(sessionStorage.getItem('customer'));
            this.customerService.customer = this.customer;
        }
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
    ShoppingBasketComponent.prototype.addItem = function (cartItem) {
        cartItem.quantity += 1;
        cartItem.price += cartItem.product.price;
        this.getTotalPrice(this.cartItems);
    };
    ShoppingBasketComponent.prototype.emptyCart = function () {
        this.basketService.cartItems.next([]);
    };
    ShoppingBasketComponent.prototype.submitOrder = function () {
        this.orderService.submitOrder(this.customerService.customer, this.cartItems).subscribe(function (data) {
        });
        this.router.navigate(["checkout"]);
    };
    ShoppingBasketComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    ShoppingBasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-basket',
            template: __webpack_require__(/*! ./shopping-basket.component.html */ "./src/app/components/shopping-basket/shopping-basket.component.html"),
            styles: [__webpack_require__(/*! ./shopping-basket.component.css */ "./src/app/components/shopping-basket/shopping-basket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"small-12 medium-8 columns\">\n    <h3>Pick your favourite juices...</h3>\n    <ul class=\"product-list\">\n      <li *ngFor=\"let product of products\" class=\"product-container\">\n        <div class=\"row\">\n          <div class=\"medium-3 columns text-center\">\n            <img [src]=\"product.imageUrl\" class=\"product_image\" />\n            <!-- <img src=\"../../../assets/images/{{product.imageUrl}}.jpg\" class=\"product_image\" /> -->\n          </div>\n          <div class=\"medium-9 columns\">\n            <h4>\n              <span class=\"text--bold js-product-name\">{{product.name}}</span>\n              <small class=\"product_price js-product-price\">{{product.price | currency:'PHP':'symbol'}}</small>\n            </h4>\n            <p class=\"js-product-desc\" [innerHtml]=\"product.description\"></p>\n\n            <p>\n              <button type=\"button\" class=\"button success large js-btn-add\" (click)=\"addProductToBasket(product)\">Add\n                To Basket</button>\n            </p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"small-12 medium-4 columns\">\n    <app-shopping-basket></app-shopping-basket>\n  </div>\n</div>"

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

/***/ "./src/app/customer.guard.ts":
/*!***********************************!*\
  !*** ./src/app/customer.guard.ts ***!
  \***********************************/
/*! exports provided: CustomerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerGuard", function() { return CustomerGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CustomerGuard = /** @class */ (function () {
    function CustomerGuard(router) {
        this.router = router;
    }
    CustomerGuard.prototype.canActivate = function () {
        if (sessionStorage.getItem('customer')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    CustomerGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerGuard);
    return CustomerGuard;
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

/***/ "./src/app/model/customer.ts":
/*!***********************************!*\
  !*** ./src/app/model/customer.ts ***!
  \***********************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/model/order.ts":
/*!********************************!*\
  !*** ./src/app/model/order.ts ***!
  \********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
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

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/customer */ "./src/app/model/customer.ts");




var CustomerService = /** @class */ (function () {
    function CustomerService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://localhost:8080/shop-customer/customer';
        this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
    }
    CustomerService.prototype.createCustomer = function (customer) {
        return this.httpClient.post("" + this.apiURL, customer);
    };
    CustomerService.prototype.getCustomer = function (customerName) {
        return this.httpClient.get(this.apiURL + "/" + customerName);
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/customer */ "./src/app/model/customer.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/order */ "./src/app/model/order.ts");





var OrderService = /** @class */ (function () {
    function OrderService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://localhost:8080/shop-cart';
        this.customer = new _model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    OrderService.prototype.submitOrder = function (customer, cartItems) {
        var request = new _model_order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        request.customer = customer;
        request.items = cartItems;
        return this.httpClient.post(this.apiURL + "/cart", request);
    };
    OrderService.prototype.getAllOrdersByCustomer = function (customerId) {
        return this.httpClient.get(this.apiURL + "/carts/" + customerId);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrderService);
    return OrderService;
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