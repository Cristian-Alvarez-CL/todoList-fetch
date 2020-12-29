//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free";

//include your index.scss file into the bundle
import "./styles/index.scss";

//import your own components
import { InputToDo } from "./js/component/inputToDo.js";
import injectContext from "./js/store/appContex";

//render your react application
const LoQueSea = injectContext(InputToDo);
ReactDOM.render(<LoQueSea />, document.getElementById('root'));