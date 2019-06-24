import navBarCtrl from "../controllers/navBarCrtl.js";
import navBarHtml from "./navBar.html.as-url";
console.log("navBarHtml: ", navBarHtml);

function navBarDirective() {
  return {
    templateUrl: navBarHtml,
    controller: navBarCtrl
  };
}
export default navBarDirective;
