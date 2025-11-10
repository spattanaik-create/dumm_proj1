define([
    "dijit/layout/ContentPane",
    "dojo/store/Memory",
    "dgrid/OnDemandGrid"
], function(ContentPane, Memory, OnDemandGrid){
    var data = [
        { id: 1, product: "Laptop", quantity: 1, total: 1200 },
        { id: 2, product: "Mouse", quantity: 2, total: 50 },
        { id: 3, product: "Keyboard", quantity: 1, total: 75 }
    ];
    var store = new Memory({ data: data });

    var grid = new OnDemandGrid({
        store: store,
        columns: {
            product: "Product",
            quantity: "Quantity",
            total: "Total"
        }
    });

    var cp = new ContentPane({
        title: "Orders",
        content: grid
    });

    return cp;
});