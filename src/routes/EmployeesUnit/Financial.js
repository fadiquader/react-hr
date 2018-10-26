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
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الراتب الأساسي"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة النقل"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة السكن"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة الماء"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة الهاتف"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوة الكهرباء"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="علاوات اضافية"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="إجمالي العلاوات"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="إجمالي الراتب"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="العلاوة الدورية"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ آخر علاوة"
                  >
                    <DatePicker showTime format="YYYY-MM-DD" />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="العلاوات الاستثنائية"
                  >
                    <Input />
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
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اسم البنك"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الفرع"
                  >
                    <Input />
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
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الراتب بعد الاستقطاع"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تفاصيل الاستحقاق"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="التفاصيل المالية للدرجة"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="بدلات السفر للموظف"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="فئة تذكرة الطيران المستحقة للموظف"
                  >
                    <Input />
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
