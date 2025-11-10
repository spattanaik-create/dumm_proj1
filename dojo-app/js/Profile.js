dojo.provide("app.Profile");

dojo.require("dijit.layout.ContentPane");

app.Profile = function(){
    this.pane = new dijit.layout.ContentPane({
        title: "Profile",
        content: "<h2>Profile</h2><p>Here you can edit your user profile.</p>"
    });
    return this.pane;
};
