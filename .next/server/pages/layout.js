"use strict";
(() => {
var exports = {};
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Seperate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Seperate() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-4 my-2"
    }));
};


/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/header/DropdownProfile.js



function DropdownProfile() {
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const showDropdown = (e)=>{
        setShow(!show);
    };
    const hideDropdown = (e)=>{
        setShow(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown, {
        align: "end",
        className: "ms-2",
        show: show,
        onMouseEnter: showDropdown,
        onMouseLeave: hideDropdown,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Toggle, {
                variant: "outline-primary",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "icon-surface1-30"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown.Menu, {
                style: {
                    minWidth: "20rem"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                        children: "Adresse email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        type: "email",
                                        id: "emailField",
                                        placeholder: "Adresse email"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                        children: "Mot de passe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        type: "password",
                                        id: "passwordField",
                                        placeholder: "Mot de passe"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Group, {
                                className: "mt-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Check, {
                                    type: "checkbox",
                                    label: "Se souvenir de moi",
                                    id: "rememberMeCheckbox"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-100 d-flex justify-content-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                    type: "submit",
                                    className: "mt-3 w-100",
                                    variant: "primary",
                                    children: "Se Connecter"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Ben je nieuw hier? Schrijf je in!"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Wachtwoord vergeten?"
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/header/DropdownCart.js



function DropdownCart() {
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const showDropdown = (e)=>{
        setShow(!show);
    };
    const hideDropdown = (e)=>{
        setShow(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown, {
        align: "end",
        className: "ms-2",
        show: show,
        onMouseEnter: showDropdown,
        onMouseLeave: hideDropdown,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Toggle, {
                variant: "outline-primary",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "icon-surface1-36"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown.Menu, {
                style: {
                    minWidth: "20rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Header, {
                        children: "MIJN WINKELMAND"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: "\xfcr\xfcnler gelecek"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Divider, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                        className: "btn-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                className: "rounded me-1 btn-sm",
                                variant: "primary",
                                children: "GA NAAR MAND"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                className: "rounded btn-sm",
                                variant: "primary",
                                children: "NU KOPEN"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/header/Search.js



function HeaderSearch() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.InputGroup, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.InputGroup.Text, {
                id: "basic-addon1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "icon-surface1-35"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.FormControl, {
                className: "border-start-0 border-end-0",
                placeholder: "Vindt het nu!",
                "aria-label": "Vindt het nu!",
                "aria-describedby": "basic-addon1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "link",
                className: "border border-start-0 fw-bold",
                id: "basic-addon1",
                children: "ZOEKEN"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.9685e0ff.svg","height":30,"width":293});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/header/Megamenu.js




function Megamenu({ category  }) {
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const showDropdown = (e)=>{
        setShow(!show);
    };
    const hideDropdown = (e)=>{
        setShow(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Button, {
                className: "w-25 text-secondary text-uppercase fw-bold h-100 p-0",
                variant: "link",
                show: show,
                onMouseEnter: showDropdown,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        style: {
                            fontSize: "10px"
                        },
                        className: "icon-surface1-38 pe-2"
                    }),
                    " Aan De Slag"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Offcanvas, {
                className: "mx-auto",
                placement: "top",
                show: show,
                onMouseLeave: hideDropdown,
                style: {
                    minHeight: "580px",
                    top: "80px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Offcanvas.Body, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Container, {
                        id: "left-tabs-example",
                        defaultActiveKey: category[0].id,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                            children: category && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        sm: 3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav, {
                                            variant: "pills",
                                            className: "flex-column",
                                            children: category.map((cat)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
                                                        eventKey: cat.id,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                className: "rounded-circle mx-2",
                                                                height: 20,
                                                                src: cat.icon,
                                                                alt: ""
                                                            }),
                                                            cat.title
                                                        ]
                                                    })
                                                }, cat.id)
                                            )
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        sm: 9,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Content, {
                                            children: category.map((cat)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Pane, {
                                                    eventKey: cat.id,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                                            style: {
                                                                zIndex: "1",
                                                                position: "relative"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                md: 5,
                                                                children: cat.subCategories.map((sub)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "list-unstyled lh-1",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "text-dark",
                                                                                children: sub
                                                                            })
                                                                        })
                                                                    }, sub)
                                                                )
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            className: "position-absolute end-0 bottom-0",
                                                            src: cat.img,
                                                            alt: ""
                                                        })
                                                    ]
                                                }, cat.id)
                                            )
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./data/data.js
const CATEGORIES = [
    {
        id: 1,
        title: "ASSORTIMENT",
        icon: "https://picsum.photos/650/650?random=12",
        img: "https://picsum.photos/650/650?random=1",
        subCategories: [
            "Tuin",
            "Gereedschap",
            "Bouwmaterialen",
            "Hout & schrijnwerk",
            "Verf & houtbescherming",
            "Sanitair",
            "Verlichting",
            "Ijzerwaren",
            "Elektriciteit",
            "Verwarming",
            "Huishouden",
            "Behang & decoratie",
            "Auto & fiets",
            "Keuken",
            "Dierenverzorging",
            "Ontspanning",
            "Keukens Quizzi",
            "Hubo Cadeaukaart",
            "Shop per merk"
        ]
    },
    {
        id: 2,
        title: "TUIN",
        icon: "https://picsum.photos/650/650?random=13",
        img: "https://picsum.photos/650/650?random=2",
        subCategories: [
            "Tuinconstructies & opberging",
            "Tuingereedschap & machines",
            "Tuinmeubelen",
            "Terras & bestrating",
            "Tuinplezier",
            "Tuinverzorging & beplanting",
            "Waterpartijen & sproeiers",
            "Parasols & zonwering",
            "Handtuingereedschap",
            "Pompen",
            "Brievenbussen",
            "Beschermingskledij"
        ]
    },
    {
        id: 3,
        title: "GEREEDSCHAP",
        icon: "https://picsum.photos/650/650?random=14",
        img: "https://picsum.photos/650/650?random=3",
        subCategories: [
            "Gereedschap & machines",
            "Handgereedschap",
            "Gereedschap opbergen",
            "Tuingereedschap & machines",
            "Bouwgereedschappen",
            "Schildersgereedschap",
            "Beschermingskledij",
            "Werktafels",
            "Stellingen",
            "Ladders",
            "Accu's"
        ]
    },
    {
        id: 4,
        title: "BOUWMATERIALEN",
        icon: "https://picsum.photos/650/650?random=15",
        img: "https://picsum.photos/650/650?random=4",
        subCategories: [
            "Metselwerk, cement & beton",
            "Dakbedekking",
            "Vloeren",
            "Waterafvoer",
            "Isolatie",
            "Profielen, platen & accessoires",
            "Plafond- & wandbekleding",
            "Transportmiddelen",
            "Siliconen, kitten & reinigers",
            "Bouwgereedschappen",
            "Dekzeilen",
            "Lijmen",
            "Vulmiddelen",
            "Ventilatie",
            "Betonijzers & bewapeningsnetten",
            "Tapes & folies",
            "Beschermingskledij",
            "Gevelbekleding",
            "Alleszuigers",
            "Plaatmateriaal",
            "Pleisters"
        ]
    },
    {
        id: 5,
        title: "HOUT",
        icon: "https://picsum.photos/650/650?random=16",
        img: "https://picsum.photos/650/650?random=5",
        subCategories: [
            "Deuren & ramen",
            "Plaatmateriaal",
            "Laminaat , plinten & accessoires",
            "Trappen",
            "Traprenovatie",
            "Kinderbeveiliging"
        ]
    },
    {
        id: 6,
        title: "VERF & HOUTBESCHERMING",
        icon: "https://picsum.photos/650/650?random=17",
        img: "https://picsum.photos/650/650?random=6",
        subCategories: [
            "Verf",
            "Schildersgereedschap",
            "Houtbescherming",
            "Afbijtmiddelen & reinigers"
        ]
    },
    {
        id: 7,
        title: "SANITAIR",
        icon: "https://picsum.photos/650/650?random=18",
        img: "https://picsum.photos/650/650?random=7",
        subCategories: [
            "WC's & accessoires",
            "Douches",
            "Kranen",
            "Lavabo's",
            "Technisch sanitair",
            "Ligbaden",
            "Badkamerkasten",
            "Badkamer accessoires",
            "CV & accessoires",
            "Waterbehandeling"
        ]
    },
    {
        id: 8,
        title: "ELEKTRICITEIT",
        icon: "https://picsum.photos/650/650?random=19",
        img: "https://picsum.photos/650/650?random=8",
        subCategories: [
            "Installatiemateriaal",
            "Schakelmateriaal",
            "Verlengkabels",
            "Beveiliging",
            "Batterijen & laders",
            "Multimedia"
        ]
    },
    {
        id: 9,
        title: "IJZERWAREN",
        icon: "https://picsum.photos/650/650?random=20",
        img: "https://picsum.photos/650/650?random=9",
        subCategories: [
            "Bevestigingsmateriaal",
            "Profielen, platen & accessoires",
            "Sloten & scharnieren",
            "Meubelbeslag",
            "Stellingen",
            "Ladders",
            "Brievenbussen",
            "Huisnummers",
            "Kluizen"
        ]
    },
    {
        id: 10,
        title: "VERLICHTING",
        icon: "https://picsum.photos/650/650?random=21",
        img: "https://picsum.photos/650/650?random=10",
        subCategories: [
            "Buitenverlichting",
            "Lampen",
            "Binnenverlichting",
            "Stralers & looplampen",
            "Accessoires lampen"
        ]
    },
    {
        id: 11,
        title: "VERWARMING",
        icon: "https://picsum.photos/650/650?random=22",
        img: "https://picsum.photos/650/650?random=11",
        subCategories: [
            "Buitenverwarming",
            "Pelletkachels",
            "Houtkachels",
            "Gaskachels",
            "Petroleumkachels",
            "Accessoires kachels",
            "CV & accessoires",
            "Ventilatie",
            "Brandstoffen",
            "Rookafvoer",
            "Luchtbevochtigers & -ontvochtigers"
        ]
    }
];

;// CONCATENATED MODULE: ./components/header/Header.js









function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
        bg: "white",
        variant: "dark",
        expand: "lg",
        className: "py-0 shadow-sm",
        sticky: "top",
        style: {
            zIndex: "1046",
            height: "80px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            className: "h-100",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    href: "#home",
                    className: "mr-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: logo,
                        className: "",
                        style: {
                            width: '200px'
                        },
                        alt: "Megahoreca"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar.Collapse, {
                    className: "h-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Megamenu, {
                            category: CATEGORIES
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-75 d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderSearch, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownProfile, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownCart, {})
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./components/footer/FooterTopCategory.js

function FooterTopCategory({ category  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "list-unstyled text-black-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "fw-bold",
                children: category.title
            }),
            category.subCategories.map((subCategory)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#.",
                        className: "text-secondary",
                        children: subCategory
                    })
                }, subCategory)
            )
        ]
    }));
};

;// CONCATENATED MODULE: ./components/footer/FooterSectionTop.js







function FooterSectionTop() {
    return(/*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                    className: "border-0 pe-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                        category: CATEGORIES[0]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                    className: "border-0 pe-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[1]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[2]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                    className: "border-0 pe-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[3]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[4]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                    className: "border-0 pe-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[5]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[6]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[7]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                    className: "border-0 pe-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[8]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[9]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterTopCategory, {
                            category: CATEGORIES[10]
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./images/help-noding.png
/* harmony default export */ const help_noding = ({"src":"/_next/static/media/help-noding.42f3a59b.png","height":309,"width":181,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR4nAGoAFf/AaCUgADnACkb8M+7wejr6uyhsrI5AX58kgAL9shASTpNv9DMyuVeiI8xAQBUpQ1iQi1ichTUkNnd3NP4GCpcAQB/07wA8fFDZgjr/Ugm+gOYs8q7AaWnvume2gkWveMA/qA7+AIk98X3AfDItLV0sfpKnOkT/WYW5wNyN/rgAei6qXOxzPOMZ8gO/gv53AEvAN48ARodKo2RbVdywc7c/JSoygQYDNlVbBFWdEQ+XJ4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/footer/FooterSectionBottom.js




function FooterSectionBottom() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-primary pt-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                className: "text-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                    className: "g-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            lg: 12,
                            xl: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: "g-0 mb-md-0 mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xl: 5,
                                        md: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            className: "img-fluid w-100 d-none d-xl-block pe-3",
                                            alt: "Assistant",
                                            src: help_noding
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        md: 7,
                                        className: "pt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "h4 mb-0",
                                                children: "Hulp nodig?"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Neem contact op met ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "onze klantenservice"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pt-3",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                            sm: 2,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                style: {
                                                                    fontSize: "50px",
                                                                    float: "left"
                                                                },
                                                                className: "icon-surface1-29"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                            sm: 10,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "h4 mb-0",
                                                                    children: "+800 243 00 00 "
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:'hello@megahoreca.com'",
                                                                    children: "hello@megahoreca.com"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "pt-3 me-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "h5 mb-0",
                                                        children: "Aanmelden nieuwsbrief"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "small",
                                                        children: "Altijd als eerste op de hoogte."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.InputGroup, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.InputGroup.Text, {
                                                                id: "basic-addon1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-surface1-56"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.FormControl, {
                                                                className: "border-start-0",
                                                                placeholder: "Vindt het nu!",
                                                                "aria-label": "Vindt het nu!",
                                                                "aria-describedby": "basic-addon1"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                        type: "submit",
                                                        variant: "dark",
                                                        className: "mt-2",
                                                        children: "Aanmelden"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: 4,
                            xl: 2,
                            className: "pt-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-unstyled",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "h6 fw-bold pb-2",
                                        children: "MegaHoreca.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Over ons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Nieuws van ons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Mededeling"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Gebruikershandleiding"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Mijn account"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Help"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Carri\xe8remogelijkheden"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Bedrijfsblog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Bedrijfsnieuws"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: 4,
                            xl: 2,
                            className: "pt-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-unstyled",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "h6 fw-bold pb-2",
                                        children: "Klantenservice"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Bestelling"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Betaling"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Verzending & bezorging"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Retouren & service"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Telefoon reparatie"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Privacy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#.",
                                            children: "Inloggen"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                            md: 4,
                            xl: 2,
                            className: "pt-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "h6 fw-bold pb-2",
                                            children: "Zakelijk"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: "Zakelijke klanten"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: "Affiliate programma"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: "Waardebonnen"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled pt-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                style: {
                                                    fontSize: "14px"
                                                },
                                                className: "icon-surface1-62"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                style: {
                                                    fontSize: "24px"
                                                },
                                                className: "icon-surface1-58"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                style: {
                                                    fontSize: "18px"
                                                },
                                                className: "icon-surface1-61"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                fluid: true,
                className: "bg-dark text-white py-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 3,
                                className: "text-md-start text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-0",
                                    children: "\xa9 2022 MegaHoreca"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 6,
                                className: "text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-inline mb-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "list-inline-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: "Privacy & Cookies"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "list-inline-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: "Terms & Conditions"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "list-inline-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: "Accessibility"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 3,
                                className: "text-md-end text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-inline mb-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "list-inline-item pe-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-surface1-46"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "list-inline-item pe-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-surface1-42"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "list-inline-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#.",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-surface1-34"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/stuff/Seperate.js
var Seperate = __webpack_require__(897);
;// CONCATENATED MODULE: ./components/footer/Footer.js





function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FooterSectionTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Seperate/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterSectionBottom, {})
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/layout.js




function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(530)));
module.exports = __webpack_exports__;

})();