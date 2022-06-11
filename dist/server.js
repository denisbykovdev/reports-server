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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const url = `https://reports-server.herokuapp.com`;
// const url = `http://localhost:8000`
const App = () => {
    const [readedReports, setReports] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [readedAreas, setAreas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [readedProblems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [readedStandarts, setStandarts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        (async () => {
            const { data: reports } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}/reports`);
            console.log(`--- client/reports:`, reports);
            setReports(reports);
            const { data: areas } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}/areas`);
            console.log(`--- client/areas:`, areas);
            setAreas(areas);
            const { data: problems } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}/problems`);
            console.log(`--- client/problems:`, problems);
            setProblems(problems);
            const { data: standarts } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}/standarts`);
            console.log(`--- client/standarts:`, standarts);
            setStandarts(standarts);
        })();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        } },
        "reports server/data:",
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Loading ...") },
            readedReports && readedReports.map((report, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: i },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Loading ...") },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                        "report: ",
                        report.report_adress,
                        JSON.stringify(report.report_adress)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(report.areas)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(report.notes))))),
            readedAreas && readedAreas.map((area, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: i },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Loading ...") },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(area.area_name)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(area.problems)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(area.samples))))),
            readedProblems && readedProblems.map((problem, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: i },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Loading ...") },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(problem.name)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(problem.standarts)),
                    problem.image &&
                        problem.image.length > 0 &&
                        problem.image.map((im, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { src: `data:image/png;base64, ${problem.image}`, style: {
                                width: 300,
                                height: 300,
                                objectFit: 'contain'
                            } }))))),
            readedStandarts && readedStandarts.map((standart, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: i },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Loading ...") },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, JSON.stringify(standart.id)),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { src: `data:image/png;base64, ${standart.image}`, style: {
                            width: 300,
                            height: 300,
                            objectFit: 'contain'
                        } })))))));
};


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

/***/ "./server/controllers/areasController.ts":
/*!***********************************************!*\
  !*** ./server/controllers/areasController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ areasController)
/* harmony export */ });
/* harmony import */ var _models_Area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Area */ "./server/models/Area.ts");
/* harmony import */ var _models_Problem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Problem */ "./server/models/Problem.ts");
/* harmony import */ var _models_Sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Sample */ "./server/models/Sample.ts");



async function areasController(req, res) {
    console.log(`--- areasController/req.body:`, req.body);
    // console.log(
    //     `--- areasController/req.user:`, req.user
    // );
    // console.log(
    //     `--- areasController/req.files:`, req.files
    // );
    try {
        const areas = await _models_Area__WEBPACK_IMPORTED_MODULE_0__.Area.findAll({
            include: [
                {
                    model: _models_Problem__WEBPACK_IMPORTED_MODULE_1__.Problem,
                    as: 'problems'
                },
                {
                    model: _models_Sample__WEBPACK_IMPORTED_MODULE_2__.Sample,
                    as: 'samples'
                }
            ]
        });
        console.log(`--- areasController:`, areas);
        if (areas) {
            res.status(200).send(areas);
        }
        ;
    }
    catch (error) {
        console.log(`--- areasController/error:`, error);
        res.status(500).send({ message: 'server error' });
    }
    ;
}
;


/***/ }),

/***/ "./server/controllers/problemsController.ts":
/*!**************************************************!*\
  !*** ./server/controllers/problemsController.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ problemsController)
/* harmony export */ });
/* harmony import */ var _models_Problem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Problem */ "./server/models/Problem.ts");
/* harmony import */ var _models_Standart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Standart */ "./server/models/Standart.ts");
/* harmony import */ var _views_TestImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/TestImage */ "./server/views/TestImage.ts");



async function problemsController(req, res) {
    console.log(`--- problemsController/req.body:`, req.body);
    // console.log(
    //     `--- problemsController/req.user:`, req.user
    // );
    // console.log(
    //     `--- problemsController/req.files:`, req.files
    // );
    try {
        const problems = await _models_Problem__WEBPACK_IMPORTED_MODULE_0__.Problem.findAll({
            include: [
                {
                    model: _models_Standart__WEBPACK_IMPORTED_MODULE_1__.Standart,
                    as: 'standarts'
                }
            ]
        });
        console.log(`--- problemsController:`, problems);
        if (problems) {
            const fullProblems = problems.map(problem => ({
                name: problem.name,
                id: problem.id,
                profession_name: problem.profession_name,
                details_of_eclipse: problem.details_of_eclipse,
                cost: problem.cost,
                standarts: problem.standarts,
                solution: problem.solution,
                isSavedToReport: false,
                image: [_views_TestImage__WEBPACK_IMPORTED_MODULE_2__.TestImage]
            }));
            res.status(200).send(fullProblems);
        }
        ;
    }
    catch (error) {
        console.log(`--- problemsController/error:`, error);
        res.status(500).send({ message: 'server error' });
    }
    ;
}
;


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
/* harmony import */ var _models_Area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Area */ "./server/models/Area.ts");
/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Note */ "./server/models/Note.ts");



async function reportsController(req, res) {
    console.log(`--- reportsController/req.body:`, req.body);
    // console.log(
    //     `--- reportsController/req.user:`, req.user
    // );
    // console.log(
    //     `--- reportsController/req.files:`, req.files
    // );
    try {
        const reports = await _models_Report__WEBPACK_IMPORTED_MODULE_0__.Report.findAll({
            include: [
                {
                    model: _models_Area__WEBPACK_IMPORTED_MODULE_1__.Area,
                    as: 'areas'
                },
                {
                    model: _models_Note__WEBPACK_IMPORTED_MODULE_2__.Note,
                    as: 'notes'
                }
            ]
        });
        console.log(`--- reportsController:`, reports);
        if (reports) {
            res.status(200).send(reports);
        }
        ;
        // const readableStream = new Readable({
        //     objectMode: true,
        //     // highWaterMark: 1200,
        //     async read() {
        //         //string stream
        //         // const reports = await sequelizeConnection.query('select * from reports');
        //         //object stream
        //         const reports = await Report.findAll(
        //             {
        //                 include: [
        //                     {
        //                         model: Area,
        //                         as: 'areas'
        //                     },
        //                     {
        //                         model: Note,
        //                         as: 'notes'
        //                     }
        //                 ]
        //             }
        //         );
        //         // string stream
        //         // let isContinuedStream = this.push(reports);
        //         // if(!isContinuedStream) this.push(null);
        //         //object stream
        //         this.push(reports);
        //         this.push(null);
        //         console.log(
        //             `\n--- readableStream/reports(pure):\n`, reports,
        //             `\n--- readableStreamreports:\n`, this
        //         );
        //     }
        // });
        // const reports = await sequelizeConnection.query('select * from reports');
        // let data: any[] = [];
        //Promisifing stream
        // await new Promise((resolve, reject) => {
        //     readableStream.on("data", (chunk) => {
        //         console.log(
        //             `--- stream/data:`, JSON.stringify(chunk)
        //         );
        //         data.push(chunk);
        //     });
        //     readableStream.on("end", () => {
        //         console.log(
        //             `--- stream/end`
        //         );
        //         resolve;
        //     });
        //     readableStream.on("error", (error) => {
        //         console.log(
        //             `--- stream/error:`, error
        //         );
        //         reject;
        //     });
        // });
        //Async iterable stream
        // try {
        //     for await (const chunk of readableStream) {
        //         // data.push(chunk);
        //         data = [...chunk];
        //         console.log(
        //             `\n--- readableStream/chunk length: ${chunk.bytes}bytes`,
        //             `\n--- readableStream/chunk(pure):\n`, chunk,
        //             `\n--- readableStream/data:\n`, data
        //         );
        //     };
        // } catch (error) {
        //     console.log(
        //             `--- readableStream/error:`, error
        //     );
        // };
        // readableStream.pipe(
        //     res.send(data)
        // );
    }
    catch (error) {
        console.log(`--- reportsController/error:`, error);
        res.status(500).send({ message: 'server error' });
    }
    ;
}
;


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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/app/App */ "./client/app/App.tsx");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_Html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/Html */ "./server/views/Html.tsx");
/* harmony import */ var _client_styledConfig_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/styledConfig/globalStyles */ "./client/styledConfig/globalStyles.ts");







function rootController(req, res) {
    const jsFiles = [];
    fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync('./dist/static/').forEach(file => {
        if (file.split('.').pop() === 'js')
            jsFiles.push(file);
    });
    const context = {};
    if (context.url) {
        res.redirect(context.url);
    }
    res.status(200);
    let didError = false;
    const stream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToPipeableStream)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_Html__WEBPACK_IMPORTED_MODULE_5__["default"], { scripts: jsFiles },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, { context: context, location: req.path },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_styledConfig_globalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_app_App__WEBPACK_IMPORTED_MODULE_3__.App, null))), {
        // onShellReady() {
        //     // The content above all Suspense boundaries is ready.
        //     // If something errored before we started streaming, we set the error code appropriately.
        //     res.statusCode = didError ? 500 : 200;
        //     res.setHeader('Content-type', 'text/html');
        //     stream.pipe(res);
        // },
        // onShellError(error) {
        //     // Something errored before we could complete the shell so we emit an alternative shell.
        //     res.statusCode = 500;
        //     res.send(
        //         '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        //     );
        // },
        onAllReady() {
            // If you don't want streaming, use this instead of onShellReady.
            // This will fire after the entire page content is ready.
            // You can use this for crawlers or static generation.
            // res.statusCode = didError ? 500 : 200;
            // res.setHeader('Content-type', 'text/html');
            // stream.pipe(res);
        },
        onError(err) {
            didError = true;
            console.error(err);
        }
    });
    stream.pipe(res);
}


/***/ }),

/***/ "./server/controllers/standartsController.ts":
/*!***************************************************!*\
  !*** ./server/controllers/standartsController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ standartsController)
/* harmony export */ });
/* harmony import */ var _models_Standart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Standart */ "./server/models/Standart.ts");
/* harmony import */ var _views_TestImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/TestImage */ "./server/views/TestImage.ts");


async function standartsController(req, res) {
    console.log(`--- standartsController/req.body:`, req.body);
    // console.log(
    //     `--- standartsController/req.user:`, req.user
    // );
    // console.log(
    //     `--- standartsController/req.files:`, req.files
    // );
    try {
        const standarts = await _models_Standart__WEBPACK_IMPORTED_MODULE_0__.Standart.findAll();
        console.log(`--- standartsController:`, standarts);
        if (standarts) {
            const fullStandarts = standarts.map(standart => ({
                id: standart.id,
                text: standart.text,
                whatToDo: standart.whatToDo,
                fault: standart.fault,
                profession: standart.profession,
                image: _views_TestImage__WEBPACK_IMPORTED_MODULE_1__.TestImage
            }));
            res.status(200).send(fullStandarts);
        }
        ;
    }
    catch (error) {
        console.log(`--- standartsController/error:`, error);
        res.status(500).send({ message: 'server error' });
    }
    ;
}
;


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
/* harmony import */ var _Sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sample */ "./server/models/Sample.ts");




const Area = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('areas', {
    id: {
        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER),
        autoIncrement: true,
        primaryKey: true
    },
    area_name: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    isSavedToReport: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().BOOLEAN),
    // problems: sequelize.STRING,
    // samples: sequelize.STRING,
    report_id: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().INTEGER)
});
// Area.belongsTo(
//     Report,
//     {
//         foreignKey: "report_id"
//     }
// );
Area.hasMany(_Problem__WEBPACK_IMPORTED_MODULE_2__.Problem, {
    foreignKey: 'id',
    as: "problems"
});
Area.hasMany(_Sample__WEBPACK_IMPORTED_MODULE_3__.Sample, {
    foreignKey: 'id',
    as: 'samples'
});


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
    text: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    // report_id: sequelize.INTEGER
});
// Note.belongsTo(
//     Report,
//     {
//         foreignKey: "report_id"
//     }
// );


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
    isSavedToReport: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().BOOLEAN),
    // area_id: sequelize.INTEGER
});
// Problem.belongsTo(
//     Area,
//     {
//         foreignKey: "area_id"
//     }
// );
Problem.hasMany(_Standart__WEBPACK_IMPORTED_MODULE_2__.Standart, {
    foreignKey: 'id',
    as: "standarts"
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
    foreignKey: "id",
    as: "areas"
});
Report.hasMany(_Note__WEBPACK_IMPORTED_MODULE_3__.Note, {
    foreignKey: 'id',
    as: "notes"
});


/***/ }),

/***/ "./server/models/Sample.ts":
/*!*********************************!*\
  !*** ./server/models/Sample.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sample": () => (/* binding */ Sample)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db */ "./server/services/db.ts");


const Sample = _services_db__WEBPACK_IMPORTED_MODULE_1__.sequelizeConnection.define('problems', {
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
    isSavedToReport: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().BOOLEAN),
    // area_id: sequelize.INTEGER
});


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
    profession: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),
    // problem_id: sequelize.INTEGER
});


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
/* harmony import */ var _controllers_areasController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/areasController */ "./server/controllers/areasController.ts");
/* harmony import */ var _controllers_problemsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/problemsController */ "./server/controllers/problemsController.ts");
/* harmony import */ var _controllers_reportsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/reportsController */ "./server/controllers/reportsController.ts");
/* harmony import */ var _controllers_standartsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/standartsController */ "./server/controllers/standartsController.ts");





const reportsRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
reportsRouter.get('/reports', _controllers_reportsController__WEBPACK_IMPORTED_MODULE_3__["default"]);
reportsRouter.get('/areas', _controllers_areasController__WEBPACK_IMPORTED_MODULE_1__["default"]);
reportsRouter.get('/problems', _controllers_problemsController__WEBPACK_IMPORTED_MODULE_2__["default"]);
reportsRouter.get('/standarts', _controllers_standartsController__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
        paranoid: true
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

/***/ "./server/views/TestImage.ts":
/*!***********************************!*\
  !*** ./server/views/TestImage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestImage": () => (/* binding */ TestImage)
/* harmony export */ });
const TestImage = "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";


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

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

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

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
/* harmony export */   "connection": () => (/* binding */ connection),
/* harmony export */   "serverIo": () => (/* binding */ serverIo)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/root */ "./server/routes/root.ts");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-session */ "cookie-session");
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_session__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! process */ "process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes_reportsRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/reportsRouter */ "./server/routes/reportsRouter.ts");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/db */ "./server/services/db.ts");











const server = express__WEBPACK_IMPORTED_MODULE_0___default()();
const httpServer = http__WEBPACK_IMPORTED_MODULE_8__.createServer(server);
const serverIo = new socket_io__WEBPACK_IMPORTED_MODULE_7__.Server(httpServer, { 'pingTimeout': 200000, 'pingInterval': 25000 });
server.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
server.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({
    extended: false
}));
// passport.serializeUser((user, done) => {
//     done(null, user)
// })
// passport.deserializeUser(
//     (id, done): any => {
//         try {
//             const user = User.findOne({ _id: id })
//             done(null, user)
//         } catch (err) {
//             done(err)
//         }
//     }
// )
server.use(cookie_session__WEBPACK_IMPORTED_MODULE_4___default()({
    name: "session",
    keys: ['cookieKey'],
    maxAge: 24 * 60 * 60 * 100
}));
server.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()());
server.use(passport__WEBPACK_IMPORTED_MODULE_3___default().initialize());
server.use(passport__WEBPACK_IMPORTED_MODULE_3___default().session());
server.use(_routes_reportsRouter__WEBPACK_IMPORTED_MODULE_9__["default"]);
server.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("dist/static"));
server.use(_routes_root__WEBPACK_IMPORTED_MODULE_2__["default"]);
let connection;
async function start() {
    try {
        await (0,_services_db__WEBPACK_IMPORTED_MODULE_10__.connect)();
        httpServer.listen((process__WEBPACK_IMPORTED_MODULE_6___default().env.PORT), () => console.log(`--- server/start:`, (process__WEBPACK_IMPORTED_MODULE_6___default().env.APP_URL), (process__WEBPACK_IMPORTED_MODULE_6___default().env.PORT)));
    }
    catch (error) {
        console.log('--- server/start/error:', error);
        process__WEBPACK_IMPORTED_MODULE_6___default().exit(1);
    }
}
void start();

})();

/******/ })()
;
//# sourceMappingURL=server.js.map