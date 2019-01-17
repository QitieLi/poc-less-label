import React from 'react';
import { Table } from 'antd';

export default props => {
  const columns = [
    {
      title: 'Code',
      dataIndex: 'lineSourceName',
    },
    {
      title: 'Draft Invoice Amount',
      dataIndex: 'inInvoicingAmount',
    },
    {
      title: 'Description(EN)',
      dataIndex: 'descriptionEn',
    },
    {
      title: 'Charge',
      dataIndex: 'amount',
      render: value => `$${value}`,
    },
    {
      title: 'Invoiced Amount',
      dataIndex: 'invoicedAmount',
    },
    {
      title: 'Tax Amount',
      dataIndex: 'taxAmount',
    },
    {
      title: 'Description(FR)',
      dataIndex: 'descriptionFr',
    },
  ];

  const { data, loading } = props;

  return <Table rowKey="id" columns={columns} dataSource={data} />;
};
