import React from 'react';
import { Form, Input, Checkbox, Button, Row, Col } from 'antd';

import logo from '../../assets/icons/Small_Top_Logo.svg';
import loginIcon from '../../assets/icons/Login.svg';
import './Login.css';

const FormItem = Form.Item;


class Login extends React.Component {

  render() {
    return (
      <div className="login-page">
        <div className="login-logo">
          <div>
            <img src={logo} alt=""/>
          </div>
          <div>
            <p>إدارة رأس</p>
            <h3>المال البشري</h3>
          </div>
        </div>
        <Form className="login-form">
          <div className="login-icon text-center">
            <img src={loginIcon} alt=""/>
            <h2 style={{ color: 'white', marginTop: '8px'}}>تسجيل الدخول</h2>
          </div>
          <br/>
          <Row type="flex" gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="label">اسم المستخدم</div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Input size="large" />
            </Col>
          </Row>
          <br/>
          <Row type="flex" gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="label">كلمة المرور</div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Input size="large" />

            </Col>
          </Row>
          <br/>
          <Row type="flex">
            <Col xs={24} sm={24} md={8} lg={8}>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div className="login-ctrls">
                <div className="remember-pass">
                  <Checkbox>تذكر كلمة المرور في المرات القادمة</Checkbox>
                </div>
                <div className="login-actions">
                  <Button type="primary" size="large" className="pink-btn">
                    نسيت كلمة المرور
                  </Button>
                  <Button
                    onClick={() => this.props.history.push('/app/employees/personal-info')}
                    type="primary" size="large" className="yellow-btn">
                    دخـــول
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login);
