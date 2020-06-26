(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\"\n  style=\"background-image: url('assets/images/top-bar-back.jpg'); background-repeat: no-repeat; background-size: 100%; position: fixed;  z-index: 100;width: 100%;\">\n  <div class=\"container px-0\">\n    <a class=\"navbar-brand\" style=\"color: white; \">\n      CDN SYSTEM\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n      aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a>\n              CDN SYSTEM\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Navbar items -->\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <button class=\"btn btn-sm\" mat-button  (click)=\"scrollToAnchor('home', 100)\"><a\n            class=\"nav-link btn-sm\" style=\"color: white; text-decoration: none; padding-top: 5px; padding-bottom: 5px\">HOME</a></button>\n        </li>\n        <li class=\"nav-item\">\n          <button class=\"btn btn-sm\" mat-button (click)=\"scrollToAnchor('about-sec', 100)\"><a\n            class=\"nav-link btn-sm\" style=\"color: white; text-decoration: none;padding-top: 5px; padding-bottom: 5px\">ABOUT</a></button>\n        </li>\n        <li class=\"nav-item\">\n          <button mat-button (click)=\"scrollToAnchor('contact-sec', 100)\"><a\n            class=\"nav-link btn-sm\" style=\"color: white; text-decoration: none; padding-top: 5px; padding-bottom: 5px\">CONTACT</a></button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!--NAVBAR SECTION END-->\n<div class=\"home-sec\" id=\"home\">\n  <br>\n  <div class=\"overlay\">\n    <div class=\"container\">\n      <div class=\"row text-center \">\n        <div class=\"col-lg-12  col-md-12 col-sm-12\">\n          <div class=\"flexslider set-flexi\" id=\"main-section\">\n            <ul class=\"slides move-me\">\n              <!-- Slider 01 -->\n              <li>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-lg-5 col-md-6\">\n                    <h2 class=\"text-white\">Welcome!</h2>\n                    <p class=\"text-lead text-light\">Complete Developer Network System</p>\n                  </div>\n                </div>\n                <h1>HIGH SECURITY AND PRIVACY</h1>\n                <a href=\"#\" class=\"btn btn-success btn-lg\" (click)=\"onClickAdminModal()\">\n                  LOGIN AS ADMIN\n                </a>\n              </li>\n              <!-- End Slider 01 -->\n              <!-- Slider 02 -->\n              <li>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-lg-5 col-md-6\">\n                    <h2 class=\"text-white\">Welcome!</h2>\n                    <p class=\"text-lead text-light\">Complete Developer Network System</p>\n                  </div>\n                </div>\n                <h1>FAST AND RELIABLE</h1>\n                <a href=\"#\" class=\"btn btn-danger btn-lg\" (click)=\"onClickAdminModal()\">\n                  LOGIN AS ADMIN\n                </a>\n              </li>\n              <!-- End Slider 02 -->\n              <!-- Slider 03 -->\n              <li>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-lg-5 col-md-6\">\n                    <h2 class=\"text-white\">Welcome!</h2>\n                    <p class=\"text-lead text-light\">Complete Developer Network System</p>\n                  </div>\n                </div>\n                <h1>ALL IN ONE</h1>\n                <a href=\"#\" class=\"btn btn-info btn-lg\" (click)=\"onClickAdminModal()\">\n                  LOGIN AS ADMIN\n                </a>\n              </li>\n              <!-- End Slider 03 -->\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!--HOME SECTION END-->\n\n<!--HOME SECTION TAG LINE END-->\n<div id=\"about-sec\" class=\"container set-pad\">\n  <br>\n  <div class=\"row text-center\">\n    <div class=\"col-lg-12 col-lg-offset-2 col-md-12 col-sm-12 col-md-offset-2 col-sm-offset-2\">\n      <h1 data-scroll-reveal=\"enter from the bottom after 0.2s\" class=\"header-line\">ABOUT</h1>\n      <p data-scroll-reveal=\"enter from the bottom after 0.3s\">\n        Complete Developer Network (CDN) System is all about list of freelancers where they could have a directory of contact get people for their job.\n      </p>\n    </div>\n\n  </div>\n</div>\n<!-- ABOUT SECTION END-->\n<div id=\"contact-sec\">\n  <br>\n  <div class=\"container set-pad\">\n    <div class=\"row text-center\">\n      <div class=\"col-lg-12 col-lg-offset-2 col-md-12 col-sm-12 col-md-offset-2 col-sm-offset-2\">\n        <h1 data-scroll-reveal=\"enter from the bottom after 0.1s\" class=\"header-line\">CONTACT US</h1>\n        <p data-scroll-reveal=\"enter from the bottom after 0.3s\">\n          Our main office is located in Malaysia and we welcome your comments and enquiries any time.\n        </p>\n      </div>\n\n    </div>\n    <!--/.HEADER LINE END-->\n\n    <div class=\"row\">\n      <div class=\"col-lg-4  col-md-4 col-sm-4\" data-scroll-reveal=\"enter from the bottom after 0.4s\">\n        <div class=\"faculty-div\">\n          <h3>Address</h3>\n          <hr />\n          <p>\n            Complete Developer Network <br>\n            50000 Kuala Lumpur <br>\n            Malaysia\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4  col-md-4 col-sm-4\" data-scroll-reveal=\"enter from the bottom after 0.5s\">\n        <div class=\"faculty-div\">\n          <h3>Contact No</h3>\n          <hr />\n          <p>\n            Telephone : +603 8000 1234 <br>\n            Fax : +603 8000 1234 <br>\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4  col-md-4 col-sm-4\" data-scroll-reveal=\"enter from the bottom after 0.6s\">\n        <div class=\"faculty-div\">\n          <h3>Email</h3>\n          <hr />\n          <p>\n            Sales Inquiries: marketing@cdn.com.my <br>\n            Customer Service/Technical Support: customerservice@cdn.com.my\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- CONTACT SECTION END-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" id=\"ModalEmailVerify\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"modal-header\">\n          <span>\n            <h5 class=\"modal-title\">Login as Admin</h5>\n          </span>\n          <i class=\"ni ni-key-25 text-green\"></i>\n        </div>\n        <hr class=\"my-2\" />\n        <div class=\"modal-body\">\n          <div class=\"card-body px-lg-2 py-lg-2\">\n            <div class=\"text-center text-muted mb-2\">\n              <small>Sign in with credentials</small>\n            </div>\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\n                </div>\n                <input class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" type=\"text\">\n              </div>\n              <span style=\"color: red; font-size: small\" *ngIf=\"username.errors\">Username is required.</span>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" formControlName=\"password\" placeholder=\"******\" type=\"password\">\n              </div>\n              <span style=\"color: red; font-size: small\" *ngIf=\"password.errors\"> Password is required. </span>\n            </div>\n            <p class=\"text-center\" style=\"color:red; font-size: small\" *ngIf=\"loginError\"> {{loginError}}</p>\n            <div>\n              <mat-progress-bar mode=\"indeterminate\" *ngIf=\"IsProgressBarLogin\"></mat-progress-bar>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCloseHandled()\">Cancel</button>\n              &nbsp;\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom\" style=\"background-color: #3f51b5; margin-top: 10px\">\n  <span style=\"text-align: center; font-size: small; color: white\">Copyright &#169; 2020. All\n    Rights Reserved. | Terms of Use and Privacy Policy </span>\n  <div style=\"float: right\">\n    <span style=\"font-size: small; color: white\">{{appversion}}</span>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js ***!
  \***************************************************************************************/
/*! exports provided: FontAwesomeModule, FaIconComponent, FaIconService, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeModule", function() { return FontAwesomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconComponent", function() { return FaIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconService", function() { return FaIconService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersComponent", function() { return FaLayersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersTextComponent", function() { return FaLayersTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersCounterComponent", function() { return FaLayersCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FaLayersTextBaseComponent; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Returns if is IconLookup or not.
  @type {?} */
const isIconLookup = (i) => {
    return (/** @type {?} */ (i)).prefix !== undefined && (/** @type {?} */ (i)).iconName !== undefined;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Normalizing icon spec.
  @type {?} */
const faNormalizeIconSpec = (iconSpec, defaultPrefix = 'fas') => {
    if (typeof iconSpec === 'undefined' || iconSpec === null) {
        return null;
    }
    if (isIconLookup(iconSpec)) {
        return iconSpec;
    }
    if (Array.isArray(iconSpec) && (/** @type {?} */ (iconSpec)).length === 2) {
        return { prefix: iconSpec[0], iconName: iconSpec[1] };
    }
    if (typeof iconSpec === 'string') {
        return { prefix: defaultPrefix, iconName: iconSpec };
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const objectWithKey = (key, value) => {
    return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? { [key]: value } : {};
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Fontawesome class list.
 * Returns classes array by props.
  @type {?} */
const faClassList = (props) => {
    /** @type {?} */
    const classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-inverse': props.inverse,
        'fa-layers-counter': props.counter,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
        [`fa-${props.size}`]: props.size !== null,
        [`fa-rotate-${props.rotate}`]: props.rotate !== null,
        [`fa-pull-${props.pull}`]: props.pull !== null
    };
    return Object.keys(classes)
        .map(key => (classes[key] ? key : null))
        .filter(key => key);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const faWarnIfIconHtmlMissing = (iconObj, iconSpec) => {
    if (iconSpec && !iconObj) {
        console.error(`FontAwesome: Could not find icon with iconName=${iconSpec.iconName} and prefix=${iconSpec.prefix}`);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const faWarnIfIconSpecMissing = (iconSpec) => {
    if (!iconSpec) {
        console.error('FontAwesome: Could not find icon. ' +
            `It looks like you've provided a null or undefined icon object to this component.`);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const faNotFoundIconHtml = `<svg class="${_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].replacementClass}" viewBox="0 0 448 512"></svg><!--icon not found-->`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FaIconService {
    constructor() {
        this.defaultPrefix = 'fas';
    }
}
FaIconService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ FaIconService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FaIconService_Factory() { return new FaIconService(); }, token: FaIconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome icon.
 */
class FaIconComponent {
    /**
     * @param {?} sanitizer
     * @param {?} iconService
     */
    constructor(sanitizer, iconService) {
        this.sanitizer = sanitizer;
        this.iconService = iconService;
        this.classes = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes) {
            this.updateIconSpec();
            this.updateParams();
            this.updateIcon();
            this.renderIcon();
        }
    }
    /**
     * Updating icon spec.
     * @return {?}
     */
    updateIconSpec() {
        this.iconSpec = faNormalizeIconSpec(this.iconProp, this.iconService.defaultPrefix);
    }
    /**
     * Updating params by component props.
     * @return {?}
     */
    updateParams() {
        /** @type {?} */
        const classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        const classes = objectWithKey('classes', [...faClassList(classOpts), ...this.classes]);
        /** @type {?} */
        const mask = objectWithKey('mask', faNormalizeIconSpec(this.mask, this.iconService.defaultPrefix));
        /** @type {?} */
        const parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        const transform = objectWithKey('transform', parsedTransform);
        this.params = Object.assign({ title: this.title }, transform, classes, mask, { styles: this.styles, symbol: this.symbol });
    }
    /**
     * Updating icon by params and icon spec.
     * @return {?}
     */
    updateIcon() {
        this.icon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(this.iconSpec, this.params);
    }
    /**
     * Rendering icon.
     * @return {?}
     */
    renderIcon() {
        faWarnIfIconSpecMissing(this.iconSpec);
        faWarnIfIconHtmlMissing(this.icon, this.iconSpec);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join('\n') : faNotFoundIconHtml);
    }
}
FaIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'fa-icon',
                template: ``,
                host: {
                    class: 'ng-fa-icon',
                }
            }] }
];
/** @nocollapse */
FaIconComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: FaIconService }
];
FaIconComponent.propDecorators = {
    iconProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['icon',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    symbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    renderedIconHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['innerHTML',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers.
 */
class FaLayersComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('size' in changes) {
            if (changes["size"].currentValue != null) {
                this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes["size"].currentValue}`);
            }
            if (changes["size"].previousValue != null) {
                this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes["size"].previousValue}`);
            }
        }
    }
}
FaLayersComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'fa-layers',
                template: `<ng-content select="fa-icon, fa-layers-text, fa-layers-counter"></ng-content>`
            }] }
];
/** @nocollapse */
FaLayersComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FaLayersComponent.propDecorators = {
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.fa-fw',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Warns if parent component not existing.
  @type {?} */
const faWarnIfParentNotExist = (parent, parentName, childName) => {
    if (!parent) {
        console.error(`FontAwesome: ${childName} should be used as child of ${parentName} only.`);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FaLayersTextBaseComponent {
    /**
     * @param {?} parent
     * @param {?} sanitizer
     */
    constructor(parent, sanitizer) {
        this.parent = parent;
        this.sanitizer = sanitizer;
        this.classes = [];
        faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes) {
            this.updateParams();
            this.updateContent();
        }
    }
    /**
     * Updating content by params and content.
     * @return {?}
     */
    updateContent() {
        this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
    }
}
FaLayersTextBaseComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
/** @nocollapse */
FaLayersTextBaseComponent.ctorParameters = () => [
    { type: FaLayersComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => FaLayersComponent),] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
FaLayersTextBaseComponent.propDecorators = {
    renderedHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['innerHTML',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers text.
 */
class FaLayersTextComponent extends FaLayersTextBaseComponent {
    /**
     * Updating params by component props.
     * @return {?}
     */
    updateParams() {
        /** @type {?} */
        const classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        const classes = objectWithKey('classes', [...faClassList(classOpts), ...this.classes]);
        /** @type {?} */
        const parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        const transform = objectWithKey('transform', parsedTransform);
        this.params = Object.assign({}, transform, classes, { title: this.title, styles: this.styles });
    }
    /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    renderFontawesomeObject(content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["text"])(content, params);
    }
}
FaLayersTextComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'fa-layers-text',
                template: '',
                host: {
                    class: 'ng-fa-layers-text'
                }
            }] }
];
FaLayersTextComponent.propDecorators = {
    spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers counter.
 */
class FaLayersCounterComponent extends FaLayersTextBaseComponent {
    /**
     * Updating params by component props.
     * @return {?}
     */
    updateParams() {
        this.params = {
            title: this.title,
            classes: this.classes,
            styles: this.styles,
        };
    }
    /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    renderFontawesomeObject(content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["counter"])(content, params);
    }
}
FaLayersCounterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'fa-layers-counter',
                template: '',
                host: {
                    class: 'ng-fa-layers-counter'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FontAwesomeModule {
}
FontAwesomeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [
                    FaIconComponent,
                    FaLayersComponent,
                    FaLayersTextComponent,
                    FaLayersCounterComponent,
                ],
                exports: [
                    FaIconComponent,
                    FaLayersComponent,
                    FaLayersTextComponent,
                    FaLayersCounterComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mb250YXdlc29tZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL3V0aWxzL2lzLWljb24tbG9va3VwLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9ub3JtYWxpemUtaWNvbi1zcGVjLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9vYmplY3Qtd2l0aC1rZXlzLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24taHRtbC1taXNzaW5nLnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtaWNvbi1zcGVjLW1pc3NpbmcudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC9lcnJvcnMvbm90LWZvdW5kLWljb24taHRtbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvaWNvbi9pY29uLnNlcnZpY2UudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2xheWVycy9sYXllcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtcGFyZW50LW5vdC1leGlzdC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvbGF5ZXJzL2xheWVycy10ZXh0LWJhc2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLXRleHQuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLWNvdW50ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9mb250YXdlc29tZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJY29uTG9va3VwLCBJY29uUHJvcH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuLyoqXG4gKiBSZXR1cm5zIGlmIGlzIEljb25Mb29rdXAgb3Igbm90LlxuICovXG5leHBvcnQgY29uc3QgaXNJY29uTG9va3VwID0gKGk6IEljb25Qcm9wKTogaSBpcyBJY29uTG9va3VwID0+IHtcbiAgcmV0dXJuICg8SWNvbkxvb2t1cD5pKS5wcmVmaXggIT09IHVuZGVmaW5lZCAmJiAoPEljb25Mb29rdXA+aSkuaWNvbk5hbWUgIT09IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBJY29uTG9va3VwLCBJY29uUHJvcCwgSWNvblByZWZpeCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGlzSWNvbkxvb2t1cCB9IGZyb20gJy4vaXMtaWNvbi1sb29rdXAudXRpbCc7XG5cbi8qKlxuICogTm9ybWFsaXppbmcgaWNvbiBzcGVjLlxuICovXG5leHBvcnQgY29uc3QgZmFOb3JtYWxpemVJY29uU3BlYyA9IChpY29uU3BlYzogSWNvblByb3AsIGRlZmF1bHRQcmVmaXg6IEljb25QcmVmaXggPSAnZmFzJyk6IEljb25Mb29rdXAgPT4ge1xuXG4gIGlmICh0eXBlb2YgaWNvblNwZWMgPT09ICd1bmRlZmluZWQnIHx8IGljb25TcGVjID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNJY29uTG9va3VwKGljb25TcGVjKSkge1xuICAgIHJldHVybiBpY29uU3BlYztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGljb25TcGVjKSAmJiAoPEFycmF5PHN0cmluZz4+aWNvblNwZWMpLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiB7IHByZWZpeDogaWNvblNwZWNbMF0sIGljb25OYW1lOiBpY29uU3BlY1sxXSB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpY29uU3BlYyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IGRlZmF1bHRQcmVmaXgsIGljb25OYW1lOiBpY29uU3BlYyB9O1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IG9iamVjdFdpdGhLZXkgPSA8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKToge1tpZDogc3RyaW5nXTogVH0gPT4ge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHx8ICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUpID8geyBba2V5XTogdmFsdWUgfSA6IHt9O1xufTtcbiIsImltcG9ydCB7IEZhUHJvcHMgfSBmcm9tICcuLi9tb2RlbHMvcHJvcHMubW9kZWwnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGNsYXNzIGxpc3QuXG4gKiBSZXR1cm5zIGNsYXNzZXMgYXJyYXkgYnkgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBmYUNsYXNzTGlzdCA9IChwcm9wczogRmFQcm9wcyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAnZmEtc3Bpbic6IHByb3BzLnNwaW4sXG4gICAgJ2ZhLXB1bHNlJzogcHJvcHMucHVsc2UsXG4gICAgJ2ZhLWZ3JzogcHJvcHMuZml4ZWRXaWR0aCxcbiAgICAnZmEtYm9yZGVyJzogcHJvcHMuYm9yZGVyLFxuICAgICdmYS1saSc6IHByb3BzLmxpc3RJdGVtLFxuICAgICdmYS1pbnZlcnNlJzogcHJvcHMuaW52ZXJzZSxcbiAgICAnZmEtbGF5ZXJzLWNvdW50ZXInOiBwcm9wcy5jb3VudGVyLFxuICAgICdmYS1mbGlwLWhvcml6b250YWwnOiBwcm9wcy5mbGlwID09PSAnaG9yaXpvbnRhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnLFxuICAgICdmYS1mbGlwLXZlcnRpY2FsJzogcHJvcHMuZmxpcCA9PT0gJ3ZlcnRpY2FsJyB8fCBwcm9wcy5mbGlwID09PSAnYm90aCcsXG4gICAgW2BmYS0ke3Byb3BzLnNpemV9YF06IHByb3BzLnNpemUgIT09IG51bGwsXG4gICAgW2BmYS1yb3RhdGUtJHtwcm9wcy5yb3RhdGV9YF06IHByb3BzLnJvdGF0ZSAhPT0gbnVsbCxcbiAgICBbYGZhLXB1bGwtJHtwcm9wcy5wdWxsfWBdOiBwcm9wcy5wdWxsICE9PSBudWxsXG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpXG4gICAgLm1hcChrZXkgPT4gKGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGwpKVxuICAgIC5maWx0ZXIoa2V5ID0+IGtleSk7XG59O1xuIiwiaW1wb3J0IHsgSWNvbiwgSWNvbkxvb2t1cCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYVdhcm5JZkljb25IdG1sTWlzc2luZyA9IChpY29uT2JqOiBJY29uLCBpY29uU3BlYzogSWNvbkxvb2t1cCkgPT4ge1xuICBpZiAoaWNvblNwZWMgJiYgIWljb25PYmopIHtcbiAgICBjb25zb2xlLmVycm9yKGBGb250QXdlc29tZTogQ291bGQgbm90IGZpbmQgaWNvbiB3aXRoIGljb25OYW1lPSR7aWNvblNwZWMuaWNvbk5hbWV9IGFuZCBwcmVmaXg9JHtpY29uU3BlYy5wcmVmaXh9YCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBJY29uTG9va3VwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuZXhwb3J0IGNvbnN0IGZhV2FybklmSWNvblNwZWNNaXNzaW5nID0gKGljb25TcGVjOiBJY29uTG9va3VwKSA9PiB7XG4gIGlmICghaWNvblNwZWMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGb250QXdlc29tZTogQ291bGQgbm90IGZpbmQgaWNvbi4gJyArXG4gICAgICBgSXQgbG9va3MgbGlrZSB5b3UndmUgcHJvdmlkZWQgYSBudWxsIG9yIHVuZGVmaW5lZCBpY29uIG9iamVjdCB0byB0aGlzIGNvbXBvbmVudC5gKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYU5vdEZvdW5kSWNvbkh0bWwgPSBgPHN2ZyBjbGFzcz1cIiR7Y29uZmlnLnJlcGxhY2VtZW50Q2xhc3N9XCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PC9zdmc+PCEtLWljb24gbm90IGZvdW5kLS0+YDtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25QcmVmaXggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBGYUljb25TZXJ2aWNlIHtcbiAgZGVmYXVsdFByZWZpeDogSWNvblByZWZpeCA9ICdmYXMnO1xufVxuIiwiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGljb24sXG4gIEljb24sXG4gIHBhcnNlLFxuICBTdHlsZXMsXG4gIFB1bGxQcm9wLFxuICBJY29uUHJvcCxcbiAgU2l6ZVByb3AsXG4gIEZsaXBQcm9wLFxuICBGYVN5bWJvbCxcbiAgVHJhbnNmb3JtLFxuICBJY29uUGFyYW1zLFxuICBJY29uTG9va3VwLFxuICBSb3RhdGVQcm9wXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IGZhTm9ybWFsaXplSWNvblNwZWMgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvbm9ybWFsaXplLWljb24tc3BlYy51dGlsJztcbmltcG9ydCB7IEZhUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3Byb3BzLm1vZGVsJztcbmltcG9ydCB7IG9iamVjdFdpdGhLZXkgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvb2JqZWN0LXdpdGgta2V5cy51dGlsJztcbmltcG9ydCB7IGZhQ2xhc3NMaXN0IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL2NsYXNzbGlzdC51dGlsJztcbmltcG9ydCB7IGZhV2FybklmSWNvbkh0bWxNaXNzaW5nIH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24taHRtbC1taXNzaW5nJztcbmltcG9ydCB7IGZhV2FybklmSWNvblNwZWNNaXNzaW5nIH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24tc3BlYy1taXNzaW5nJztcbmltcG9ydCB7IGZhTm90Rm91bmRJY29uSHRtbCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvbm90LWZvdW5kLWljb24taHRtbCc7XG5pbXBvcnQgeyBGYUljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGljb24uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWljb24nLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25nLWZhLWljb24nLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEZhSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdpY29uJykgaWNvblByb3A6IEljb25Qcm9wO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgc3Bpbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1bHNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzaz86IEljb25Qcm9wO1xuICBASW5wdXQoKSBzdHlsZXM/OiBTdHlsZXM7XG4gIEBJbnB1dCgpIGZsaXA/OiBGbGlwUHJvcDtcbiAgQElucHV0KCkgc2l6ZT86IFNpemVQcm9wO1xuICBASW5wdXQoKSBwdWxsPzogUHVsbFByb3A7XG4gIEBJbnB1dCgpIGJvcmRlcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGludmVyc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBzeW1ib2w/OiBGYVN5bWJvbDtcbiAgQElucHV0KCkgbGlzdEl0ZW0/OiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGU/OiBSb3RhdGVQcm9wO1xuICBASW5wdXQoKSBmaXhlZFdpZHRoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xhc3Nlcz86IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIHRyYW5zZm9ybT86IHN0cmluZyB8IFRyYW5zZm9ybTtcblxuICBwdWJsaWMgaWNvbjogSWNvbjtcblxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpXG4gIHB1YmxpYyByZW5kZXJlZEljb25IVE1MOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGljb25TZXJ2aWNlOiBGYUljb25TZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgcGFyYW1zOiBJY29uUGFyYW1zO1xuICBwcml2YXRlIGljb25TcGVjOiBJY29uTG9va3VwO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVJY29uU3BlYygpO1xuICAgICAgdGhpcy51cGRhdGVQYXJhbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgICAgdGhpcy5yZW5kZXJJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIGljb24gc3BlYy5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlSWNvblNwZWMoKSB7XG4gICAgdGhpcy5pY29uU3BlYyA9IGZhTm9ybWFsaXplSWNvblNwZWModGhpcy5pY29uUHJvcCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0UHJlZml4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVQYXJhbXMoKSB7XG4gICAgY29uc3QgY2xhc3NPcHRzOiBGYVByb3BzID0ge1xuICAgICAgZmxpcDogdGhpcy5mbGlwLFxuICAgICAgc3BpbjogdGhpcy5zcGluLFxuICAgICAgcHVsc2U6IHRoaXMucHVsc2UsXG4gICAgICBib3JkZXI6IHRoaXMuYm9yZGVyLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgbGlzdEl0ZW06IHRoaXMubGlzdEl0ZW0sXG4gICAgICBzaXplOiB0aGlzLnNpemUgfHwgbnVsbCxcbiAgICAgIHB1bGw6IHRoaXMucHVsbCB8fCBudWxsLFxuICAgICAgcm90YXRlOiB0aGlzLnJvdGF0ZSB8fCBudWxsLFxuICAgICAgZml4ZWRXaWR0aDogdGhpcy5maXhlZFdpZHRoXG4gICAgfTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBvYmplY3RXaXRoS2V5KCdjbGFzc2VzJywgWy4uLmZhQ2xhc3NMaXN0KGNsYXNzT3B0cyksIC4uLnRoaXMuY2xhc3Nlc10pO1xuICAgIGNvbnN0IG1hc2sgPSBvYmplY3RXaXRoS2V5KCdtYXNrJywgZmFOb3JtYWxpemVJY29uU3BlYyh0aGlzLm1hc2ssIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFByZWZpeCkpO1xuICAgIGNvbnN0IHBhcnNlZFRyYW5zZm9ybSA9IHR5cGVvZiB0aGlzLnRyYW5zZm9ybSA9PT0gJ3N0cmluZycgPyBwYXJzZS50cmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pIDogdGhpcy50cmFuc2Zvcm07XG4gICAgY29uc3QgdHJhbnNmb3JtID0gb2JqZWN0V2l0aEtleSgndHJhbnNmb3JtJywgcGFyc2VkVHJhbnNmb3JtKTtcblxuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAuLi50cmFuc2Zvcm0sXG4gICAgICAuLi5jbGFzc2VzLFxuICAgICAgLi4ubWFzayxcbiAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBpY29uIGJ5IHBhcmFtcyBhbmQgaWNvbiBzcGVjLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCkge1xuICAgIHRoaXMuaWNvbiA9IGljb24odGhpcy5pY29uU3BlYywgdGhpcy5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyBpY29uLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJJY29uKCkge1xuICAgIGZhV2FybklmSWNvblNwZWNNaXNzaW5nKHRoaXMuaWNvblNwZWMpO1xuICAgIGZhV2FybklmSWNvbkh0bWxNaXNzaW5nKHRoaXMuaWNvbiwgdGhpcy5pY29uU3BlYyk7XG5cbiAgICB0aGlzLnJlbmRlcmVkSWNvbkhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuaWNvbiA/IHRoaXMuaWNvbi5odG1sLmpvaW4oJ1xcbicpIDogZmFOb3RGb3VuZEljb25IdG1sXG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l6ZVByb3AgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmEtbGF5ZXJzJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJmYS1pY29uLCBmYS1sYXllcnMtdGV4dCwgZmEtbGF5ZXJzLWNvdW50ZXJcIj48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZhLWZ3JylcbiAgZml4ZWRXaWR0aD86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZmEtbGF5ZXJzJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdzaXplJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5zaXplLmN1cnJlbnRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBmYS0ke2NoYW5nZXMuc2l6ZS5jdXJyZW50VmFsdWV9YCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlcy5zaXplLnByZXZpb3VzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZmEtJHtjaGFuZ2VzLnNpemUucHJldmlvdXNWYWx1ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogV2FybnMgaWYgcGFyZW50IGNvbXBvbmVudCBub3QgZXhpc3RpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBmYVdhcm5JZlBhcmVudE5vdEV4aXN0ID0gKHBhcmVudDogYW55LCBwYXJlbnROYW1lOiBzdHJpbmcsIGNoaWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghcGFyZW50KSB7XG4gICAgY29uc29sZS5lcnJvcihgRm9udEF3ZXNvbWU6ICR7Y2hpbGROYW1lfSBzaG91bGQgYmUgdXNlZCBhcyBjaGlsZCBvZiAke3BhcmVudE5hbWV9IG9ubHkuYCk7XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFN0eWxlcyxcbiAgRm9udGF3ZXNvbWVPYmplY3QsXG4gIFRleHRQYXJhbXNcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgRmFMYXllcnNDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFXYXJuSWZQYXJlbnROb3RFeGlzdCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1wYXJlbnQtbm90LWV4aXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhTGF5ZXJzVGV4dEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJylcbiAgcHVibGljIHJlbmRlcmVkSFRNTDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhTGF5ZXJzQ29tcG9uZW50KSkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnQ6IEZhTGF5ZXJzQ29tcG9uZW50LFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuICAgIGZhV2FybklmUGFyZW50Tm90RXhpc3QodGhpcy5wYXJlbnQsICdGYUxheWVyc0NvbXBvbmVudCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBUZXh0UGFyYW1zO1xuXG4gIEBJbnB1dCgpIHByb3RlY3RlZCBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb3RlY3RlZCB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgcHJvdGVjdGVkIHN0eWxlcz86IFN0eWxlcztcbiAgQElucHV0KCkgcHJvdGVjdGVkIGNsYXNzZXM/OiBzdHJpbmdbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVQYXJhbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHVwZGF0ZVBhcmFtcygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIEZvbnRhd2Vzb21lT2JqZWN0IHVzaW5nIHRoZSBjb250ZW50IGFuZCBwYXJhbXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJhbXM/OiBUZXh0UGFyYW1zKTogRm9udGF3ZXNvbWVPYmplY3Q7XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIGNvbnRlbnQgYnkgcGFyYW1zIGFuZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVDb250ZW50KCkge1xuICAgIHRoaXMucmVuZGVyZWRIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXG4gICAgICB0aGlzLnJlbmRlckZvbnRhd2Vzb21lT2JqZWN0KHRoaXMuY29udGVudCB8fCAnJywgdGhpcy5wYXJhbXMpLmh0bWwuam9pbignXFxuJylcbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdGV4dCxcbiAgcGFyc2UsXG4gIFRleHQsXG4gIFRleHRQYXJhbXMsXG4gIFNpemVQcm9wLFxuICBGbGlwUHJvcCxcbiAgUHVsbFByb3AsXG4gIFRyYW5zZm9ybSxcbiAgUm90YXRlUHJvcFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGYVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgeyBvYmplY3RXaXRoS2V5IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL29iamVjdC13aXRoLWtleXMudXRpbCc7XG5pbXBvcnQgeyBmYUNsYXNzTGlzdCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbCc7XG5cbi8qKlxuICogRm9udGF3ZXNvbWUgbGF5ZXJzIHRleHQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWxheWVycy10ZXh0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZy1mYS1sYXllcnMtdGV4dCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGYUxheWVyc1RleHRDb21wb25lbnQgZXh0ZW5kcyBGYUxheWVyc1RleHRCYXNlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzcGluPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVsc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBmbGlwPzogRmxpcFByb3A7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcbiAgQElucHV0KCkgcHVsbD86IFB1bGxQcm9wO1xuICBASW5wdXQoKSBib3JkZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBpbnZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdEl0ZW0/OiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGU/OiBSb3RhdGVQcm9wO1xuICBASW5wdXQoKSBmaXhlZFdpZHRoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJhbnNmb3JtPzogc3RyaW5nIHwgVHJhbnNmb3JtO1xuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhcmFtcygpIHtcbiAgICBjb25zdCBjbGFzc09wdHM6IEZhUHJvcHMgPSB7XG4gICAgICBmbGlwOiB0aGlzLmZsaXAsXG4gICAgICBzcGluOiB0aGlzLnNwaW4sXG4gICAgICBwdWxzZTogdGhpcy5wdWxzZSxcbiAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBsaXN0SXRlbTogdGhpcy5saXN0SXRlbSxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSB8fCBudWxsLFxuICAgICAgcHVsbDogdGhpcy5wdWxsIHx8IG51bGwsXG4gICAgICByb3RhdGU6IHRoaXMucm90YXRlIHx8IG51bGwsXG4gICAgICBmaXhlZFdpZHRoOiB0aGlzLmZpeGVkV2lkdGhcbiAgICB9O1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IG9iamVjdFdpdGhLZXkoJ2NsYXNzZXMnLCBbLi4uZmFDbGFzc0xpc3QoY2xhc3NPcHRzKSwgLi4udGhpcy5jbGFzc2VzXSk7XG4gICAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gdHlwZW9mIHRoaXMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSkgOiB0aGlzLnRyYW5zZm9ybTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCBwYXJzZWRUcmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICAuLi50cmFuc2Zvcm0sXG4gICAgICAuLi5jbGFzc2VzLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJGb250YXdlc29tZU9iamVjdChjb250ZW50OiBzdHJpbmcsIHBhcmFtcz86IFRleHRQYXJhbXMpIHtcbiAgICByZXR1cm4gdGV4dChjb250ZW50LCBwYXJhbXMpO1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBjb3VudGVyLFxuICBDb3VudGVyLFxuICBDb3VudGVyUGFyYW1zLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycyBjb3VudGVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYS1sYXllcnMtY291bnRlcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmctZmEtbGF5ZXJzLWNvdW50ZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50IGV4dGVuZHMgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIHBhcmFtcyBieSBjb21wb25lbnQgcHJvcHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlUGFyYW1zKCkge1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJhbXM/OiBDb3VudGVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvdW50ZXIoY29udGVudCwgcGFyYW1zKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZhTGF5ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYUxheWVyc1RleHRDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy9sYXllcnMtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLWNvdW50ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZhSWNvbkNvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvbXBvbmVudCxcbiAgICBGYUxheWVyc1RleHRDb21wb25lbnQsXG4gICAgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmFJY29uQ29tcG9uZW50LFxuICAgIEZhTGF5ZXJzQ29tcG9uZW50LFxuICAgIEZhTGF5ZXJzVGV4dENvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvdW50ZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvbnRBd2Vzb21lTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLQSxNQUFhLFlBQVksR0FBRyxDQUFDLENBQVc7SUFDdEMsT0FBTyxtQkFBYSxDQUFDLEdBQUUsTUFBTSxLQUFLLFNBQVMsSUFBSSxtQkFBYSxDQUFDLEdBQUUsUUFBUSxLQUFLLFNBQVMsQ0FBQztDQUN2RixDQUFDOzs7Ozs7QUNMRjs7O0FBS0EsTUFBYSxtQkFBbUIsR0FBRyxDQUFDLFFBQWtCLEVBQUUsZ0JBQTRCLEtBQUs7SUFFdkYsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtRQUN4RCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDMUIsT0FBTyxRQUFRLENBQUM7S0FDakI7SUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQWdCLFFBQVEsR0FBRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxD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

/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");




const routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainRoutingModule);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: 'Open Sans', sans-serif;\n  line-height: 30px;\n  font-size: 14px; }\n\n.set-pad {\n  padding-top: 35px; }\n\n.set-row-pad {\n  padding-top: 30px;\n  padding-bottom: 50px; }\n\n/*=====================================\r\n  NAVBAR STYLES \r\n    ===================================*/\n\n.logo-custom {\n  max-height: 40px; }\n\n#menu {\n  background-color: #1c2b4b;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 1px;\n  min-height: 70px; }\n\n.navbar-inverse {\n  border-color: transparent; }\n\n.navbar-inverse .navbar-nav > li > a, .navbar-inverse .navbar-nav > li > a:hover {\n  color: #FFF;\n  padding: 22px 10px; }\n\n/*=====================================\r\n  HOME STYLES \r\n    ===================================*/\n\n.home-sec {\n  padding-top: 10px;\n  padding-bottom: 60px;\n  background: url('slide1.png') no-repeat center center;\n  padding: 0;\n  background-size: cover;\n  color: #fff;\n  background-attachment: fixed; }\n\n.home-sec .overlay {\n  background: rgba(38, 57, 88, 0.89);\n  min-height: 520px; }\n\n.home-sec h1 {\n  color: #fff;\n  font-weight: 900;\n  font-size: 50px;\n  text-transform: uppercase;\n  padding-bottom: 35px; }\n\n.home-sec h3 {\n  text-transform: uppercase; }\n\n.set-flexi {\n  -o-box-shadow: 0 1px 4px rgba(0, 0, 0, 0);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0);\n  background-color: transparent;\n  border: 0px solid #000;\n  padding-top: 120px; }\n\n.flex-control-nav {\n  display: none !important; }\n\n.set-flexi a {\n  margin: 5px; }\n\n/*=====================================\r\n  TAG LINE STYLES \r\n    ===================================*/\n\n.tag-line {\n  background: #E9E9E9;\n  color: #000; }\n\n.tag-line h2 {\n  font-size: 20px;\n  font-weight: 900;\n  padding: 5px 10px 10px 5px;\n  color: #005E5A; }\n\n.tag-line h2 > i {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n/*=====================================\r\n  HEADER LINE STYLES \r\n    ===================================*/\n\n.header-line {\n  font-weight: 900;\n  font-size: 25px;\n  padding-bottom: 5px;\n  padding-top: 25px;\n  color: #000; }\n\nh1::after {\n  content: \" \";\n  border: solid 2px #2f9484;\n  display: block;\n  width: 200px;\n  margin: 12px auto; }\n\n/*=====================================\r\n  ABOUT STYLES \r\n  ===================================*/\n\n.about-div {\n  padding: 30px; }\n\n.icon-round-border {\n  border: 10px double #1A94C4;\n  color: #2f9484;\n  text-align: center;\n  padding-top: 15px;\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.3s; }\n\n.icon-round-border:hover {\n  color: #fff;\n  border: 10px double #fff;\n  background-color: #1A94C4;\n  transition: 0.3s; }\n\n.about-div hr {\n  border: 1px solid #1A94C4; }\n\n.about-div h3 {\n  font-size: 25px;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.about-div p {\n  padding-top: 10px; }\n\n.btn-set {\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  margin-bottom: 20px; }\n\n/*=====================================\r\n  FACULTY STYLES \r\n  ===================================*/\n\n#faculty-sec {\n  background-color: #000;\n  color: #fff; }\n\n#faculty-sec .header-line {\n  color: #fff; }\n\n.faculty-div h4 {\n  line-height: 30px;\n  font-weight: 700; }\n\n.faculty-div {\n  padding: 30px; }\n\n.faculty-div hr {\n  border: 1px solid #1A94C4; }\n\n.faculty-div h3 {\n  font-size: 25px;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.faculty-div p {\n  padding-top: 10px;\n  padding-bottom: 15px; }\n\n.faculty-div img {\n  border: 10px double #fff; }\n\n/*=====================================\r\n  CONTACT STYLES \r\n  ===================================*/\n\n#contact-sec {\n  padding-top: 10px;\n  padding-bottom: 60px;\n  background-color: #000;\n  padding: 0;\n  background-size: cover;\n  color: #fff;\n  background-attachment: fixed; }\n\n#contact-sec .overlay {\n  background: rgba(0, 0, 0, 0.76);\n  min-height: 600px; }\n\n#contact-sec h1 {\n  color: #fff; }\n\n#contact-sec .form-control {\n  background-color: rgba(255, 255, 255, 0);\n  color: #fff; }\n\n/*=====================================\r\n  Footer STYLES \r\n  ===================================*/\n\n#footer {\n  padding: 5px 20px;\n  background-color: #2d3d5a;\n  text-align: right;\n  color: #fff;\n  font-size: 15px; }\n\n.example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.fixed-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%  !important; }\n\n.backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n\n.flexslider .slides img {\n  /*width: 100%;*/\n  display: block; }\n\n.bg-gradient-custom-blue {\n  background: linear-gradient(87deg, #30389A 0, #3CC1F9 100%) !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcVlNDb2RlXFxQcmVDRE4vc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBQTs7QUFFdkI7O3dDQ0N3Qzs7QURHeEM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBcUM7RUFDckMsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLHlCQUF5QixFQUFBOztBQUd6QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFJMUI7O3dDQ053Qzs7QURTeEM7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFEQUF5RTtFQUN6RSxVQUFVO0VBRVYsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw0QkFBNEIsRUFBQTs7QUFHNUI7RUFDSSxrQ0FBa0M7RUFDbEMsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLHlCQUF5QixFQUFBOztBQUtqQztFQUdJLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx3QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXLEVBQUE7O0FBRWY7O3dDQ2R3Qzs7QURrQnhDO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHWDtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGNBQWMsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFN0I7O3dDQ2pCd0M7O0FEb0J4QztFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCOztzQ0NuQnNDOztBRHNCdEM7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFJZixnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUl6QixnQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUV2Qjs7c0NDekJzQzs7QUQ0QnRDO0VBQ0ksc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHWDtFQUNJLFdBQVcsRUFBQTs7QUFFbkI7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxhQUFhLEVBQUE7O0FBR2I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHaEM7O3NDQy9Cc0M7O0FEa0N0QztFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFFVixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDRCQUE0QixFQUFBOztBQUdoQztFQUNRLCtCQUErQjtFQUMvQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFVLEVBQUE7O0FBRWxCO0VBQ0ksd0NBQXVDO0VBQ3ZDLFdBQVUsRUFBQTs7QUFFZDs7c0NDakNzQzs7QURvQ3RDO0VBQ0ksaUJBQWdCO0VBQ2hCLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBZ0M7RUFDaEMsZUFBYztFQUNkLE1BQUs7RUFDTCxPQUFNO0VBQ04sV0FBVTtFQUNWLGFBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFBO0VBQ0EsY0FBYyxFQUFBOztBQUdsQjtFQUF5QixzRUFBa0UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZXQtcGFkIHtcclxuICAgIHBhZGRpbmctdG9wOjM1cHg7XHJcbn1cclxuLnNldC1yb3ctcGFkIHtcclxuICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIE5BVkJBUiBTVFlMRVMgXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4ubG9nby1jdXN0b20ge1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxufVxyXG5cclxuI21lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNDMsIDc1LCAxKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5cclxuLm5hdmJhci1pbnZlcnNlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiAgICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGEsIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEhPTUUgU1RZTEVTIFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4uaG9tZS1zZWMge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGUxLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcblxyXG4gICAgLmhvbWUtc2VjIC5vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCA1NywgODgsIDAuODkpO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lLXNlYyBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZS1zZWMgaDMge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi5zZXQtZmxleGkge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4uZmxleC1jb250cm9sLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNldC1mbGV4aSBhIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFRBRyBMSU5FIFNUWUxFUyBcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi50YWctbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbiAgICAudGFnLWxpbmUgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDA1RTVBO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAudGFnLWxpbmUgaDIgPiBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBIRUFERVIgTElORSBTVFlMRVMgXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5oZWFkZXItbGluZSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmgxOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICMyZjk0ODQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBBQk9VVCBTVFlMRVMgXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4uYWJvdXQtZGl2IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5pY29uLXJvdW5kLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDEwcHggZG91YmxlICMxQTk0QzQ7XHJcbiAgICBjb2xvcjogIzJmOTQ4NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4gICAgLmljb24tcm91bmQtYm9yZGVyOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDEwcHggZG91YmxlICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBOTRDNDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIH1cclxuXHJcbi5hYm91dC1kaXYgaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFBOTRDNDtcclxufVxyXG5cclxuLmFib3V0LWRpdiBoMyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmFib3V0LWRpdiBwIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXNldCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBGQUNVTFRZIFNUWUxFUyBcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiNmYWN1bHR5LXNlYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAgICAjZmFjdWx0eS1zZWMgLmhlYWRlci1saW5lIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuLmZhY3VsdHktZGl2IGg0IHtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbiAgICBmb250LXdlaWdodDo3MDA7XHJcbn1cclxuLmZhY3VsdHktZGl2IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbiAgICAuZmFjdWx0eS1kaXYgaHIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTk0QzQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhY3VsdHktZGl2IGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYWN1bHR5LWRpdiBwIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmFjdWx0eS1kaXYgaW1nIHtcclxuICAgICAgICBib3JkZXI6IDEwcHggZG91YmxlICNmZmY7XHJcbiAgICB9XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBDT05UQUNUIFNUWUxFUyBcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiNjb250YWN0LXNlYyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDs7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuI2NvbnRhY3Qtc2VjIC5vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzYpO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LXNlYyBoMSB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuI2NvbnRhY3Qtc2VjIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEZvb3RlciBTVFlMRVMgXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4jZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6NXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyZDNkNWE7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZpeGVkLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlICAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLmJhY2tkcm9wIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7IFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuLmZsZXhzbGlkZXIgLnNsaWRlcyBpbWcge1xyXG4gICAgLyp3aWR0aDogMTAwJTsqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1jdXN0b20tYmx1ZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg4N2RlZywjMzAzODlBIDAsIzNDQzFGOSAxMDAlKSFpbXBvcnRhbnR9IiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uc2V0LXBhZCB7XG4gIHBhZGRpbmctdG9wOiAzNXB4OyB9XG5cbi5zZXQtcm93LXBhZCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDsgfVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBOQVZCQVIgU1RZTEVTIFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmxvZ28tY3VzdG9tIHtcbiAgbWF4LWhlaWdodDogNDBweDsgfVxuXG4jbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzJiNGI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7IH1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGEsIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAyMnB4IDEwcHg7IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgSE9NRSBTVFlMRVMgXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uaG9tZS1zZWMge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGUxLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgfVxuXG4uaG9tZS1zZWMgLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCA1NywgODgsIDAuODkpO1xuICBtaW4taGVpZ2h0OiA1MjBweDsgfVxuXG4uaG9tZS1zZWMgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDsgfVxuXG4uaG9tZS1zZWMgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5zZXQtZmxleGkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDApO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDApO1xuICAtby1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLXRvcDogMTIwcHg7IH1cblxuLmZsZXgtY29udHJvbC1uYXYge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnNldC1mbGV4aSBhIHtcbiAgbWFyZ2luOiA1cHg7IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgVEFHIExJTkUgU1RZTEVTIFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnRhZy1saW5lIHtcbiAgYmFja2dyb3VuZDogI0U5RTlFOTtcbiAgY29sb3I6ICMwMDA7IH1cblxuLnRhZy1saW5lIGgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDVweDtcbiAgY29sb3I6ICMwMDVFNUE7IH1cblxuLnRhZy1saW5lIGgyID4gaSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEhFQURFUiBMSU5FIFNUWUxFUyBcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5oZWFkZXItbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGNvbG9yOiAjMDAwOyB9XG5cbmgxOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3JkZXI6IHNvbGlkIDJweCAjMmY5NDg0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDEycHggYXV0bzsgfVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBBQk9VVCBTVFlMRVMgXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmFib3V0LWRpdiB7XG4gIHBhZGRpbmc6IDMwcHg7IH1cblxuLmljb24tcm91bmQtYm9yZGVyIHtcbiAgYm9yZGVyOiAxMHB4IGRvdWJsZSAjMUE5NEM0O1xuICBjb2xvcjogIzJmOTQ4NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7IH1cblxuLmljb24tcm91bmQtYm9yZGVyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMTBweCBkb3VibGUgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBOTRDNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7IH1cblxuLmFib3V0LWRpdiBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQTk0QzQ7IH1cblxuLmFib3V0LWRpdiBoMyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4uYWJvdXQtZGl2IHAge1xuICBwYWRkaW5nLXRvcDogMTBweDsgfVxuXG4uYnRuLXNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEZBQ1VMVFkgU1RZTEVTIFxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiNmYWN1bHR5LXNlYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbiNmYWN1bHR5LXNlYyAuaGVhZGVyLWxpbmUge1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uZmFjdWx0eS1kaXYgaDQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uZmFjdWx0eS1kaXYge1xuICBwYWRkaW5nOiAzMHB4OyB9XG5cbi5mYWN1bHR5LWRpdiBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQTk0QzQ7IH1cblxuLmZhY3VsdHktZGl2IGgzIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5mYWN1bHR5LWRpdiBwIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XG5cbi5mYWN1bHR5LWRpdiBpbWcge1xuICBib3JkZXI6IDEwcHggZG91YmxlICNmZmY7IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgQ09OVEFDVCBTVFlMRVMgXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuI2NvbnRhY3Qtc2VjIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyB9XG5cbiNjb250YWN0LXNlYyAub3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43Nik7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4OyB9XG5cbiNjb250YWN0LXNlYyBoMSB7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbiNjb250YWN0LXNlYyAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgRm9vdGVyIFNUWUxFUyBcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4jZm9vdGVyIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDNkNWE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5leGFtcGxlLWljb24ge1xuICBwYWRkaW5nOiAwIDE0cHg7IH1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87IH1cblxuLmZpeGVkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDsgfVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDsgfVxuXG4uZmxleHNsaWRlciAuc2xpZGVzIGltZyB7XG4gIC8qd2lkdGg6IDEwMCU7Ki9cbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmJnLWdyYWRpZW50LWN1c3RvbS1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg3ZGVnLCAjMzAzODlBIDAsICMzQ0MxRjkgMTAwJSkgIWltcG9ydGFudDsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MainComponent = class MainComponent {
    constructor(fb, AuthService, router) {
        this.fb = fb;
        this.AuthService = AuthService;
        this.router = router;
        this.sliders = [];
        this.places = [];
        this.display = 'none';
        this.appversion = 'v1.0.0.0';
        this.IsProgressBarLogin = false;
        this.isCollapsed = true;
    }
    ngOnInit() {
        // reset login status
        this.AuthService.logout();
        this.loginForm = this.fb.group({
            username: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['admin123', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.onLoadFlexiSlider();
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }
    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }
    onSubmit() {
        this.IsProgressBarLogin = true;
        const username = this.username.value;
        const password = this.password.value;
        if (username === 'admin' && password === 'admin123') {
            this.loginError = '';
            this.AuthService.sendToken(username);
            // this.router.navigate(['../admin']);
            this.IsProgressBarLogin = false;
        }
        else {
            this.loginError = 'Username or password is incorrect.';
            this.IsProgressBarLogin = false;
        }
    }
    onClickAdminModal() {
        this.display = 'block';
    }
    onCloseHandled() {
        this.display = 'none';
    }
    onLoadFlexiSlider() {
        return new LoadFlexSlider();
    }
    scrollToAnchor(location, wait) {
        const element = document.querySelector('#' + location);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }, wait);
        }
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], MainComponent);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");











let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"]
        ],
        declarations: [_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
    })
], MainModule);



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=2-es2015.js.map