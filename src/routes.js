import Home from "controller/home";
import Settings from "controller/settings";

m.route.mode = "pathname";

export default m.route(document.body, "/", {
    "/": Home,
    "/settings": Settings,
});
