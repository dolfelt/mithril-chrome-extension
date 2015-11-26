import BaseView from "view/base";

class SettingsView extends BaseView {
    render() {
        return m(".body", "Get to adding some...");
    }
}

export default function(ctrl) {
    return new SettingsView(ctrl).build();
}
