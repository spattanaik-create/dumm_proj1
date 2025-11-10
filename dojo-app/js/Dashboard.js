dojo.provide("app.Dashboard");

dojo.require("dijit.layout.ContentPane");

app.Dashboard = function(){
    this.pane = new dijit.layout.ContentPane({
        title: "Dashboard",
        content: "<h2>Dashboard</h2><p>Welcome to the dashboard. Here you can see a summary of the application's status.</p>"
    });
    return this.pane;
};
