import BaseController from "controller/base";
import HomeView from "view/home";

import Chrome from "util/chrome";

class HomeController extends BaseController {
    constructor() {
        super();

        this.data = m.prop([]);

        this.getData().then(function(data) {
            this.data(data);
            m.redraw();
        }.bind(this));
    }

    getData() {
        return new Promise(function(resolve, reject) {
            // Do something here to get data
            resolve([
                {
                    "name": "Daniel"
                },{
                    "name": "Adam"
                },{
                    "name": "Paul"
                },{
                    "name": "Miriam"
                }
            ])
        });
    }
}

export default {
    controller: HomeController,
    view: HomeView
};
