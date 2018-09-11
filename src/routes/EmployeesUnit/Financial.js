import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker
} from 'antd';

import './PersonalInfo.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class Financial extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    return (
      <div className="page">
        <div className="section-header">
          <h1 className="title"> وحدة الموظفين</h1>
          <div>
            <ul className="sub-nav">
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  المكافئات والعلاوات
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  الإجر الاضافي
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  التقاعد
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <Form>
            <div className="card-section">
              <p className="content-title">البيانات المالية</p>
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الدرجة المالية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الراتب الأساسي"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة النقل"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة السكن"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة الماء"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة الهاتف"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة الكهرباء"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوات اضافية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="إجمالي العلاوات"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="إجمالي الراتب"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="العلاوة الدورية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="العلاوة الدورية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ آخر علاوة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="العلاوات الاستثنائية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div style={{
              backgroundColor: '#fafafa',
              padding: '43px 64px',
            }}>
              <Row type="flex">
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="رقم حساب"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اسم البنك"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الفرع"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div className="card-section">
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الاستقطاعات"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الراتب بعد الاستقطاع"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تفاصيل الاستحقاق"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="التفاصيل المالية للدرجة"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="بدلات السفر للموظف"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <Input  />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تذكرة الطيران"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <Input  />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div className="form-ctrls">
              <Button size="large" className="pink-btn" block>
                مسح البيانات
              </Button>
              <Button size="large" className="p-btn" block>
                حفظ البيانات
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Financial);
