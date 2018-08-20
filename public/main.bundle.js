webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animation__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.animateRouteChange = function (outlet) {
        try {
            return outlet.activatedRoute.snapshot.routeConfig.path;
        }
        catch (e) {
            return '';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(330),
        styles: [__webpack_require__(320)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__router_animation__["a" /* default */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_device_detector__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_app_header__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_app_footer__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_app_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__documents_app_documents__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__otherwork_app_otherwork__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__invest_app_invest__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidebar_app_sidebar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__uw_app_uw__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_10__home_app_home__["a" /* HomeComponent */]
    },
    {
        path: 'work',
        component: __WEBPACK_IMPORTED_MODULE_12__otherwork_app_otherwork__["a" /* OtherWorkComponent */]
    },
    {
        path: 'documents',
        component: __WEBPACK_IMPORTED_MODULE_11__documents_app_documents__["a" /* DocumentsComponent */]
    },
    {
        path: 'uw',
        component: __WEBPACK_IMPORTED_MODULE_15__uw_app_uw__["a" /* UWComponent */]
    },
    {
        path: 'invest',
        component: __WEBPACK_IMPORTED_MODULE_13__invest_app_invest__["a" /* InvestComponent */]
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_app_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_app_footer__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_app_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__documents_app_documents__["a" /* DocumentsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__otherwork_app_otherwork__["a" /* OtherWorkComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sidebar_app_sidebar__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__uw_app_uw__["a" /* UWComponent */],
            __WEBPACK_IMPORTED_MODULE_13__invest_app_invest__["a" /* InvestComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: false }),
            __WEBPACK_IMPORTED_MODULE_6_ng2_device_detector__["a" /* Ng2DeviceDetectorModule */].forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocumentsComponent = (function () {
    function DocumentsComponent() {
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-documents',
        template: __webpack_require__(331),
        styles: [__webpack_require__(321)]
    })
], DocumentsComponent);

//# sourceMappingURL=app.documents.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(332),
        styles: [__webpack_require__(322)]
    })
], FooterComponent);

//# sourceMappingURL=app.footer.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.pageOrders = { '/home': 0, '/work': 1, '/documents': 2, '/uw': 3 };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // The page animations have been moved to the router-outlet.
        // this.router.events.pairwise().filter((e) => e[0] instanceof NavigationEnd && e[1] instanceof NavigationStart).subscribe((e: [NavigationStart, NavigationEnd]) => {
        // 	const isLeft = this.pageOrders[e[0].url] > this.pageOrders[e[1].url];
        // 	$("#mainWrapper").addClass("invisible");
        // 	$("#mainWrapper").removeClass("animated slideInLeft");
        // 	$("#mainWrapper").removeClass("animated slideInRight");
        // 	setTimeout(() => {
        // 	if (isLeft) {
        // 		$("#mainWrapper").removeClass("invisible");
        // 		$("#mainWrapper").addClass("animated slideInLeft").one("animationend", () => {
        // 			$("#mainWrapper").removeClass("animated slideInLeft");
        // 		});
        // 	} else {
        // 		$("#mainWrapper").removeClass("invisible");
        // 		$("#mainWrapper").addClass("animated slideInRight").one("animationend", () => {
        // 			$("#mainWrapper").removeClass("animated slideInRight");
        // 		});
        // 	}
        // 	})
        // });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(333),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=app.header.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(deviceService, router) {
        var _this = this;
        this.deviceService = deviceService;
        this.router = router;
        this.displayWarning = false;
        this.browser = this.deviceService.getDeviceInfo().browser;
        this.version = this.deviceService.getDeviceInfo().browser_version;
        // listen to if page is initially loaded onto home page
        this.router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] && e.id === 1; }).subscribe(function (e) {
            _this.initialLoad = true;
        });
    }
    HomeComponent.prototype.toggleWarning = function () {
        this.displayWarning = !this.displayWarning;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(334),
        styles: [__webpack_require__(324)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* trigger */])('pageLoaded', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.welcome-message', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-20%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.university-intro', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-10%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-picture>img', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.welcome-message', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('2s 1s cubic-bezier(0.55, 0.055, 0.675, 0.19)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0%)' }))),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.university-intro', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('0.75s 1s cubic-bezier(0.55, 0.055, 0.675, 0.19)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0%)' }))),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('0.4s 1s cubic-bezier(0.55, 0.055, 0.675, 0.19)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 }))),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('0.4s 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 }))),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('0.4s 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 }))),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* query */])('.circle-picture>img', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('1s 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 }))),
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=app.home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestComponent = (function () {
    function InvestComponent(http) {
        this.http = http;
        this.investItems = [
            {
                symbol: 'BTC',
                currency: 'bitcoin',
                amount: 0.0449813,
                paid: 431.72,
            },
            {
                symbol: 'ETH',
                currency: 'ethereum',
                amount: 0.62931066,
                paid: 243.64,
            },
            {
                symbol: 'XRP',
                currency: 'ripple',
                amount: 524.97244,
                paid: 140,
            },
            {
                symbol: 'LTC',
                currency: 'litecoin',
                amount: 2.01901875,
                paid: 140,
            },
        ];
        this.totalProfit = 0;
        this.realizedProfit = 174.64;
        this.baseUrl = 'https://api.coinmarketcap.com/v1/ticker/';
    }
    InvestComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all(this.investItems.map(function (item) {
            return _this.http.get("" + _this.baseUrl + item.currency + "/?convert=CAD").map(function (res) { return JSON.parse(res.text()); }).toPromise();
        })).then(function (responses) {
            responses.forEach(function (res, index) {
                var price = res[0].price_cad;
                var value = _this.investItems[index].amount * price;
                var profit = value - _this.investItems[index].paid;
                _this.investItems[index].price = price;
                _this.investItems[index].currValue = value;
                _this.investItems[index].profit = profit;
                _this.totalProfit += profit;
            });
        });
    };
    return InvestComponent;
}());
InvestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-invest',
        template: __webpack_require__(335),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InvestComponent);

var _a;
//# sourceMappingURL=app.invest.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherWorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OtherWorkComponent = (function () {
    function OtherWorkComponent() {
        this.workItems = [
            {
                id: "workTS",
                title: "TribalScale",
                jobTitle: "Agile Software Engineer",
                timeline: "September 2017 - December 2017 (2B)",
                description: "I was able to work on many different projects at TribalScale.\n\nOne of them was a web app which was like SquareSpace but for Alexa skills. I was able to participate in architecture decisions like the database schema. We designed the app to be highly extensible since we expected to support more types of Alexa skills in the future.\n\nAnother project was an Android app for a cruise ship line. I worked on the notifications system and dining reservations. Since it was a legacy app, we were slowly converting it to use better practices.\n\nThe third project was an Alexa skill. I helped polish it up. I also made a mock API to help QA, since the live API made it difficult to test all the different flows.\n\nThe last project was a web page. There was nothing special about it, but we added many accessiblity features.",
                technologies: "Android, Alexa, React, Redux, jQuery, node.js",
                imageUrl: "assets/images/tribalscale.png"
            },
            {
                id: "work1",
                title: "Imagine Communications",
                jobTitle: "Full Stack Web Developer",
                timeline: "January 2017 - April 2017 (2A)",
                description: "I worked on the front-end of a content management web app using AngularJS and LESS. Mostly, I added small features, fixed bugs, and polished the UI. Also, I updated many of the UI's unit tests.\n\nThe app I was working on was part of an application suite. I created a messaging service that could be used in each app in the suite. This service would use web sockets to allow the apps to subscribe to messages. Each app could also publish messages in order to communicate with each other. The messaging service also came with a front-end component to show notifications to the user.",
                technologies: "AngularJS, Typescript, LESS",
                imageUrl: "assets/images/imagine-communications.png"
            },
            {
                id: "work2",
                title: "Metal Trading Co.",
                jobTitle: "Front-end Web Developer",
                timeline: "May 2016 - July 2016 (1B)",
                description: "I took this part-time job during my first co-op for a challenge. I designed and created a prototype for a real-time trading app in Angular2. Angular2 was still in rc at the time so I had to learn and adapt quickly with limited resources. In addition, I wrote the server that facilitated the real-time trading feature using node.js and socket.io.",
                technologies: "Angular2, node.js, Typescript, socket.io",
            },
            {
                id: "work3",
                title: "AAFC",
                jobTitle: "Computer Programmer",
                timeline: "May 2016 - September 2016 (1B)",
                description: "I worked on an graphing application in VB.NET. I added more analytic capabilities to it. If I finished early, I took the initiative to resolve performance issues and refactor the codebase. In addition, I created an application that would automate the testing process. I also updated a scientific model written in Fortran.",
                technologies: "VB.NET, Fortran",
                imageUrl: "assets/images/aafc.jpeg"
            },
        ];
        this.projectItems = [
            [
                {
                    id: "workcoupletbot",
                    title: "Reddit Couplet Bot",
                    description: "A bot that parses Reddit comments with regex for couplets. This bot interprets a couplet as two valid English lines that have the same number of syllables and also rhyme. The algorithms to count syllables and determine rhymes are very difficult to implement, so I used heuristics and APIs.",
                    sourceUrl: 'https://github.com/YifanM/reddit-couplet-bot',
                    technologies: "Python",
                    imageUrl: 'assets/images/couplet-bot.png'
                },
                {
                    id: "worknotehead",
                    title: "Note Heads",
                    description: "A note-taking app that uses \"chat heads\" so notes are easily accessible. Drawing views on the foreground required native code. Although this project is in React Native, there is currently no iOS component.",
                    sourceUrl: 'https://github.com/YifanM/note-heads',
                    technologies: "React Native, Redux",
                    imageUrl: 'assets/images/note-heads.png'
                },
                {
                    id: "workinvenbot",
                    title: "Inventory Slackbot",
                    description: "This is an independent project I started at TribalScale. It interacts with the company's inventory server to allow people to view and request devices through Slack. The node server uses a module to support email interactions as well.",
                    technologies: "node.js",
                    imageUrl: 'assets/images/slackbot.png'
                },
                {
                    id: "work4",
                    title: "This website",
                    description: "My personal website that I built in Angular2. I use it to showcase my past work. Although I use a library for the collapsible work items, the rest is basically made from scratch.",
                    technologies: "Angular2",
                    imageUrl: "assets/images/website1.png",
                    sourceUrl: "https://github.com/YifanM/professional-website-yifan"
                },
            ],
            [
                {
                    id: "work5",
                    title: "Gomoku",
                    description: "A 5-in-a-row board game to introduce myself to React. Supports illegal move detection.",
                    technologies: "React",
                    imageUrl: "assets/images/gomoku.png",
                    sourceUrl: "https://github.com/YifanM/gomoku-react",
                    demoUrl: "assets/gomoku/index.html",
                },
                {
                    id: "work6",
                    title: "YifanM.github.io",
                    description: "This was my first project in web development. I used it as a sandbox to try different web technologies.",
                    technologies: "JQuery",
                    imageUrl: "assets/images/website2.png",
                    sourceUrl: "https://github.com/YifanM/YifanM.github.io",
                    demoUrl: "http://YifanM.github.io"
                },
                {
                    id: "work8",
                    title: "Adoorable",
                    description: "A simple single-player game that has a twist at the end. This is a copy of the game with the same name.",
                    technologies: "HTML5 Canvas, JQuery",
                    imageUrl: "assets/images/adoorable.png",
                    sourceUrl: "https://github.com/YifanM/adoorable",
                    demoUrl: "assets/adoorable/adoorable.html"
                },
                {
                    id: "work7",
                    title: "Battle Pong",
                    description: "My first Android app. It's pong but you can also shoot your opponent.",
                    technologies: "Java, XML, Android",
                    imageUrl: "assets/images/battle-pong.png",
                    sourceUrl: "https://github.com/YifanM/battle-pong"
                },
            ],
            [
                {
                    id: "work9",
                    title: "InDesign",
                    description: "Various InDesign posters.",
                    technologies: "InDesign",
                    imageUrl: "assets/indesign-pdfs/2.jpg"
                },
                {
                    id: "work10",
                    title: "Doodlejump",
                    description: "Doodlejump is a mobile game involving a character controlled through tilting. Some classmates and me recreated it on a LaunchPad using its OLED and the accelerometer.",
                    technologies: "Tiva-C LaunchPad, Energia",
                    imageUrl: "assets/images/doodlejump.jpg",
                    sourceUrl: "https://github.com/YifanM/orbit-demos"
                },
                {
                    id: "work11",
                    title: "Rainmeter",
                    description: "Rainmeter is a platform for desktop customization. My Rainmeter skin shows some simple meters, such as time and weather.",
                    technologies: "Rainmeter, Lua",
                    imageUrl: "assets/images/rainmeter.png"
                },
                {
                    id: "work13",
                    title: "BonaMat",
                    description: "A project I did in Shad Valley.\n\t\t\t\tThe idea was a mat that read the user's body temperature and communicated it to a smart thermostat. The purpose was to adjust room temperature accordingly while the user slept.",
                    technologies: "Arduino",
                    imageUrl: "assets/images/bonamat.jpg"
                },
            ],
        ];
    }
    OtherWorkComponent.prototype.toggleExpanded = function (item) {
        item["isOpen"] = !item["isOpen"];
    };
    return OtherWorkComponent;
}());
OtherWorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-other-work',
        template: __webpack_require__(336),
        styles: [__webpack_require__(326)],
    })
], OtherWorkComponent);

//# sourceMappingURL=app.otherwork.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(47);

var slideLeft = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(0%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(-100%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* group */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* animate */])('1.0s cubic-bezier(0.77, 0, 0.175, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* animate */])('1.0s cubic-bezier(0.77, 0, 0.175, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' })))
    ])
];
var slideRight = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(0%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '86%', transform: 'translateX(100%)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* group */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* animate */])('1.0s cubic-bezier(0.77, 0, 0.175, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }))),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* animate */])('1.0s cubic-bezier(0.77, 0, 0.175, 1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' })))
    ])
];
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('routerAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('home => work', slideRight),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('work => home', slideLeft),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('home => documents', slideRight),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('documents => home', slideLeft),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('home => uw', slideRight),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('uw => home', slideLeft),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('work => documents', slideRight),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('documents => work', slideLeft),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('work => uw', slideRight),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('uw => work', slideLeft),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('documents => uw', slideRight),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('uw => documents', slideLeft)
]);
//# sourceMappingURL=router.animation.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isSidebarOpen = false;
    }
    SidebarComponent.prototype.toggleSidebar = function () {
        var _this = this;
        if (this.isSidebarOpen) {
            $("#sidebar").addClass("animated sidebarSlideOutLeft").one("animationend", function () {
                $("#sidebar").removeClass("animated sidebarSlideOutLeft");
                _this.isSidebarOpen = !_this.isSidebarOpen;
            });
        }
        else {
            this.isSidebarOpen = !this.isSidebarOpen;
            $("#sidebar").addClass("animated sidebarSlideInLeft").one("animationend", function () {
                $(this).removeClass("animated sidebarSlideInLeft");
            });
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(337),
        styles: [__webpack_require__(327)]
    })
], SidebarComponent);

//# sourceMappingURL=app.sidebar.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UWComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UWComponent = (function () {
    function UWComponent() {
        this.courseItems = [
            {
                code: "CS 240",
                name: "Data Structures and Data Management",
                term: "2B",
                description: "Various data structures and their operations",
            },
            {
                code: "CS 247",
                name: "Software Engineering Principles",
                term: "2B",
                description: "Software design, concepts, and patterns",
            },
            {
                code: "CS 241",
                name: "Foundations of Sequential Programs",
                term: "2A",
                description: "Scanning, parsing, type-checking, formal languages, automatons etc. Built assembler and compiler for a subset of C++. MIPS architecture.",
            },
            {
                code: "ECE 222",
                name: "Digital Computers",
                term: "2A",
                description: "Explanations on how computer hardware works. ARM architecture.",
            },
            {
                code: "SE 212",
                name: "Logic and Computation",
                term: "2A",
                description: "Formal logic applied to program correctness.",
            },
            {
                code: "CS 138",
                name: "Introduction to Data Abstraction and Implementation",
                term: "1B",
                description: "Important data structures and various implementations of them in C++.",
            },
            {
                code: "ECE 124",
                name: "Digital Circuits and Systems",
                term: "1B",
                description: "Boolean algebra, synchronous and asynchronous computer circuits.",
            },
            {
                code: "CS 137",
                name: "Programming Principles",
                term: "1A",
                description: "Key concepts of C such as dynamic memory and strings.",
            },
            {
                code: "SE 101",
                name: "Introduction to Methods of Software Engineering",
                term: "1A",
                description: "Light seminars to introduce ideas such as machine learning and encryption.",
            }
        ];
    }
    return UWComponent;
}());
UWComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-uw',
        template: __webpack_require__(338),
        styles: [__webpack_require__(328)]
    })
], UWComponent);

//# sourceMappingURL=app.uw.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#mainWrapper {\r\t/*margin-left: 2rem;*/\r\theight: 86%; /* 8% goes to header, 6% goes to footer */\r\tmax-height: 86%;\r\t-webkit-animation-duration: 0.5s;\r\tanimation-duration: 0.5s;\r}\r\r#mainWrapper>img {\r\tposition: absolute;\r\tz-index: -1;\r\tleft: 0;\r\ttop: 8%;\r\theight: 86%;\r\tmax-height: 86%;\r\twidth: 100%;\r\topacity: 0.1;\r}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#documents .container h2 {\n\tfont-size: 2vmax;\n}\n\n#documents .container h4 {\n\tfont-size: 1.2vmax;\n}\n\n#documents {\n\theight: 100%;\n\tmargin-bottom: 0;\n\tbackground-color: transparent;\n}\n\n#documents .container {\n\theight: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".footer {\n\tborder: none;\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\theight: 6%;\n\tbackground-color: black;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n\tz-index: 50;\n\tbackground-color: var(--main-colour);\n\tfont-weight: 500;\n\tfont-family: 'Nunito Sans', sans-serif;\n}\n\n.footer > div, .footer > a {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tcolor: white;\n\theight: 100%;\n\tpadding: 1rem;\n\ttext-decoration: none;\n\ttransition: all linear 0.2s;\n\tfont-size: 1vmax;\n}\n\n.footer > a:hover {\n\tcolor: var(--secondary-colour);\n}\n\n/*.footer > a:hover,\n.footer > div:hover,\n.footer > a:focus,\n.footer > div:focus {\n\tbackground-color: white;\n\tcolor: var(--main-colour);\n}*/\n\n.footer i {\n\tposition: relative;\n\tmargin-right: 0.8rem;\n\tfont-size: 2vmax;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/*TODO: make responsive*/\n\n.navbar {\n\theight: 8%;\n\tmargin-bottom: 0;\n\tbackground-color: var(--main-colour);\n\tfont-size: 1.3vmax;\n\tfont-weight: 500;\n\tfont-family: 'Nunito Sans', sans-serif;\n}\n\n.navbar-inverse .navbar-nav>li>a {\n\tcolor: white;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\ttransition: all linear 0.2s;\n\theight: 100%;\n\tborder-bottom: 6px solid transparent;\n}\n\n.container-fluid, .nav.navbar-nav {\n\tbackground-color: transparent;\n\theight: 100%;\n}\n\n.nav.navbar-nav>li {\n\tbackground-color: transparent;\n\theight: calc(100% + 6px);\n}\n\n.navbar-inverse .navbar-nav>.active>a,\n.navbar-inverse .navbar-nav>li>a:hover,\n.navbar-inverse .navbar-nav>li>a:focus {\n\tbackground-color: white;\n\tcolor: var(--main-colour);\n\tborder-bottom: 6px solid var(--main-colour);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".home {\n\theight: 100%;\n\tmargin-bottom: 0;\n\tbackground-color: transparent;\n}\n\n.home .text-center {\n\theight: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tpadding: 2% 20%;\n}\n\n.home a {\n\tfont-size: 5rem;\n\tborder: solid 0.1rem;\n}\n\n.home .intro-section {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.home .circle-picture {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n}\n\n.home .circle-picture img {\n\theight: 40vh;\n\twidth: 40vh;\n\tborder-radius: 50%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tbackground-color: var(--main-colour);\n\tborder: 5px solid var(--main-colour);\n}\n\n.home .circle-picture .circle-1 {\n\theight: 20vh;\n\twidth: 20vh;\n\tbackground-color: var(--main-colour);\n\tborder-radius: 50%;\n\tmargin-left: 30%;\n}\n\n.home .circle-picture .circle-2 {\n\theight: 10vh;\n\twidth: 10vh;\n\tbackground-color: var(--main-colour);\n\tborder-radius: 50%;\n\tmargin-right: 25%;\n}\n\n.home .circle-picture .circle-3 {\n\theight: 5vh;\n\twidth: 5vh;\n\tbackground-color: var(--main-colour);\n\tborder-radius: 50%;\n\tmargin-left: 20%;\n}\n\n.text {\n\tfont-size: 1.6vmax;\n\tfont-family: Raleway, sans-serif;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n}\n\n.text .larger-text {\n\tfont-size: 2.8vmax;\n\tfont-family: AvantGarde, sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".table-condensed thead th {\n\tfont-size: 2rem;\n}\n\n.invest-table {\n\tmargin: 2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#work {\n\theight: calc(100% - 0.1rem);\n\tmargin-bottom: 0;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tbackground-color: transparent;\n}\n\n#work img.img-rounded {\n\theight: 35vh;\n\tborder: var(--main-colour) solid 0.15vmax;\n\twidth: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tborder-radius: 0;\n\tbackground-color: var(--main-colour);\n\tborder-radius: 6px;\n}\n\n#work img.img-rounded:hover, #work img.img-rounded:focus {\n\t-o-object-fit: contain !important;\n\t   object-fit: contain !important;\n\tbackground-color: white;\n\tborder: var(--secondary-colour) solid 0.15vmax;\n}\n\n#work h3 {\n\tfont-size: 2vmax;\n\tfont-weight: 550;\n\tmargin: 0;\n\tpadding: 2% 0 2% 0;\n}\n\n#indesign-carousel {\n\tmargin-top: 1rem;\n}\n\n#indesign-carousel img {\n\tborder: none;\n\theight: 50vh;\n}\n\n.work-item {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\twidth: 95%;\n}\n\n.work-item-title {\n\tfont-size: 1vmax;\n}\n\n.collapse b, .collapse-in b, .collapsing b {\n\tfont-size: 0.95vmax;\n}\n\n.collapse .list-group {\n}\n\n.line-space {\n\twhite-space: pre-line;\n}\n\n.lowTopHeader {\n\tmargin-top: 1.5rem;\n}\n\n#work .row {\n\tmargin-bottom: 24px;\n}\n\n#work .list-group {\n\tmargin-top: 1rem;\n\ttext-align: left;\n\tfont-size: 0.8vmax;\n}\n\n#work .collapse, #work .collapse-in, #work .collapsing {\n\twidth: 100%;\n}\n\n#work .collapse .list-group, #work .collapse-in .list-group, #work .collapsing .list-group {\n\tborder: 0.1vmax solid var(--main-colour);\n\tborder-radius: 4px;\n}\n\n#work .col-sm-4, .col-sm-3 {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n#work {\n\tpadding-top: 0 !important;\n}\n\n.externalWorkUrl {\n\tpadding-left: 1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#sidebar {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 6rem;\n\theight: calc(100% - 10rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tz-index: 100;\n}\n\n#sidebar i {\n\tcolor: black;\n\tfont-size: x-large;\n}\n\n#sidebar-content {\n\tpadding: 1rem;\n\tdisplay: none;\n\twidth: 20vw;\n\theight: 100%;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n}\n\n#sidebar-content > img {\n\twidth: 100%;\n\tmargin-bottom: 1rem;\n\tborder: 0.2rem solid;\n\tbox-shadow: 0 0 1rem;\n}\n\n#sidebar-content > h3 {\n\ttext-align: center;\n\tborder-bottom: 0.1rem solid;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 2rem;\n}\n\n#sidebar-content > div {\n\tmargin: 1rem 0;\n}\n\n#sidebar-selector {\n\twidth: 2rem;\n\tbackground: #217dbb;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "#uw {\n\theight: calc(100% - 0.1rem);\n\tmargin-bottom: 0;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tbackground-color: transparent;\n}\n\n#uw h3 {\n\tfont-size: 1.4vmax;\n}\n\n#uw .container-fluid {\n\tmargin: auto;\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n}\n\n.table {\n\tmargin: auto;\n\tdisplay: table;\n\twidth: 80vw;\n\t-webkit-box-flex: 5;\n\t    -ms-flex-positive: 5;\n\t        flex-grow: 5;\n\tmax-height: calc(100% - 10rem);\n\tfont-size: 0.8vmax;\n}\n\n.table > thead {\n\tborder-bottom: gray solid 0.4rem;\n}\n\n.table > tbody > tr {\n\tborder-bottom: gray solid 0.2rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--app-sidebar></app-sidebar-->\n<div id=\"mainWrapper\" [@routerAnimation]=\"animateRouteChange(outlet)\">\n\t<img src=\"assets/images/background.png\">\n\t<router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"documents\">\n\t<div class=\"container text-center\">\n\t\t<div>\n\t  \t<h2> Here is my <a href=\"assets/documents/Resume Yifan Ma.pdf\" target=\"_blank\" download=\"Resume Yifan Ma.pdf\"> resume. </a> </h2>\n\t  \t<h4> For a copy of my transcript or past work terms, please email me instead. </h4>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n\t<a href=\"https://github.com/YifanM\" target=\"_blank\">\n\t\t<i class=\"fa fa-github-square\"></i>\n\t\t/YifanM\n\t</a>\n\t<!-- temporary, eventually will make supported email form/server node.js/nodemailer? -->\n\t<a href=\"mailto:yifan.ma@uwaterloo.ca\">\n\t\t<i class=\"fa fa-envelope-square\"></i>\n\t\tyifan.ma@uwaterloo.ca\n\t</a>\n\t<a href=\"https://www.linkedin.com/in/YifanM\" target=\"_blank\">\n\t\t<i class=\"fa fa-linkedin-square\"></i>\n\t\t/in/YifanM\n\t</a>\n\t<a href=\"tel:647-970-7809\">\n\t\t<i class=\"fa fa-phone-square\"></i>\n\t\t647 970 7809\n\t</a>\n</footer>\n"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n\t<div class=\"container-fluid\" id=\"myNavbar\">\n\t    <ul class=\"nav navbar-nav navbar-right\">\n\t      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/home\">Home</a></li>\n\t      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/work\">Work</a></li>\n\t      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/documents\">Documents</a></li>\n\t      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/uw\">UW</a></li>\n\t    </ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" class=\"home\" [@pageLoaded]=\"initialLoad\">\n\t<div class=\"text-center\">\n\t  <div class=\"intro-section\">\n\t\t  <div class=\"text\">\n\t\t  \t<div class=\"welcome-message\">\n\t\t  \t\t<div>\n\t\t  \t\t\t<span class=\"larger-text\"> Welcome </span> to my website!\n\t\t  \t\t</div>\n\t\t  \t\t<div>\n\t\t  \t\t\tMy name is <span class=\"larger-text\"> Yifan. </span> It's nice to meet you.\n\t\t  \t\t</div>\n\t\t  \t</div>\n\t\t  \t<div class=\"university-intro\">\n\t\t  \t\t<div>\n\t\t  \t\t\tI study <span class=\"larger-text\"> Software Engineering </span> at the <span class=\"larger-text\"> University of Waterloo. </span>\n\t\t  \t\t</div>\n\t\t  \t\t<div>\n\t\t  \t\t\tI'm in my <span class=\"larger-text\"> 3A </span> term.\n\t\t  \t\t</div>\n\t\t  \t</div>\n\t\t  </div>\n\t  \t<div class=\"circle-picture\">\n\t  \t\t<img src=\"assets/images/ILikeIt.JPG\">\n\t  \t\t<div class=\"circle-1\"></div>\n\t  \t\t<div class=\"circle-2\"></div>\n\t  \t\t<div class=\"circle-3\"></div>\n\t  \t</div>\n\t  </div>\n\t  <div *ngIf=\"browser === 'ms-edge' || browser === 'ie'\">\n\t  \t<a (click)=\"toggleWarning()\"> Warning </a>\n\t  \t<div *ngIf=\"displayWarning\">\n\t  \t\t<h4> It seems you are using IE or Edge version {{ version }}.\n\t  \t\t</h4>\n\t  \t\t<h5> I recommend switching to Chrome for the best experience. </h5>\n\t  \t</div>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<h4>\n\tHi there. You aren't supposed to see this (but if you found it, you probably already know that). This is a page I made so I can check how much money I made from crypto.\n</h4>\n<div class='invest-table'>\n\t<table class='table-condensed'>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Symbol</th>\n\t\t\t\t<th>Amount</th>\n\t\t\t\t<th>Paid</th>\n\t\t\t\t<th>Price</th>\n\t\t\t\t<th>Value</th>\n\t\t\t\t<th>Profit</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let item of investItems\">\n\t\t\t\t<th>{{ item.symbol }}</th>\n\t\t\t\t<th>{{ item.amount }}</th>\n\t\t\t\t<th>{{ item.paid }}</th>\n\t\t\t\t<th>{{ item.price }}</th>\n\t\t\t\t<th>{{ item.currValue }}</th>\n\t\t\t\t<th>{{ item.profit }}</th>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<h3>Current Profit</h3>\n\t<div>{{ totalProfit }}</div>\n\t<h3>Previous Profit</h3>\n\t<div>{{ realizedProfit }}</div>\n</div>"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"work\">\n\t<div class=\"container-fluid bg-3 text-center\">\n\t\t<h3>Work Experience</h3>\n\t\t<div class=\"row topRow\">\n\t\t  <div class=\"col-sm-3\" *ngFor='let item of workItems'>\n\t\t  \t<a class=\"work-item company\" [attr.href]=\"'#' + item.id\" data-toggle=\"collapse\" (click)=\"toggleExpanded(item)\">\n\t\t\t  <img class=\"img-responsive img-rounded\" [src]=\"item.imageUrl || 'assets/images/placeholder.jpg'\" />\n\t\t      <div class=\"work-item-title\">\n\t\t      \t{{ item.title }}\n\t\t      \t<i *ngIf=\"item.isOpen\" class=\"fa fa-caret-down\"></i>\n\t\t      \t<i *ngIf=\"!item.isOpen\" class=\"fa fa-caret-up\"></i>\n\t\t      </div>\n\t\t  \t</a>\n\t\t    <div class=\"collapse\" [attr.id]=\"item.id\">\n\t\t    \t<ul class=\"list-group\">\n\t\t    \t\t<li class=\"list-group-item\">\n\t\t    \t\t\t<b>Timeline:</b> {{ item.timeline }}\n\t\t    \t\t</li>\n\t\t    \t\t<li *ngIf=\"item.jobTitle\" class=\"list-group-item\">\n\t\t    \t\t\t<b>Position:</b> {{ item.jobTitle }}\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\">\n\t\t    \t\t\t<b>Description:</b> <span class=\"line-space\"> {{ item.description }} </span>\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\">\n\t\t    \t\t\t<b>Technologies:</b> {{ item.technologies }}\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\" *ngIf=\"item.sourceUrl\">\n\t\t    \t\t\t<b>Source:</b>\n\t\t    \t\t\t<a [attr.href]=\"item.sourceUrl\" target=\"_blank\" class=\"externalWorkUrl\">\n\t\t    \t\t\t\t<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\n\t\t    \t\t\t</a>\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\" *ngIf=\"item.demoUrl\">\n\t\t    \t\t\t<b>Demo:</b>\n\t\t    \t\t\t<a [attr.href]=\"item.demoUrl\" target=\"_blank\" class=\"externalWorkUrl\">\n\t\t    \t\t\t\t<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\n\t\t    \t\t\t</a>\n\t\t    \t\t</li>\n\t\t    \t</ul>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t\t<h3 class=\"lowTopHeader\" id=\"projects\">Projects</h3>\n\t\t<div class=\"row\" *ngFor='let projectRow of projectItems'>\n\t\t  <div class=\"col-sm-3\" *ngFor='let item of projectRow'>\n\t\t  \t<a class=\"work-item\" [attr.href]=\"'#' + item.id\" data-toggle=\"collapse\" (click)=\"toggleExpanded(item)\">\n\t\t\t  <img class=\"img-responsive img-rounded\" [src]=\"item.imageUrl || 'assets/images/placeholder.jpg'\" />\n\t\t      <div class=\"work-item-title\">\n\t\t      \t{{ item.title }}\n\t\t      \t<i *ngIf=\"item.isOpen\" class=\"fa fa-caret-down\"></i>\n\t\t      \t<i *ngIf=\"!item.isOpen\" class=\"fa fa-caret-up\"></i>\n\t\t      </div>\n\t\t  \t</a>\n\t\t    <div class=\"collapse\" [attr.id]=\"item.id\">\n\t\t    \t<ul class=\"list-group\">\n\t\t    \t\t<li class=\"list-group-item\" *ngIf=\"item.timeline\">\n\t\t    \t\t\t<b>Timeline:</b> {{ item.timeline }}\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\">\n\t\t    \t\t\t<b>Description:</b> {{ item.description }}\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\">\n\t\t    \t\t\t<b>Technologies:</b> {{ item.technologies }}\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\" *ngIf=\"item.sourceUrl\">\n\t\t    \t\t\t<b>Source:</b>\n\t\t    \t\t\t<a [attr.href]=\"item.sourceUrl\" target=\"_blank\" class=\"externalWorkUrl\">\n\t\t    \t\t\t\t<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\n\t\t    \t\t\t</a>\n\t\t    \t\t</li>\n\t\t    \t\t<li class=\"list-group-item\" *ngIf=\"item.demoUrl\">\n\t\t    \t\t\t<b>Demo:</b>\n\t\t    \t\t\t<a [attr.href]=\"item.demoUrl\" target=\"_blank\" class=\"externalWorkUrl\">\n\t\t    \t\t\t\t<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\n\t\t    \t\t\t</a>\n\t\t    \t\t</li>\n\t\t    \t</ul>\n\t\t    \t<div *ngIf=\"item.title==='InDesign'\">\n\t\t    \t\t<div id=\"indesign-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t  <div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t\t\t    <div class=\"item active\">\n\t\t\t\t\t\t      <img src=\"assets/indesign-pdfs/1.jpg\" alt=\"Oh no\">\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"item\">\n\t\t\t\t\t\t      <img src=\"assets/indesign-pdfs/2.jpg\" alt=\"Oh no\">\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#indesign-carousel\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#indesign-carousel\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t</div>\n\t\t    \t</div>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\n\t<div id=\"sidebar-content\" [ngClass]=\"{ 'showFlex': isSidebarOpen }\" class=\"jumbotron\">\n\t</div>\n\t<div id=\"sidebar-selector\" (click)=\"toggleSidebar()\">\n\t\t<i *ngIf=\"!isSidebarOpen\" class=\"fa fa-caret-right\"></i>\n\t\t<i *ngIf=\"isSidebarOpen\" class=\"fa fa-caret-left\"></i>\n\t</div>\n</div>\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"uw\">\n\t<div class=\"container-fluid text-center\">\n\t  <h3> The courses relevant to software engineering that I have taken: </h3>\n\t</div>\n\t<table class=\"table\">\n\t  <thead>\n  \t  <tr>\n  \t  \t<th> Code </th>\n  \t  \t<th> Name </th>\n  \t  \t<th> Term </th>\n  \t  \t<th> Description </th>\n  \t  </tr>\n\t  </thead>\n\t  <tbody>\n  \t  <tr *ngFor='let item of courseItems'>\n  \t  \t<td width=\"10%\"> {{ item.code }} </td>\n  \t  \t<td width=\"20%\"> {{ item.name }} </td>\n  \t  \t<td width=\"5%\"> {{ item.term }} </td>\n  \t  \t<td width=\"60%\"> {{ item.description }} </td>\n<!--   \t  \t<td width=\"5%\"> <a *ngIf=\"item.url\" [attr.href]=\"item.url\" target=\"_blank\"><i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a> </td> -->\n  \t  </tr>\n\t  </tbody>\n\t</table>\n</div>\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ })

},[378]);
//# sourceMappingURL=main.bundle.js.map