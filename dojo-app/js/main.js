dojo.provide("app.main");

dojo.require("dijit.layout.TabContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("app.Dashboard");
dojo.require("app.Login");
dojo.require("app.Orders");
dojo.require("app.Products");
dojo.require("app.Profile");
dojo.require("app.Settings");
dojo.require("app.Users");

app.main = {
    init: function(){
        var tc = new dijit.layout.TabContainer({
            style: "height: 100%; width: 100%;"
        }, "appLayout");

        tc.addChild(new app.Dashboard());
        tc.addChild(new app.Login());
        tc.addChild(new app.Orders());
        tc.addChild(new app.Products());
        tc.addChild(new app.Profile());
        tc.addChild(new app.Settings());
        tc.addChild(new app.Users());

        tc.startup();
    }
};
