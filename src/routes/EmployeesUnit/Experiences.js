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

class Experiences extends React.Component {

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
                  اضاافة خبرة
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  اضافة تدريب
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <Form>
            <div className="card-section">
              <p className="content-title">الخبرات العملية والعلمية</p>
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="القطاع"
                  >
                    {getFieldDecorator('select')(
                      <Select>
                        <Option value="china">قطاع عام</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="مرفقات"
                  >
                    {getFieldDecorator('select')(
                      <Upload>
                        <Button>
                          <Icon type="upload" />
                        </Button>
                      </Upload>
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="البلد"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المسمى الوظيفي"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اسم جهة العمل"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الراتب"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="من الفترة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الى الفترة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الفترة"
                  >
                    {getFieldDecorator('email')(
                      <Input disabled />
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
                    label="القطاع"
                  >
                    {getFieldDecorator('select')(
                      <Select>
                        <Option value="china">قطاع عام</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="مرفقات"
                  >
                    {getFieldDecorator('select')(
                      <Upload>
                        <Button>
                          <Icon type="upload" />
                        </Button>
                      </Upload>
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="البلد"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المسمى الوظيفي"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اسم جهة العمل"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الراتب"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="من الفترة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الى الفترة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الفترة"
                  >
                    {getFieldDecorator('email')(
                      <Input disabled />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div className="card-section">
              <p className="content-title">التدريبات السابقة</p>
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اسم البرنامج"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اسم جهة التدريب"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المكان"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="من الفترة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الى الفترة"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
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

export default Form.create()(Experiences);
