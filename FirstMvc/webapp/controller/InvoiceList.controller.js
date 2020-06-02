sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices: function (oEvent) {
			var search1 = this.byId("search1");
			var search2 = this.byId("search2");
			var SQuery = search1.getValue();
			var SQuery2 = search2.getValue();
			var aFilter = [];
			if (SQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, SQuery));
			}
			if (SQuery2) {
				aFilter.push(new Filter("Status", FilterOperator.Contains, SQuery2));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			alert(window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1)));
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		}

	});
});