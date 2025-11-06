define([
    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
], function(TabContainer, ContentPane){
    return {
        init: function(){
            var tc = new TabContainer({
                style: "height: 100%; width: 100%;"
            }, "appLayout");

            tc.addChild(new ContentPane({
                title: "Test",
                content: "This is a test."
            }));

            tc.startup();
        }
    };
});