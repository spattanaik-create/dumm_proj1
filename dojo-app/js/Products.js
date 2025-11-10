dojo.provide("app.Products");

dojo.require("dijit.layout.ContentPane");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojox.grid.DataGrid");

app.Products = function(){
    var data = {
        identifier: "id",
        items: [
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Mouse", price: 25 },
            { id: 3, name: "Keyboard", price: 75 }
        ]
    };
    
    var store = new dojo.data.ItemFileReadStore({ data: data });
    
    var gridDiv = document.createElement("div");
    gridDiv.style.width = "100%";
    gridDiv.style.height = "100%";
    
    var grid = new dojox.grid.DataGrid({
        store: store,
        structure: [
            { name: "Name", field: "name", width: "200px" },
            { name: "Price", field: "price", width: "100px" }
        ]
    }, gridDiv);
    
    this.pane = new dijit.layout.ContentPane({
        title: "Products",
        content: gridDiv
    });
    
    return this.pane;
};
