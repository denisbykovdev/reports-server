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
        // if(problems) {
        //     const fullProblems = problems.map(
        //         problem => 
        //         ({
        //             name: problem.name,
        //             id: problem.id,
        //             profession_name: problem.profession_name,
        //             details_of_eclipse: problem.details_of_eclipse,
        //             cost: problem.cost,
        //             standarts: problem.standarts,
        //             solution: problem.solution,
        //             isSavedToReport: false,
        //             image: [TestImage as string]
        //         })
        //     )
        //     res.status(200).send(fullProblems);
        // };
        res.status(200).send(problems);
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
        // if (standarts) {
        //     const fullStandarts = standarts.map(
        //         standart =>
        //         ({
        //             id: standart.id,
        //             text: standart.text,
        //             whatToDo: standart.whatToDo,
        //             fault: standart.fault,
        //             profession: standart.profession,
        //             image: TestImage as string
        //         })
        //     );
        //     res.status(200).send(fullStandarts);
        // };
        res.status(200).send(standarts);
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
    foreignKey: 'area_name',
    as: "problems"
});
Area.hasMany(_Sample__WEBPACK_IMPORTED_MODULE_3__.Sample, {
    foreignKey: 'area_name',
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
/* harmony import */ var _Standart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Standart */ "./server/models/Standart.ts");



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
Sample.hasMany(_Standart__WEBPACK_IMPORTED_MODULE_2__.Standart, {
    foreignKey: 'id',
    as: "standarts"
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