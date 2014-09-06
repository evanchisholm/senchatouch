Ext.define('FindACab01.controller.CabController', {
    extend: 'Ext.app.Controller',
    
    config: {
        
        models: [
            'Cab'
        ],

        stores: [
            'Cabs'
        ],

        refs: {
            main: 'mainview'
        },
        control: {
            
        }
    },
    
    init: function(){
        console.log("On init app found "
            + Ext.ComponentQuery.query('mainview').length
            + " mainviews: ",
            Ext.ComponentQuery.query('mainview')
            );
        console.log("On init app found the reference: ",
            this.getMain());
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
