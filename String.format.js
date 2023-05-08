// add string format method
if (!String.prototype.format) {
	String.prototype.format = function () {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			const res = typeof args[number] === "undefined" ? match : args[number];
			return encodeURIComponent(res);
		});
	};
}
