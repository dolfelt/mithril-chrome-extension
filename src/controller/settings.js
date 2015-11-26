import BaseController from "controller/base";
import SettingsView from "view/settings";

class SettingsController extends BaseController {
    constructor() {
        super();
    }
}

export default {
    controller: SettingsController,
    view: SettingsView
};
