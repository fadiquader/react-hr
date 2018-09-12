import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table
} from 'antd';
import { Link } from 'react-router-dom';

import './ٍSubjects.css';

const dataSource = [
  {
    key: '1',
    projectName: 'Francis Lyons',
    tasks: 'الإسماعيلي يستقبل رئيس البرلمان السيريلانكي',
    createdAt: '26 Jul 2018',
    views: '5 ',
    progress: 33,
    status: 'انتهى',
    notes: 44,
  },
  {
    key: '2',
    projectName: 'Francis Lyons',
    tasks: 'الإسماعيلي يستقبل رئيس البرلمان السيريلانكي',
    createdAt: '26 Jul 2018',
    views: '5 ',
    progress: 23,
    status: 'انتهى',
    notes: 24,
  },
];

const columns = [{
  title: 'اسم الشخص',
  dataIndex: 'projectName',
  key: 'projectName',
  render: (text) => {
    return (
      <div className="user">
        <div className="user-avatar">
          <img
            className="img-responsive"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
          />
        </div>
        <div className="text-right">
          <h3>تـامر حمدان العبري</h3>
          <p className="user-position">المدير التنفيذي لشركة ابتكار</p>
        </div>
      </div>
    )
  }
}, {
  title: 'عنوان الموضوع',
  dataIndex: 'tasks',
  key: 'tasks',
},

  {
    title: 'التاريخ',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'عدد المشاهدات',
    dataIndex: 'views',
    key: 'views',
  },
  {
    title: 'التعليقات',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'الاعجاب',
    dataIndex: 'notes',
    key: 'notes',
  },
];


class Subjects extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="section-header">
          <h1 className="title">المنتدى الالكتروني</h1>
          <div>
            <ul className="sub-nav">
              <li>
                <Button
                  onClick={() => this.props.history.push('/app/employees/vb/add')}
                  type="primary" size="large" className="dark-btn">
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
          <h1 className="wm-title">موضوعات المنتدى الالكتروني</h1>

          <div className="subjects-table">
            <Table
              pagination={false}
              dataSource={dataSource}
              columns={columns}
              onRow={(record) => {
                return {
                  onClick: () => this.props.history.push('/app/employees/vb/subject/1'),       // click row
                };
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Subjects;
