import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table, Progress, Alert
} from 'antd';
import { Link } from 'react-router-dom';
import './Rules.css';

const dataSource = [
  {
    key: '1',
    name: 'Marvin Francis',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    type: 'مرضية',
    notes: 'شهر34',
    attch: 7,
  },
  {
    key: '2',
    name: 'Henrietta Thomas',
    days: '3',
    from: '09/07/2018',
    to: '11/07/2018',
    type: 'سنوية',
    notes: 'شهر34',
    attch: null,
  },
  {
    key: '1',
    name: 'Alberta Watkins',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    type: 'مرضية',
    notes: 'شهر34',
    attch: null,
  },
  {
    key: '1',
    name: 'Marvin Francis',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    type: 'مرضية',
    notes: 'شهر34',
    attch: null,
  },
  {
    key: '1',
    name: 'Marvin Francis',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    type: 'مرضية',
    notes: 'شهر34',
    attch: null,
  },
  {
    key: '1',
    name: 'Alberta Watkins',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    type: 'حج',
    notes: 'شهر34',
    attch: null,
  },
];

const columns = [
{
  title: 'الاسم',
  dataIndex: 'name',
  align: 'center',
  key: 'name',
},
{
  title: 'عدد الايام',
  dataIndex: 'days',
  align: 'center',
  key: 'days',
},
{
  title: 'من',
  dataIndex: 'from',
  align: 'center',
  key: 'from',
},
{
  title: 'الي',
  dataIndex: 'to',
  align: 'center',
  key: 'to',
},
{
  title: 'نوع الاجازة',
  dataIndex: 'type',
  align: 'center',
  key: 'type',
},
{
  title: 'ملاحظات',
  dataIndex: 'notes',
  align: 'center',
  key: 'notes',
},
{
  title: 'مرفقات',
  dataIndex: 'attch',
  align: 'center',
  key: 'attch',
  render: (text) => {
      return (
        text ? <Icon type="file-pdf" theme="outlined" /> : 'لايوجد'
      );
    }
}
];

class PreviousVacations extends React.Component {

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
            <Row type="flex" justify="space-around" >
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
            <div className="card">
              <h1 className="wm-title">
                أرشيف الاجازات السابقة
              </h1>
              <div className="wm-table">
                <Table pagination={false} dataSource={dataSource} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviousVacations;
