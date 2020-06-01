sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast", "sap/ui/core/Fragment"
], function (Controller, MessageBox, MessageToast, Fragment) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onShowHello: function () {
			// show a native JavaScript alert
			//         alert("Hello World");
			//show an sapui5 alert
			var oModel = this.getView().getModel();
			var name = oModel.getProperty("/recipient/name");
			var lastname = oModel.getProperty("/recipient/lastname");
			MessageBox.information("The record of " + name + " " + lastname + " is registered");

			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			
			//var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sRecipient = this.getView().getModel().getProperty("{/recipient>name}");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
		},
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onCloseDialog : function () {
			this.byId("helloDialog").close();
		}
	});
});