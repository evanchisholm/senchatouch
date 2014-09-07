Ext.define('FindACab01.controller.CabController', {
    extend: 'Ext.app.Controller',
    
    config: {
        
        models: [
            'Cab',
            'Car'
        ],

        stores: [
            'Cabs'
        ],

        refs: {
            main: 'mainview'
        },
        control: {
            'mainview': {
                initialize: 'onInitMain'
            },
            'button[action=press]': {
                tap: 'onTapMain'
            }
            
        }
    },

    onInitMain: function(){
        console.log("Initialize mainview");
    },
    onTapMain: function(){
        console.log("Tapped a button in mainview");
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("On launch app found "
            + Ext.ComponentQuery.query('mainview').length
            + " mainviews: ",
            Ext.ComponentQuery.query('mainview')
            );
        console.log("On launch app found the reference: ",
            this.getMain());
        
    }
});
