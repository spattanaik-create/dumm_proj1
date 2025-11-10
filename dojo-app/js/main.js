define([
    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "app/Dashboard",
    "app/Login",
    "app/Orders",
    "app/Products",
    "app/Profile",
    "app/Settings",
    "app/Users",
    "dojo/domReady!"
], function(TabContainer, ContentPane, Dashboard, Login, Orders, Products, Profile, Settings, Users){
    return {
        init: function(){
            var tc = new TabContainer({
                style: "height: 100%; width: 100%;"
            }, "appLayout");

            tc.addChild(Dashboard);
            tc.addChild(Login);
            tc.addChild(Orders);
            tc.addChild(Products);
            tc.addChild(Profile);
            tc.addChild(Settings);
            tc.addChild(Users);

            tc.startup();
        }
    };
});