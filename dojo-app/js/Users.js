define([
    "dijit/layout/ContentPane",
    "dojo/store/Memory",
    "dgrid/OnDemandGrid"
], function(ContentPane, Memory, OnDemandGrid){
    var data = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        { id: 3, name: "Peter Jones", email: "peter.jones@example.com" }
    ];
    var store = new Memory({ data: data });

    var grid = new OnDemandGrid({
        store: store,
        columns: {
            name: "Name",
            email: "Email"
        }
    });

    var cp = new ContentPane({
        title: "Users",
        content: grid
    });

    return cp;
});