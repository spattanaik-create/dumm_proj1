dojo.provide("app.Login");

dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.form.Form");
dojo.require("dijit.form.ValidationTextBox");
dojo.require("dijit.form.Button");

app.Login = function(){
    var content = [
        '<div data-dojo-type="dijit.form.Form" id="loginForm">',
            '<div class="dijitDialogPaneContentArea">',
                '<table>',
                    '<tr>',
                        '<td><label for="username">Username:</label></td>',
                        '<td><input data-dojo-type="dijit.form.ValidationTextBox" id="username" name="username" required="true"></td>',
                    '</tr>',
                    '<tr>',
                        '<td><label for="password">Password:</label></td>',
                        '<td><input data-dojo-type="dijit.form.ValidationTextBox" id="password" name="password" type="password" required="true"></td>',
                    '</tr>',
                '</table>',
            '</div>',
            '<div class="dijitDialogPaneActionBar">',
                '<button data-dojo-type="dijit.form.Button" type="submit">Login</button>',
            '</div>',
        '</div>'
    ].join('');
    
    this.pane = new dijit.layout.ContentPane({
        title: "Login",
        content: content
    });
    return this.pane;
};
