var Alloy = require('alloy');
var todos = Alloy.createCollection('Todo');
todos.on("fetch", function() {
	var todorows = [],
		donerows = [],
		i = 0,
		len = todos.length, 
		model, title;

	for ( ; i < len; i++) {
		model = todos.at(i).attributes;
		Ti.API.info(JSON.stringify(model));
   		if (!model['done']) {
   			todorows.push({title:model['item'],id:model['id']});
   		} else {
   			donerows.push({title:model['item'],id:model['id']});
   		}
	}	
	Ti.App.fireEvent('app:update_list', {todos:todorows}); 
});

exports.fetch = function() {
	todos.fetch();
}

exports.add = function(_item) {
	var todo = Alloy.createModel('Todo');
	todos.add(todo);
	todo.save({
		item:_item,
		done:0
	},{
		success: function() {
			todos.fetch();
		},
		error: function(e) {
			Ti.API.info("Item Not Added: "+JSON.stringify(e));
		}
	});
}
