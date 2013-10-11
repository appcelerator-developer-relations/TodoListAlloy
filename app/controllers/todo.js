var todos = require('collection');

var addBtn = Ti.UI.createButton({
	title:'+'
});
addBtn.addEventListener('click', function() {
	var controller = Alloy.createController("add");
	controller.addWin.open();
});
$.todoWin.setRightNavButton(addBtn);

$.todoWin.addEventListener('focus', function() {
	todos.fetch();
});

$.todoTable.updateContent = function(_rows) {
	var rows = [],
		i = 0,
		len = _rows.length;

	for ( ; i < len; i++) {
		rows.push(Ti.UI.createTableViewRow(_rows[i]));
	}
	this.setData(rows);
};

$.todoTable.addEventListener('click', function(e) {
	Ti.API.info('Title: ' +e.rowData.title);
});

Ti.App.addEventListener('app:update_list', function(_collection) {
	Ti.API.info("UPDATE LIST: "+JSON.stringify(_collection.todos));
	$.todoTable.updateContent(_collection.todos);
});
