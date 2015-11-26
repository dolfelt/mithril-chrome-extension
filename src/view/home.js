import BaseView from "view/base";

class HomeView extends BaseView {

    get dataView() {
        return this.ctrl.data().map(function(item) {
            return m("li.name", item.name);
        });
    }

    render() {
        return m(".body", [
            m("ul", this.dataView)
        ]);
    }
}

export default function(ctrl) {
    return new HomeView(ctrl).build();
}
