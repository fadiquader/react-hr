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
    tasks: 'الهواتف المحمولة',
    createdAt: '09/07/2018',
    attachments: '5 ملفات',
    progress: 'قيد الانجاز',
    status: 'انتهى',
    notes: 'لاتوجد ملاحظات',
  },
  {
    key: '2',
    projectName: 'Francis Lyons',
    tasks: 'الهواتف المحمولة',
    createdAt: '09/07/2018',
    attachments: '5 ملفات',
    progress: 'قيد الانجاز',
    status: 'انتهى',
    notes: 'لاتوجد ملاحظات',
  },
];

const columns = [{
  title: 'المشروع',
  dataIndex: 'projectName',
  key: 'projectName',
  render: (text) => {
    return (
      <p>{text}</p>
    )
  }
}, {
  title: 'المهام المرتبطة بالمشروع',
  dataIndex: 'tasks',
  key: 'tasks',
},
  {
    title: 'المرفقات',
    dataIndex: 'attachments',
    key: 'attachments',
  },

  {
    title: 'الإنجاز',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'الحالة',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      return (
        <p className="done">{text}</p>
      )
    }
  },
  {
    title: 'المرفقات',
    dataIndex: 'attahments',
    key: 'attahments',
  },
  {
    title: 'سرعة الإنجاز',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'notes',
    key: 'notes',
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
          <div className="card-section">
            <div className="ma-table">
              <Table pagination={false} dataSource={dataSource} columns={columns} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkManagment;
