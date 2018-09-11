import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table, Progress
} from 'antd';
import { Link } from 'react-router-dom';

import './ProjectDetail.css';

class Reports extends React.Component {

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
          <div className="card-padding">
            <h1 className="reports-title">
              التقاير
            </h1>
          </div>
          <div className="reports">
            <p>
              يضم تقارير تفصيلية مفلترة جراف حسب أيا من المدخلات في التاب الأول الموضح أعلاه. في البداية يتم اختيار التقرير المطلوب حسب المديرية الدائرة القسم أو الموظف ثم نوع المشروع أو نوع المهام
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Reports;
