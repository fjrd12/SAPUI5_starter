sap.ui.define([
	"sap/m/Text","sap/m/Text","sap/ui/core/Icon"

], function (Text, Text2,IconI) {
	//"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content2");
	
 	new Text2({
 		text: "El otro texto"
	}).placeAt("content2");
    
    new IconI({
    		src: "sap-icon://syringe",
			size: "20px",
			color: "#031E48"
    }).placeAt("content3");
});