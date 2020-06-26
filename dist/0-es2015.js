(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@angular/flex-layout/esm2015/core.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm2015/core.js ***!
  \***********************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, ObservableMedia, MediaService, ObservableMediaProvider, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return removeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return BROWSER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return MediaChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return StylesheetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return LAYOUT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return SERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return BaseDirectiveAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return RESPONSIVE_ALIASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return DEFAULT_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return ORIENTATION_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return BreakPointRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return MatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return MockMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return MockMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return MockMatchMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return ServerMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return ServerMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return MediaMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return ObservableMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return ObservableMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return KeyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return ResponsiveActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return StyleUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return validateBasis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return () => {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            /** @type {?} */
            const elements = Array.from(_document.querySelectorAll(`[class*=${CLASS_NAME}]`));
            /** @type {?} */
            const classRegex = /\bflex-layout-.+?\b/g;
            elements.forEach(el => {
                el.classList.contains(`${CLASS_NAME}ssr`) && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
            });
        }
    };
}
/** *
 *  Provider to remove SSR styles on the browser
  @type {?} */
const BROWSER_PROVIDER = {
    provide: /** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"]),
    useFactory: removeStyles,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
    multi: true
};
/** @type {?} */
const CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
    providedIn: 'root',
    factory: () => null
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
/** @type {?} */
const DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1919px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */
const HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599px)';
/** @type {?} */
const HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959px)';
/** @type {?} */
const TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)';
/** @type {?} */
const TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839px)';
/** @type {?} */
const WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
/** @type {?} */
const WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
/** @type {?} */
const ScreenTypes = {
    'HANDSET': `${HANDSET_PORTRAIT}, ${HANDSET_LANDSCAPE}`,
    'TABLET': `${TABLET_PORTRAIT} , ${TABLET_LANDSCAPE}`,
    'WEB': `${WEB_PORTRAIT}, ${WEB_LANDSCAPE} `,
    'HANDSET_PORTRAIT': `${HANDSET_PORTRAIT}`,
    'TABLET_PORTRAIT': `${TABLET_PORTRAIT} `,
    'WEB_PORTRAIT': `${WEB_PORTRAIT}`,
    'HANDSET_LANDSCAPE': `${HANDSET_LANDSCAPE}]`,
    'TABLET_LANDSCAPE': `${TABLET_LANDSCAPE}`,
    'WEB_LANDSCAPE': `${WEB_LANDSCAPE}`
};
/** *
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
  @type {?} */
const ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    /** @type {?} */
    let first = part.length > 0 ? part.charAt(0) : '';
    /** @type {?} */
    let remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach((bp) => {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom = []) {
    /** @type {?} */
    const dict = {};
    defaults.forEach(bp => {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach((bp) => {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(k => dict[k]));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CONFIG = {
    addFlexToParent: true,
    addOrientationBps: false,
    disableDefaultBps: false,
    disableVendorPrefixes: false,
    serverLoaded: false,
    useColumnBasisZero: true,
};
/** @type {?} */
const LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
    providedIn: 'root',
    factory: () => DEFAULT_CONFIG
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
  @type {?} */
const BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
    providedIn: 'root',
    factory: () => {
        /** @type {?} */
        const breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */
        const layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */
        const bpFlattenArray = [].concat.apply([], (breakpoints || [])
            .map((v) => Array.isArray(v) ? v : [v]));
        /** @type {?} */
        const builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS)
            .concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
class BreakPointRegistry {
    /**
     * @param {?} _registry
     */
    constructor(_registry) {
        this._registry = _registry;
    }
    /**
     * Accessor to raw list
     * @return {?}
     */
    get items() {
        return [...this._registry];
    }
    /**
     * Accessor to sorted list used for registration with matchMedia API
     *
     * NOTE: During breakpoint registration, we want to register the overlaps FIRST
     *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
     *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
     * @return {?}
     */
    get sortedItems() {
        /** @type {?} */
        let overlaps = this._registry.filter(it => it.overlapping === true);
        /** @type {?} */
        let nonOverlaps = this._registry.filter(it => it.overlapping !== true);
        return [...overlaps, ...nonOverlaps];
    }
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    findByAlias(alias) {
        return this._registry.find(bp => bp.alias == alias) || null;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    findByQuery(query) {
        return this._registry.find(bp => bp.mediaQuery == query) || null;
    }
    /**
     * Get all the breakpoints whose ranges could overlapping `normal` ranges;
     * e.g. gt-sm overlaps md, lg, and xl
     * @return {?}
     */
    get overlappings() {
        return this._registry.filter(it => it.overlapping == true);
    }
    /**
     * Get list of all registered (non-empty) breakpoint aliases
     * @return {?}
     */
    get aliases() {
        return this._registry.map(it => it.alias);
    }
    /**
     * Aliases are mapped to properties using suffixes
     * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
     * for property layoutGtSM.
     * @return {?}
     */
    get suffixes() {
        return this._registry.map(it => !!it.suffix ? it.suffix : '');
    }
}
BreakPointRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
BreakPointRegistry.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [BREAKPOINTS,] }] }
];
/** @nocollapse */ BreakPointRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BreakPointRegistry_Factory() { return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINTS)); }, token: BreakPointRegistry, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
class MediaChange {
    /**
     * @param {?=} matches
     * @param {?=} mediaQuery
     * @param {?=} mqAlias
     * @param {?=} suffix
     */
    constructor(matches = false, mediaQuery = 'all', mqAlias = '', suffix = '' // e.g.   GtSM, Md, GtLg
    ) {
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
        this.property = '';
    }
    /**
     * @return {?}
     */
    clone() {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
class MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     */
    constructor(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    isActive(mediaQuery) {
        /** @type {?} */
        let mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    }
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    observe(mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((change) => {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    }
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    registerQuery(mediaQuery) {
        /** @type {?} */
        let list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(query => {
                /** @type {?} */
                let mql = this._registry.get(query);
                /** @type {?} */
                let onMQLEvent = (e) => {
                    this._zone.run(() => {
                        /** @type {?} */
                        let change = new MediaChange(e.matches, query);
                        this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(/** @type {?} */ ((mql)));
                }
            });
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    _buildMQL(query) {
        /** @type {?} */
        let canListen = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ (({
            matches: query === 'all' || query === '',
            media: query,
            addListener: () => {
            },
            removeListener: () => {
            }
        }));
    }
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    _prepareQueryCSS(mediaQueries, _document) {
        /** @type {?} */
        const list = mediaQueries.filter(it => !ALL_STYLES[it]);
        if (list.length > 0) {
            /** @type {?} */
            const query = list.join(', ');
            try {
                /** @type {?} */
                let styleEl = _document.createElement('style');
                styleEl.setAttribute('type', 'text/css');
                if (!(/** @type {?} */ (styleEl)).styleSheet) {
                    /** @type {?} */
                    let cssText = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${query} {.fx-query-test{ }}
`;
                    styleEl.appendChild(_document.createTextNode(cssText));
                } /** @type {?} */
                ((_document.head)).appendChild(styleEl);
                // Store in private global registry
                list.forEach(mq => ALL_STYLES[mq] = styleEl);
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
MatchMedia.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
MatchMedia.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
/** @nocollapse */ MatchMedia.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatchMedia_Factory() { return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: MatchMedia, providedIn: "root" });
/** *
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
  @type {?} */
const ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    /** @type {?} */
    let seen = {};
    return list.filter(item => {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
class ObservableMedia {
}
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 * \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 * \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
class MediaService {
    /**
     * @param {?} breakpoints
     * @param {?} mediaWatcher
     */
    constructor(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    isActive(alias) {
        /** @type {?} */
        let query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    }
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    subscribe(observerOrNext, error, complete) {
        if (observerOrNext) {
            if (typeof observerOrNext === 'object') {
                return this.observable$.subscribe(observerOrNext.next, observerOrNext.error, observerOrNext.complete);
            }
        }
        return this.observable$.subscribe(observerOrNext, error, complete);
    }
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    asObservable() {
        return this.observable$;
    }
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    _registerBreakPoints() {
        /** @type {?} */
        let queries = this.breakpoints.sortedItems.map(bp => bp.mediaQuery);
        this.mediaWatcher.registerQuery(queries);
    }
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    _buildObservable() {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const media$ = this.mediaWatcher.observe();
        /** @type {?} */
        const activationsOnly = (change) => {
            return change.matches === true;
        };
        /** @type {?} */
        const addAliasInformation = (change) => {
            return mergeAlias(change, this._findByQuery(change.mediaQuery));
        };
        /** @type {?} */
        const excludeOverlaps = (change) => {
            /** @type {?} */
            let bp = this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(activationsOnly), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(addAliasInformation));
    }
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    _findByAlias(alias) {
        return this.breakpoints.findByAlias(alias);
    }
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    _findByQuery(query) {
        return this.breakpoints.findByQuery(query);
    }
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    _toMediaQuery(query) {
        /** @type {?} */
        let bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    }
}
MediaService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
MediaService.ctorParameters = () => [
    { type: BreakPointRegistry },
    { type: MatchMedia }
];
/** @nocollapse */ MediaService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaService_Factory() { return new MediaService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaService, providedIn: "root" });
/** @type {?} */
const ObservableMediaProvider = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    useClass: MediaService
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [ObservableMediaProvider, BROWSER_PROVIDER]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
class StylesheetMap {
    constructor() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    addStyleToElement(element, style, value) {
        /** @type {?} */
        const stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    }
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    clearStyles() {
        this.stylesheet.clear();
    }
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    getStyleForElement(el, styleName) {
        /** @type {?} */
        const styles = this.stylesheet.get(el);
        /** @type {?} */
        let value = '';
        if (styles) {
            /** @type {?} */
            const style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    }
}
StylesheetMap.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ StylesheetMap.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StylesheetMap_Factory() { return new StylesheetMap(); }, token: StylesheetMap, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
  @type {?} */
const SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
    providedIn: 'root',
    factory: () => false
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
const INLINE = 'inline';
/** @type {?} */
const LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    let [direction, wrap, isInline] = validateValue(value);
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    let [direction, wrap, inline] = value.split(' ');
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(x => x === direction)) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap = null, inline = false) {
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class KeyOptions {
    /**
     * @param {?} baseKey
     * @param {?} defaultValue
     * @param {?} inputKeys
     */
    constructor(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
}
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
class ResponsiveActivation {
    /**
     * Constructor
     * @param {?} _options
     * @param {?} _mediaMonitor
     * @param {?} _onMediaChanges
     */
    constructor(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._activatedInputKey = '';
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    /**
     * Get a readonly sorted list of the breakpoints corresponding to the directive properties
     * defined in the HTML markup: the sorting is done from largest to smallest. The order is
     * important when several media queries are 'registered' and from which, the browser uses the
     * first matching media query.
     * @return {?}
     */
    get registryFromLargest() {
        return [...this._registryMap].reverse();
    }
    /**
     * Accessor to the DI'ed directive property
     * Each directive instance has a reference to the MediaMonitor which is
     * used HERE to subscribe to mediaQuery change notifications.
     * @return {?}
     */
    get mediaMonitor() {
        return this._mediaMonitor;
    }
    /**
     * Determine which directive \@Input() property is currently active (for the viewport size):
     * The key must be defined (in use) or fallback to the 'closest' overlapping property key
     * that is defined; otherwise the default property key will be used.
     * e.g.
     *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
     *      key is `.md` then `.gt-sm` should be used instead
     * @return {?}
     */
    get activatedInputKey() {
        return this._activatedInputKey || this._options.baseKey;
    }
    /**
     * Get the currently activated \@Input value or the fallback default \@Input value
     * @return {?}
     */
    get activatedInput() {
        /** @type {?} */
        let key = this.activatedInputKey;
        return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
    }
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    hasKeyValue(key) {
        /** @type {?} */
        let value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    }
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    destroy() {
        this._subscribers.forEach((link) => {
            link.unsubscribe();
        });
        this._subscribers = [];
    }
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    _configureChangeObservers() {
        /** @type {?} */
        let subscriptions = [];
        this._registryMap.forEach((bp) => {
            if (this._keyInUse(bp.key)) {
                /** @type {?} */
                let buildChanges = (change) => {
                    change = change.clone();
                    change.property = this._options.baseKey;
                    return change;
                };
                subscriptions.push(this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(buildChanges))
                    .subscribe(change => {
                    this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    }
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    _buildRegistryMap() {
        return this.mediaMonitor.breakpoints
            .map(bp => {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(bp => this._keyInUse(bp.key));
    }
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    _onMonitorEvents(change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    }
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    _keyInUse(key) {
        return this._lookupKeyValue(key) !== undefined;
    }
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    _calculateActivatedValue(current) {
        /** @type {?} */
        const currentKey = this._options.baseKey + current.suffix;
        /** @type {?} */
        let newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    }
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    _validateInputKey(inputKey) {
        /** @type {?} */
        let isMissingKey = (key) => !this._keyInUse(key);
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(bp => {
                /** @type {?} */
                let key = this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    }
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    _lookupKeyValue(key) {
        return this._options.inputKeys[key];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
class BaseDirective {
    /**
     * @param {?} _mediaMonitor
     * @param {?} _elementRef
     * @param {?} _styler
     */
    constructor(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         * Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    /**
     * @return {?}
     */
    get hasMediaQueryListener() {
        return !!this._mqActivation;
    }
    /**
     * Imperatively determine the current activated [input] value;
     * if called before ngOnInit() this will return `undefined`
     * @return {?}
     */
    get activatedValue() {
        return this._mqActivation ? this._mqActivation.activatedInput : undefined;
    }
    /**
     * Change the currently activated input value and force-update
     * the injected CSS (by-passing change detection).
     *
     * NOTE: Only the currently activated input value will be modified;
     *       other input values will NOT be affected.
     * @param {?} value
     * @return {?}
     */
    set activatedValue(value) {
        /** @type {?} */
        let key = 'baseKey';
        /** @type {?} */
        let previousVal;
        if (this._mqActivation) {
            key = this._mqActivation.activatedInputKey;
            previousVal = this._inputMap[key];
            this._inputMap[key] = value;
        }
        /** @type {?} */
        let change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousVal, value, false);
        this.ngOnChanges(/** @type {?} */ ({ [key]: change }));
    }
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    hasResponsiveAPI(baseKey) {
        /** @type {?} */
        const totalKeys = Object.keys(this._inputMap).length;
        /** @type {?} */
        const baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    }
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    ngOnInit() {
        this._hasInitialized = true;
    }
    /**
     * @param {?} change
     * @return {?}
     */
    ngOnChanges(change) {
        throw new Error(`BaseDirective::ngOnChanges should be overridden in subclass: ${change}`);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    }
    /**
     * Access to host element's parent DOM node
     * @return {?}
     */
    get parentElement() {
        return this._elementRef.nativeElement.parentNode;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    _queryInput(key) {
        return this._inputMap[key];
    }
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    _getDefaultVal(key, fallbackVal) {
        /** @type {?} */
        let val = this._queryInput(key);
        /** @type {?} */
        let hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    }
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    _getDisplayStyle(source = this.nativeElement) {
        /** @type {?} */
        const query = 'display';
        return this._styler.lookupStyle(source, query);
    }
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    _getAttributeValue(attribute, source = this.nativeElement) {
        return this._styler.lookupAttributeValue(source, attribute);
    }
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    _getFlexFlowDirection(target, addIfMissing = false) {
        /** @type {?} */
        let value = 'row';
        /** @type {?} */
        let hasInlineValue = '';
        if (target) {
            [value, hasInlineValue] = this._styler.getFlowDirection(target);
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                const style = buildLayoutCSS(value);
                /** @type {?} */
                const elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    _applyStyleToElement(style, value, element = this.nativeElement) {
        this._styler.applyStyleToElement(element, style, value);
    }
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    _applyStyleToElements(style, elements) {
        this._styler.applyStyleToElements(style, elements);
    }
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInput(key, source) {
        if (typeof source === 'object') {
            for (let prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    }
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    _listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            /** @type {?} */
            let keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, (change) => onMediaQueryChange(change));
        }
        return this._mqActivation;
    }
    /**
     * Special accessor to query for all child 'element' nodes regardless of type, class, etc
     * @return {?}
     */
    get childrenNodes() {
        /** @type {?} */
        const obj = this.nativeElement.children;
        /** @type {?} */
        const buffer = [];
        // iterate backwards ensuring that length is an UInt32
        for (let i = obj.length; i--;) {
            buffer[i] = obj[i];
        }
        return buffer;
    }
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    hasKeyValue(key) {
        return /** @type {?} */ ((this._mqActivation)).hasKeyValue(key);
    }
    /**
     * @return {?}
     */
    get hasInitialized() {
        return this._hasInitialized;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
class BaseDirectiveAdapter extends BaseDirective {
    /**
     * BaseDirectiveAdapter constructor
     * @param {?} _baseKey
     * @param {?} _mediaMonitor
     * @param {?} _elementRef
     * @param {?} _styler
     */
    constructor(_baseKey, // non-responsive @Input property name
    // non-responsive @Input property name
    _mediaMonitor, _elementRef, _styler) {
        super(_mediaMonitor, _elementRef, _styler);
        this._baseKey = _baseKey;
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
    }
    /**
     * Accessor to determine which \@Input property is "active"
     * e.g. which property value will be used.
     * @return {?}
     */
    get activeKey() {
        /** @type {?} */
        let mqa = this._mqActivation;
        /** @type {?} */
        let key = mqa ? mqa.activatedInputKey : this._baseKey;
        // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
        return (key === 'class') ? 'klazz' : key;
    }
    /**
     * Hash map of all \@Input keys/values defined/used
     * @return {?}
     */
    get inputMap() {
        return this._inputMap;
    }
    /**
     * @see BaseDirective._mqActivation
     * @return {?}
     */
    get mqActivation() {
        return /** @type {?} */ ((this._mqActivation));
    }
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    hasResponsiveAPI() {
        return super.hasResponsiveAPI(this._baseKey);
    }
    /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    queryInput(key) {
        return key ? this._queryInput(key) : undefined;
    }
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    cacheInput(key, source, cacheRaw = false) {
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error(`Invalid class value '${key}' provided. Did you want to cache the raw value?`);
        }
    }
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    }
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputRaw(key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    }
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputArray(key = '', source) {
        this._inputMap[key] = source ? source.join(' ') : '';
    }
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputObject(key = '', source) {
        /** @type {?} */
        let classes = [];
        if (source) {
            for (let prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    }
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputString(key = '', source) {
        this._inputMap[key] = source;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
class MockMatchMedia extends MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     * @param {?} _breakpoints
     */
    constructor(_zone, _platformId, _document, _breakpoints) {
        super(_zone, _platformId, _document);
        this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        this.useOverlaps = false;
        this._registry = new Map();
        this._actives = [];
        this._actives = [];
    }
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    clearAll() {
        this._registry.forEach((mql) => {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    }
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    activate(mediaQuery, useOverlaps = false) {
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    }
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    _validateQuery(queryOrAlias) {
        /** @type {?} */
        let bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    }
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    _activateWithOverlaps(mediaQuery, useOverlaps) {
        if (useOverlaps) {
            /** @type {?} */
            let bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */
            let alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    }
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    _activateByAlias(aliases) {
        /** @type {?} */
        let activate = (alias) => {
            /** @type {?} */
            let bp = this._breakpoints.findByAlias(alias);
            this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(alias => activate(alias.trim()));
    }
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    _activateByQuery(mediaQuery) {
        /** @type {?} */
        let mql = /** @type {?} */ (this._registry.get(mediaQuery));
        /** @type {?} */
        let alreadyAdded = this._actives.reduce((found, it) => {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    }
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    _deactivateAll() {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (const it of this._actives) {
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    }
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    _registerMediaQuery(mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    _buildMQL(query) {
        return new MockMediaQueryList(query);
    }
    /**
     * @return {?}
     */
    get hasActivated() {
        return (this._actives.length > 0);
    }
}
MockMatchMedia.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
MockMatchMedia.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: BreakPointRegistry }
];
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class MockMediaQueryList {
    /**
     * @param {?} _mediaQuery
     */
    constructor(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._isActive;
    }
    /**
     * @return {?}
     */
    get media() {
        return this._mediaQuery;
    }
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    destroy() {
        this.deactivate();
        this._listeners = [];
    }
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    activate() {
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach((callback) => {
                /** @type {?} */
                const cb = /** @type {?} */ ((callback));
                cb.call(null, this);
            });
        }
        return this;
    }
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    deactivate() {
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach((callback) => {
                /** @type {?} */
                const cb = /** @type {?} */ ((callback));
                cb.call(null, this);
            });
        }
        return this;
    }
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    addListener(listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            const cb = /** @type {?} */ ((listener));
            cb.call(null, this);
        }
    }
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    removeListener(_) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    addEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    removeEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @return {?}
     */
    dispatchEvent(_) {
        return false;
    }
}
/** *
 * Pre-configured provider for MockMatchMedia
  @type {?} */
const MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class ServerMediaQueryList {
    /**
     * @param {?} _mediaQuery
     */
    constructor(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._isActive;
    }
    /**
     * @return {?}
     */
    get media() {
        return this._mediaQuery;
    }
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    destroy() {
        this.deactivate();
        this._listeners = [];
    }
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    activate() {
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach((callback) => {
                /** @type {?} */
                const cb = /** @type {?} */ ((callback));
                cb.call(null, this);
            });
        }
        return this;
    }
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    deactivate() {
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach((callback) => {
                /** @type {?} */
                const cb = /** @type {?} */ ((callback));
                cb.call(null, this);
            });
        }
        return this;
    }
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    addListener(listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            const cb = /** @type {?} */ ((listener));
            cb.call(null, this);
        }
    }
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    removeListener(_) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    addEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    removeEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @return {?}
     */
    dispatchEvent(_) {
        return false;
    }
}
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
class ServerMatchMedia extends MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     */
    constructor(_zone, _platformId, _document) {
        super(_zone, _platformId, _document);
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    activateBreakpoint(bp) {
        /** @type {?} */
        const lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    }
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    deactivateBreakpoint(bp) {
        /** @type {?} */
        const lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    _buildMQL(query) {
        return new ServerMediaQueryList(query);
    }
}
ServerMatchMedia.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ServerMatchMedia.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
class MediaMonitor {
    /**
     * @param {?} _breakpoints
     * @param {?} _matchMedia
     */
    constructor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    /**
     * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
     * @return {?}
     */
    get breakpoints() {
        return [...this._breakpoints.items];
    }
    /**
     * @return {?}
     */
    get activeOverlaps() {
        /** @type {?} */
        let items = this._breakpoints.overlappings.reverse();
        return items.filter((bp) => {
            return this._matchMedia.isActive(bp.mediaQuery);
        });
    }
    /**
     * @return {?}
     */
    get active() {
        /** @type {?} */
        let found = null;
        /** @type {?} */
        let items = this.breakpoints.reverse();
        items.forEach(bp => {
            if (bp.alias !== '') {
                if (!found && this._matchMedia.isActive(bp.mediaQuery)) {
                    found = bp;
                }
            }
        });
        /** @type {?} */
        let first = this.breakpoints[0];
        return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
    }
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    isActive(alias) {
        /** @type {?} */
        let bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    }
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    observe(alias) {
        /** @type {?} */
        let bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        /** @type {?} */
        let hasAlias = (change) => (bp ? change.mqAlias !== '' : true);
        /** @type {?} */
        let media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(change => mergeAlias(change, bp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasAlias));
    }
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    _registerBreakpoints() {
        /** @type {?} */
        let queries = this._breakpoints.sortedItems.map(bp => bp.mediaQuery);
        this._matchMedia.registerQuery(queries);
    }
}
MediaMonitor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
MediaMonitor.ctorParameters = () => [
    { type: BreakPointRegistry },
    { type: MatchMedia }
];
/** @nocollapse */ MediaMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaMonitor_Factory() { return new MediaMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaMonitor, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (let key in target) {
        /** @type {?} */
        let value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StyleUtils {
    /**
     * @param {?} _serverStylesheet
     * @param {?} _serverModuleLoaded
     * @param {?} _platformId
     * @param {?} layoutConfig
     */
    constructor(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    applyStyleToElement(element, style, value = null) {
        /** @type {?} */
        let styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    }
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    applyStyleToElements(style, elements = []) {
        /** @type {?} */
        const styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(el => {
            this._applyMultiValueStyleToElement(styles, el);
        });
    }
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    getFlowDirection(target) {
        /** @type {?} */
        const query = 'flex-direction';
        /** @type {?} */
        let value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        /** @type {?} */
        const hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    }
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    lookupAttributeValue(element, attribute) {
        return element.getAttribute(attribute) || '';
    }
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    lookupInlineStyle(element, styleName) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ?
            element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
    }
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    lookupStyle(element, styleName, inlineOnly = false) {
        /** @type {?} */
        let value = '';
        if (element) {
            /** @type {?} */
            let immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    }
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    _applyMultiValueStyleToElement(styles, element) {
        Object.keys(styles).sort().forEach(key => {
            /** @type {?} */
            const el = styles[key];
            /** @type {?} */
            const values = Array.isArray(el) ? el : [el];
            values.sort();
            for (let value of values) {
                value = value ? value + '' : '';
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) || !this._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ?
                        element.style.setProperty(key, value) : this._setServerStyle(element, key, value);
                }
                else {
                    this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    }
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    _setServerStyle(element, styleName, styleValue) {
        styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        const styleMap = this._readStyleAttribute(element);
        styleMap[styleName] = styleValue || '';
        this._writeStyleAttribute(element, styleMap);
    }
    /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    _getServerStyle(element, styleName) {
        /** @type {?} */
        const styleMap = this._readStyleAttribute(element);
        return styleMap[styleName] || '';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _readStyleAttribute(element) {
        /** @type {?} */
        const styleMap = {};
        /** @type {?} */
        const styleAttribute = element.getAttribute('style');
        if (styleAttribute) {
            /** @type {?} */
            const styleList = styleAttribute.split(/;+/g);
            for (let i = 0; i < styleList.length; i++) {
                /** @type {?} */
                const style = styleList[i].trim();
                if (style.length > 0) {
                    /** @type {?} */
                    const colonIndex = style.indexOf(':');
                    if (colonIndex === -1) {
                        throw new Error(`Invalid CSS style: ${style}`);
                    }
                    /** @type {?} */
                    const name = style.substr(0, colonIndex).trim();
                    styleMap[name] = style.substr(colonIndex + 1).trim();
                }
            }
        }
        return styleMap;
    }
    /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    _writeStyleAttribute(element, styleMap) {
        /** @type {?} */
        let styleAttrValue = '';
        for (const key in styleMap) {
            /** @type {?} */
            const newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.setAttribute('style', styleAttrValue);
    }
}
StyleUtils.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
StyleUtils.ctorParameters = () => [
    { type: StylesheetMap, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SERVER_TOKEN,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] }
];
/** @nocollapse */ StyleUtils.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StyleUtils_Factory() { return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(StylesheetMap, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVER_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG)); }, token: StyleUtils, providedIn: "root" });
/** @type {?} */
const FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow = '1', shrink = '1') {
    /** @type {?} */
    let parts = [grow, shrink, basis];
    /** @type {?} */
    let j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */
        let matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        /** @type {?} */
        let matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm2015/extended.js":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm2015/extended.js ***!
  \***************************************************************/
/*! exports provided: ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return ExtendedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return ImgSrcDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return negativeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return ShowHideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
class ImgSrcDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    /**
     * @param {?} _elRef
     * @param {?} _monitor
     * @param {?} _styler
     * @param {?} _platformId
     * @param {?} _serverModuleLoaded
     */
    constructor(_elRef, _monitor, _styler, _platformId, _serverModuleLoaded) {
        super(_monitor, _elRef, _styler);
        this._elRef = _elRef;
        this._monitor = _monitor;
        this._styler = _styler;
        this._platformId = _platformId;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._cacheInput('src', _elRef.nativeElement.getAttribute('src') || '');
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) {
            this.nativeElement.setAttribute('src', '');
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcBase(val) { this.cacheDefaultSrc(val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcXs(val) { this._cacheInput('srcXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcSm(val) { this._cacheInput('srcSm', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcMd(val) { this._cacheInput('srcMd', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcLg(val) { this._cacheInput('srcLg', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcXl(val) { this._cacheInput('srcXl', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcLtSm(val) { this._cacheInput('srcLtSm', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcLtMd(val) { this._cacheInput('srcLtMd', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcLtLg(val) { this._cacheInput('srcLtLg', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcLtXl(val) { this._cacheInput('srcLtXl', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcGtXs(val) { this._cacheInput('srcGtXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcGtSm(val) { this._cacheInput('srcGtSm', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcGtMd(val) { this._cacheInput('srcGtMd', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set srcGtLg(val) { this._cacheInput('srcGtLg', val); }
    /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        if (this.hasResponsiveKeys) {
            // Listen for responsive changes
            this._listenForMediaQueryChanges('src', this.defaultSrc, () => {
                this._updateSrcFor();
            });
        }
        this._updateSrcFor();
    }
    /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    ngOnChanges() {
        if (this.hasInitialized) {
            this._updateSrcFor();
        }
    }
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    _updateSrcFor() {
        if (this.hasResponsiveKeys) {
            /** @type {?} */
            let url = this.activatedValue || this.defaultSrc;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) {
                this._styler.applyStyleToElement(this.nativeElement, { 'content': url ? `url(${url})` : '' });
            }
            else {
                this.nativeElement.setAttribute('src', String(url));
            }
        }
    }
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    cacheDefaultSrc(value) {
        this._cacheInput('src', value || '');
    }
    /**
     * Empty values are maintained, undefined values are exposed as ''
     * @return {?}
     */
    get defaultSrc() {
        return this._queryInput('src') || '';
    }
    /**
     * Does the <img> have 1 or more src.<xxx> responsive inputs
     * defined... these will be mapped to activated breakpoints.
     * @return {?}
     */
    get hasResponsiveKeys() {
        return Object.keys(this._inputMap).length > 1;
    }
}
ImgSrcDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: `
  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],
  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],
  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]
`
            },] },
];
/** @nocollapse */
ImgSrcDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],] }] }
];
ImgSrcDirective.propDecorators = {
    srcBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src',] }],
    srcXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.xs',] }],
    srcSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.sm',] }],
    srcMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.md',] }],
    srcLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.lg',] }],
    srcXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.xl',] }],
    srcLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.lt-sm',] }],
    srcLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.lt-md',] }],
    srcLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.lt-lg',] }],
    srcLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.lt-xl',] }],
    srcGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.gt-xs',] }],
    srcGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.gt-sm',] }],
    srcGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.gt-md',] }],
    srcGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src.gt-lg',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
class ClassDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     * @param {?} _ngClassInstance
     * @param {?} _styler
     */
    constructor(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer, _ngClassInstance, _styler) {
        super(monitor, _ngEl, _styler);
        this.monitor = monitor;
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._ngClassInstance = _ngClassInstance;
        this._styler = _styler;
        this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirectiveAdapter"]('ngClass', this.monitor, this._ngEl, this._styler);
        if (!this._ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            this._ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"](this._iterableDiffers, this._keyValueDiffers, this._ngEl, this._renderer);
        }
    }
    /**
     * Intercept ngClass assignments so we cache the default classes
     * which are merged with activated styles or used as fallbacks.
     * Note: Base ngClass values are applied during ngDoCheck()
     * @param {?} val
     * @return {?}
     */
    set ngClassBase(val) {
        /** @type {?} */
        const key = 'ngClass';
        this._base.cacheInput(key, val, true);
        this._ngClassInstance.ngClass = this._base.queryInput(key);
    }
    /**
     * Capture class assignments so we cache the default classes
     * which are merged with activated styles and used as fallbacks.
     * @param {?} val
     * @return {?}
     */
    set klazz(val) {
        /** @type {?} */
        const key = 'class';
        this._base.cacheInput(key, val);
        this._ngClassInstance.klass = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassXs(val) { this._base.cacheInput('ngClassXs', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassSm(val) { this._base.cacheInput('ngClassSm', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassMd(val) { this._base.cacheInput('ngClassMd', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassLg(val) { this._base.cacheInput('ngClassLg', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassXl(val) { this._base.cacheInput('ngClassXl', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassLtSm(val) { this._base.cacheInput('ngClassLtSm', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassLtMd(val) { this._base.cacheInput('ngClassLtMd', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassLtLg(val) { this._base.cacheInput('ngClassLtLg', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassLtXl(val) { this._base.cacheInput('ngClassLtXl', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassGtXs(val) { this._base.cacheInput('ngClassGtXs', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassGtSm(val) { this._base.cacheInput('ngClassGtSm', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassGtMd(val) { this._base.cacheInput('ngClassGtMd', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngClassGtLg(val) { this._base.cacheInput('ngClassGtLg', val, true); }
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._base.activeKey in changes) {
            this._ngClassInstance.ngClass = this._base.mqActivation.activatedInput || '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._configureMQListener();
    }
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ngDoCheck() {
        this._ngClassInstance.ngDoCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._base.ngOnDestroy();
    }
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    _configureMQListener(baseKey = 'ngClass') {
        /** @type {?} */
        const fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, (changes) => {
            this._ngClassInstance.ngClass = changes.value || '';
            this._ngClassInstance.ngDoCheck();
        });
    }
}
ClassDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: `
    [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
  `
            },] },
];
/** @nocollapse */
ClassDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
];
ClassDirective.propDecorators = {
    ngClassBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass',] }],
    klazz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] }],
    ngClassXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.xs',] }],
    ngClassSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.sm',] }],
    ngClassMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.md',] }],
    ngClassLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.lg',] }],
    ngClassXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.xl',] }],
    ngClassLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.lt-sm',] }],
    ngClassLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.lt-md',] }],
    ngClassLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.lt-lg',] }],
    ngClassLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.lt-xl',] }],
    ngClassGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.gt-xs',] }],
    ngClassGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.gt-sm',] }],
    ngClassGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.gt-md',] }],
    ngClassGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngClass.gt-lg',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 * @param {?} hide
 * @return {?}
 */
function negativeOf(hide) {
    return (hide === '') ? false :
        ((hide === 'false') || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
class ShowHideDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} layout
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} platformId
     * @param {?} serverModuleLoaded
     */
    constructor(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded) {
        super(monitor, elRef, styleUtils);
        this.layout = layout;
        this.elRef = elRef;
        this.styleUtils = styleUtils;
        this.platformId = platformId;
        this.serverModuleLoaded = serverModuleLoaded;
        /**
         * Original dom Elements CSS display style
         */
        this._display = '';
        if (layout) {
            /**
                   * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
                   * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
                   */
            this._layoutWatcher = layout.layout$.subscribe(() => this._updateWithValue());
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set show(val) { this._cacheInput('show', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set showXs(val) { this._cacheInput('showXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set showSm(val) { this._cacheInput('showSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showMd(val) { this._cacheInput('showMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showLg(val) { this._cacheInput('showLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showXl(val) { this._cacheInput('showXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showLtSm(val) { this._cacheInput('showLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showLtMd(val) { this._cacheInput('showLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showLtLg(val) { this._cacheInput('showLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showLtXl(val) { this._cacheInput('showLtXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showGtXs(val) { this._cacheInput('showGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showGtSm(val) { this._cacheInput('showGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showGtMd(val) { this._cacheInput('showGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set showGtLg(val) { this._cacheInput('showGtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hide(val) { this._cacheInput('show', negativeOf(val)); }
    /**
     * @param {?} val
     * @return {?}
     */
    set hideXs(val) { this._cacheInput('showXs', negativeOf(val)); }
    /**
     * @param {?} val
     * @return {?}
     */
    set hideSm(val) { this._cacheInput('showSm', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideMd(val) { this._cacheInput('showMd', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideLg(val) { this._cacheInput('showLg', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideXl(val) { this._cacheInput('showXl', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideLtSm(val) { this._cacheInput('showLtSm', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideLtMd(val) { this._cacheInput('showLtMd', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideLtLg(val) { this._cacheInput('showLtLg', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideLtXl(val) { this._cacheInput('showLtXl', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideGtXs(val) { this._cacheInput('showGtXs', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideGtSm(val) { this._cacheInput('showGtSm', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideGtMd(val) { this._cacheInput('showGtMd', negativeOf(val)); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set hideGtLg(val) { this._cacheInput('showGtLg', negativeOf(val)); }
    ;
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    _getDisplayStyle() {
        return this.layout ? 'flex' : super._getDisplayStyle();
    }
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.hasInitialized && (changes['show'] != null || this._mqActivation)) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._display = this._getDisplayStyle();
        /** @type {?} */
        let value = this._getDefaultVal('show', true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    }
    /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._getDefaultVal('show', true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        let shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
    }
    /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    _buildCSS(show) {
        return { 'display': show ? this._display : 'none' };
    }
    /**
     * Validate the to be not FALSY
     * @param {?=} show
     * @return {?}
     */
    _validateTruthy(show = '') {
        return (FALSY.indexOf(show) === -1);
    }
}
ShowHideDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: `
  [fxShow],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`
            },] },
];
/** @nocollapse */
ShowHideDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
    { type: _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],] }] }
];
ShowHideDirective.propDecorators = {
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow',] }],
    showXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.xs',] }],
    showSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.sm',] }],
    showMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.md',] }],
    showLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.lg',] }],
    showXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.xl',] }],
    showLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.lt-sm',] }],
    showLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.lt-md',] }],
    showLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.lt-lg',] }],
    showLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.lt-xl',] }],
    showGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.gt-xs',] }],
    showGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.gt-sm',] }],
    showGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.gt-md',] }],
    showGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShow.gt-lg',] }],
    hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide',] }],
    hideXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.xs',] }],
    hideSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.sm',] }],
    hideMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.md',] }],
    hideLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.lg',] }],
    hideXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.xl',] }],
    hideLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.lt-sm',] }],
    hideLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.lt-md',] }],
    hideLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.lt-lg',] }],
    hideLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.lt-xl',] }],
    hideGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.gt-xs',] }],
    hideGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.gt-sm',] }],
    hideGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.gt-md',] }],
    hideGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxHide.gt-lg',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgStyle allowed inputs
 */
class NgStyleKeyValue {
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} noQuotes
     */
    constructor(key, value, noQuotes = true) {
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
}
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    /** @type {?} */
    let what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter = ';') {
    return String(source)
        .trim()
        .split(delimiter)
        .map((val) => val.trim())
        .filter(val => val !== '');
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    /** @type {?} */
    const sanitizeValue = (it) => {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(entry => !!entry)
        .map(sanitizeValue)
        .reduce(keyValuesToMap, /** @type {?} */ ({}));
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    /** @type {?} */
    let list = [];
    if (getType(source) === 'set') {
        (/** @type {?} */ (source)).forEach(entry => list.push(entry));
    }
    else {
        Object.keys(source).forEach((key) => {
            list.push(`${key}:${((/** @type {?} */ (source)))[key]}`);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    let [key, val] = it.split(':');
    return new NgStyleKeyValue(key, val);
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngStyle.
 *
 */
class StyleDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     * @param {?} monitor
     * @param {?} _sanitizer
     * @param {?} _ngEl
     * @param {?} _renderer
     * @param {?} _differs
     * @param {?} _ngStyleInstance
     * @param {?} _styler
     */
    constructor(monitor, _sanitizer, _ngEl, _renderer, _differs, _ngStyleInstance, _styler) {
        super(monitor, _ngEl, _styler);
        this.monitor = monitor;
        this._sanitizer = _sanitizer;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._differs = _differs;
        this._ngStyleInstance = _ngStyleInstance;
        this._styler = _styler;
        this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirectiveAdapter"]('ngStyle', this.monitor, this._ngEl, this._styler);
        if (!this._ngStyleInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            this._ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"](this._differs, this._ngEl, this._renderer);
        }
        this._buildCacheInterceptor();
        this._fallbackToStyle();
    }
    /**
     * Intercept ngStyle assignments so we cache the default styles
     * which are merged with activated styles or used as fallbacks.
     * @param {?} val
     * @return {?}
     */
    set ngStyleBase(val) {
        /** @type {?} */
        const key = 'ngStyle';
        this._base.cacheInput(key, val, true); // convert val to hashmap
        this._ngStyleInstance.ngStyle = this._base.queryInput(key);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleXs(val) { this._base.cacheInput('ngStyleXs', val, true); }
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleSm(val) { this._base.cacheInput('ngStyleSm', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleMd(val) { this._base.cacheInput('ngStyleMd', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleLg(val) { this._base.cacheInput('ngStyleLg', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleXl(val) { this._base.cacheInput('ngStyleXl', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleLtSm(val) { this._base.cacheInput('ngStyleLtSm', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleLtMd(val) { this._base.cacheInput('ngStyleLtMd', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleLtLg(val) { this._base.cacheInput('ngStyleLtLg', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleLtXl(val) { this._base.cacheInput('ngStyleLtXl', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleGtXs(val) { this._base.cacheInput('ngStyleGtXs', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleGtSm(val) { this._base.cacheInput('ngStyleGtSm', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleGtMd(val) { this._base.cacheInput('ngStyleGtMd', val, true); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set ngStyleGtLg(val) { this._base.cacheInput('ngStyleGtLg', val, true); }
    ;
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._base.activeKey in changes) {
            this._ngStyleInstance.ngStyle = this._base.mqActivation.activatedInput || '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._configureMQListener();
    }
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ngDoCheck() {
        this._ngStyleInstance.ngDoCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._base.ngOnDestroy();
    }
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    _configureMQListener(baseKey = 'ngStyle') {
        /** @type {?} */
        const fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, (changes) => {
            this._ngStyleInstance.ngStyle = changes.value || '';
            this._ngStyleInstance.ngDoCheck();
        });
    }
    /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    _buildCacheInterceptor() {
        /** @type {?} */
        let cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = (key, source, cacheRaw = false, merge = true) => {
            /** @type {?} */
            let styles = this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, this._base.inputMap['ngStyle'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    }
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    _buildStyleMap(styles) {
        /** @type {?} */
        let sanitizer = (val) => {
            // Always safe-guard (aka sanitize) style property values
            return this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, val) || '';
        };
        if (styles) {
            switch (getType(styles)) {
                case 'string': return buildMapFromList$1(buildRawList(styles), sanitizer);
                case 'array': return buildMapFromList$1(/** @type {?} */ (styles), sanitizer);
                case 'set': return buildMapFromSet(styles, sanitizer);
                default: return buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    }
    /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    _fallbackToStyle() {
        if (!this._base.queryInput('ngStyle')) {
            this.ngStyleBase = this._getAttributeValue('style') || '';
        }
    }
}
StyleDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: `
    [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],
    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],
    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]
  `
            },] },
];
/** @nocollapse */
StyleDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
];
StyleDirective.propDecorators = {
    ngStyleBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle',] }],
    ngStyleXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.xs',] }],
    ngStyleSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.sm',] }],
    ngStyleMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.md',] }],
    ngStyleLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.lg',] }],
    ngStyleXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.xl',] }],
    ngStyleLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.lt-sm',] }],
    ngStyleLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.lt-md',] }],
    ngStyleLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.lt-lg',] }],
    ngStyleLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.lt-xl',] }],
    ngStyleGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.gt-xs',] }],
    ngStyleGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.gt-sm',] }],
    ngStyleGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.gt-md',] }],
    ngStyleGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngStyle.gt-lg',] }]
};
/**
 * Build a styles map from a list of styles, while sanitizing bad values first
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList$1(styles, sanitize) {
    /** @type {?} */
    const sanitizeValue = (it) => {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(entry => !!entry)
        .map(sanitizeValue)
        .reduce(keyValuesToMap, /** @type {?} */ ({}));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ALL_DIRECTIVES = [
    ShowHideDirective,
    ClassDirective,
    StyleDirective,
    ImgSrcDirective
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
class ExtendedModule {
}
ExtendedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
                declarations: [...ALL_DIRECTIVES],
                exports: [...ALL_DIRECTIVES]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=extended.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm2015/flex-layout.js ***!
  \******************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, ObservableMedia, MediaService, ObservableMediaProvider, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis, ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective, FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk, GridModule, VERSION, FlexLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function() { return FlexLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirectiveAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["RESPONSIVE_ALIASES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["KeyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ResponsiveActivation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"]; });

/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["negativeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"]; });

/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Current version of Angular Flex-Layout.
  @type {?} */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('7.0.0-beta.19');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
class FlexLayoutModule {
    /**
     * @param {?} serverModuleLoaded
     * @param {?} platformId
     */
    constructor(serverModuleLoaded, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    static withConfig(configOptions, breakpoints = []) {
        return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ?
                [
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"], useValue: true },
                ] : [
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
            ]
        };
    }
}
FlexLayoutModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
                exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
            },] },
];
/** @nocollapse */
FlexLayoutModule.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex-layout.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm2015/flex.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm2015/flex.js ***!
  \***********************************************************/
/*! exports provided: FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return FlexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return FlexDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return FlexAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return FlexFillDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return FlexOffsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return FlexOrderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return LayoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return LayoutAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return LayoutGapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
const INLINE = 'inline';
/** @type {?} */
const LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    let [direction, wrap, isInline] = validateValue(value);
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    let [direction, wrap, inline] = value.split(' ');
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(x => x === direction)) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    let [flow,] = validateValue(value);
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap = null, inline = false) {
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
class LayoutDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
        this._announcer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.layout$ = this._announcer.asObservable();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set layout(val) { this._cacheInput('layout', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutXs(val) { this._cacheInput('layoutXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutSm(val) { this._cacheInput('layoutSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutMd(val) { this._cacheInput('layoutMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutLg(val) { this._cacheInput('layoutLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutXl(val) { this._cacheInput('layoutXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutGtXs(val) { this._cacheInput('layoutGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutGtSm(val) { this._cacheInput('layoutGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutGtMd(val) { this._cacheInput('layoutGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutGtLg(val) { this._cacheInput('layoutGtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutLtSm(val) { this._cacheInput('layoutLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutLtMd(val) { this._cacheInput('layoutLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutLtLg(val) { this._cacheInput('layoutLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set layoutLtXl(val) { this._cacheInput('layoutLtXl', val); }
    ;
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges('layout', 'row', (changes) => {
            this._updateWithDirection(changes.value);
        });
    }
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    _updateWithDirection(value) {
        value = value || this._queryInput('layout') || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        let css = buildLayoutCSS(!!value ? value : '');
        this._applyStyleToElement(css);
        this._announcer.next({
            direction: css['flex-direction'],
            wrap: !!css['flex-wrap'] && css['flex-wrap'] !== 'nowrap'
        });
    }
}
LayoutDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [fxLayout],
  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],
  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],
  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]
` },] },
];
/** @nocollapse */
LayoutDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
LayoutDirective.propDecorators = {
    layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout',] }],
    layoutXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.xs',] }],
    layoutSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.sm',] }],
    layoutMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.md',] }],
    layoutLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.lg',] }],
    layoutXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.xl',] }],
    layoutGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.gt-xs',] }],
    layoutGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.gt-sm',] }],
    layoutGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.gt-md',] }],
    layoutGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.gt-lg',] }],
    layoutLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.lt-sm',] }],
    layoutLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.lt-md',] }],
    layoutLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.lt-lg',] }],
    layoutLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayout.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
class LayoutGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} container
     * @param {?} _zone
     * @param {?} _directionality
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, container, _zone, _directionality, styleUtils) {
        super(monitor, elRef, styleUtils);
        this._zone = _zone;
        this._directionality = _directionality;
        this._layout = 'row'; // default flex-direction
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            this._layoutWatcher = container.layout$.subscribe(this._onLayoutChange.bind(this));
        }
        this._directionWatcher =
            this._directionality.change.subscribe(this._updateWithValue.bind(this));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gap(val) { this._cacheInput('gap', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set gapXs(val) { this._cacheInput('gapXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set gapSm(val) { this._cacheInput('gapSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapMd(val) { this._cacheInput('gapMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapLg(val) { this._cacheInput('gapLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapXl(val) { this._cacheInput('gapXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapGtXs(val) { this._cacheInput('gapGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapGtSm(val) { this._cacheInput('gapGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapGtMd(val) { this._cacheInput('gapGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapGtLg(val) { this._cacheInput('gapGtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapLtSm(val) { this._cacheInput('gapLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapLtMd(val) { this._cacheInput('gapLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapLtLg(val) { this._cacheInput('gapLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set gapLtXl(val) { this._cacheInput('gapLtXl', val); }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngAfterContentInit() {
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    }
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    _watchContentChanges() {
        this._zone.runOutsideAngular(() => {
            if (typeof MutationObserver !== 'undefined') {
                this._observer = new MutationObserver((mutations) => {
                    /** @type {?} */
                    const validatedChanges = (it) => {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    };
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        this._updateWithValue();
                    }
                });
                this._observer.observe(this.nativeElement, { childList: true });
            }
        });
    }
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    _onLayoutChange(layout) {
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(x => x === this._layout)) {
            this._layout = 'row';
        }
        this._updateWithValue();
    }
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        /** @type {?} */
        let gapValue = value || this._queryInput('gap') || '0';
        if (this._mqActivation) {
            gapValue = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        const items = this.childrenNodes
            .filter(el => el.nodeType === 1 && this._getDisplayStyle(el) != 'none')
            .sort((a, b) => {
            /** @type {?} */
            const orderA = +this._styler.lookupStyle(a, 'order');
            /** @type {?} */
            const orderB = +this._styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        });
        if (items.length > 0) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.substring(0, gapValue.indexOf(GRID_SPECIFIER));
                // For each `element` children, set the padding
                this._applyStyleToElements(this._buildGridPadding(gapValue), items);
                // Add the margin to the host element
                this._applyStyleToElement(this._buildGridMargin(gapValue));
            }
            else {
                /** @type {?} */
                const lastItem = items.pop();
                // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...
                this._applyStyleToElements(this._buildCSS(gapValue), items);
                // Clear all gaps for all visible elements
                this._applyStyleToElements(this._buildCSS(), [lastItem]);
            }
        }
    }
    /**
     *
     * @param {?} value
     * @return {?}
     */
    _buildGridPadding(value) {
        /** @type {?} */
        let paddingTop = '0px';
        /** @type {?} */
        let paddingRight = '0px';
        /** @type {?} */
        let paddingBottom = value;
        /** @type {?} */
        let paddingLeft = '0px';
        if (this._directionality.value === 'rtl') {
            paddingLeft = value;
        }
        else {
            paddingRight = value;
        }
        return { 'padding': `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}` };
    }
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    _buildGridMargin(value) {
        /** @type {?} */
        let marginTop = '0px';
        /** @type {?} */
        let marginRight = '0px';
        /** @type {?} */
        let marginBottom = '-' + value;
        /** @type {?} */
        let marginLeft = '0px';
        if (this._directionality.value === 'rtl') {
            marginLeft = '-' + value;
        }
        else {
            marginRight = '-' + value;
        }
        return { 'margin': `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}` };
    }
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = null) {
        /** @type {?} */
        let key;
        /** @type {?} */
        let margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
                key = 'margin-bottom';
                break;
            case 'column-reverse':
                key = 'margin-top';
                break;
            case 'row':
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
            case 'row-reverse':
                key = this._directionality.value === 'rtl' ? 'margin-right' : 'margin-left';
                break;
            default:
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    }
}
LayoutGapDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: `
  [fxLayoutGap],
  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],
  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],
  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]
`
            },] },
];
/** @nocollapse */
LayoutGapDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
LayoutGapDirective.propDecorators = {
    gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap',] }],
    gapXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.xs',] }],
    gapSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.sm',] }],
    gapMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.md',] }],
    gapLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.lg',] }],
    gapXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.xl',] }],
    gapGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.gt-xs',] }],
    gapGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.gt-sm',] }],
    gapGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.gt-md',] }],
    gapGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.gt-lg',] }],
    gapLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.lt-sm',] }],
    gapLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.lt-md',] }],
    gapLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.lt-lg',] }],
    gapLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutGap.lt-xl',] }]
};
/** @type {?} */
const GRID_SPECIFIER = ' grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
class FlexDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} _container
     * @param {?} styleUtils
     * @param {?} layoutConfig
     */
    constructor(monitor, elRef, _container, styleUtils, layoutConfig) {
        super(monitor, elRef, styleUtils);
        this._container = _container;
        this.styleUtils = styleUtils;
        this.layoutConfig = layoutConfig;
        this._cacheInput('flex', '');
        this._cacheInput('shrink', 1);
        this._cacheInput('grow', 1);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set shrink(val) { this._cacheInput('shrink', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set grow(val) { this._cacheInput('grow', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flex(val) { this._cacheInput('flex', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexXs(val) { this._cacheInput('flexXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexSm(val) { this._cacheInput('flexSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexMd(val) { this._cacheInput('flexMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexLg(val) { this._cacheInput('flexLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexXl(val) { this._cacheInput('flexXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexGtXs(val) { this._cacheInput('flexGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexGtSm(val) { this._cacheInput('flexGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexGtMd(val) { this._cacheInput('flexGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexGtLg(val) { this._cacheInput('flexGtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexLtSm(val) { this._cacheInput('flexLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexLtMd(val) { this._cacheInput('flexLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexLtLg(val) { this._cacheInput('flexLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set flexLtXl(val) { this._cacheInput('flexLtXl', val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges('flex', '', (changes) => {
            this._updateStyle(changes.value);
        });
        if (this._container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            this._layoutWatcher = this._container.layout$.subscribe((layout) => {
                // `direction` === null if parent container does not have a `fxLayout`
                this._onLayoutChange(layout);
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    }
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    _onLayoutChange(layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateStyle();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateStyle(value) {
        /** @type {?} */
        let flexBasis = value || this._queryInput('flex') || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        let basis = String(flexBasis).replace(';', '');
        /** @type {?} */
        let parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(basis, this._queryInput('grow'), this._queryInput('shrink'));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    }
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    _validateValue(grow, shrink, basis) {
        /** @type {?} */
        let addFlexToParent = this.layoutConfig.addFlexToParent !== false;
        /** @type {?} */
        let layout = this._getFlexFlowDirection(this.parentElement, addFlexToParent);
        /** @type {?} */
        let direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        /** @type {?} */
        let max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        /** @type {?} */
        let min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        /** @type {?} */
        let hasCalc = String(basis).indexOf('calc') > -1;
        /** @type {?} */
        let usingCalc = hasCalc || (basis == 'auto');
        /** @type {?} */
        let isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        /** @type {?} */
        let hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('em') > -1 ||
            String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
        /** @type {?} */
        let isPx = String(basis).indexOf('px') > -1 || usingCalc;
        /** @type {?} */
        let isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        /** @type {?} */
        let isFixed = !grow && !shrink;
        /** @type {?} */
        let css = {};
        /** @type {?} */
        let clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                /** @type {?} */
                const useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : (useColumnBasisZero ? '0.000000001px' : 'auto');
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(/** @type {?} */ (basis))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': `${grow} ${shrink} ${isValue ? basis : '100%'}`
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': `${grow} ${shrink} ${basis}`
                });
            }
        }
        // Fix for issues 277, 534, and 728
        if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || (isPx && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': `${grow} ${shrink} ${basis}`
                });
            }
        }
        else {
            // Fix for issue 660
            if (this._layout && this._layout.wrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : `${grow} ${shrink} ${css[max]}`) :
                    (hasCalc ? css[min] : `${grow} ${shrink} ${css[min]}`);
            }
        }
        return extendObject(css, { 'box-sizing': 'border-box' });
    }
}
FlexDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [fxFlex],
  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],
  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],
  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],
`
            },] },
];
/** @nocollapse */
FlexDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"],] }] }
];
FlexDirective.propDecorators = {
    shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxShrink',] }],
    grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxGrow',] }],
    flex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex',] }],
    flexXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.xs',] }],
    flexSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.sm',] }],
    flexMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.md',] }],
    flexLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.lg',] }],
    flexXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.xl',] }],
    flexGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.gt-xs',] }],
    flexGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.gt-sm',] }],
    flexGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.gt-md',] }],
    flexGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.gt-lg',] }],
    flexLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.lt-sm',] }],
    flexLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.lt-md',] }],
    flexLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.lt-lg',] }],
    flexLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlex.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
class FlexOrderDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set order(val) { this._cacheInput('order', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set orderXs(val) { this._cacheInput('orderXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set orderSm(val) { this._cacheInput('orderSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderMd(val) { this._cacheInput('orderMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderLg(val) { this._cacheInput('orderLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderXl(val) { this._cacheInput('orderXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderGtXs(val) { this._cacheInput('orderGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderGtSm(val) { this._cacheInput('orderGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderGtMd(val) { this._cacheInput('orderGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderGtLg(val) { this._cacheInput('orderGtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderLtSm(val) { this._cacheInput('orderLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderLtMd(val) { this._cacheInput('orderLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderLtLg(val) { this._cacheInput('orderLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set orderLtXl(val) { this._cacheInput('orderLtXl', val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges('order', '0', (changes) => {
            this._updateWithValue(changes.value);
        });
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput('order') || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        /** @type {?} */
        const val = parseInt(value, 10);
        return { order: isNaN(val) ? 0 : val };
    }
}
FlexOrderDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [fxFlexOrder],
  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],
  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],
  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]
` },] },
];
/** @nocollapse */
FlexOrderDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
FlexOrderDirective.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder',] }],
    orderXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.xs',] }],
    orderSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.sm',] }],
    orderMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.md',] }],
    orderLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.lg',] }],
    orderXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.xl',] }],
    orderGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.gt-xs',] }],
    orderGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.gt-sm',] }],
    orderGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.gt-md',] }],
    orderGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.gt-lg',] }],
    orderLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.lt-sm',] }],
    orderLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.lt-md',] }],
    orderLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.lt-lg',] }],
    orderLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOrder.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
class FlexOffsetDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} _container
     * @param {?} _directionality
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, _container, _directionality, styleUtils) {
        super(monitor, elRef, styleUtils);
        this._container = _container;
        this._directionality = _directionality;
        /**
         * The flex-direction of this element's host container. Defaults to 'row'.
         */
        this._layout = { direction: 'row', wrap: false };
        this._directionWatcher =
            this._directionality.change.subscribe(this._updateWithValue.bind(this));
        this.watchParentFlow();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offset(val) { this._cacheInput('offset', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetXs(val) { this._cacheInput('offsetXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetSm(val) { this._cacheInput('offsetSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetMd(val) { this._cacheInput('offsetMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetLg(val) { this._cacheInput('offsetLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetXl(val) { this._cacheInput('offsetXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetLtSm(val) { this._cacheInput('offsetLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetLtMd(val) { this._cacheInput('offsetLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetLtLg(val) { this._cacheInput('offsetLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetLtXl(val) { this._cacheInput('offsetLtXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetGtXs(val) { this._cacheInput('offsetGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetGtSm(val) { this._cacheInput('offsetGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetGtMd(val) { this._cacheInput('offsetGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetGtLg(val) { this._cacheInput('offsetGtLg', val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * Cleanup
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges('offset', 0, (changes) => {
            this._updateWithValue(changes.value);
        });
    }
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    watchParentFlow() {
        if (this._container) {
            // Subscribe to layout immediate parent direction changes (if any)
            this._layoutWatcher = this._container.layout$.subscribe((layout) => {
                // `direction` === null if parent container does not have a `fxLayout`
                this._onLayoutChange(layout);
            });
        }
    }
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    _onLayoutChange(layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateWithValue();
    }
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput('offset') || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} offset
     * @return {?}
     */
    _buildCSS(offset = '') {
        /** @type {?} */
        let isPercent = String(offset).indexOf('%') > -1;
        /** @type {?} */
        let isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(+offset)) {
            offset = offset + '%';
        }
        /** @type {?} */
        const isRtl = this._directionality.value === 'rtl';
        /** @type {?} */
        const layout = this._getFlexFlowDirection(this.parentElement, true);
        /** @type {?} */
        const horizontalLayoutKey = isRtl ? 'margin-right' : 'margin-left';
        return isFlowHorizontal(layout) ? { [horizontalLayoutKey]: `${offset}` } :
            { 'margin-top': `${offset}` };
    }
}
FlexOffsetDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [fxFlexOffset],
  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],
  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],
  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]
` },] },
];
/** @nocollapse */
FlexOffsetDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
FlexOffsetDirective.propDecorators = {
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset',] }],
    offsetXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.xs',] }],
    offsetSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.sm',] }],
    offsetMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.md',] }],
    offsetLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.lg',] }],
    offsetXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.xl',] }],
    offsetLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.lt-sm',] }],
    offsetLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.lt-md',] }],
    offsetLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.lt-lg',] }],
    offsetLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.lt-xl',] }],
    offsetGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.gt-xs',] }],
    offsetGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.gt-sm',] }],
    offsetGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.gt-md',] }],
    offsetGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexOffset.gt-lg',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
class FlexAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput('align', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput('alignXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput('alignSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput('alignMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput('alignLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput('alignXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput('alignLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput('alignLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput('alignLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput('alignLtXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput('alignGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput('alignGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput('alignGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput('alignGtLg', val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges('align', 'stretch', (changes) => {
            this._updateWithValue(changes.value);
        });
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput('align') || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} align
     * @return {?}
     */
    _buildCSS(align = '') {
        /** @type {?} */
        let css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    }
}
FlexAlignDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: `
  [fxFlexAlign],
  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],
  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],
  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]
`
            },] },
];
/** @nocollapse */
FlexAlignDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
FlexAlignDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.xl',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.lt-xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxFlexAlign.gt-lg',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
class FlexFillDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
        this.elRef = elRef;
        this._applyStyleToElement(FLEX_FILL_CSS);
    }
}
FlexFillDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [fxFill],
  [fxFlexFill]
` },] },
];
/** @nocollapse */
FlexFillDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 * @see https://css-tricks.com/almanac/properties/j/justify-content/
 * @see https://css-tricks.com/almanac/properties/a/align-items/
 * @see https://css-tricks.com/almanac/properties/a/align-content/
 */
class LayoutAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} container
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, container, styleUtils) {
        super(monitor, elRef, styleUtils);
        this._layout = 'row'; // default flex-direction
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            this._layoutWatcher = container.layout$.subscribe(this._onLayoutChange.bind(this));
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput('align', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput('alignXs', val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput('alignSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput('alignMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput('alignLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput('alignXl', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput('alignGtXs', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput('alignGtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput('alignGtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput('alignGtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput('alignLtSm', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput('alignLtMd', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput('alignLtLg', val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput('alignLtXl', val); }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges('align', 'start stretch', (changes) => {
            this._updateWithValue(changes.value);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    }
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? 'row' : this._layout);
    }
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    _onLayoutChange(layout) {
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(x => x === this._layout)) {
            this._layout = 'row';
        }
        /** @type {?} */
        let value = this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || 'row');
    }
    /**
     * @param {?=} align
     * @return {?}
     */
    _buildCSS(align = '') {
        /** @type {?} */
        let css = {};
        let [main_axis, cross_axis] = align.split(' '); // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || 'row',
            'box-sizing': 'border-box'
        });
    }
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?=} align
     * @param {?=} layout
     * @return {?}
     */
    _allowStretching(align = '', layout = '') {
        let [, cross_axis] = align.split(' '); // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': !isFlowHorizontal(layout) ? '100%' : null,
                'max-height': isFlowHorizontal(layout) ? '100%' : null
            });
        }
    }
}
LayoutAlignDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [fxLayoutAlign],
  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],
  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],
  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]
` },] },
];
/** @nocollapse */
LayoutAlignDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
LayoutAlignDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fxLayoutAlign.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
class FlexModule {
}
FlexModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"]],
                declarations: [...ALL_DIRECTIVES],
                exports: [...ALL_DIRECTIVES]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm2015/grid.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm2015/grid.js ***!
  \***********************************************************/
/*! exports provided: GridModule, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GridAlignColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return GridAlignRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GridAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GridAreasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GridAutoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GridColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GridColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GridGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GridRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return GridRowsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY = 'align';
/** @type {?} */
const ROW_DEFAULT = 'stretch';
/** @type {?} */
const COL_DEFAULT = 'stretch';
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
class GridAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY}LtXl`, val); }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY, ROW_DEFAULT, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY) || ROW_DEFAULT;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} align
     * @return {?}
     */
    _buildCSS(align = '') {
        /** @type {?} */
        let css = {};
        let [rowAxis, columnAxis] = align.split(' ');
        // Row axis
        switch (rowAxis) {
            case 'end':
                css['justify-self'] = 'end';
                break;
            case 'center':
                css['justify-self'] = 'center';
                break;
            case 'stretch':
                css['justify-self'] = 'stretch';
                break;
            case 'start':
                css['justify-self'] = 'start';
                break;
            default:
                css['justify-self'] = ROW_DEFAULT; // default row axis
                break;
        }
        // Column axis
        switch (columnAxis) {
            case 'end':
                css['align-self'] = 'end';
                break;
            case 'center':
                css['align-self'] = 'center';
                break;
            case 'stretch':
                css['align-self'] = 'stretch';
                break;
            case 'start':
                css['align-self'] = 'start';
                break;
            default:
                css['align-self'] = COL_DEFAULT; // default column axis
                break;
        }
        return css;
    }
}
GridAlignDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdGridAlign],
  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],
  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],
  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]
` },] },
];
/** @nocollapse */
GridAlignDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridAlignDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGridAlign.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$1 = 'alignColumns';
/** @type {?} */
const DEFAULT_MAIN = 'start';
/** @type {?} */
const DEFAULT_CROSS = 'stretch';
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
class GridAlignColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$1}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$1}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$1}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$1}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$1}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$1}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$1}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$1}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$1}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$1}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$1}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$1}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$1}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$1}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$1] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$1, `${DEFAULT_MAIN} ${DEFAULT_CROSS}`, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$1) || `${DEFAULT_MAIN} ${DEFAULT_CROSS}`;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} align
     * @return {?}
     */
    _buildCSS(align = '') {
        /** @type {?} */
        let css = {};
        let [mainAxis, crossAxis] = align.split(' ');
        // Main axis
        switch (mainAxis) {
            case 'center':
                css['align-content'] = 'center';
                break;
            case 'space-around':
                css['align-content'] = 'space-around';
                break;
            case 'space-between':
                css['align-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['align-content'] = 'space-evenly';
                break;
            case 'end':
                css['align-content'] = 'end';
                break;
            case 'start':
                css['align-content'] = 'start';
                break;
            case 'stretch':
                css['align-content'] = 'stretch';
                break;
            default:
                css['align-content'] = DEFAULT_MAIN; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
                css['align-items'] = 'start';
                break;
            case 'center':
                css['align-items'] = 'center';
                break;
            case 'end':
                css['align-items'] = 'end';
                break;
            case 'stretch':
                css['align-items'] = 'stretch';
                break;
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = DEFAULT_CROSS; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    }
}
GridAlignColumnsDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdAlignColumns],
  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],
  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],
  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],
  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],
  [gdAlignColumns.gt-lg]
` },] },
];
/** @nocollapse */
GridAlignColumnsDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridAlignColumnsDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignColumns.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$2 = 'alignRows';
/** @type {?} */
const DEFAULT_MAIN$1 = 'start';
/** @type {?} */
const DEFAULT_CROSS$1 = 'stretch';
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
class GridAlignRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$2}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$2}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$2}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$2}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$2}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$2}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$2}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$2}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$2}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$2}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$2}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$2}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$2}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$2}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$2] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$2, `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$2) || `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} align
     * @return {?}
     */
    _buildCSS(align = '') {
        /** @type {?} */
        let css = {};
        let [mainAxis, crossAxis] = align.split(' ');
        // Main axis
        switch (mainAxis) {
            case 'center':
            case 'space-around':
            case 'space-between':
            case 'space-evenly':
            case 'end':
            case 'start':
            case 'stretch':
                css['justify-content'] = mainAxis;
                break;
            default:
                css['justify-content'] = DEFAULT_MAIN$1; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
            case 'center':
            case 'end':
            case 'stretch':
                css['justify-items'] = crossAxis;
                break;
            default: // 'stretch'
                // 'stretch'
                css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    }
}
GridAlignRowsDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdAlignRows],
  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],
  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],
  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],
  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],
  [gdAlignRows.gt-lg]
` },] },
];
/** @nocollapse */
GridAlignRowsDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridAlignRowsDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAlignRows.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$3 = 'area';
/** @type {?} */
const DEFAULT_VALUE = 'auto';
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
class GridAreaDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$3}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$3}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$3}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$3}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$3}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$3}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$3}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$3}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$3}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$3}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$3}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$3}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$3}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$3}LtXl`, val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$3] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$3, DEFAULT_VALUE, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$3) || DEFAULT_VALUE;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        return { 'grid-area': value };
    }
}
GridAreaDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdArea],
  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],
  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],
  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]
` },] },
];
/** @nocollapse */
GridAreaDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridAreaDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdArea.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$4 = 'areas';
/** @type {?} */
const DEFAULT_VALUE$1 = 'none';
/** @type {?} */
const DELIMETER = '|';
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
class GridAreasDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$4}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$4}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$4}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$4}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$4}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$4}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$4}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$4}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$4}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$4}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$4}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$4}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$4}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$4}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$4] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$4, DEFAULT_VALUE$1, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$4) || DEFAULT_VALUE$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        /** @type {?} */
        const areas = value.split(DELIMETER).map(v => `"${v.trim()}"`);
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    }
}
GridAreasDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdAreas],
  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],
  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],
  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]
` },] },
];
/** @nocollapse */
GridAreasDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridAreasDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAreas.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$5 = 'autoFlow';
/** @type {?} */
const DEFAULT_VALUE$2 = 'initial';
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
class GridAutoDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$5}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$5}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$5}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$5}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$5}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$5}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$5}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$5}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$5}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$5}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$5}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$5}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$5}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$5}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$5] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$5, DEFAULT_VALUE$2, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$5) || DEFAULT_VALUE$2;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        let [direction, dense] = value.split(' ');
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    }
}
GridAutoDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdAuto],
  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],
  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],
  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]
` },] },
];
/** @nocollapse */
GridAutoDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridAutoDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdAuto.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$6 = 'column';
/** @type {?} */
const DEFAULT_VALUE$3 = 'auto';
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
class GridColumnDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$6}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$6}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$6}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$6}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$6}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$6}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$6}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$6}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$6}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$6}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$6}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$6}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$6}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$6}LtXl`, val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$6] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$6, DEFAULT_VALUE$3, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$6) || DEFAULT_VALUE$3;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        return { 'grid-column': value };
    }
}
GridColumnDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdColumn],
  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],
  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],
  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]
` },] },
];
/** @nocollapse */
GridColumnDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridColumnDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumn.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$7 = 'columns';
/** @type {?} */
const DEFAULT_VALUE$4 = 'none';
/** @type {?} */
const AUTO_SPECIFIER = '!';
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
class GridColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$7}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$7}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$7}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$7}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$7}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$7}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$7}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$7}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$7}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$7}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$7}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$7}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$7}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$7}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$7] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$7, DEFAULT_VALUE$4, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$7) || DEFAULT_VALUE$4;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        /** @type {?} */
        let auto = false;
        if (value.endsWith(AUTO_SPECIFIER)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        let css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        const key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = value;
        return css;
    }
}
GridColumnsDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdColumns],
  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],
  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],
  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]
` },] },
];
/** @nocollapse */
GridColumnsDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridColumnsDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdColumns.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$8 = 'gap';
/** @type {?} */
const DEFAULT_VALUE$5 = '0';
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
class GridGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$8}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$8}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$8}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$8}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$8}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$8}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$8}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$8}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$8}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$8}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$8}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$8}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$8}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$8}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$8] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$8, DEFAULT_VALUE$5, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$8) || DEFAULT_VALUE$5;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-gap': value
        };
    }
}
GridGapDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdGap],
  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],
  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],
  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]
` },] },
];
/** @nocollapse */
GridGapDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridGapDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdGap.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$9 = 'row';
/** @type {?} */
const DEFAULT_VALUE$6 = 'auto';
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
class GridRowDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$9}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$9}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$9}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$9}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$9}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$9}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$9}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$9}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$9}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$9}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$9}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$9}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$9}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$9}LtXl`, val); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$9] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$9, DEFAULT_VALUE$6, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$9) || DEFAULT_VALUE$6;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        return { 'grid-row': value };
    }
}
GridRowDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdRow],
  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],
  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],
  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]
` },] },
];
/** @nocollapse */
GridRowDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridRowDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRow.lt-xl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CACHE_KEY$10 = 'rows';
/** @type {?} */
const DEFAULT_VALUE$7 = 'none';
/** @type {?} */
const AUTO_SPECIFIER$1 = '!';
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <row value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
class GridRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    /**
     * @param {?} monitor
     * @param {?} elRef
     * @param {?} styleUtils
     */
    constructor(monitor, elRef, styleUtils) {
        super(monitor, elRef, styleUtils);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) { this._cacheInput(`${CACHE_KEY$10}`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXs(val) { this._cacheInput(`${CACHE_KEY$10}Xs`, val); }
    /**
     * @param {?} val
     * @return {?}
     */
    set alignSm(val) { this._cacheInput(`${CACHE_KEY$10}Sm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignMd(val) { this._cacheInput(`${CACHE_KEY$10}Md`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLg(val) { this._cacheInput(`${CACHE_KEY$10}Lg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignXl(val) { this._cacheInput(`${CACHE_KEY$10}Xl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtXs(val) { this._cacheInput(`${CACHE_KEY$10}GtXs`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtSm(val) { this._cacheInput(`${CACHE_KEY$10}GtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtMd(val) { this._cacheInput(`${CACHE_KEY$10}GtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignGtLg(val) { this._cacheInput(`${CACHE_KEY$10}GtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtSm(val) { this._cacheInput(`${CACHE_KEY$10}LtSm`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtMd(val) { this._cacheInput(`${CACHE_KEY$10}LtMd`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtLg(val) { this._cacheInput(`${CACHE_KEY$10}LtLg`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set alignLtXl(val) { this._cacheInput(`${CACHE_KEY$10}LtXl`, val); }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val)); }
    ;
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes[CACHE_KEY$10] != null || this._mqActivation) {
            this._updateWithValue();
        }
    }
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._listenForMediaQueryChanges(CACHE_KEY$10, DEFAULT_VALUE$7, (changes) => {
            this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _updateWithValue(value) {
        value = value || this._queryInput(CACHE_KEY$10) || DEFAULT_VALUE$7;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _buildCSS(value = '') {
        /** @type {?} */
        let auto = false;
        if (value.endsWith(AUTO_SPECIFIER$1)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        let css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        const key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = value;
        return css;
    }
}
GridRowsDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: `
  [gdRows],
  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],
  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],
  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]
` },] },
];
/** @nocollapse */
GridRowsDirective.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"] }
];
GridRowsDirective.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows',] }],
    alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.xs',] }],
    alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.sm',] }],
    alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.md',] }],
    alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.lg',] }],
    alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.xl',] }],
    alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.gt-xs',] }],
    alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.gt-sm',] }],
    alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.gt-md',] }],
    alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.gt-lg',] }],
    alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.lt-sm',] }],
    alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.lt-md',] }],
    alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.lt-lg',] }],
    alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdRows.lt-xl',] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gdInline',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ALL_DIRECTIVES = [
    GridAlignDirective,
    GridAlignColumnsDirective,
    GridAlignRowsDirective,
    GridAreaDirective,
    GridAreasDirective,
    GridAutoDirective,
    GridColumnDirective,
    GridColumnsDirective,
    GridGapDirective,
    GridRowDirective,
    GridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
class GridModule {
}
GridModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
                declarations: [...ALL_DIRECTIVES],
                exports: [...ALL_DIRECTIVES]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=grid.js.map


/***/ })

}]);
//# sourceMappingURL=0-es2015.js.map