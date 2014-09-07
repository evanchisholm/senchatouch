Ext.define('FindACab01.model.Setting', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'gps', type: 'boolean' },
            { name: 'city', type: 'string' },
            { name: 'country', type: 'string' }

        ]
    }
});
