Ext.onReady(function() {
     var data =  [
         { name: 'Bob', email: 'bob@somedomain.com' },
	     { name: 'Suzy', email: 'suzy@somedomain.com' },
	     { name: 'Tom', email: 'tom@somedomain.com' },
	     { name: 'Peter', email: 'peter@somedomain.com' },
	     { name: 'Mike', email: 'mike@somedomain.com' }
      ];
	
    var store = Ext.create('Ext.data.Store', {
		data: data,
		fields: ['name', 'email']
    });
	
    Ext.create('Ext.grid.Panel', {
		renderTo: Ext.getBody(),
		height: 200,
		width: 500,
		title: 'Basic Grid',
		store: store,
		columns: [
             { 
              	text: 'Name', 
                dataIndex: 'name' 
             }, 
             { 
                text: 'E-mail', 
                dataIndex: 'email',
				flex: 1
             }
        ]
    });
});
