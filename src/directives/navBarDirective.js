import navBarHtml from "./navBar.html.as-url";

function navBarDirective() {
  return {
    templateUrl: navBarHtml,
    controller: "navBarCtrl"
  };
}
export default navBarDirective;
