import React from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';

import './Login.css';

const FormItem = Form.Item;


class Login extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-page">
        <Form className="login-form">
          <Row type="flex" gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="label">اسم المستخدم</div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              {
                getFieldDecorator('email', {

                })(
                  <Input size="large" />
                )}

            </Col>
          </Row>
          <br/>
          <Row type="flex" gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="label">كلمة المرور</div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              {
                getFieldDecorator('email', {

                })(
                  <Input size="large" />
                )}

            </Col>
          </Row>
          <br/>
          <Row type="flex">
            <Col xs={24} sm={24} md={8} lg={8}>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div className="login-actions">
                <Button type="primary" size="large" className="pink-btn">
                  نسيت كلمة المرور
                </Button>
                <Button type="primary" size="large" className="yellow-btn">
                  دخـــول
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login);
