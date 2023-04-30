(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1426:
/***/ ((module) => {

// Exports
module.exports = {
	"blog": "Blog_blog__o64Wl",
	"blog__wrapper": "Blog_blog__wrapper__PXLBQ",
	"blog__title": "Blog_blog__title__5tqfg",
	"blog__text": "Blog_blog__text__C_UGt",
	"blog__list": "Blog_blog__list__fdMFy"
};


/***/ }),

/***/ 2606:
/***/ ((module) => {

// Exports
module.exports = {
	"blogCard__img": "BlogCard_blogCard__img__oc8_L",
	"blogCard__wrapper": "BlogCard_blogCard__wrapper__WZBTf",
	"blogCard__title": "BlogCard_blogCard__title__C0A7V",
	"blogCard__data": "BlogCard_blogCard__data__kGWDg",
	"blogCard__text": "BlogCard_blogCard__text__N2mTG",
	"blogCard__link": "BlogCard_blogCard__link__UtkKE"
};


/***/ }),

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/screens/blog/blogCard/BlogCard.module.scss
var BlogCard_module = __webpack_require__(2606);
var BlogCard_module_default = /*#__PURE__*/__webpack_require__.n(BlogCard_module);
;// CONCATENATED MODULE: ./src/components/screens/blog/blogCard/BlogCard.tsx





const BlogCard = ({ img , text , caption , date , link  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (BlogCard_module_default()).blogCard,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/blog/" + link,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: img,
                    alt: caption,
                    className: (BlogCard_module_default()).blogCard__img,
                    width: 406,
                    height: 270,
                    priority: true
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (BlogCard_module_default()).blogCard__wrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (BlogCard_module_default()).blogCard__title,
                            children: caption
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (BlogCard_module_default()).blogCard__data,
                            children: date
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (BlogCard_module_default()).blogCard__text,
                            dangerouslySetInnerHTML: {
                                __html: text.substring(0, 200) + "..."
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (BlogCard_module_default()).blogCard__link,
                            children: "Читати більше"
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/components/screens/blog/Blog.module.scss
var Blog_module = __webpack_require__(1426);
var Blog_module_default = /*#__PURE__*/__webpack_require__.n(Blog_module);
;// CONCATENATED MODULE: ./src/components/screens/blog/Blog.tsx




const Blog = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Блог"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "таролог, привороти, обряди, передбачення долі, Таро консультування, вихід з кризи, консультація таролога, гадание, ворожіння, магія, розклад Таро"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Blog_module_default()).blog,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Blog_module_default()).blog__wrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Blog_module_default()).blog__title,
                                children: "Блог"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Blog_module_default()).blog__text,
                                children: "Ласкаво прошу до мого блогу! Тут ви дізнаєтеся про тарологію та її потужний вплив на життя."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Blog_module_default()).blog__list,
                                children: data.map((article)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (Blog_module_default()).blog__item,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCard, {
                                            ...article
                                        })
                                    }, article.id);
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const blog_Blog = (Blog);

// EXTERNAL MODULE: ./src/data-bs.tsx
var data_bs = __webpack_require__(2097);
;// CONCATENATED MODULE: ./src/pages/blog/index.tsx



const BlogPage = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(blog_Blog, {
        data: data
    });
};
/* harmony default export */ const blog = (BlogPage);
async function getStaticProps() {
    const data = data_bs/* dataBs.filter */.L.filter((article)=>{
        const currentDate = new Date();
        const articleDate = new Date(article.date.split(".").reverse().join("."));
        return articleDate < currentDate;
    });
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,97], () => (__webpack_exec__(5144)));
module.exports = __webpack_exports__;

})();