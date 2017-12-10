webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account-self/account-self.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-self/account-self.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-self works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/account-self/account-self.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSelfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountSelfComponent = (function () {
    function AccountSelfComponent() {
    }
    AccountSelfComponent.prototype.ngOnInit = function () {
    };
    AccountSelfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-self',
            template: __webpack_require__("../../../../../src/app/account-self/account-self.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account-self/account-self.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountSelfComponent);
    return AccountSelfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/accounts/accounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- account_name Column -->  \n    <ng-container matColumnDef=\"account_name\">\n      <mat-header-cell *matHeaderCellDef> Naam </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.account_name}} </mat-cell>\n    </ng-container>\n    \n    <!-- account_role Column -->\n    <ng-container matColumnDef=\"account_role\">\n      <mat-header-cell *matHeaderCellDef> Rol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.account_role}} </mat-cell>\n    </ng-container>\n\n    <!-- email Column -->\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/accounts/accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountsComponent = (function () {
    function AccountsComponent() {
        this.displayedColumns = ['account_name', 'account_role', 'email'];
        this.accountData = [
            { account_name: 'Kees', account_role: 'Manager', email: "Ikbeenkees@email.com" },
            { account_name: 'Yue', account_role: 'Employee', email: 'shewhoismadeoflightharbingerofstars@theastraldeity.com' },
            { account_name: 'Mudgraw', account_role: 'Admin', email: 'Mudgraw@chultanguides.com' }
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](this.accountData);
    }
    AccountsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/accounts/accounts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accounts/accounts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null]}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "a{\n    text-decoration: none;\n}\n.all{\n    height: 100vh;\n}\n    .nav-content{\n        height: 96.7%;\n    }\nheader{\n    background-color: rgb(100,100,100);\n}\nnav{\n    background-color: rgb(150,150,150);\n    padding-left: 30px;\n}\n    nav ul{\n        list-style-type: none;\n        padding:0;\n        width: 100%;\n    }\n    nav ul>li{\n        background-color: rgb(180,180,180);\n        padding: 0;\n        margin: 3px 0px 3px 0px;\n        width: 90%;\n    }\n        nav ul>li:hover{\n            background-color: rgb(210,210,210);\n        }\n        nav ul>li>a{\n            padding: 10px;\n        }\n        nav ul>li.selected{\n            background-color: rgb(250,250,250);\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n            width: 100%;\n        }\nmain{\n    background-color: rgb(250,250,250);\n}\n.cnt{\n    display: block;\n    font-size: 1rem;\n    max-width: 100%;\n    overflow: auto;\n  }\n    .cnt-nt{\n        display: block;\n        max-width: 100%;\n        overflow: auto;\n    }\n    img.cnt, button.cnt{\n        width: 100%;\n    }\n\n\n    .container,.container-fluid{\n        font-size: 0.7rem;\n    }\n    .cnt{\n        font-size: 0.7rem;\n      }\n    \n    @media (min-width: 576px) {\n        .container,.container-fluid{\n            font-size: 0.75rem;\n        }\n        .cnt{\n            font-size: 0.75rem;\n          }\n      }\n      \n      @media (min-width: 768px) {\n        .container,.container-fluid{\n            font-size: 0.8rem;\n        }\n        .cnt{\n            font-size: 0.8rem;\n          }\n      }\n      \n      @media (min-width: 992px) {\n        .container,.container-fluid{\n            font-size: 0.85rem;\n        }\n        .cnt{\n            font-size: 0.85rem;\n          }\n      }\n      \n      @media (min-width: 1200px) {\n        .container,.container-fluid{\n            font-size: 0.9rem;\n        }\n        .cnt{\n            font-size: 0.9rem;\n          }\n      }\n\n/*sub pages*/\n.content{\n    height: 100%;\n    background-color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n      <main class=\"col-sm-10\">\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_list__ = __webpack_require__("../../../../../src/app/page-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Webedu-mockup';
        this.links = __WEBPACK_IMPORTED_MODULE_1__page_list__["a" /* ADMIN_PAGES */];
        this.baseLinks = __WEBPACK_IMPORTED_MODULE_1__page_list__["b" /* BASE_PAGES */];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onLink = function (link) {
        this.selectedLink = link;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hours_hours_component__ = __webpack_require__("../../../../../src/app/hours/hours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sprints_sprints_component__ = __webpack_require__("../../../../../src/app/sprints/sprints.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userstories_userstories_component__ = __webpack_require__("../../../../../src/app/userstories/userstories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__accounts_accounts_component__ = __webpack_require__("../../../../../src/app/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__customers_customers_component__ = __webpack_require__("../../../../../src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_data_component__ = __webpack_require__("../../../../../src/app/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manual_manual_component__ = __webpack_require__("../../../../../src/app/manual/manual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_self_account_self_component__ = __webpack_require__("../../../../../src/app/account-self/account-self.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__hours_hours_component__["a" /* HoursComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sprints_sprints_component__["a" /* SprintsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__userstories_userstories_component__["a" /* UserstoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__accounts_accounts_component__["a" /* AccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__customers_customers_component__["a" /* CustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__data_data_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_15__manual_manual_component__["a" /* ManualComponent */],
                __WEBPACK_IMPORTED_MODULE_16__account_self_account_self_component__["a" /* AccountSelfComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatInputModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__services_employee_service__["a" /* EmployeeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/customers/customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- customer_name Column -->  \n    <ng-container matColumnDef=\"customer_name\">\n      <mat-header-cell *matHeaderCellDef> Klant </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.customer_name}} </mat-cell>\n    </ng-container>\n    \n    <!-- customer_description Column -->\n    <ng-container matColumnDef=\"customer_description\">\n      <mat-header-cell *matHeaderCellDef> Klantomschrijving </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.customer_description}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersComponent = (function () {
    function CustomersComponent() {
        this.displayedColumns = ['customer_name', 'customer_description'];
        this.customerData = [
            { customer_name: 'Bob', customer_description: 'DO NOT TRADE AWAY.' },
            { customer_name: 'Meowmel', customer_description: 'Meowmeowmeowmeowwww...' },
            { customer_name: 'Terratomere', customer_description: 'This does lotsa damage.' }
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](this.customerData);
    }
    CustomersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customers',
            template: __webpack_require__("../../../../../src/app/customers/customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data/data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  data works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataComponent = (function () {
    function DataComponent() {
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data',
            template: __webpack_require__("../../../../../src/app/data/data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data/data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null]}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "a{\n    text-decoration: none;\n}\n.all{\n    height: 100vh;\n}\n    .nav-content{\n        height: 96.7%;\n    }\nheader{\n    background-color: rgb(100,100,100);\n}\nnav{\n    background-color: rgb(150,150,150);\n    padding-left: 30px;\n}\n    nav ul{\n        list-style-type: none;\n        padding:0;\n        width: 100%;\n    }\n    nav ul>li{\n        background-color: rgb(180,180,180);\n        padding: 0;\n        margin: 3px 0px 3px 0px;\n        width: 90%;\n    }\n        nav ul>li:hover{\n            background-color: rgb(210,210,210);\n        }\n        nav ul>li>a{\n            padding: 10px;\n        }\n        nav ul>li.selected{\n            background-color: rgb(250,250,250);\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n            width: 100%;\n        }\nmain{\n    background-color: rgb(250,250,250);\n}\n.cnt{\n    display: block;\n    font-size: 1rem;\n    max-width: 100%;\n    overflow: auto;\n  }\n    .cnt-nt{\n        display: block;\n        max-width: 100%;\n        overflow: auto;\n    }\n    img.cnt, button.cnt{\n        width: 100%;\n    }\n\n\n    .container,.container-fluid{\n        font-size: 0.7rem;\n    }\n    .cnt{\n        font-size: 0.7rem;\n      }\n    \n    @media (min-width: 576px) {\n        .container,.container-fluid{\n            font-size: 0.75rem;\n        }\n        .cnt{\n            font-size: 0.75rem;\n          }\n      }\n      \n      @media (min-width: 768px) {\n        .container,.container-fluid{\n            font-size: 0.8rem;\n        }\n        .cnt{\n            font-size: 0.8rem;\n          }\n      }\n      \n      @media (min-width: 992px) {\n        .container,.container-fluid{\n            font-size: 0.85rem;\n        }\n        .cnt{\n            font-size: 0.85rem;\n          }\n      }\n      \n      @media (min-width: 1200px) {\n        .container,.container-fluid{\n            font-size: 0.9rem;\n        }\n        .cnt{\n            font-size: 0.9rem;\n          }\n      }\n\n/*sub pages*/\n.content{\n    height: 100%;\n    background-color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid all\">\n    <header class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"row align-items-center justify-content-end\">\n            <div class=\"col-lg-3 col-xl-4\"><h2>Hello Anon</h2></div>\n            <div class=\"col-md-3 col-xl-2\">\n                <a routerLink=\"/{{baseLinks[3].name}}\" class=\"cnt btn btn-info\" role=\"button\">\n                    {{baseLinks[3].displayName}}\n                </a>\n            </div>\n            <div class=\"col-md-3 col-xl-2\">\n                <a routerLink=\"/{{baseLinks[2].name}}\" class=\"cnt btn btn-info\" role=\"button\">\n                    {{baseLinks[2].displayName}}\n                </a>\n            </div>\n            <div class=\"col-md-3 col-xl-2\">\n                    <a routerLink=\"/{{baseLinks[0].name}}\" class=\"cnt btn btn-info\" role=\"button\">\n                        {{baseLinks[0].displayName}}\n                    </a>\n                </div>\n        </div>\n      </div>\n    </header>\n    <div class=\"row nav-content\">\n      <nav class=\"col-sm-2\">\n        <div class=\"row\">\n            <ul>\n                <li *ngFor=\"let link of links\" [class.selected]=\"link === selectedLink\"\n                (click)=\"onLink(link)\" class=\"col-sm-12\">\n                    <a routerLink=\"/{{link.name}}\" class=\"cnt pagelink mat-button\">\n                            {{link.displayName}}\n                    </a>\n                </li>\n                <button class=\"mat-button\" mat-button=\"\"><span class=\"mat-button-wrapper\">Click me!</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>\n            </ul>\n        </div>\n        <div class=\"row\">\n            <ul>\n                <li class=\"col-sm-12 btn\">\n                    <a routerLink=\"/{{baseLinks[3].name}}\" class=\"cnt pagelink\">\n                        {{baseLinks[3].displayName}}\n                    </a>\n                </li>\n                <li class=\"col-sm-12 btn\">\n                    <a routerLink=\"/{{baseLinks[2].name}}\" class=\"cnt pagelink\">\n                        {{baseLinks[2].displayName}}\n                    </a>\n                </li>\n                <li class=\"col-sm-12 btn\">\n                    <a routerLink=\"/{{baseLinks[0].name}}\" class=\"cnt pagelink\">\n                        {{baseLinks[0].displayName}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n      </nav>\n      <main class=\"col-sm-10\">\n          <router-outlet></router-outlet>\n      </main>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_list__ = __webpack_require__("../../../../../src/app/page-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'Webedu-mockup';
        this.links = __WEBPACK_IMPORTED_MODULE_1__page_list__["a" /* ADMIN_PAGES */];
        this.baseLinks = __WEBPACK_IMPORTED_MODULE_1__page_list__["b" /* BASE_PAGES */];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onLink = function (link) {
        this.selectedLink = link;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hours/hours.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hours/hours.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- project_name Column -->  \n    <ng-container matColumnDef=\"project_name\">\n      <mat-header-cell *matHeaderCellDef> Project </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.project_name}} </mat-cell>\n    </ng-container>\n    \n    <!-- sprint_name Column -->\n    <ng-container matColumnDef=\"sprint_name\">\n      <mat-header-cell *matHeaderCellDef> Sprint </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.sprint_name}} </mat-cell>\n    </ng-container>\n    \n    <!-- userstory Column -->\n    <ng-container matColumnDef=\"userstory\">\n      <mat-header-cell *matHeaderCellDef> Userstory </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.userstory}} </mat-cell>\n    </ng-container>\n\n    <!-- starttime Column -->\n    <ng-container matColumnDef=\"starttime\">\n      <mat-header-cell *matHeaderCellDef> Starttijd </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.starttime}} </mat-cell>\n    </ng-container>\n\n    <!-- endtime Column -->\n    <ng-container matColumnDef=\"endtime\">\n      <mat-header-cell *matHeaderCellDef> Eindtijd </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.endtime}} </mat-cell>\n    </ng-container>\n\n    <!-- exception Column -->\n    <ng-container matColumnDef=\"exception\">\n      <mat-header-cell *matHeaderCellDef> Uitzondering </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.exception}} </mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/hours/hours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HoursComponent = (function () {
    function HoursComponent() {
        this.displayedColumns = ['project_name', 'sprint_name', 'userstory', 'starttime', 'endtime', 'exception'];
        this.entryData = [
            { project_name: 'Zed', sprint_name: "Sprint 1", userstory: 'Als kat kan ik dingen van kasten afduwen', starttime: '00:00', endtime: '00:00', exception: false },
            { project_name: 'Zoe', sprint_name: "Sprint 2", userstory: 'Als persoon kan ik niet Boris zijn', starttime: '07:00', endtime: '08:15', exception: true },
            { project_name: 'Kittan', sprint_name: "Sprint swaggerino", userstory: 'Als levend ding kan ik sterven', starttime: '17:00', endtime: '20:00', exception: false }
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](this.entryData);
    }
    HoursComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    HoursComponent.prototype.ngOnInit = function () {
    };
    HoursComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hours',
            template: __webpack_require__("../../../../../src/app/hours/hours.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hours/hours.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HoursComponent);
    return HoursComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form{\n    margin: 50px auto;\n    width: 300px;\n    \n}\n\n.defaultForm-email{\n    width: 40px;\n}\n\n\n.form-control{\n    margin: 20px;\n}\n\n.btn.btn-default.waves-light:hover{\n    \n    box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24), 0px 17px 50px 0px rgba(0,0,0,0.19);\n}\n\n.btn.btn-default.waves-light{\n    padding: 10px 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n   \n  <!-- <input type=\"text\" #ref>\n  <input type=\"text\" #pas>\n  <button (click)=\"checkLogin(ref.value, pas.value)\">Search</button> -->\n  \n   \n  <main class=\"form\">\n    <img src=\"assets/images/web.png\" style = \"display: block; margin-left:auto; margin-right:auto;\"/>\n\n        <h1>Welcome {{ currentEmployee }}</h1>\n\n       <i class=\"fa fa-envelope prefix grey-text\"></i>\n       <input type=\"text\" id=\"defaultForm-email\" class=\"form-control\" mdbActive placeholder=\"Email\" #email>\n  \n       <i class=\"fa fa-lock prefix grey-text\"></i>\n       <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control\" mdbActive placeholder=\"Password\" #password>\n  \n       <button class=\"btn btn-default waves-light\" (click)=\"checkLogin(email.value, password.value)\">Login</button>\n\n  </main>\n  "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, employeeService, auth) {
        this.router = router;
        this.employeeService = employeeService;
        this.auth = auth;
    }
    LoginComponent.prototype.checkLogin = function (email, password) {
        this.currentEmployee = this.employeeService.login(email, password);
        console.log(this.auth.getAuthorization());
        this.router.navigate(['']);
    };
    LoginComponent.prototype.validUser = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manual/manual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manual/manual.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manual works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manual/manual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManualComponent = (function () {
    function ManualComponent() {
    }
    ManualComponent.prototype.ngOnInit = function () {
    };
    ManualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manual',
            template: __webpack_require__("../../../../../src/app/manual/manual.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manual/manual.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualComponent);
    return ManualComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/ProjectModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project(id, name, description, is_deleted, customer_fk) {
        this._projectId = id;
        this._projectName = name;
        this._projectDescription = description;
        this._projectIsDeleted = is_deleted;
        this._projectCustomerFk = customer_fk;
    }
    Object.defineProperty(Project.prototype, "projectId", {
        get: function () {
            return this._projectId;
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectName", {
        get: function () {
            return this._projectName;
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectDescription", {
        get: function () {
            return this._projectDescription;
        },
        set: function (value) {
            this._projectDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectIsDeleted", {
        get: function () {
            return this._projectIsDeleted;
        },
        set: function (value) {
            this._projectIsDeleted = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectCustomerFk", {
        get: function () {
            return this._projectCustomerFk;
        },
        set: function (value) {
            this._projectCustomerFk = value;
        },
        enumerable: true,
        configurable: true
    });
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/page-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BASE_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_PAGES; });
/* unused harmony export MANAGEMENT_PAGES */
/* unused harmony export USER_PAGES */
var BASE_PAGES = [
    { id: 1, name: 'login', displayName: 'Uitloggen' },
    { id: 2, name: 'dashboard', displayName: 'Dashboard' },
    { id: 3, name: 'account-self', displayName: 'Account gegevens' },
    { id: 4, name: 'manual', displayName: 'Handleiding' }
];
var ADMIN_PAGES = [
    { id: 5, name: 'hour-management', displayName: 'Uren beheren' },
    { id: 6, name: 'project-management', displayName: 'Projecten beheren' },
    { id: 7, name: 'sprint-management', displayName: 'Sprints beheren' },
    { id: 8, name: 'userstory-management', displayName: 'Userstories beheren' },
    { id: 9, name: 'account-management', displayName: 'Accounts beheren' },
    { id: 10, name: 'customer-management', displayName: 'Klanten beheren' },
    { id: 11, name: 'data-management', displayName: 'Data beheren' }
];
var MANAGEMENT_PAGES = [
    { id: 5, name: 'hour-management', displayName: 'Uren beheren/goedkeuren' },
    { id: 6, name: 'project-management', displayName: 'Projectoverzicht' },
    { id: 7, name: 'sprint-management', displayName: 'Sprintoverzicht' },
    { id: 8, name: 'userstory-management', displayName: 'Userstoryoverzicht' },
    { id: 9, name: 'account-management', displayName: 'Accountoverzicht' },
    { id: 10, name: 'customer-management', displayName: 'Klantoverzicht' },
    { id: 11, name: 'data-management', displayName: 'Data beheren' }
];
var USER_PAGES = [
    { id: 5, name: 'hour-management', displayName: 'Uren invullen/beheren' },
    { id: 6, name: 'project-management', displayName: 'Projectoverzicht' },
    { id: 7, name: 'sprint-management', displayName: 'Sprintoverzicht' },
    { id: 8, name: 'userstory-management', displayName: 'Userstoryoverzicht' }
];


/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"projectName\">\n      <mat-header-cell *matHeaderCellDef> Project Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let Project\"> {{Project.projectName}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"projectDescription\">\n      <mat-header-cell *matHeaderCellDef> Project Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let Project\"> {{Project.projectDescription}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"projectStatus\">\n      <mat-header-cell *matHeaderCellDef> Project Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let Project\"> {{Project.projectIsDeleted}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ProjectModel__ = __webpack_require__("../../../../../src/app/models/ProjectModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.displayedColumns = ['projectName', 'projectDescription', 'projectStatus'];
        this.loadData().then(function (data) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](data);
        }, function (error) { return console.log(error.SessionNotCreatedError); });
    }
    //  MatTableDataSource function
    ProjectsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  Return promise to use to fill data
    //  !! IMPORTANT THING TO NOTE IS WE HAVE TO WAIT UNTIL WE COMPLETE THE DATA REQUEST BEFORE SHOWING !!
    ProjectsComponent.prototype.loadData = function () {
        return this.projectService.getAllProjects()
            .toPromise()
            .then(function (res) { return res; })
            .then(function (projects) { return projects.map(function (project) {
            return new __WEBPACK_IMPORTED_MODULE_3__models_ProjectModel__["a" /* Project */](project.projectId, project.projectName, project.projectDescription, project.projectIsDeleted, project.projectCustomerFk);
        }); });
    };
    ProjectsComponent.prototype.ngOnInit = function () { };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_self_account_self_component__ = __webpack_require__("../../../../../src/app/account-self/account-self.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_accounts_component__ = __webpack_require__("../../../../../src/app/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_customers_component__ = __webpack_require__("../../../../../src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_data_component__ = __webpack_require__("../../../../../src/app/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hours_hours_component__ = __webpack_require__("../../../../../src/app/hours/hours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manual_manual_component__ = __webpack_require__("../../../../../src/app/manual/manual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sprints_sprints_component__ = __webpack_require__("../../../../../src/app/sprints/sprints.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userstories_userstories_component__ = __webpack_require__("../../../../../src/app/userstories/userstories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_list__ = __webpack_require__("../../../../../src/app/page-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["b" /* BASE_PAGES */][1].name, component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["b" /* BASE_PAGES */][2].name, component: __WEBPACK_IMPORTED_MODULE_2__account_self_account_self_component__["a" /* AccountSelfComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["b" /* BASE_PAGES */][3].name, component: __WEBPACK_IMPORTED_MODULE_8__manual_manual_component__["a" /* ManualComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][0].name, component: __WEBPACK_IMPORTED_MODULE_6__hours_hours_component__["a" /* HoursComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][1].name, component: __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][2].name, component: __WEBPACK_IMPORTED_MODULE_10__sprints_sprints_component__["a" /* SprintsComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][3].name, component: __WEBPACK_IMPORTED_MODULE_11__userstories_userstories_component__["a" /* UserstoriesComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][4].name, component: __WEBPACK_IMPORTED_MODULE_3__accounts_accounts_component__["a" /* AccountsComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][5].name, component: __WEBPACK_IMPORTED_MODULE_4__customers_customers_component__["a" /* CustomersComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__page_list__["a" /* ADMIN_PAGES */][6].name, component: __WEBPACK_IMPORTED_MODULE_5__data_data_component__["a" /* DataComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.setAuth = function (email, password) {
        this.emailAddress = email;
        this.password = password;
    };
    AuthService.prototype.getAuthorization = function () {
        var authorizationString = sessionStorage.getItem('authorization');
        console.log(authorizationString);
        if (authorizationString === null) {
            authorizationString = localStorage.getItem('authorization');
        }
        if (authorizationString !== null) {
            var authorization = JSON.parse(authorizationString);
            this.emailAddress = authorization['emailAddress'];
            this.password = authorization['password'];
        }
        return authorizationString;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_list__ = __webpack_require__("../../../../../src/app/page-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeService = (function () {
    function EmployeeService(auth, router, http) {
        this.auth = auth;
        this.router = router;
        this.http = http;
    }
    EmployeeService.prototype.login = function (email, password) {
        var _this = this;
        var activeEmployee = "";
        var loginEncoded = btoa(email + ":" + password);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http___["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
        //  const options = new RequestOptions();
        this.http.get("/api/login/", { headers: headers }).subscribe(function (res) {
            console.log(res.json());
            for (var _i = 0, _a = res.json(); _i < _a.length; _i++) {
                var employee = _a[_i];
                if (employee.employeeEmail == email && employee.employeePassword == password) {
                    var authorization = {
                        email: email,
                        password: password
                    };
                    var auth = JSON.stringify(authorization);
                    var storage = false ? localStorage : sessionStorage;
                    storage.setItem('authorization', auth);
                    _this.naam = employee.employeeFirstname;
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__page_list__["b" /* BASE_PAGES */][1].name]);
                }
            }
        });
        return "Niet gelukt";
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router___["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http___["b" /* Http */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
    }
    ProjectService.prototype.getAllProjects = function () {
        return this.http.get(this.ALL_PROJECT_JSON);
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/sprints/sprints.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sprints/sprints.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Sprint_name Column -->  \n    <ng-container matColumnDef=\"sprint_name\">\n      <mat-header-cell *matHeaderCellDef> Sprint </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.sprint_name}} </mat-cell>\n    </ng-container>\n\n    <!-- Project_name Column -->\n    <ng-container matColumnDef=\"project_name\">\n      <mat-header-cell *matHeaderCellDef> Project </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.project_name}} </mat-cell>\n    </ng-container>\n\n    <!-- Sprint_description Column -->\n    <ng-container matColumnDef=\"sprint_description\">\n      <mat-header-cell *matHeaderCellDef> Sprint Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.sprint_description}} </mat-cell>\n    </ng-container>\n\n    <!-- sprint_start_date Column -->\n    <ng-container matColumnDef=\"sprint_start_date\">\n      <mat-header-cell *matHeaderCellDef> Start date </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.sprint_start_date}} </mat-cell>\n    </ng-container>\n\n    <!-- Sprint_end_date Column -->\n    <ng-container matColumnDef=\"sprint_end_date\">\n      <mat-header-cell *matHeaderCellDef> End date </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.sprint_end_date}} </mat-cell>\n    </ng-container>    \n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sprints/sprints.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SprintsComponent = (function () {
    function SprintsComponent() {
        this.displayedColumns = ['sprint_name', 'project_name', 'sprint_description', 'sprint_start_date', 'sprint_end_date'];
        this.sprintData = [
            { sprint_name: 'Sprint 1', project_name: 'Actus', sprint_description: 'Sprint number 1', sprint_start_date: "21-12-2017", sprint_end_date: '28-12-2017' },
            { sprint_name: 'Sprint 2', project_name: 'Actus', sprint_description: 'Sprint number 2', sprint_start_date: "28-12-2017", sprint_end_date: '5-01-2018' },
            { sprint_name: 'Testing', project_name: 'Kitten!', sprint_description: 'This one is just for tests.', sprint_start_date: "Need to change this to datetype", sprint_end_date: '5-01-2018' },
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](this.sprintData);
    }
    SprintsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    SprintsComponent.prototype.ngOnInit = function () {
    };
    SprintsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sprints',
            template: __webpack_require__("../../../../../src/app/sprints/sprints.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sprints/sprints.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SprintsComponent);
    return SprintsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userstories/userstories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userstories/userstories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Userstory_number Column -->  \n    <ng-container matColumnDef=\"userstory_number\">\n      <mat-header-cell *matHeaderCellDef> Userstory nummer </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.userstory_number}} </mat-cell>\n    </ng-container>\n    \n    <!-- userstory_description Column -->\n    <ng-container matColumnDef=\"userstory_description\">\n      <mat-header-cell *matHeaderCellDef> Userstory beschrijving </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.userstory_description}} </mat-cell>\n    </ng-container>\n    \n    <!-- sprint_name Column -->\n    <ng-container matColumnDef=\"sprint_name\">\n      <mat-header-cell *matHeaderCellDef> Sprint </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.sprint_name}} </mat-cell>\n    </ng-container>\n\n    <!-- project_name Column -->\n    <ng-container matColumnDef=\"project_name\">\n      <mat-header-cell *matHeaderCellDef> Project </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.project_name}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/userstories/userstories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserstoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserstoriesComponent = (function () {
    function UserstoriesComponent() {
        this.displayedColumns = ['userstory_number', 'userstory_description', 'sprint_name', 'project_name'];
        this.userstoryData = [
            { userstory_number: 32, userstory_description: "Als weeb kan ik Fox Hime spelen.", sprint_name: 'Sprint 1', project_name: 'Actus' },
            { userstory_number: 15, userstory_description: "Als gebruiker kan ik mijzelf Steakholder maken.", sprint_name: 'Sprint 6', project_name: 'Zoeswaggerino' },
            { userstory_number: 10, userstory_description: "Als administrator kan ik coole OP stuff doen.", sprint_name: 'Subsprint 1.5', project_name: 'This one is just for tests.' },
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](this.userstoryData);
    }
    UserstoriesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    UserstoriesComponent.prototype.ngOnInit = function () {
    };
    UserstoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userstories',
            template: __webpack_require__("../../../../../src/app/userstories/userstories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userstories/userstories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserstoriesComponent);
    return UserstoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map