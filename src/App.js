Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{
        html:''
    },


        
        launch: function() {
                Rally.data.ModelFactory.getModel({
                    type: 'Defect',
                    success: function(model) {
                        this.grid = this.add({
                            xtype: 'rallygrid',
                            model: model,
                            columnCfgs: [
                                'FormattedID',
                                'Name',
                                'Requirement',
                                'Blocked',
                                'Owner',
                                '_ref'
                            ],
                            storeConfig: {
                                filters: [
                                    {
                                        property: 'Name',
                                        operator: 'Contains',
                                        value: 'a'
                                    }
                                ]
                            },
                            listeners: {
                               itemclick: function( grid, record, item, index, e, eOpts ){   
                                   console.log(record.data)
                                }   
                            }
                        });
                    },
                    scope: this
                });
        }
        

});
