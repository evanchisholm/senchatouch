Ext.define('FindACab01.model.Car', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'brand', type: 'string' }

        ],

        proxy: {
    	type: 'rest',
    	format: 'php',
	    	api: {
	    		create: 'cars/addcar',
	    		update: 'cars/editcar',
	    		read: 'cars/loadcar',
	    		destroy: 'cars/deletecar'
	    	}
    	}
    }

    
});
