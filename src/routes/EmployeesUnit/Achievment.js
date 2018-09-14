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

class Achievment extends React.Component {

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
                  اضافة جديد
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <Form>
            <div className="card-section">
              <p className="content-title">الترقيات</p>
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="نوع الترقية"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المسمى الوظيفي"
                  >
                    <Input />
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ الترقية"
                  >
                    <DatePicker showTime format="YYYY-MM-DD" />

                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الدرجة الماليةة"
                  ><Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="مرفقات"
                  >
                    <Upload>
                      <Button>
                        <Icon type="upload" />
                      </Button>
                    </Upload>
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div className="card-section">
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المسمى الوظيفي ماقبل الترقيــة"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المسمى الوظيفي للوظيفة المقترحة"
                  >
                    <Input />
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ شغل الدرجة الجديدة"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تفاصيل الراتب  للدرجة الجديدة"
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

export default Form.create()(Achievment);
