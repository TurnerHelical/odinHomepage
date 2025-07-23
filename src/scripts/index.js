import "../CSS/reset.css";
import "../CSS/style.css";
import {Page} from "./page.js";
import {Dom} from "./utils.js"

const utils = new Dom();
const onLoad = new Page();

onLoad.init();
window.addEventListener('resize', onLoad.resizeEval);