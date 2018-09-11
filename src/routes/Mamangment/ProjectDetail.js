import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table, Progress
} from 'antd';
import { Link } from 'react-router-dom';

import './ProjectDetail.css';

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
const columns1 = [{
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


class ProjectDetail extends React.Component {

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
          <div className="back-btn">
            <Link className="" to="/app/employees/work-management">
              <p>
                <Icon type="arrow-right" theme="outlined" />
                <span>عودة</span>
              </p>
            </Link>
          </div>
          <div className="card-padding">
            <Row type="flex" gutter={32}>
              <Col xs={24} sm={24} md={16} lg={16}>
                <h1 className="p-title">
                  تنظيم وتيسير بيئة إسكانية متوازنة ومستدامة
                </h1>
                <p><b>نبذة عن المشروع</b></p>
                <p>
                  استحداث وتطوير برامج لتحفيز القطاعين الخاص والعام من خلال التعاون والشراكة في التنظيم والتخطيط والرقابة لتيسير السكن لجميع فئات المجتمع بالسعر والجودة المناسبة.
                  والرؤية والرسالة مبنية على مرتكزين: تمكين الطلب و دعم العرض
                </p>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div>
                 <span style={{ color: 'red' }}>تاريخ الإنتهاء</span>  09/07/2018
                </div>
                <br/>
                <div className="progress">
                  <Progress
                    width={200}
                    type="circle" percent={75} format={percent => ` الحالة: جيد ${percent}%`} />
                </div>
              </Col>
            </Row>
          </div>
          <div className="wm-small-table">
            <Table pagination={false} dataSource={dataSource} columns={columns1} />
          </div>
          <div className="wm-table">
            <div className="wm-label">
              مهام المشروع
            </div>
            <Table pagination={false} dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetail;
