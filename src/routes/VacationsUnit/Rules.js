import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table, Progress
} from 'antd';
import { Link } from 'react-router-dom';

import './Rules.css';

class Rules extends React.Component {

  render() {
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
              <h4>القوانين</h4>
              <div className="rules-content-text">
              <h4 className="title"> أولاً : أنواع الاجازات</h4>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              <p>
                <strong>إجازة إعتيادية</strong> ( تحق للموظف حسب الدرجة الوظيفية سنوياً ) وتحدد حسب الخطة السنوية للإجازات
                 إجازة حج: مدتها 15 يوم فقط (مرفقات) (لايخصم من الرصيد)
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rules;
