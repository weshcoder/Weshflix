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
        this.title = 'weshflix';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'movies-app',
            template: "\n  <nav-app></nav-app>\n  <router-outlet></router-outlet>\n    "
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
/* harmony import */ var _navbar_navbar_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar-app.component */ "./src/app/navbar/navbar-app.component.ts");
/* harmony import */ var _movies_movie_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movie-app.component */ "./src/app/movies/movie-app.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/search-bar/search-bar.component */ "./src/app/navbar/search-bar/search-bar.component.ts");
/* harmony import */ var _movies_movie_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies/movie-card.component */ "./src/app/movies/movie-card.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'Kids', component: _movies_movie_app_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
                    { path: '', redirectTo: 'Kids', pathMatch: 'full' },
                    { path: '', loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./favourites/farouties.module */ "./src/app/favourites/farouties.module.ts")).then(function (m) { return m.FavModule; }); } }
                ])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_app_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _movies_movie_app_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"],
                _navbar_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBoxComponent"],
                _movies_movie_card_component__WEBPACK_IMPORTED_MODULE_9__["MovieCardComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movies/movie-app.component.css":
/*!************************************************!*\
  !*** ./src/app/movies/movie-app.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n  padding: 0 1.5%;\r\n}\r\n\r\n.title {\r\n  padding: 0 4%;\r\n}\r\n\r\n.movies {\r\n  padding: 2% 0 0 0;\r\n}\r\n\r\nul#movies1 li {\r\n  display: inline;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n\r\n/* .actors {\r\n  padding: 50px;\r\n  background-color: green;\r\n  transition: transform .2s;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin: 0 auto;\r\n} */\r\n\r\n#actor1:hover { /* IE 9 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor2:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor3:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor4:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor5:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n.heart {\r\n  color: red;\r\n}\r\n\r\n.fa-heart{\r\n  color: red;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsV0FBVztDQUNaOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7O0FBRUQ7Ozs7Ozs7SUFPSTs7QUFJSixnQkFDNkIsVUFBVTtFQUVyQyxzQkFBc0I7Q0FDdkI7O0FBQ0QsZ0JBQzZCLFVBQVUsQ0FDTixnQkFBZ0I7RUFDL0Msc0JBQXNCO0NBQ3ZCOztBQUNELGdCQUM2QixVQUFVLENBQ04sZ0JBQWdCO0VBQy9DLHNCQUFzQjtDQUN2Qjs7QUFDRCxnQkFDNkIsVUFBVSxDQUNOLGdCQUFnQjtFQUMvQyxzQkFBc0I7Q0FDdkI7O0FBQ0QsZ0JBQzZCLFVBQVUsQ0FDTixnQkFBZ0I7RUFDL0Msc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UsV0FBVzs7Q0FFWiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIHBhZGRpbmc6IDAgMS41JTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwYWRkaW5nOiAwIDQlO1xyXG59XHJcblxyXG4ubW92aWVzIHtcclxuICBwYWRkaW5nOiAyJSAwIDAgMDtcclxufVxyXG5cclxudWwjbW92aWVzMSBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiAuYWN0b3JzIHtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn0gKi9cclxuXHJcblxyXG5cclxuI2FjdG9yMTpob3ZlciB7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogSUUgOSAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jYWN0b3IyOmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuI2FjdG9yMzpob3ZlciB7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogSUUgOSAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiNhY3RvcjQ6aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIElFIDkgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jYWN0b3I1OmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZhLWhlYXJ0e1xyXG4gIGNvbG9yOiByZWQ7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movie-app.component.html":
/*!*************************************************!*\
  !*** ./src/app/movies/movie-app.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n<div class=\"movies\">\r\n    <h3 class=\"title\">Tv Shows  &nbsp; &gt;</h3>\r\n  <div class=\"row\">\r\n\r\n    <ul id=\"movies1\" >\r\n        <li *ngFor=\"let movie of movies\">\r\n            <moviecard-app [imgUrl]=\"movie.imgUrl\" [movieName]=\"movie.name\"></moviecard-app>\r\n        </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies2\">\r\n    <h3 class=\"title\">Comedy  &nbsp; &gt;</h3>\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\">\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-6.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-6.png\" alt=\"Cinque Terre\" width=\"350\" height=\"200\">\r\n                <div ><a href=\"\">Add To Favourite &nbsp;<i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-7.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-7.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">Add To Favourite &nbsp;<a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-8.png\" alt=\"Cinque Terre\" hspace='2'>\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-8.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">Add To Favourite &nbsp;<a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-9.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-9.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">Add To Favourite &nbsp;<a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-10.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-10.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">Add To Favourite &nbsp;<a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies3\">\r\n    <h3 class=\"title\">Action &nbsp; &gt;</h3>\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\">\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-11.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-11.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">Add To Favourite &nbsp;<a><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-12.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-12.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">Add To Favourite &nbsp;<a><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n       <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-13.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-13.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n              <div class=\"desc\">Add To Favourite &nbsp;<a><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n       <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-14.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-14.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n              <div class=\"desc\">Add To Favourite &nbsp;<a><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n\r\n      <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-15.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-15.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n              <div class=\"desc\">Add To Favourite &nbsp;<a><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies3\">\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\" class=\"actors\">\r\n      <li><img id=\"actor1\" src=\"../../assets/images/actor-1.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li><img id=\"actor2\" src=\"../../assets/images/actor-2.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li ><img id=\"actor3\" src=\"../../assets/images/actor-3.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li ><img id=\"actor4\" src=\"../../assets/images/actor-4.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li ><img id=\"actor4\" src=\"../../assets/images/actor-5.png\" hspace=\"2\" alt=\"\"></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n</main>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/movies/movie-app.component.ts":
/*!***********************************************!*\
  !*** ./src/app/movies/movie-app.component.ts ***!
  \***********************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
        this.movies = [
            {
                name: 'Zapped',
                imgUrl: '../../assets/images/movies-1.png'
            },
            {
                name: 'Annie',
                imgUrl: '../../assets/images/movies-2.png'
            },
            {
                name: 'labRats',
                imgUrl: '../../assets/images/movies-3.png'
            },
            {
                name: 'Dad Day Care',
                imgUrl: '../../assets/images/movies-4.png'
            },
            {
                name: 'Good Witch',
                imgUrl: '../../assets/images/movies-5.png'
            },
        ];
    }
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'movie-app',
            template: __webpack_require__(/*! ./movie-app.component.html */ "./src/app/movies/movie-app.component.html"),
            styles: [__webpack_require__(/*! ./movie-app.component.css */ "./src/app/movies/movie-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/movies/movie-card.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsNkNBQTZDO0VBQzdDLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/movies/movie-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/movies/movie-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\r\n      <img [src]=\"imgUrl\" alt=\"Cinque Terre\">\r\n      <div class=\"dropdown-content\">\r\n      <img [src]=\"imgUrl\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n      <div class=\"desc\">{{movieName}} &nbsp; | &nbsp; Add To Favourite &nbsp;<a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n      </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/movies/movie-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/movies/movie-card.component.ts ***!
  \************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent() {
    }
    MovieCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MovieCardComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MovieCardComponent.prototype, "movieName", void 0);
    MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'moviecard-app',
            template: __webpack_require__(/*! ./movie-card.component.html */ "./src/app/movies/movie-card.component.html"),
            styles: [__webpack_require__(/*! ./movie-card.component.css */ "./src/app/movies/movie-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieCardComponent);
    return MovieCardComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/navbar/navbar-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logo {\r\n  padding: 0 4%;\r\n  margin-top: .42%;\r\n  font-size: 1.9em;\r\n  font-weight: bold;\r\n  color: red;\r\n  text-decoration: none;\r\n  float: left;\r\n}\r\n\r\n.nav {\r\n  margin-top: 20px;\r\n}\r\n\r\n.search-box {\r\n  position: absolute;\r\n  top: 3.83%;\r\n  left: 72%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 10px;\r\n}\r\n\r\n.search-box:hover > .search-txt {\r\n  width: 200px;\r\n  padding: 0 6px;\r\n}\r\n\r\n.search-btn {\r\n  color: white;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: -3%;\r\n}\r\n\r\n.search-txt {\r\n  border: solid white 1px;\r\n  background: black;\r\n  outline: none;\r\n  float: left;\r\n  padding: 0;\r\n  color: white;\r\n  font-size: 16px;\r\n  transition: .4s;\r\n  width: 0;\r\n}\r\n\r\na {\r\n  padding: 0 2% 0 0;\r\n  color: #e5e5e5;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a{\r\n  display: block;\r\n  color: red;\r\n  text-align: center;\r\n  padding: 13px;\r\n  text-decoration: none;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.fas {\r\n  color: #000;\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsY0FBYztDQUNmOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7O0FBR0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztDQUNWOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXItYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ28ge1xyXG4gIHBhZGRpbmc6IDAgNCU7XHJcbiAgbWFyZ2luLXRvcDogLjQyJTtcclxuICBmb250LXNpemU6IDEuOWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMy44MyU7XHJcbiAgbGVmdDogNzIlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC10eHQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiAwIDZweDtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuXHJcbi5zZWFyY2gtdHh0IHtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIHBhZGRpbmc6IDAgMiUgMCAwO1xyXG4gIGNvbG9yOiAjZTVlNWU1O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGkgYXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZhLWhlYXJ0IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/navbar/navbar-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav>\r\n    <a href=\"/\" class=\"logo\">WESHFLIX</a>\r\n<<<<<<< HEAD\r\n    <ul class=\"nav\">\r\n      <li><a [routerLink]=\"['/Kids']\"  style=\"cursor: default; font-size: 16px; font-weight: bold;\">Kids</a></li>\r\n      <li><a [routerLink]=\"['/favs']\" ><i class=\"fas fa-heart\"></i> Favourites</a><li>\r\n      <searchbox-app (query)=\"queryValue($event)\"></searchbox-app>\r\n=======\r\n    <ul>\r\n      <li><a href=\"/\" onclick=\"return false;\" style=\"cursor: default; font-size: 16px; font-weight: bold;\">Home</a></li>\r\n      <li><a href=\"#tvShows\" onclick=\"return false;\">TvShows</a></li>\r\n      <li><a href=\"#AllMovies\" onclick=\"return false;\">Movies</a></li>\r\n      <li><a href=\"#New\" onclick=\"return false;\">Recently Added</a></li>\r\n      <li><a href=\"#MyList\" onclick=\"return false;\">My List</a></li>\r\n      <li class=\"search-box\">\r\n        <input class=\"search-txt\" type=\"text\" name=\"\" placeholder=\"Titles, people, genres\">\r\n        <a class=\"search-btn\" href=\"#\">\r\n          <i class=\"fas fa-search\"></i>\r\n        </a>\r\n      </li>\r\n>>>>>>> ac226cecb849c72f6f25a2abcb83ab48fd9e80cf\r\n    </ul>\r\n  </nav>\r\n\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/navbar/navbar-app.component.ts ***!
  \************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.searchValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NavBarComponent.prototype.searchMovie = function () {
        console.log();
    };
    NavBarComponent.prototype.queryValue = function (value) {
        this.searchValue$.next(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"])
    ], NavBarComponent.prototype, "searchValue$", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'nav-app',
            template: __webpack_require__(/*! ./navbar-app.component.html */ "./src/app/navbar/navbar-app.component.html"),
            styles: [__webpack_require__(/*! ./navbar-app.component.css */ "./src/app/navbar/navbar-app.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/search-bar/search-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/navbar/search-bar/search-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.search-box {\r\n  position: absolute;\r\n  top: 6%;\r\n  left: 80%;\r\n  transform: translate(-50%, -50%);\r\n  /* padding: 10px; */\r\n}\r\n\r\n.search-box:hover > .search-txt {\r\n  width: 200px;\r\n  padding: 0 6px;\r\n}\r\n\r\n.search-btn{\r\n  color: #000;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.search-txt {\r\n  border: 2px solid #000000;\r\n  background: #ffffff;\r\n  outline: none;\r\n  float: left;\r\n  padding: 0;\r\n  color: #000;\r\n  font-size: 16px;\r\n  transition: .4s;\r\n  line-height: 40px;\r\n  width: 0;\r\n  height: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtDQUNoQjs7QUFHRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlYXJjaC1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYlO1xyXG4gIGxlZnQ6IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdHh0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJ0bntcclxuICBjb2xvcjogIzAwMDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtdHh0IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/search-bar/search-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/navbar/search-bar/search-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"search-box\">\r\n    <input class=\"search-txt\" type=\"text\" name=\"\" placeholder=\"Titles, people, genre\" (input)=\"searchMovie($event)\">\r\n    <a class=\"search-btn\">\r\n      <i class=\"fas fa-search\" ></i>\r\n    </a>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/navbar/search-bar/search-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/navbar/search-bar/search-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
        this.query = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    SearchBoxComponent.prototype.searchMovie = function (event) {
        var value = event.target.value;
        this.query.emit(value);
        console.log(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchBoxComponent.prototype, "query", void 0);
    SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'searchbox-app',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/navbar/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/navbar/search-bar/search-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
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

module.exports = __webpack_require__(/*! C:\dev\weshflix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map