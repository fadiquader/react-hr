import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table
} from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;
const Option = Select.Option;
const Dragger = Upload.Dragger;
const { TextArea } = Input;

class AddSubject extends React.Component {

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }
    return (
      <div className="page">
        <div className="section-header">
          <h1 className="title">اضافة موضوع جديد</h1>
          <div>
            <ul className="sub-nav">
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  اضافة موضوع
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  موضوعاتي
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h1 className="wm-title">اضافة موضوع جديد</h1>

          <div className="add-form">
            <Row>
              <Col xs={24} sm={24} md={24} lg={24}>
                <FormItem
                  {...formItemLayout}
                  label="عنوان الموضوع"
                >
                  <Input />
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24}>
                <FormItem
                  {...formItemLayout}
                  label="النص"
                >
                  <TextArea rows={4} />
                </FormItem>
              </Col>
            </Row>
            <Row type="flex">
              <Col xs={24} sm={24} md={12} lg={12}>
                <FormItem
                  {...formItemLayout}
                  label="التصنيف"
                >
                  <Select>
                    <Option value="china">...</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <FormItem
                  {...formItemLayout}
                  label="التاريخ"
                >
                  <DatePicker showTime format="YYYY-MM-DD" />

                </FormItem>
              </Col>
            </Row>

            <p className="help-text">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>
            <Row type="flex">
              <Col xs={24} sm={24} md={24} lg={24}>
                <FormItem
                  {...formItemLayout}
                  label="المرفقات"
                >
                  <Upload>
                    <Button>
                      اضافة مرفقات <Icon type="plus" />
                    </Button>
                  </Upload>
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24}>
                <FormItem
                  // label="اضافة صور"
                >
                  <p>اضافة صور</p>
                  <Dragger>
                    <div className="text-center">
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-hint">
                        لرفع الصور بالامكان اسقاط الصور مباشرة او الضغط هنا
                      </p>
                    </div>
                  </Dragger>
                </FormItem>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24}>
                <FormItem
                  // label="اضافة صور"
                >
                  <p>اضافة تعليق</p>
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
              حفظ واكمال
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSubject;
