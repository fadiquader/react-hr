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
    type: 'مرضية',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    order_status: 'قيد المراجعة',
    notes: 'شهر34',
    attch: 7,
  },
  {
    key: '1',
    type: 'طارئة',
    days: '2',
    from: '09/07/2018',
    to: '11/07/2018',
    order_status: 'قيد المراجعة',
    notes: 'شهر34',
    attch: null,
  },
];

const columns = [
//   {
//   title: 'المشروع',
//   dataIndex: 'projectName',
//   key: 'projectName',
//   render: (text) => {
//     return (
//       <Link to="/app/employees/work-management/1">{text}</Link>
//     )
//   }
// },
{
  title: 'نوع الاجازة',
  dataIndex: 'type',
  align: 'center',
  key: 'type',
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
  title: 'حالة الطلب',
  dataIndex: 'order_status',
  align: 'center',
  key: 'order_status',
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

class Vacations extends React.Component {

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
            <div className="card">
              <h1 className="wm-title">
                حالة الطلبات
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

export default Vacations;
