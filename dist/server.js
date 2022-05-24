/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/app/App.tsx":
/*!****************************!*\
  !*** ./client/app/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const App = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppContainer, null, "reports server"));
const AppContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div) `
    position: relative;
`;


/***/ }),

/***/ "./client/styledConfig/fontsCSS.ts":
/*!*****************************************!*\
  !*** ./client/styledConfig/fontsCSS.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontsCSS": () => (/* binding */ fontsCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const fontsCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__.css `
    @font-face {
        font-family: "Roboto"; 
        src: url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.eot"); 
        src: url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.eot?#iefix") format("embedded-opentype"), 
        url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.woff") format("woff"), url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.svg#Roboto") format("svg"); 
    }
`;


/***/ }),

/***/ "./client/styledConfig/globalStyles.ts":
/*!*********************************************!*\
  !*** ./client/styledConfig/globalStyles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontsCSS */ "./client/styledConfig/fontsCSS.ts");


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle `
    ${_fontsCSS__WEBPACK_IMPORTED_MODULE_1__.fontsCSS}
    
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-overflow-style: none;
        scrollbar-width: none;
        overscroll-behavior: none;
        overflow: hidden;
    } 

    body::-webkit-scrollbar {
        display: none;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);


/***/ }),

/***/ "./server/controllers/reportsController.ts":
/*!*************************************************!*\
  !*** ./server/controllers/reportsController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reportsController)
/* harmony export */ });
/* harmony import */ var _models_Report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Report */ "./server/models/Report.ts");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_1__);


// import * as sequelizeStream from 'node-sequelize-stream';
// import { sequelizeConnection } from '../services/db';
// sequelizeStream(sequelizeConnection, 50, true);
async function reportsController(req, res) {
    console.log(`--- reportsController/req.body:`, req.body);
    console.log(`--- reportsController/req.user:`, req.user);
    console.log(`--- reportsController/req.files:`, req.files);
    try {
        const stream = new stream__WEBPACK_IMPORTED_MODULE_1__.Writable();
        const data = [];
        stream.on('data', (chunk) => {
            data.push(chunk);
        });
        stream.on('end', () => {
            new Promise(async (resolve) => {
                const reports = await _models_Report__WEBPACK_IMPORTED_MODULE_0__.Report.findAll();
                resolve(reports);
            });
        });
        // const stream = Report. findAllWithStream()
        stream.pipe(res);
    }
    catch (error) {
        res.status(500).send({ message: 'server error' });
    }
}


/***/ }),

/***/ "./server/controllers/rootController.tsx":
/*!***********************************************!*\
  !*** ./server/controllers/rootController.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rootController)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_app_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/app/App */ "./client/app/App.tsx");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_Html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/Html */ "./server/views/Html.tsx");
/* harmony import */ var _client_styledConfig_globalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client/styledConfig/globalStyles */ "./client/styledConfig/globalStyles.ts");








function rootController(req, res) {
    const jsFiles = [];
    fs__WEBPACK_IMPORTED_MODULE_5___default().readdirSync('./dist/static/').forEach(file => {
        if (file.split('.').pop() === 'js')
            jsFiles.push(file);
    });
    const context = {};
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
    const staticMarkup = sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, { context: context, location: req.path },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_styledConfig_globalStyles__WEBPACK_IMPORTED_MODULE_7__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_app_App__WEBPACK_IMPORTED_MODULE_4__.App, null)));
    const staticStyles = sheet.getStyleElement();
    res.status(200);
    const stream = sheet.interleaveWithNodeStream((0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToNodeStream)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_Html__WEBPACK_IMPORTED_MODULE_6__["default"], { scripts: jsFiles, styles: staticStyles }, staticMarkup)));
    stream.pipe(res);
}


/***/ }),

/***/ "./server/models/Area.ts":
/*!*******************************!*\
  !*** ./server/models/Area.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Area": () => (/* binding */ Area)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db */ "./server/services/db.ts");
/* harmony import */ var _Problem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Problem */ "./server/models/Problem.ts");



const Area = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('areas', {
    id: {
        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER),
        autoIncrement: true,
        primaryKey: true
    },
    area_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    isSavedToReport: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().BOOLEAN),
    // problems: sequelize.STRING,
    samples: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING)
});
Area.hasMany(_Problem__WEBPACK_IMPORTED_MODULE_2__.Problem, {
    foreignKey: 'id'
});
// Area.belongsToMany(
//     Problem, 
//     { 
//         through: AreaProblem,
//         foreignKey: 'problem_id',
//         // type: sequelize.INTEGER
//         as: 'problems'
//     }
// );
// Problem.belongsToMany(
//     Area, 
//     { 
//         through: AreaProblem,
//         foreignKey: 'area_id',
//         // foreignKeyConstraint: false,
//         // targetKey: 'id',
//         // as: 'areas'
//     }
// );


/***/ }),

/***/ "./server/models/Note.ts":
/*!*******************************!*\
  !*** ./server/models/Note.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db */ "./server/services/db.ts");


const Note = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('notes', {
    id: {
        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER.UNSIGNED),
        autoIncrement: true,
        primaryKey: true
    },
    text: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING)
});


/***/ }),

/***/ "./server/models/Problem.ts":
/*!**********************************!*\
  !*** ./server/models/Problem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Problem": () => (/* binding */ Problem)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db */ "./server/services/db.ts");
/* harmony import */ var _Standart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Standart */ "./server/models/Standart.ts");



const Problem = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('problems', {
    id: {
        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER),
        autoIncrement: true,
        primaryKey: true
    },
    name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    details_of_eclipse: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    image: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    solution: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    cost: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    // standarts: sequelize.STRING,
    profession_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    timeStamp: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    isSavedToReport: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().BOOLEAN)
});
Problem.hasMany(_Standart__WEBPACK_IMPORTED_MODULE_2__.Standart, {
    foreignKey: 'id'
});


/***/ }),

/***/ "./server/models/Report.ts":
/*!*********************************!*\
  !*** ./server/models/Report.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Report": () => (/* binding */ Report)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db */ "./server/services/db.ts");
/* harmony import */ var _Area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Area */ "./server/models/Area.ts");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Note */ "./server/models/Note.ts");




const Report = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('reports', {
    id: {
        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER.UNSIGNED),
        autoIncrement: true,
        primaryKey: true
    },
    report_related_documents: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    report_adress: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    report_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    status: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    previous_test_id: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    examination_date: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    test_time: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    customer_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    tester_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    test_relevance: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    test_address_city: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    test_address: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    report_post_address_city: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    report_post_address: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    phone_number: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    email: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    other_email: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    visit_escort: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    customer_full_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    opposite_side: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    customer_logo: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    vat_in_percent: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    form: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    floor: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    technical_floor: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    systems: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    number_of_shared_buildings: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    parking_levels: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    roof_levels: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    upper_reservoir: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    bottom_reservoir: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    shared_systems_with_additional_buildings: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    com_areas_in_test: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    exam_comm_areas: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    resume: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    is_resume_template: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    more_systems: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    timeStamp: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    //optional if areas have no assosiations with reports
    // areas: sequelize.STRING,
    // notes: sequelize.STRING
});
Report.hasMany(_Area__WEBPACK_IMPORTED_MODULE_2__.Area, {
    foreignKey: "id"
});
Report.hasMany(_Note__WEBPACK_IMPORTED_MODULE_3__.Note, {
    foreignKey: 'id'
});
// Report.hasMany(
//     AreaProblem,
//     {
//         foreignKey: 'id'
//     }
// );
// Area.belongsTo(
//     Report,
//     {
//         foreignKey: "id",
//         as: 'areas',
//         targetKey: 'id'
//     }
// );


/***/ }),

/***/ "./server/models/Standart.ts":
/*!***********************************!*\
  !*** ./server/models/Standart.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Standart": () => (/* binding */ Standart)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db */ "./server/services/db.ts");


const Standart = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('standarts', {
    id: {
        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER.UNSIGNED),
        autoIncrement: true,
        primaryKey: true
    },
    text: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    image: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    whatToDo: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    fault: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    profession: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING)
});


/***/ }),

/***/ "./server/models/User.ts":
/*!*******************************!*\
  !*** ./server/models/User.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "userSchema": () => (/* binding */ userSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    // _id: Types.ObjectId,
    phone: {
        type: String,
        required: true,
        unique: true
    },
    isNewUser: {
        type: Boolean,
        require: false
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    profileName: {
        type: String
    },
    inviter: {
        type: String
    },
    verified: {
        type: Boolean,
    },
    status: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false,
        unique: true
    },
    avatarId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId || String,
        required: false
    },
    avatarName: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }
});
// export interface UserDocument extends Document {
//     fullName: string;
//     createdAt: Date;
//     updatedAt: Date;
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', userSchema));


/***/ }),

/***/ "./server/routes/reportsRouter.ts":
/*!****************************************!*\
  !*** ./server/routes/reportsRouter.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_reportsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/reportsController */ "./server/controllers/reportsController.ts");


const reportsRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
reportsRouter.get('/reports', _controllers_reportsController__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportsRouter);


/***/ }),

/***/ "./server/routes/root.ts":
/*!*******************************!*\
  !*** ./server/routes/root.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_rootController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/rootController */ "./server/controllers/rootController.tsx");


const rootRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
rootRouter.get('/*', _controllers_rootController__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootRouter);


/***/ }),

/***/ "./server/services/db.ts":
/*!*******************************!*\
  !*** ./server/services/db.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "sequelizeConnection": () => (/* binding */ sequelizeConnection)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);

const sequelizeConnection = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(`mysql://report:e^qf-wt2g5wEGH_RWGE(F=WF-FEF75WT4H@92.205.21.129:3306/reports`, {
    dialect: "mysql",
    define: {
        timestamps: false,
        // paranoid: true,
    }
});
async function connect() {
    try {
        await sequelizeConnection.sync({
        // alter: true
        });
        try {
            await sequelizeConnection.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    catch (error) {
        console.error('Unable to sync with the database:', error);
    }
}


/***/ }),

/***/ "./server/views/Html.tsx":
/*!*******************************!*\
  !*** ./server/views/Html.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Html = ({ children, scripts, styles, title }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", { charSet: "UTF-8" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", { name: "viewport", content: "width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title),
            styles),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "root" }, children),
            scripts && scripts.length > 0 && scripts.map((script, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", { src: `/${script}`, key: index }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Html);


/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("cookie-session");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./server/server.tsx ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverIo": () => (/* binding */ serverIo)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/root */ "./server/routes/root.ts");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/User */ "./server/models/User.ts");
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-session */ "cookie-session");
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_session__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! process */ "process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes_reportsRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/reportsRouter */ "./server/routes/reportsRouter.ts");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/db */ "./server/services/db.ts");












const server = express__WEBPACK_IMPORTED_MODULE_0___default()();
const httpServer = http__WEBPACK_IMPORTED_MODULE_9__.createServer(server);
const serverIo = new socket_io__WEBPACK_IMPORTED_MODULE_8__.Server(httpServer, { 'pingTimeout': 200000, 'pingInterval': 25000 });
server.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
server.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({
    extended: false
}));
passport__WEBPACK_IMPORTED_MODULE_3___default().serializeUser((user, done) => {
    done(null, user);
});
passport__WEBPACK_IMPORTED_MODULE_3___default().deserializeUser((id, done) => {
    try {
        const user = _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({ _id: id });
        done(null, user);
    }
    catch (err) {
        done(err);
    }
});
server.use(cookie_session__WEBPACK_IMPORTED_MODULE_5___default()({
    name: "session",
    keys: ['cookieKey'],
    maxAge: 24 * 60 * 60 * 100
}));
server.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()());
server.use(passport__WEBPACK_IMPORTED_MODULE_3___default().initialize());
server.use(passport__WEBPACK_IMPORTED_MODULE_3___default().session());
server.use(_routes_reportsRouter__WEBPACK_IMPORTED_MODULE_10__["default"]);
server.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("dist/static"));
server.use(_routes_root__WEBPACK_IMPORTED_MODULE_2__["default"]);
async function start() {
    try {
        await (0,_services_db__WEBPACK_IMPORTED_MODULE_11__.connect)();
        httpServer.listen((process__WEBPACK_IMPORTED_MODULE_7___default().env.PORT), () => console.log(`--- server/start/port: ${(process__WEBPACK_IMPORTED_MODULE_7___default().env.PORT)}`));
    }
    catch (error) {
        console.log('--- server/start/error:', error);
        process__WEBPACK_IMPORTED_MODULE_7___default().exit(1);
    }
}
void start();

})();

/******/ })()
;
//# sourceMappingURL=server.js.map