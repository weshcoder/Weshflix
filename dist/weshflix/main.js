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
            template: "\n  <nav-app></nav-app>\n  <movie-app></movie-app>\n    "
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






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_app_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _movies_movie_app_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"]
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

module.exports = ".row {\r\n  padding: 0 1.5%;\r\n}\r\n\r\n.title {\r\n  padding: 0 4%;\r\n}\r\n\r\n.movies {\r\n  padding: 2% 0 0 0;\r\n}\r\n\r\nul#movies1 li {\r\n  display: inline;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.desc {\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n\r\n/* .actors {\r\n  padding: 50px;\r\n  background-color: green;\r\n  transition: transform .2s;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin: 0 auto;\r\n} */\r\n\r\n#actor1:hover { /* IE 9 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor2:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor3:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor4:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n#actor5:hover { /* IE 9 */ /* Safari 3-8 */\r\n  transform: scale(1.1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvbW92aWVzL21vdmllLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsV0FBVztDQUNaOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7O0FBRUQ7Ozs7Ozs7SUFPSTs7QUFJSixnQkFDNkIsVUFBVTtFQUVyQyxzQkFBc0I7Q0FDdkI7O0FBQ0QsZ0JBQzZCLFVBQVUsQ0FDTixnQkFBZ0I7RUFDL0Msc0JBQXNCO0NBQ3ZCOztBQUNELGdCQUM2QixVQUFVLENBQ04sZ0JBQWdCO0VBQy9DLHNCQUFzQjtDQUN2Qjs7QUFDRCxnQkFDNkIsVUFBVSxDQUNOLGdCQUFnQjtFQUMvQyxzQkFBc0I7Q0FDdkI7O0FBQ0QsZ0JBQzZCLFVBQVUsQ0FDTixnQkFBZ0I7RUFDL0Msc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6Ii4uL3NyYy9hcHAvbW92aWVzL21vdmllLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgcGFkZGluZzogMCAxLjUlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBhZGRpbmc6IDAgNCU7XHJcbn1cclxuXHJcbi5tb3ZpZXMge1xyXG4gIHBhZGRpbmc6IDIlIDAgMCAwO1xyXG59XHJcblxyXG51bCNtb3ZpZXMxIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5hY3RvcnMge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufSAqL1xyXG5cclxuXHJcblxyXG4jYWN0b3IxOmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiNhY3RvcjI6aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIElFIDkgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jYWN0b3IzOmhvdmVyIHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuI2FjdG9yNDpob3ZlciB7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogSUUgOSAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiNhY3RvcjU6aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIElFIDkgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/movies/movie-app.component.html":
/*!*************************************************!*\
  !*** ./src/app/movies/movie-app.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n<div class=\"movies\">\r\n    <h3 class=\"title\">Tv Shows  &nbsp; &gt;</h3>\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\">\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-1.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-1.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">{{movie1}} | &nbsp; Date &gt; 2017 | &nbsp; Rating &gt;  7+ <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n      <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-2.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-2.png\" alt=\"Cinque Terre\" width=\"320\" height=\"200\">\r\n              <div class=\"desc\">{{movie2}} &nbsp; Date &gt; 2017 | &nbsp; Rating &gt; 7+ &nbsp; <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n      <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-3.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-3.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n              <div class=\"desc\">{{movie3}} &nbsp; Date &gt; 2017 | &nbsp; Rating &gt; 7+  <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n      <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-4.png\" alt=\"Cinque Terre\" hspace=\"2\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-4.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n              <div class=\"desc\">{{movie4}} &nbsp; Date &gt; 2017 | &nbsp; Rating &gt; 7+ <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n      <li>\r\n          <div class=\"dropdown\">\r\n              <img src=\"../../assets/images/movies-5.png\" alt=\"Cinque Terre\">\r\n              <div class=\"dropdown-content\">\r\n              <img src=\"../../assets/images/movies-5.png\" alt=\"Cinque Terre\" width=\"350\" height=\"200\">\r\n              <div class=\"desc\">{{movie5}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating &gt; 7+ <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n              </div>\r\n            </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies2\">\r\n    <h3 class=\"title\">Comedy  &nbsp; &gt;</h3>\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\">\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-6.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-6.png\" alt=\"Cinque Terre\" width=\"350\" height=\"200\">\r\n                <div class=\"desc\">{{movie6}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating &gt; 7+ <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-7.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-7.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">{{movie7}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating> 7 <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-8.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-8.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">{{movie8}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating &gt; 7+ <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-9.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-9.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">{{movie9}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating> 7 <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-10.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-10.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">{{movie10}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating> 7 <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies3\">\r\n    <h3 class=\"title\">Action &nbsp; &gt;</h3>\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\">\r\n        <li>\r\n            <div class=\"dropdown\">\r\n                <img src=\"../../assets/images/movies-11.png\" alt=\"Cinque Terre\">\r\n                <div class=\"dropdown-content\">\r\n                <img src=\"../../assets/images/movies-11.png\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\r\n                <div class=\"desc\">{{movie11}} |  &nbsp; Date &gt; 2017 | &nbsp; Rating> 7 <a href=\"\"><i class=\"fas fa-heart\"></i></a></div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n      <li><img src=\"../../assets/images/movies-12.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li><img src=\"../../assets/images/movies-13.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li><img src=\"../../assets/images/movies-14.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li><img src=\"../../assets/images/movies-15.png\" alt=\"\"></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies3\">\r\n  <div class=\"row\">\r\n    <ul id=\"movies1\" class=\"actors\">\r\n      <li><img id=\"actor1\" src=\"../../assets/images/actor-1.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li><img id=\"actor2\" src=\"../../assets/images/actor-2.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li ><img id=\"actor3\" src=\"../../assets/images/actor-3.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li ><img id=\"actor4\" src=\"../../assets/images/actor-4.png\" hspace=\"2\" alt=\"\"></li>\r\n      <li ><img id=\"actor4\" src=\"../../assets/images/actor-5.png\" hspace=\"2\" alt=\"\"></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n</main>\r\n"

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
                movie1: 'Zapped',
                movie2: 'The Annie',
                movie3: 'labRats',
                movie4: 'dayCare',
                movie5: 'The Good Witch',
                movie6: '-> Monster Uni',
                movie7: 'Maleficent',
                movie8: 'Minion3',
                movie9: '->Prom',
                movie10: '->FatLiar'
            }
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

/***/ "./src/app/navbar/navbar-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/navbar/navbar-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logo {\r\n  padding: 0 4%;\r\n  margin-top: .42%;\r\n  font-size: 1.9em;\r\n  font-weight: bold;\r\n  color: red;\r\n  text-decoration: none;\r\n  float: left;\r\n}\r\n\r\n.nav {\r\n  margin-top: 20px;\r\n}\r\n\r\n.search-box {\r\n  position: absolute;\r\n  top: 6%;\r\n  left: 80%;\r\n  transform: translate(-50%, -50%);\r\n  /* padding: 10px; */\r\n}\r\n\r\n.search-box:hover > .search-txt {\r\n  width: 200px;\r\n  padding: 0 6px;\r\n}\r\n\r\n.search-btn{\r\n  color: white;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search-txt {\r\n  border: 2px solid #000000;\r\n  background: #ffffff;\r\n  outline: none;\r\n  float: left;\r\n  padding: 0;\r\n  color: #000;\r\n  font-size: 16px;\r\n  transition: .4s;\r\n  line-height: 40px;\r\n  width: 0;\r\n  height: 30px;\r\n}\r\n\r\na {\r\n  padding: 0 2% 0 0;\r\n  color: #e5e5e5;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a{\r\n  display: block;\r\n  color: red;\r\n  text-align: center;\r\n  padding: 13px;\r\n  text-decoration: none;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.fas {\r\n  color: #000;\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvbmF2YmFyL25hdmJhci1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoiLi4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvIHtcclxuICBwYWRkaW5nOiAwIDQlO1xyXG4gIG1hcmdpbi10b3A6IC40MiU7XHJcbiAgZm9udC1zaXplOiAxLjllbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYlO1xyXG4gIGxlZnQ6IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdHh0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLXR4dCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgcGFkZGluZzogMCAyJSAwIDA7XHJcbiAgY29sb3I6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxubGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5saSBhe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZmEtaGVhcnQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/navbar/navbar-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav>\r\n    <a href=\"/\" class=\"logo\">WESHFLIX</a>\r\n    <ul class=\"nav\">\r\n      <li><a href=\"/\" onclick=\"return false;\" style=\"cursor: default; font-size: 16px; font-weight: bold;\">Kids</a></li>\r\n      <li><a href=\"\" onclick=\"return false;\"><i class=\"fas fa-heart\"></i> Favourites</a><li>\r\n      <li class=\"search-box\">\r\n        <input class=\"search-txt\" type=\"text\" name=\"\" placeholder=\"Titles, people, genre\">\r\n        <a class=\"search-btn\" href=\"#\" (click)=\"searchMovie()\">\r\n          <i class=\"fas fa-search\" ></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</header>\r\n"

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


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.searchMovie = function () {
        console.log();
    };
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