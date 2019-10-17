(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/favourites/farouties.module.ts":
/*!************************************************!*\
  !*** ./src/app/favourites/farouties.module.ts ***!
  \************************************************/
/*! exports provided: FavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavModule", function() { return FavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _favourites_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourites-app.component */ "./src/app/favourites/favourites-app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: 'favs', component: _favourites_app_component__WEBPACK_IMPORTED_MODULE_2__["FavouriteComponent"] }
];
var FavModule = /** @class */ (function () {
    function FavModule() {
    }
    FavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _favourites_app_component__WEBPACK_IMPORTED_MODULE_2__["FavouriteComponent"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [],
        })
    ], FavModule);
    return FavModule;
}());



/***/ }),

/***/ "./src/app/favourites/favourites-app.component.html":
/*!**********************************************************!*\
  !*** ./src/app/favourites/favourites-app.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav-app></nav-app> -->\r\n\r\n<div>\r\n  This are your favourite Movies!!!\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/favourites/favourites-app.component.ts":
/*!********************************************************!*\
  !*** ./src/app/favourites/favourites-app.component.ts ***!
  \********************************************************/
/*! exports provided: FavouriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function() { return FavouriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavouriteComponent = /** @class */ (function () {
    function FavouriteComponent() {
    }
    FavouriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'favourites-app',
            template: __webpack_require__(/*! ./favourites-app.component.html */ "./src/app/favourites/favourites-app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavouriteComponent);
    return FavouriteComponent;
}());



/***/ })

}]);
//# sourceMappingURL=0.js.map