function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addWin",
        title: "Add Item",
        modal: "true"
    });
    $.__views.addWin && $.addTopLevelView($.__views.addWin);
    $.__views.itemField = Ti.UI.createTextField({
        width: "90%",
        top: 55,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemField",
        hintText: "What do you need to do?"
    });
    $.__views.addWin.add($.__views.itemField);
    $.__views.addBtn = Ti.UI.createButton({
        width: "50%",
        top: 20,
        title: "Add Item",
        id: "addBtn"
    });
    $.__views.addWin.add($.__views.addBtn);
    $.__views.cancelBtn = Ti.UI.createButton({
        width: "50%",
        top: 20,
        title: "Cancel",
        id: "cancelBtn"
    });
    $.__views.addWin.add($.__views.cancelBtn);
    exports.destroy = function() {};
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

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;