var Alloy = require("alloy"), todos = Alloy.createCollection("Todo");

todos.on("fetch", function() {
    var todorows = [], donerows = [], i = 0, len = todos.length, model, title;
    for (; i < len; i++) {
        model = todos.at(i).attributes;
        Ti.API.info(JSON.stringify(model));
        model.done ? donerows.push({
            title: model.item,
            id: model.id
        }) : todorows.push({
            title: model.item,
            id: model.id
        });
    }
    Ti.App.fireEvent("app:update_list", {
        todos: todorows
    });
});

exports.fetch = function() {
    todos.fetch();
};

exports.add = function(_item) {
    var todo = Alloy.createModel("Todo");
    todos.add(todo);
    todo.save({
        item: _item,
        done: 0
    }, {
        success: function() {
            todos.fetch({
                success: function(_model, _collection) {
                    Ti.API.info("SUCCESS MODEL: " + JSON.stringify(_model));
                    Ti.API.info("SUCCESS COLL: " + JSON.stringify(_collection));
                }
            });
        },
        error: function(e) {
            Ti.API.info("Item Not Added: " + JSON.stringify(e));
        }
    });
};