sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cardemployee.controller.View1", {
            onInit: function () {

            },
            convertImagePath: function (imageData) {
                var sTrimmedData = imageData.substr(104);
                return "data:image/bmp;base64," + sTrimmedData;
              },
        });
    });
