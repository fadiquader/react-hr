import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import './Private.css'
import logo from '../assets/icons/Small_Top_Logo.svg';

const { Header, Sider } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Private extends React.Component {
  state = {
    collapsed: false,
    isMobile: window.innerWidth <= 768,
    openKeys: [],
  };

  componentDidMount() {
    window.onresize = e => {
      const { isMobile } = this.state;
      let newSize = window.innerWidth <= 768;
      if(isMobile === newSize) return;
      this.setState({
        isMobile: newSize,
      })
    }
  }

  toggle = () => {
    this.setState(prev => ({
        collapsed: !prev.collapsed,
      }
    ))
  }

  onClick = () => {
    console.log('onClick')
    const { isMobile } = this.state;
    if(isMobile) {
      this.setState({
        collapsed: false,
      })
    }
  };

  onOpenChange = (openKeys) => {
    console.log('openKeys ', openKeys)
    this.setState({
      openKeys: [openKeys[openKeys.length -1 ]]
    })
  }

  render() {
    const { collapsed, isMobile } = this.state;
    const menu = (
      <Menu
      >
        <Menu.Item key="3">
          تيست
        </Menu.Item>
      </Menu>
    );
    let toggleCls  = '';
    if((!isMobile && collapsed)) {
      toggleCls = 'toggled-des'
    } if (isMobile && !collapsed) {
      toggleCls = 'toggled-des-mobile'
    }
    return (
      <Layout className="mvh-100" hasSider>
        <div className={`toggle-btn ${toggleCls}`}>
          <span onClick={this.toggle}>
            <Icon type="menu-fold" theme="outlined" />
          </span>
        </div>
        <div className={`sider private-page ${isMobile ? `sider-mobile ${collapsed ? 'sider-mobile-opened' : ''}` : ''}`}>
          <div className="side-logo">
            <div>
              <img src={logo} alt=""/>
            </div>
            {
              !collapsed &&
              <div>
                <p>إدارة رأس</p>
                <h3>المال البشري</h3>
              </div>
            }

          </div>
          <Sider
            trigger={null}
            collapsible
            collapsed={isMobile ? false: collapsed}
            // breakpoint="md"
            collapsedWidth={isMobile ? 0 : 80}
            width={225}

            // style={{ width: collapsed ? !isMobile ? 80 : 0 : 225 }}
            // onBreakpoint={(broken) => this.setState({ collapsed: true })}
          >
            <Menu
              onClick={this.onClick} mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
            >
              <Menu.Item key="ss1">
                <Link to="/dashboard/organization">
                  {icons.home}
                  <span>الرئيسيــة</span>
                </Link>
              </Menu.Item>
              <SubMenu key="ssub4" title={<span>{icons.vacation}<span>وحدة الإجــــــازات</span></span>}>
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

              <SubMenu key="sub2" title={<span>{icons.emps}<span>وحدة الموظفين</span></span>}>
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
                    <span>
                      {icons.employees}
                      <span>وحدة ادارة مهام العمل</span></span>
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
                  {icons.vb}
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
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="ss1">
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

const icons = {
  employees: (
    <svg fill="#1a5d92" className="side-icon" width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Everything" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="وحدة-الموظفين-3" transform="translate(-1395.000000, -867.000000)" fill="#F8FAFF" fillRule="nonzero">
          <g id="icons8-submit_resume" transform="translate(1394.000000, 108.000000)">
            <g id="icons8-administrative_tools" transform="translate(1.000000, 759.000000)">
              <path d="M8.078125,0 C7.838125,0 7.6338906,0.1692969 7.5878906,0.4042969 L7.1757812,2.5234375 C6.3550224,2.8338012 5.5961042,3.2674041 4.9296875,3.8144531 L2.8964844,3.1132812 C2.6704844,3.0362812 2.4207813,3.1289375 2.3007812,3.3359375 L0.3789062,6.6640625 C0.2589062,6.8710625 0.303375,7.1340156 0.484375,7.2910156 L2.1132812,8.707031 C2.0445153,9.128986 2,9.558619 2,10 C2,10.441573 2.0402933,10.873401 2.109375,11.294922 L0.484375,12.708984 C0.303375,12.865984 0.2589062,13.128937 0.3789062,13.335938 L2.3007812,16.664062 C2.4207813,16.871063 2.6694844,16.964719 2.8964844,16.886719 L4.9511719,16.177734 C5.5660953,16.677679 6.2539147,17.091458 7,17.394531 L7,14 C7,13.595 7.0774531,13.21175 7.1894531,12.84375 C6.4554531,12.11775 6,11.113 6,10 C6,7.791 7.791,6 10,6 C12.209,6 14,7.791 14,10 L18,10 C18,9.558619 17.955485,9.128986 17.886719,8.707031 L19.515625,7.2910156 C19.696625,7.1340156 19.741094,6.8710625 19.621094,6.6640625 L17.699219,3.3359375 C17.579219,3.1289375 17.330516,3.0352813 17.103516,3.1132812 L15.070312,3.8144531 C14.403896,3.2674041 13.644978,2.8338012 12.824219,2.5234375 L12.412109,0.4042969 C12.366109,0.1692969 12.161875,0 11.921875,0 L8.078125,0 Z M11,12 C9.895,12 9,12.895 9,14 L9,22 L22,22 L22,14 C22,12.895 21.105,12 20,12 L11,12 Z M17.585938,14 L19,15.414062 L15.414062,19 L12,19 L12,17 L14.585938,17 L17.585938,14 Z" id="Shape"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  vacation: (
    <svg className="side-icon" xmlns="http://www.w3.org/2000/svg"  width="16px" height="20px" viewBox="0 0 16 20" version="1.1">
      <g id="Everything" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="وحدة-الموظفين-3" transform="translate(-1398.000000, -670.000000)" fill="#F8FAFF" fillRule="nonzero">
          <g id="icons8-submit_resume" transform="translate(1394.000000, 108.000000)">
            <g id="icons8-motion_detector" transform="translate(4.000000, 562.000000)">
              <path d="M4,0 C2.894531,0 2,0.894531 2,2 C2,3.105469 2.894531,4 4,4 C5.105469,4 6,3.105469 6,2 C6,0.894531 5.105469,0 4,0 Z M7.40625,0 C7.804688,0.601563 8,1.300781 8,2 C8,2.300781 8.007813,2.511719 7.90625,2.8125 L7.8125,3.40625 L8.3125,3.8125 C9.3125,4.613281 10,5.800781 10,7 L10,20 L12,20 L12,7 C12,5.300781 11.300781,3.699219 10,2.5 L10,2 C10,1.300781 9.894531,0.601563 9.59375,0 L7.40625,0 Z M11.59375,0 C11.894531,0.601563 12,1.085938 12,1.6875 C13.300781,3.1875 14,5 14,7 L14,20 L16,20 L16,7 C16,4.800781 15.304688,2.707031 13.90625,0.90625 C13.90625,0.605469 13.789063,0.300781 13.6875,0 L11.59375,0 Z M2,5 C1.476563,5 0.941406,5.183594 0.5625,5.5625 C0.183594,5.941406 0,6.476563 0,7 L0,14 L1,14 L1,20 L3,20 L3,14 L5,14 L5,20 L7,20 L7,14 L8,14 L8,7 C8,6.476563 7.816406,5.941406 7.4375,5.5625 C7.058594,5.183594 6.523438,5 6,5 L2,5 Z" id="Shape"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  home: (
    <svg className="side-icon" xmlns="http://www.w3.org/2000/svg" width="22px" height="19px" viewBox="0 0 22 19" version="1.1">
      <g id="Everything" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="وحدة-الموظفين-3" transform="translate(-1395.000000, -108.000000)" fill="#F8FAFF" fillRule="nonzero">
          <g id="icons8-submit_resume" transform="translate(1394.000000, 108.000000)">
            <g id="icons8-home" transform="translate(1.000000, 0.000000)">
              <polygon id="Shape" points="11 0.0996094 0 10 3 10 3 19 8 19 8 12 14 12 14 19 19 19 19 10 22 10 18 6.4003906 18 2 16 2 16 4.5996094"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  vb: (
    <svg className="side-icon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
      <g id="Everything" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="وحدة-الموظفين-3" transform="translate(-1396.000000, -1067.000000)" fill="#F8FAFF" fillRule="nonzero">
          <g id="icons8-submit_resume" transform="translate(1394.000000, 108.000000)">
            <g id="icons8-forumbee" transform="translate(2.000000, 959.000000)">
              <path d="M10.007813,0 C4.488281,0 0,4.488281 0,10.007813 C0,10.765625 0.078125,11.503906 0.238281,12.214844 C2.308594,6.824219 6.492188,2.304688 12.09375,0.214844 C11.417969,0.070313 10.726563,0 10.007813,0 Z M15.671875,1.777344 C12.984375,2.550781 4.980469,5.65625 1.773438,15.691406 C2.332031,16.492188 3.003906,17.222656 3.765625,17.828125 C7.214844,7.417969 15.097656,4.503906 17.832031,3.789063 C17.21875,3.023438 16.480469,2.335938 15.671875,1.777344 Z M19.199219,6.070313 C10.300781,8.933594 7.054688,16.398438 6.117188,19.195313 C6.917969,19.535156 7.773438,19.773438 8.664063,19.894531 C9.605469,17.519531 12.605469,11.585938 19.894531,8.613281 C19.773438,7.722656 19.542969,6.871094 19.199219,6.070313 Z M19.894531,11.421875 C18.972656,11.878906 17.460938,12.808594 15.40625,14.734375 C13.070313,16.917969 11.984375,18.808594 11.519531,19.867188 C12.851563,19.660156 14.109375,19.203125 15.214844,18.523438 L19.992188,19.988281 C19.992188,19.988281 19.042969,16.457031 18.574219,15.117188 C19.242188,14.003906 19.703125,12.761719 19.894531,11.421875 Z" id="Shape"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  emps: (
    <svg className="side-icon"  xmlns="http://www.w3.org/2000/svg" width="17px" height="20px" viewBox="0 0 17 20" version="1.1">
      <g id="Everything" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="وحدة-الموظفين-3" transform="translate(-1398.000000, -188.000000)" fill="#FFFFFF">
          <g id="icons8-submit_resume" transform="translate(1394.000000, 108.000000)">
            <g id="icons8-open_resume" transform="translate(4.000000, 80.000000)">
              <path d="M1.87273741,0.001736 C1.64617441,0.013455 1.43133141,0.052517 1.22039341,0.134549 C0.712581406,0.337674 0.306331406,0.751736 0.118831406,1.263455 C0.0485184056,1.458767 0.0133624056,1.661892 0.00164340562,1.87283 C0.0172684056,7.294705 -0.00616859438,12.712674 0.00164340562,18.130642 C0.0133624056,18.34158 0.0485184056,18.548611 0.118831406,18.743924 C0.306331406,19.255642 0.712581406,19.669705 1.22039341,19.868924 C1.43133141,19.950955 1.64617441,19.993924 1.87273741,20.001736 C4.58367441,20.001736 7.29070641,19.99783 10.0016434,19.99783 L10.0016434,18.001736 L2.00164341,18.001736 L2.00164341,2.001736 L14.0016434,2.001736 L14.0016434,11.001736 L15.9860184,11.001736 C15.9821124,7.96658 15.9860184,4.923611 16.0016434,1.87283 C15.9938314,1.661892 15.9586744,1.458767 15.8883624,1.263455 C15.7008624,0.751736 15.2946124,0.337674 14.7867994,0.134549 C14.5758624,0.052517 14.3571124,0.013455 14.1305494,0.001736 C10.0563314,-0.00217 5.97039341,0.001736 1.87273741,0.001736 Z M8.00164341,4.001736 C6.89617441,4.001736 6.00164341,4.896267 6.00164341,6.001736 C6.00164341,7.107205 6.89617441,8.001736 8.00164341,8.001736 C9.10711241,8.001736 10.0016434,7.107205 10.0016434,6.001736 C10.0016434,4.896267 9.10711241,4.001736 8.00164341,4.001736 Z M7.98601841,9.001736 C5.59539341,9.001736 5.00164341,10.501736 5.00164341,10.501736 L5.00164341,12.001736 L11.0016434,12.001736 L11.0016434,10.501736 C11.0016434,10.501736 10.3727374,9.001736 7.98601841,9.001736 Z M13.0016434,13.001736 L13.0016434,17.001736 L11.0016434,17.001736 L14.0016434,20.001736 L17.0016434,17.001736 L15.0016434,17.001736 L15.0016434,13.001736 L13.0016434,13.001736 Z" id="Shape"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
export default Private;
