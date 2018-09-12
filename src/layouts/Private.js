import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import './Private.css'
const { Header, Sider } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Private extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    const { collapsed } = this.state;
    const menu = (
      <Menu
      >

        <Menu.Item key="3">
          تيست
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className="mvh-100" hasSider>
        <div className="sider private-page">
          <div>
            راس المال البشري
          </div>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/dashboard/organization">
                  <Icon type="home" theme="outlined" />
                  <span>الرئيسية</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/dashboard/organization">
                  <Icon type="solution" theme="outlined" />
                  <span>وحدة التنظيم الاداري</span>
                </Link>
              </Menu.Item>
              <SubMenu key="sub4" title={<span><Icon type="contacts" theme="outlined" /><span>وحدة الإجــــــازات</span></span>}>
                <Menu.Item key="sd1">
                  <Link to="/app/vacations/rules">
                    القوانين
                  </Link>
                </Menu.Item>
                <Menu.Item key="2sdf">
                  <Link to="/app/vacations/archived">
                    أرشيف الإجازات
                  </Link>
                </Menu.Item>
                <Menu.Item key="fffsd">
                  <Link to="/app/vacations/add">
                    طلب الإجازة
                  </Link>
                </Menu.Item>
                <Menu.Item key="sdfdf">
                  <Link to="/app/vacations">
                    الحالة
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" title={<span><Icon type="contacts" theme="outlined" /><span>وحدة الموظفين</span></span>}>
              <Menu.Item key="5">
                <Link to="/app/employees/personal-info">البيانات الشخصية</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/app/employees/qualifications">
                  المؤهلات
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/app/employees/employment-info">
                  البيانات الوظيفية
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/app/employees/experiences">
                  الخبرات العملية والعلمية
                </Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/app/employees/fin">
                  البيانات المالية
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/app/employees/members">
                  العضويات واللجان
                </Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/app/employees/nadb">
                  الندب
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/app/employees/movement">
                  النقل
                </Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to="/app/employees/punishment">
                  الجزاءات والمساءلة
                </Link>
              </Menu.Item>
              <Menu.Item key="15">
                <Link to="/app/employees/achievment">
                  الترقيات
                </Link>
              </Menu.Item>
              <Menu.Item key="16">
                <Link to="/app/employees/loaning">
                  الإعــــارة
                </Link>
              </Menu.Item>
            </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <Link to="/app/employees/management">
                    <span><Icon type="contacts" theme="outlined" /><span>وحدة ادارة مهام العمل</span></span>
                  </Link>
                }
              >
                <Menu.Item key="p">
                  <Link to="/app/employees/work-management">الخطة السنوية للمشاريع التقارير</Link>
                </Menu.Item>
                <Menu.Item key="p1">
                  <Link to="/app/employees/reports">
                    التقارير
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="s">
                <Link to="/app/employees/vb">
                  <Icon type="home" theme="outlined" />
                  <span>المنتــدى الإلكــتــــروني</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
        <Layout className="private-layout">
          <div className="header-bg" />
          <div className="page-content">
            <div className="header">
              <Header>
                <div className="nav">
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="1">
                      <div className="notif">
                        <Icon type="notification" theme="outlined" />
                      </div>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Dropdown
                        overlay={menu}
                        trigger={['click']}
                        placement="bottomLeft"
                      >
                        <a className="user-menu-label">
                          <Avatar size={32} icon="user" />
                          <span>ايمن الشلتوني</span>
                          <Icon type="down" />
                        </a>
                      </Dropdown>
                    </Menu.Item>

                    <Menu.Item key="3">
                      <div className="signout">
                        <Icon type="export" theme="outlined" />
                        <span className="signout-label">تسجيل خروج</span>
                      </div>
                    </Menu.Item>
                  </Menu>
                </div>
              </Header>
            </div>
            <div>
              <Switch>
                {this.props.routes.map(item => (
                  <Route
                    key={item.key} path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </Layout>
      </Layout>
    )
  }
}

export default Private;
