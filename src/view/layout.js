class Layout {
    constructor(ctrl, body, opts={}) {
        this.ctrl = ctrl;
        this.body = body;
        this.options = opts;
    }

    menu() {
        var items = [
            {
                "path": "/",
                "name": "Home"
            },
            {
                "path": "/settings",
                "name": "Settings"
            }
        ];
        var current = m.route();
        return m("ul.menu-tabs", items.map(function(i) {
            return m("li", {class: current==i.path ? "selected" : ""}, [
                m("a", {
                    href: i.path,
                    config: m.route
                }, i.name)
            ]);
        }));
    }

    render() {
        return m("div.the-app", [
            this.menu(),
            m(".content", this.body || "No body")
        ]);
    }
}

export default Layout;
