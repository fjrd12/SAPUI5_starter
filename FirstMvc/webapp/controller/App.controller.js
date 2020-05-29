sap.ui.define([
   "sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast","sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller,MessageBox,MessageToast,JSonModel,ResourceModel) {
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
         
                  // set i18n model on view
         var i18nModel = new ResourceModel({
         bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
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

         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      }
   });
});