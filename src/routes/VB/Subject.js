import React from 'react';
import {
  Button, Form, Input, Row, Col, Select, Radio, Icon, Upload,
  DatePicker, TimePicker, Table, Progress
} from 'antd';
import { Link } from 'react-router-dom';

import './Subject.css';

class Subject extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="section-header">
          <h1 className="title">المنتدى الالكتروني</h1>
          <div>
            <ul className="sub-nav">
              <li>
                <Button type="primary" size="large" className="dark-btn">
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
        <div className="back-btn">
          <Link className="" to="/app/employees/work-management">
            <p>
              <Icon type="arrow-right" theme="outlined" />
              <span>عودة</span>
            </p>
          </Link>
        </div>
        <div className="card-padding">
          <div>
            <h1 className="subject-title">
              تنظيم وتيسير بيئة إسكانية متوازنة ومستدامة
            </h1>
            <span className="subject-date">04/16/2018</span>
          </div>
          <br/>
          <Row type="flex" gutter={16} justify="space-around">
            <Col xs={4} sm={4} md={8} lg={8} className="subject-image-box">
              <img className="img-responsive" src="https://support.content.office.net/en-us/media/c1633a4d-a445-4f6c-87fc-f41fc8f01b69.jpg" width={300} hight={200}/>
            </Col>
            <Col xs={4} sm={4} md={8} lg={8} className="subject-image-box">
              <img className="img-responsive" src="https://www.yasamsigorta.net/wp-content/uploads/2018/04/office_365_business.jpg" width={300} hight={200}/>
            </Col>
            <Col xs={4} sm={4} md={8} lg={8} className="subject-image-box">
              <img className="img-responsive" src="https://www.yasamsigorta.net/wp-content/uploads/2018/04/office_365_business.jpg" width={300} hight={200}/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} className="subject-content-area">
              <p>
              نظمت الهيئة العامة لترويج الاستثمار وتنمية الصادرات "إثـــراء" زيارة استكشافية إلى السوق السوداني لبحث فرص تصدير المنتجات العمانية في عدد من القطاعات وقياس مدى تنافسيتها، تم خلالها الالتقاء ببعض الجهات الحكومية ومؤسسات القطاع الخاص والجهات المعنية بالاستيراد والتصدير والتشريعات التجارية الخاصة بجمهورية السودان.
              </p>
              <p>
              كما تضمنت الزيارة؛ المشاركة من خلال 3 شركات عمانية في قطاع الصناعات الدوائية في المؤتمر العربي الافريقي للصناعات الدوائية والمستلزمات الطبية والمعرض المصاحب له خلال الفترة 12-14 ديسمبر 2017م في العاصمة الخرطوم وذلك تحت رعاية فخامة الرئيس السوداني المشير عمر حسن احمد البشير.
              </p>
              <p>
              كما تضمنت الزيارة؛ المشاركة من خلال 3 شركات عمانية في قطاع الصناعات الدوائية في المؤتمر العربي الافريقي للصناعات الدوائية والمستلزمات الطبية والمعرض المصاحب له خلال الفترة 12-14 ديسمبر 2017م في العاصمة الخرطوم وذلك تحت رعاية فخامة الرئيس السوداني المشير عمر حسن احمد البشير.
              </p>
              <p>
              كما تضمنت الزيارة؛ المشاركة من خلال 3 شركات عمانية في قطاع الصناعات الدوائية في المؤتمر العربي الافريقي للصناعات الدوائية والمستلزمات الطبية والمعرض المصاحب له خلال الفترة 12-14 ديسمبر 2017م في العاصمة الخرطوم وذلك تحت رعاية فخامة الرئيس السوداني المشير عمر حسن احمد البشير.
              </p>
              <p>
              وحول هذه المهمة صرحت الفاضلة نسيمة بنت يحيى زيروك البلوشية، مدير عام تنمية الصادرات والمكلفة بأعمال مدير عام ترويج الاستثمار قائلة: " إضافة إلى التنظيم  والمشاركة في سلسة من المعارض تعتبر دراسة الأسواق الخارجية والزيارات الاستكشافية إحدى أهم الأدوات التي تقدمها إثـــراء للمصنعين والمصدرين العمانيين في سبيل تحديد الفرص من أجل تصدير المنتجات العمانية إلى الأسواق الخارجية والمنافسة
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    )
  }
}

export default Subject;
