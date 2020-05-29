sap.ui.define([
   "sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast","sap/ui/model/json/JSONModel"
], function (Controller,MessageBox,MessageToast,JSonModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   	  onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "Francisco",
               lastname: "Rodriguez",
               PO_CODE: "06700"
            }
         };
         var oModel = new JSonModel(oData);
         this.getView().setModel(oModel);
      },
      onShowHello : function () {
         // show a native JavaScript alert
//         alert("Hello World");
         //show an sapui5 alert
         var oModel = this.getView().getModel();
         var name = oModel.getProperty("/recipient/name");
         var lastname = oModel.getProperty("/recipient/lastname");
         //var objeto = sap.ui.getCore.getModel("recipient").getData().displayName;
         //var name = new sap.ui.model.json.JSONModel("/recipient/name");
         //var lastname = new sap.ui.model.json.JSONModel("/recipient/lastname");
         //var PO_CODE = new sap.ui.model.json.JSONModel("/recipient/PO_CODE");
         MessageBox.information("The record of " + name + " " + lastname + " is registered");
         //With Message Toast
//         MessageToast.show("Hello World");
      }
   });
});