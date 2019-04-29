var customError = "";

$.validator.addMethod("maxLength", function(value, element) {
	return value.length <= $(element).attr('maxLength');
}, $.validator.format("不可超過{0}個字"));

/**
 * 比對迄日是否大於起日
 */
$.validator.addMethod("validDateInterval", function(endDateStr, element, param) {
	var startDateStr = $(param).val();

	var startDate = new Date(Date.parse(startDateStr));
	var endDate = new Date(Date.parse(endDateStr));
	if (isNaN(startDate) || isNaN(endDate)) {
		return true;
	}
	return startDate <= endDate;
}, "迄日不可小於起日");

/**
 * 檢查日期格式
 */
$.validator.addMethod("validDateFormat", function(value, element) {
	if (value.match(/^\d{4}\/\d{2}\/\d{2}$/) == null) {
		return false;
	} else if (!moment(value).isValid()) {
		return false;
	} else if (moment(value).format("YYYY/MM/DD") != value) {
		return false;
	}
	return true;
}, "日期格式錯誤");

/**
 * 檢查日期區間
 */
$.validator.addMethod("validDateRange", function(endDateStr, element, params) {
	var startDate = new Date($(params.startDt).val());
	var endDate = new Date(endDateStr);
	if (isNaN(startDate) || isNaN(endDate)) {
		return true;
	}
	var range = params.range;
	customError = range;
	return range >= (((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1);
});

/**
 * 檢查英數字
 */
$.validator.addMethod("alphaDigit", function(value, element) {
	// 移除換行符號
	value = value.replace(/[\r\n]/g, "");
	return /^[0-9a-zA-Z ]*$/.test(value);
}, "請輸入英文或數字");