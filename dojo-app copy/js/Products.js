define([
    "dijit/layout/ContentPane",
    "dojo/store/Memory",
    "dgrid/OnDemandGrid"
], function(ContentPane, Memory, OnDemandGrid){
    var data = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Mouse", price: 25 },
        { id: 3, name: "Keyboard", price: 75 }
    ];
    var store = new Memory({ data: data });

    var grid = new OnDemandGrid({
        store: store,
        columns: {
            name: "Name",
            price: "Price"
        }
    });

    var cp = new ContentPane({
        title: "Products",
        content: grid
    });

    return cp;
});