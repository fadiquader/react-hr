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

class Nadb extends React.Component {

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
                  اضافة ندب
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
              <p className="content-title">الندب</p>
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="نوع الندب"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="توقيت الندب"
                  >
                    {getFieldDecorator('select')(
                      <Select>
                        <Option value="china">اثناء ساعات العمل الرسمي</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الجهة المنتدب اليها"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الوظيفة"
                  >
                    {getFieldDecorator('select')(
                      <Select>
                        <Option value="china">اثناء ساعات العمل الرسمي</Option>
                      </Select>
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
                    label="تاريخ الاخلاء"
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
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker disabled showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="التمديد"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="التمديد"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تقييم الاداء"
                  >
                    {getFieldDecorator('email')(
                      <Input />
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

export default Form.create()(Nadb);
