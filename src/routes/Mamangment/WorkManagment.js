import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table
} from 'antd';
import { Link } from 'react-router-dom';

import './WorkManagment.css';

const dataSource = [
  {
    key: '1',
    projectName: 'Francis Lyons',
    tasks: 32,
    createdAt: '09/07/2018',
    expireAt: '09/07/2018',
    dep: 'التعليم/المحاسبة',
    indicator: '',
    period: 'شهر34',
    periotiry: 7,
    progressPercent: '23%',
    quality: '92%',
    progress: 'شهر34',
  },
  {
    key: '2',
    projectName: 'Francis Lyons',
    tasks: 32,
    createdAt: '09/07/2018',
    expireAt: '09/07/2018',
    dep: 'التعليم/المحاسبة',
    indicator: '',
    period: 'شهر34',
    periotiry: 7,
    progressPercent: '23%',
    quality: '92%',
    progress: 'شهر34',
  },
];

const columns = [{
  title: 'المشروع',
  dataIndex: 'projectName',
  key: 'projectName',
  render: (text) => {
    return (
      <Link to="/app/employees/work-management/1">{text}</Link>
    )
  }
}, {
  title: 'المهام',
  dataIndex: 'tasks',
  key: 'tasks',
},
  {
    title: 'تاريخ الإسناد',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'تاريخ الإنتهاء',
    dataIndex: 'expireAt',
    key: 'expireAt',
  },
  {
    title: 'المديرية/الدائرة',
    dataIndex: 'dep',
    key: 'dep',
  },
  {
    title: 'مؤشر الأداء',
    dataIndex: 'indicator',
    key: 'indicator',
  },
  {
    title: 'الفترة الزمنية',
    dataIndex: 'period',
    key: 'period',
  },
  {
    title: 'درجة الاهمية',
    dataIndex: 'periotiry',
    key: 'periotiry',
  },
  {
    title: 'نسبة الإنجاز',
    dataIndex: 'progressPercent',
    key: 'progressPercent',
  },
  {
    title: 'الجودة',
    dataIndex: 'quality',
    key: 'quality',
  },
  {
    title: 'سرعة الإنجاز',
    dataIndex: 'progress',
    key: 'progress',
  },
];


class WorkManagment extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="section-header">
          <h1 className="title">ادارة مهام العمل</h1>
          <div>
            <ul className="sub-nav">
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  مهمة جديدة
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  مشروع جديد
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  عدد المهام المنجزة
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  عدد المهام العالقة
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  عدد المهام المتأخرة
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  تنبيهات
                </Button>
              </li>
              <li>
                <Button type="primary" size="large" className="dark-btn">
                  نسبة الانجاز
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h1 className="wm-title">
            الخطة السنوية للمشاريع
          </h1>
          <div className="wm-table">
            <Table pagination={false} dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    )
  }
}

export default WorkManagment;
