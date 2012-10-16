function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.todoWin = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "todoWin",
        title: "Todo"
    }), "Window", null);
    var __alloyId6 = [];
    $.__views.todoTable = A$(Ti.UI.createTableView({
        id: "todoTable"
    }), "TableView", $.__views.todoWin);
    $.__views.todoWin.add($.__views.todoTable);
    $.__views.todo = A$(Ti.UI.createTab({
        window: $.__views.todoWin,
        title: "Todo",
        id: "todo"
    }), "Tab", null);
    $.addTopLevelView($.__views.todo);
    _.extend($, $.__views);
    var todos = require("collection"), addBtn = Ti.UI.createButton({
        title: "+"
    });
    addBtn.addEventListener("click", function() {
        var controller = Alloy.getController("add");
        controller.addWin.open();
    });
    $.todoWin.setRightNavButton(addBtn);
    $.todoWin.addEventListener("focus", function() {
        todos.fetch();
    });
    $.todoTable.updateContent = function(_rows) {
        var rows = [], i = 0, len = _rows.length;
        for (; i < len; i++) rows.push(Ti.UI.createTableViewRow(_rows[i]));
        this.setData(rows);
    };
    $.todoTable.addEventListener("click", function(e) {
        Ti.API.info("ID:" + e.rowData.id);
    });
    Ti.App.addEventListener("app:update_list", function(_collection) {
        Ti.API.info("UPDATE LIST: " + JSON.stringify(_collection.todos));
        $.todoTable.updateContent(_collection.todos);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;