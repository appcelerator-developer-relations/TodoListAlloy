function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.doneWin = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "doneWin",
        title: "Done"
    }), "Window", null);
    var __alloyId0 = [];
    $.__views.doneTable = A$(Ti.UI.createTableView({
        id: "doneTable"
    }), "TableView", $.__views.doneWin);
    $.__views.doneWin.add($.__views.doneTable);
    $.__views.done = A$(Ti.UI.createTab({
        window: $.__views.doneWin,
        title: "Done",
        id: "done"
    }), "Tab", null);
    $.addTopLevelView($.__views.done);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;