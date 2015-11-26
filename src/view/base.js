import Layout from "view/layout";

class View {

    constructor(ctrl) {
        this.ctrl = ctrl;
    }

    build() {
        return new Layout(
            this.ctrl,
            this.render(),
            this.ctrl.options()
        ).render();
    }
}

export default View;
