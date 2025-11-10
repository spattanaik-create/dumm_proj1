dojo.provide("app.Users");

dojo.require("dijit.layout.ContentPane");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojox.grid.DataGrid");

app.Users = function(){
    var data = {
        identifier: "id",
        items: [
            { id: 1, name: "John Doe", email: "john.doe@example.com" },
            { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
            { id: 3, name: "Peter Jones", email: "peter.jones@example.com" }
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
            { name: "Email", field: "email", width: "250px" }
        ]
    }, gridDiv);
    
    this.pane = new dijit.layout.ContentPane({
        title: "Users",
        content: gridDiv
    });
    
    return this.pane;
};
