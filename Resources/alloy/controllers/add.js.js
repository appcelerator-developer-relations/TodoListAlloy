function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.add.js = A$(Ti.UI.createView({
        backgroundColor: "white",
        id: "add.js"
    }), "View", null);
    $.addTopLevelView($.__views.add.js);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;