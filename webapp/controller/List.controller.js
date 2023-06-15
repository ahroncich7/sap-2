sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",

],

    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */

    function (Controller, Filter, FilterOperator) {

        "use strict";



        return Controller.extend("destinationtest.destination2.controller.List", {


            handleSearch: function (evt) {
                var filters = [];
                var query = evt.getParameter("query");
                if (query && query.length > 0) {
                    filters.push(new Filter({
                        path: "ProductName",
                        operator: FilterOperator.Contains,
                        value1: query
                    })
                    )
                }

                var list = this.getView().byId("list");
                var binding = list.getBinding("items");
                binding.filter(filters);
            },



            handleListItemPress: function (oEvent) {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");

                oRouter.navTo("detail", {

                    productId: selectedProductId

                });

            }

        });

    });