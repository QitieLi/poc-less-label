import React from 'react';
import { Input, Form, Col, Row, Select } from 'choerodon-ui';

const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;

const formItemLayout = {
  // labelCol: { span: 7 },
  // wrapperCol: { span:5 },
};

export default ({ form: { getFieldDecorator }, data }) => (
  <Row gutter={16}>
    <Col span={8}>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('orderType', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.orderType
        })(
          <Input label="Order Type" />
          /*<Select label="Order Type" placeholder="Please Select" allowClear style={{ width: 200 }}>
            <Option value="1">Regular</Option>
            <Option value="2">Type 2</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="3">Type 3</Option>
          </Select>*/
        )}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('estimationNo', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: data.estimationNo,
        })(<Input label="Estimate No." />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('customerName', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: data.customerName,
        })(<Input label="Customer" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('contactNotes', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: data.contactNotes,
        })(<Input label="Contact" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('placedBy', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: data.placedBy,
        })(<Input label="Placed" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('class', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: 'C',
        })(<Input label="Class" disabled />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('subClass', {
          rules: [
            {
              required: true,
            },
          ],
          initialValue: '',
        })(<Input label="Subclass" disabled />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('customerRequisition', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: data.customerRequisition,
        })(<Input label="PO" disabled />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('requisitionNO', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: data.customerRequisition,
        })(<Input label="Requisition NO" disabled />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('requiredDate', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: data.requiredDate,
        })(<Input label="Date Required" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('extExpire', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: data.requiredDate,
        })(<Input label="Ext Expire" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('follow', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: '',
        })(<Input label="Follow Up / By" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('orderTaker', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: '99999-admin',
        })(<Input label="Order Taker" disabled />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('projectNo', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: '',
        })(<Input label="Project No" disabled />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('projectCode', {
          rules: [
            {
              // required: true,
            },
          ],
          initialValue: '',
        })(<Input label="Project Code" disabled />)}
      </FormItem>
    </Col>
    <Col span={8}>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('shipTo', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Ship To" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('shipToName', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Ship To Name" maxLength={20} />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('address1', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Address 1" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('address2', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Address 2" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('address3', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Address 3" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('city', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="City" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('country', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Country" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('province', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Province" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('postalCode', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Postal Code" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('phoneNo', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Phone No" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('faxNo', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Fax No" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('email', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Email" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('currency', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Currency" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('orderSource', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Order Source" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('internalText', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<TextArea rows={3} maxLength={50} label="Internal Text" placeholder="textarea usage" />)}
      </FormItem>
    </Col>

    <Col span={8}>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('creationDateBy', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Creation Date / By" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('lastModifyedDateBy', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Last Modifyed Date / By" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('closedDateBy', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Closed Date / By" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('creditApprovedDate', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Credit Approved Date" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('orderDate', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Order Date" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('notBeforeDate', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="Not Before Date" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('credit', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="code" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('code', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="code" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('code', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="code" />)}
      </FormItem>
      <FormItem {...formItemLayout}>
        {getFieldDecorator('code', {
          rules: [
            {
              required: true,
            },
          ],
          // initialValue: data.code
        })(<Input label="code" />)}
      </FormItem>
    </Col>
  </Row>
);
