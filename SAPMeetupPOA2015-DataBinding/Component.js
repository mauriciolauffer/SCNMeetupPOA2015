jQuery.sap.declare("scnmeetuppoa.sapui5.demo2.Component");

sap.ui.core.UIComponent.extend("scnmeetuppoa.sapui5.demo2.Component", {

	metadata : {
		name : "SCN Meetup POA 2015 - SAPUI5 - Data Binding",
		version : "1.0.0",
		includes : [],
		dependencies : {
			libs : [ "sap.m", "sap.ui.layout" ],
			components : []
		},
		rootView : "scnmeetuppoa.sapui5.demo2.view.App",

		config : {
			resourceBundle : "i18n/messageBundle.properties",
			serviceConfig : {
				name : "Northwind",
				serviceUrl : "proxy/http/services.odata.org/V2/(S(sapuidemotdg))/OData/OData.svc/"
			}
		},

		routing : {
			config : {
				viewType : "XML",
				viewPath : "scnmeetuppoa.sapui5.demo2.view",
				clearTarget : false
			},
			routes : [ {
				pattern : "",
				name : "main",
				view : "Master",
				targetAggregation : "pages",
				targetControl : "idAppControl"
			} ]
		}
	},

	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		var mConfig = this.getMetadata().getConfig();

		// Always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var rootPath = jQuery.sap.getModulePath("scnmeetuppoa.sapui5.demo2");

		// Set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : [ rootPath, mConfig.resourceBundle ].join("/")
		});
		this.setModel(i18nModel, "i18n");

		// Create and set domain model to the component
		var sServiceUrl = mConfig.serviceConfig.serviceUrl;
	    var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
	    this.setModel(oModel);

		this.getRouter().initialize();
	},
});