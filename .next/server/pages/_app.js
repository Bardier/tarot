(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 1551:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__oC6Dv",
	"footer__text": "Footer_footer__text__mZqQq"
};


/***/ }),

/***/ 414:
/***/ ((module) => {

// Exports
module.exports = {
	"menu-open": "Header_menu-open__XhTXD",
	"header": "Header_header__uDZjd",
	"nav__list": "Header_nav__list__7uBzL",
	"scrollTop": "Header_scrollTop__qJfO5",
	"nav__link": "Header_nav__link__hsmtg",
	"active": "Header_active__JybjK",
	"nav__toggle": "Header_nav__toggle__3T9Zf"
};


/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/style.scss
var style = __webpack_require__(8490);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
// EXTERNAL MODULE: ./src/components/layout/header/Header.module.scss
var Header_module = __webpack_require__(414);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/layout/header/Header.tsx





const Header = ()=>{
    const [isUp, setIsUp] = (0,external_react_.useState)(false);
    const handleScroll = ()=>{
        const scrollTop = document.documentElement.scrollTop;
        setIsUp(scrollTop > 500);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("click", (e)=>{
            const target = e.target;
            if (target && document.body.classList.contains((Header_module_default())["menu-open"]) && !target.closest(`.${(Header_module_default()).nav__toggle}`)) {
                document.body.classList.remove((Header_module_default())["menu-open"]);
            }
        });
        return ()=>window.removeEventListener("click", (e)=>{
                const target = e.target;
                if (target && document.body.classList.contains((Header_module_default())["menu-open"]) && !target.closest(`.${(Header_module_default()).nav__toggle}`)) {
                    document.body.classList.remove((Header_module_default())["menu-open"]);
                }
            });
    }, []);
    const menuHandler = ()=>{
        document.body.classList.toggle((Header_module_default())["menu-open"]);
    };
    const scrollToSection = (sectionName)=>{
        setTimeout(()=>{
            const target = document.querySelector(`#${sectionName}`);
            if (target) {
                external_react_scroll_namespaceObject.animateScroll.scrollTo(target.getBoundingClientRect().top);
            }
        }, 200);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Header_module_default()).nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: `${(Header_module_default()).nav__list} nav__list`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).nav__item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: (Header_module_default()).nav__link,
                                        onClick: ()=>scrollToSection("about"),
                                        children: "Про мене"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).nav__item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: (Header_module_default()).nav__link,
                                        onClick: ()=>scrollToSection("services"),
                                        children: "Послуги"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).nav__item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: (Header_module_default()).nav__link,
                                        onClick: ()=>scrollToSection("rites"),
                                        children: "Обряди"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).nav__item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog",
                                        className: (Header_module_default()).nav__link,
                                        children: "Блог"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Header_module_default()).nav__toggle} nav__toggle`,
                        onClick: menuHandler,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    })
                ]
            }),
            isUp && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).scrollTop,
                onClick: ()=>external_react_scroll_namespaceObject.animateScroll.scrollToTop(),
                children: "В гору"
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

// EXTERNAL MODULE: ./src/components/layout/footer/Footer.module.scss
var Footer_module = __webpack_require__(1551);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/layout/footer/Fotter.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: (Footer_module_default()).footer__text,
            children: "Всі права захищенні @ 2023 Ольга"
        })
    });
};
/* harmony default export */ const Fotter = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Fotter, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



const App = ({ Component , pageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 8490:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(76)));
module.exports = __webpack_exports__;

})();