import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table, Progress, Alert
} from 'antd';
import { Link } from 'react-router-dom';
import './Rules.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;


class AddVacation extends React.Component {

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
          <h1 className="title">وحدة الإجازات</h1>
          <div>
            <ul className="sub-nav">
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  طلب إجازة استثنائية
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  طلب إجازة مرضية
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  طلب إجازة طارئة
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  طلب إجازة تعويضية
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  طلب الإجازة الاخرى
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-padding">
            <h1 className="reports-title">
              رصيد الإجازات
            </h1>
          </div>
          <div className="vacations-rules">
            <Row type="flex" justify="space-around" gutter={32}>
              <Col span={4} order={1} className="vacation-rule rectangle-1">
                <span className="count">38</span>
                رصيد الإجازت
              </Col>
              <Col span={4} order={2} className="vacation-rule rectangle-2">
                <span className="count">38</span>
                اجازات حج
              </Col>
              <Col span={4} order={3} className="vacation-rule rectangle-3">
                <span className="count">38</span>
                اجازات طارئة
              </Col>
              <Col span={4} order={4} className="vacation-rule rectangle-4">
                <span className="count">38</span>
                اجازات مرضية
              </Col>
              <Col span={4} order={5} className="vacation-rule rectangle-5">
                <span className="count">38</span>
                اجازات طارئة
              </Col>
              <Col span={4} order={6} className="vacation-rule rectangle-6">
              <span className="count">38</span>
                اجازات تعويضية
              </Col>
            </Row>
            <div className="rules-content-area">
              <Alert className="alert-vacations" showIcon={false} type="error" message="لا يمكن تقديم طلب في هذه الفترة الزمنية نظراً لعدم وجود بديل" banner />
              <h4 className="title">طلب اجازة</h4>
              <div className="card">
                <Form>
                  <div className="card-section">
                    <Row type="flex" gutter={16}>
                      <Col xs={24} sm={24} md={8} lg={8}>
                        <FormItem
                          {...formItemLayout}
                          label="نوع الاجازة"
                        >
                          <Select>
                            <Option value="china">مرضية</Option>
                            <Option value="china">تعويضية</Option>
                            <Option value="china">طارئة</Option>
                          </Select>
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
                          label="إلى الفترة"
                        >
                          {getFieldDecorator('date-time-picker')(
                            <DatePicker showTime format="YYYY-MM-DD" />
                          )}
                        </FormItem>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8}>
                        <FormItem
                          {...formItemLayout}
                          label="الموظف البديل"
                        >
                          {getFieldDecorator('alternative_employee')(
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
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(AddVacation);
