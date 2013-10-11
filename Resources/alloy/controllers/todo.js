function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "todo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.todoWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "todoWin",
        title: "Todo"
    });
    $.__views.todoTable = Ti.UI.createTableView({
        id: "todoTable"
    });
    $.__views.todoWin.add($.__views.todoTable);
    $.__views.todo = Ti.UI.createTab({
        window: $.__views.todoWin,
        title: "Todo",
        id: "todo"
    });
    $.__views.todo && $.addTopLevelView($.__views.todo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = require("collection");
    var addBtn = Ti.UI.createButton({
        title: "+"
    });
    addBtn.addEventListener("click", function() {
        var controller = Alloy.createController("add");
        controller.addWin.open();
    });
    $.todoWin.setRightNavButton(addBtn);
    $.todoWin.addEventListener("focus", function() {
        todos.fetch();
    });
    $.todoTable.updateContent = function(_rows) {
        var rows = [], i = 0, len = _rows.length;
        for (;len > i; i++) rows.push(Ti.UI.createTableViewRow(_rows[i]));
        this.setData(rows);
    };
    $.todoTable.addEventListener("click", function(e) {
        Ti.API.info("Title: " + e.rowData.title);
    });
    Ti.App.addEventListener("app:update_list", function(_collection) {
        Ti.API.info("UPDATE LIST: " + JSON.stringify(_collection.todos));
        $.todoTable.updateContent(_collection.todos);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;