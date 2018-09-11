import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker
} from 'antd';

import './Qualifications.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class Qualifications extends React.Component {

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
                  اضافة مؤهل علمي
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  طلب اجازة
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <Form>
            <div className="card-section">
              <p className="content-title">المؤهلات</p>
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={12} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المؤهل العلمي"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="التخصص"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الجهة المانحة"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8}>
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
                    label="نوع الدراسة"
                  >
                    {getFieldDecorator('select')(
                      <Select placeholder="الجنس">
                        <Option value="china">ذكر</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المعدل التراكمي"
                  >
                    {getFieldDecorator('select')(
                      <Select>
                        <Option value="china">ذكر</Option>
                      </Select>
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

export default Form.create()(Qualifications);
