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

class PersonalInfo extends React.Component {

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
                  المهام
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
              <p className="content-title">البيانات الشخصية</p>
              <Row type="flex" gutter={32}>
                <Col xs={24} sm={24} md={16} lg={16}>
                  <Row type="flex">
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <FormItem
                        {...formItemLayout}
                        label="الاسم الاول"
                      >
                        {getFieldDecorator('email')(
                          <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <FormItem
                        {...formItemLayout}
                        label="الاسم الثاني"
                      >
                        {getFieldDecorator('email')(
                          <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <FormItem
                        {...formItemLayout}
                        label="الاسم الثالث"
                      >
                        {getFieldDecorator('email')(
                          <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <FormItem
                        {...formItemLayout}
                        label="الاسم الرابع"
                      >
                        {getFieldDecorator('email')(
                          <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <FormItem
                        {...formItemLayout}
                        label="القبيلة"
                      >
                        {getFieldDecorator('email')(
                          <Input />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <div className="uploader">
                    <div className="upload-actions">
                      <Upload>
                        <Icon type="upload" />
                      </Upload>
                      <br/>
                      <Icon type="delete" style={{ color: '#ff9393' }} />
                    </div>
                    <div>
                      <img
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                  </div>
                </Col>
              </Row>

            </div>
            <div className="card-section">
              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الرقم المدني"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ الانتهاء"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الجنس"
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
                    label="رقم القوى العاملة"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الجنسية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="جنسية اخرى"
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
                    label="رقم جواز السفر"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="مكان الاصدار"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ الانتهاء"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
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
                    label="الرقم المدنى"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={16} lg={16}>
                  <FormItem
                    {...formItemLayout}
                    label="العنوان"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="شهادة المكان"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="ميلاد المكان"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="تاريخ الميلاد"
                  >
                    {getFieldDecorator('date-time-picker')(
                      <DatePicker showTime format="YYYY-MM-DD" />
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
                    label="الملف الصحي"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="فصيلة الدم"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الحالة الاجتماعية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="اللغات"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الهوايات"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div className="card-section">
              <p className="content-title">بيانات الزوجة</p>

              <Row type="flex" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الاسم الاول"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الاسم الثاني"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الاسم الثالث"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الرقم المدني"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الجنسية"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="الديانة"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="المهنة"
                  >
                    {getFieldDecorator('email')(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <FormItem
                    {...formItemLayout}
                    label="جهة العمل"
                  >
                    {getFieldDecorator('email')(
                      <Input />
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

export default Form.create()(PersonalInfo);
