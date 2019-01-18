import React from 'react';

class OrderCharges extends React.Component {

  componentDidMount() {
    Ext.create('Ext.data.Store', {
      storeId: 'simpsonsStore',
      fields:[ 'name', 'email', 'phone'],
      data: [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
      ]
    });

    Ext.create('Ext.grid.Panel', {
      title: 'Simpsons',
      store: Ext.data.StoreManager.lookup('simpsonsStore'),
      columns: [
        {header: 'Name', dataIndex: 'name', editor: 'textfield'},
        {header: 'Email', dataIndex: 'email', flex:1,
          editor: {
            completeOnEnter: false,

            // If the editor config contains a field property, then
            // the editor config is used to create the Ext.grid.CellEditor
            // and the field property is used to create the editing input field.
            field: {
              xtype: 'textfield',
              allowBlank: false
            }
          }
        },
        {header: 'Phone', dataIndex: 'phone'}
      ],
      selModel: 'cellmodel',
      plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
      },
      // height: 200,
      // width: 400,
      renderTo: this.el
    });
  }

  render() {
    return <div ref={el => this.el = el} />
  }
}

export default OrderCharges
