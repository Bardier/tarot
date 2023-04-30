(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 9898:
/***/ ((module) => {

// Exports
module.exports = {
	"article": "Article_article__x8rOk",
	"container": "Article_container__qGWSZ",
	"article__wrapper": "Article_article__wrapper__Hau9b",
	"article__img": "Article_article__img__SbRUj",
	"article__title": "Article_article__title__n1Mvr",
	"article__text": "Article_article__text__7RKHk",
	"section": "Article_section__HH_Pr",
	"section-title": "Article_section-title__3sakw",
	"phone__number": "Article_phone__number__YxGPm"
};


/***/ }),

/***/ 3326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data-bs.tsx
var data_bs = __webpack_require__(2097);
// EXTERNAL MODULE: ./src/components/phone/Phone.tsx + 5 modules
var Phone = __webpack_require__(282);
// EXTERNAL MODULE: ./src/components/screens/article/Article.module.scss
var Article_module = __webpack_require__(9898);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/screens/article/Article.tsx





const Article = ({ data  })=>{
    const { img , caption , text  } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: data.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: data.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: data.keywords
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Article_module_default()).article,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Article_module_default()).article__wrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: img,
                                alt: caption,
                                className: (Article_module_default()).article__img,
                                width: 450,
                                height: 300
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Article_module_default()).article__title,
                                children: caption
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Article_module_default()).article__text,
                                dangerouslySetInnerHTML: {
                                    __html: text
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Phone/* default */.Z, {
                                text: "Консультація таролога за номером"
                            })
                        ]
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/blog/[id].tsx



const ArticlePage = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Article, {
        data: data
    });
};
/* harmony default export */ const _id_ = (ArticlePage);
async function getServerSideProps({ params  }) {
    const data = data_bs/* dataBs.find */.L.find((article)=>article.link === params.id);
    return {
        props: {
            data
        }
    };
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,97,282], () => (__webpack_exec__(3326)));
module.exports = __webpack_exports__;

})();