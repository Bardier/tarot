exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 7651:
/***/ ((module) => {

// Exports
module.exports = {
	"messengers__list": "Messengers_messengers__list__KEqS6"
};


/***/ }),

/***/ 3070:
/***/ ((module) => {

// Exports
module.exports = {
	"phone": "Phone_phone__PtRlK",
	"phone__wrapper": "Phone_phone__wrapper__qX31n",
	"phone__number": "Phone_phone__number__FzFIw"
};


/***/ }),

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ phone_Phone)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/img/icons/phone.svg
/* harmony default export */ const phone = ({"src":"/_next/static/media/phone.9086a620.svg","height":40,"width":40,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/img/icons/viber.svg
/* harmony default export */ const viber = ({"src":"/_next/static/media/viber.d6e04100.svg","height":40,"width":40,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/img/icons/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.62c98b2f.svg","height":40,"width":40,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/img/icons/whatsapp.svg
/* harmony default export */ const whatsapp = ({"src":"/_next/static/media/whatsapp.07fcea8b.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/messengers/Messengers.module.scss
var Messengers_module = __webpack_require__(7651);
var Messengers_module_default = /*#__PURE__*/__webpack_require__.n(Messengers_module);
;// CONCATENATED MODULE: ./src/components/messengers/Messengers.tsx







const Messengers = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Messengers_module_default()).messengers,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (Messengers_module_default()).messengers__list,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Messengers_module_default()).messengers__item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "tel:+380507823854",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: phone,
                            alt: "Phone icon",
                            width: "40",
                            height: "40"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Messengers_module_default()).messengers__item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "viber://chat?number=%2B380507823854",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: viber,
                            alt: "Viber icon",
                            width: "40",
                            height: "40"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Messengers_module_default()).messengers__item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "tg://addcontact?phone=507823854",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: telegram,
                            alt: "Telegram icon",
                            width: "40",
                            height: "40"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (Messengers_module_default()).messengers__item,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "whatsapp://send?phone=+380507823854",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: whatsapp,
                            alt: "WhatsUp icon",
                            width: "40",
                            height: "40"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const messengers_Messengers = (Messengers);

// EXTERNAL MODULE: ./src/components/phone/Phone.module.scss
var Phone_module = __webpack_require__(3070);
var Phone_module_default = /*#__PURE__*/__webpack_require__.n(Phone_module);
;// CONCATENATED MODULE: ./src/components/phone/Phone.tsx




const Phone = ({ text  })=>{
    const [messengers, setMessengers] = (0,external_react_.useState)(false);
    const messengersHandler = ()=>{
        setMessengers((prev)=>!prev);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `${(Phone_module_default()).phone} section`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "section-title",
                    children: text
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Phone_module_default()).phone__wrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `${(Phone_module_default()).phone__number} text-hover`,
                            onClick: messengersHandler,
                            children: "+380 50 782 38 54"
                        }),
                        messengers && /*#__PURE__*/ jsx_runtime_.jsx(messengers_Messengers, {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const phone_Phone = (Phone);


/***/ })

};
;