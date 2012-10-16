function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.addWin = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addWin",
        title: "Add Item",
        modal: "true"
    }), "Window", null);
    $.addTopLevelView($.__views.addWin);
    $.__views.itemField = A$(Ti.UI.createTextField({
        width: "90%",
        top: 25,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemField",
        hintText: "What do you need to do?"
    }), "TextField", $.__views.addWin);
    $.__views.addWin.add($.__views.itemField);
    $.__views.addBtn = A$(Ti.UI.createButton({
        width: "50%",
        top: 20,
        title: "Add Item",
        id: "addBtn"
    }), "Button", $.__views.addWin);
    $.__views.addWin.add($.__views.addBtn);
    $.__views.cancelBtn = A$(Ti.UI.createButton({
        width: "50%",
        top: 20,
        title: "Cancel",
        id: "cancelBtn"
    }), "Button", $.__views.addWin);
    $.__views.addWin.add($.__views.cancelBtn);
    _.extend($, $.__views);
    var todos = require("collection");
    $.addBtn.addEventListener("click", function() {
        var item = $.itemField.value;
        todos.add(item);
        $.addWin.close();
    });
    $.cancelBtn.addEventListener("click", function() {
        $.addWin.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;