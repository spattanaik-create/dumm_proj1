define([
    "dijit/layout/ContentPane",
    "dijit/form/Form",
    "dijit/form/ValidationTextBox",
    "dijit/form/Button"
], function(ContentPane, Form, ValidationTextBox, Button){
    return new ContentPane({
        title: "Login",
        content: [
            '<div data-dojo-type="dijit/form/Form" id="loginForm">',
                '<div class="dijitDialogPaneContentArea">',
                    '<table>',
                        '<tr>',
                            '<td><label for="username">Username:</label></td>',
                            '<td><input data-dojo-type="dijit/form/ValidationTextBox" id="username" name="username" required="true"></td>',
                        '</tr>',
                        '<tr>',
                            '<td><label for="password">Password:</label></td>',
                            '<td><input data-dojo-type="dijit/form/ValidationTextBox" id="password" name="password" type="password" required="true"></td>',
                        '</tr>',
                    '</table>',
                '</div>',
                '<div class="dijitDialogPaneActionBar">',
                    '<button data-dojo-type="dijit/form/Button" type="submit">Login</button>',
                '</div>',
            '</div>'
        ].join('')
    });
});