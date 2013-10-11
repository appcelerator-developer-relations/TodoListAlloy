function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "done";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.doneWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "doneWin",
        title: "Done"
    });
    $.__views.doneTable = Ti.UI.createTableView({
        id: "doneTable"
    });
    $.__views.doneWin.add($.__views.doneTable);
    $.__views.done = Ti.UI.createTab({
        window: $.__views.doneWin,
        title: "Done",
        id: "done"
    });
    $.__views.done && $.addTopLevelView($.__views.done);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;