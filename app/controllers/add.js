var todos = require('collection');

$.addBtn.addEventListener('click', function() {
	// add todo item
	var item = $.itemField.value;
	todos.add(item);

	$.addWin.close();
});

$.cancelBtn.addEventListener('click', function() {
	$.addWin.close();
});
