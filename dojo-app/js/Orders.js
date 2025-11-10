dojo.provide("app.Orders");

dojo.require("dijit.layout.ContentPane");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojox.grid.DataGrid");

app.Orders = function(){
    var data = {
        identifier: "id",
        items: [
            { id: 1, product: "Laptop", quantity: 1, total: 1200 },
            { id: 2, product: "Mouse", quantity: 2, total: 50 },
            { id: 3, product: "Keyboard", quantity: 1, total: 75 }
        ]
    };
    
    var store = new dojo.data.ItemFileReadStore({ data: data });
    
    var gridDiv = document.createElement("div");
    gridDiv.style.width = "100%";
    gridDiv.style.height = "100%";
    
    var grid = new dojox.grid.DataGrid({
        store: store,
        structure: [
            { name: "Product", field: "product", width: "200px" },
            { name: "Quantity", field: "quantity", width: "100px" },
            { name: "Total", field: "total", width: "100px" }
        ]
    }, gridDiv);
    
    this.pane = new dijit.layout.ContentPane({
        title: "Orders",
        content: gridDiv
    });
    
    return this.pane;
};
