jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.declare("scnmeetuppoa.sapui5.demo1.util.Formatter");

scnmeetuppoa.sapui5.demo1.util.Formatter = {
	currencyValue : function(value) {
		return parseFloat(value).toFixed(2);
	},

	dateShort : function(sDate) {
		var oDateFormat = sap.ui.core.format.DateFormat.getInstance({
			style : "short"
		});
		return oDateFormat.format(new Date(sDate));
	},

	dateMedium : function(sDate) {
		var oDateFormat = sap.ui.core.format.DateFormat.getInstance();
		return oDateFormat.format(new Date(sDate));
	},

	uppercaseFirstChar : function(sStr) {
		return sStr.charAt(0).toUpperCase() + sStr.slice(1);
	},

	discontinuedStatusState : function(sDate) {
		return sDate ? "Error" : "None";
	},

	discontinuedStatusValue : function(sDate) {
		return sDate ? "Discontinued" : "";
	}
};