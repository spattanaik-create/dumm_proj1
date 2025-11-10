dojo.provide("app.Settings");

dojo.require("dijit.layout.ContentPane");

app.Settings = function(){
    this.pane = new dijit.layout.ContentPane({
        title: "Settings",
        content: "<h2>Settings</h2><p>Here you can configure the application settings.</p>"
    });
    return this.pane;
};
