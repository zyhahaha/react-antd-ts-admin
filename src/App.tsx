import * as React from 'react';
import './App.less';

// test
import { Badge, Icon, Layout, Menu } from 'antd';
const { Header } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  public state = {
    collapsed: false,
  }

  public toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    return (
      <div className="main">
        <div className="side-wrap">
          <div className="side-slider">
            <div id="logo" />
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
        </div>
        {/*  main */}
        <div className="main-wrap">
          <Header className="custom-theme header">
            <Icon
              className="header__trigger custom-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleCollapsed}
            />
            {/* avatar */}
            <Menu
              mode="horizontal"
              style={{ lineHeight: '64px', float: 'right' }}
            // onClick={this.menuClick}
            >
              <Menu.Item key="pwa">
                {/* <PwaInstaller /> */}
              </Menu.Item>
              <Menu.Item key="full" >
                <Icon type="arrows-alt" />
              </Menu.Item>
              <Menu.Item key="1">
                <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
                  <Icon type="notification" />
                </Badge>
              </Menu.Item>
              <SubMenu title={<span className="avatar"><img style={{ width: '20px' }} src="./test.jpg" alt="头像" /><i className="on bottom b-white" /></span>}>
                <MenuItemGroup title="用户中心">
                  <Menu.Item key="setting:1">你好 - test</Menu.Item>
                  <Menu.Item key="setting:2">个人信息</Menu.Item>
                  <Menu.Item key="logout"><span>退出登录</span></Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="设置中心">
                  <Menu.Item key="setting:3">个人设置</Menu.Item>
                  <Menu.Item key="setting:4">系统设置</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Header>
        </div>
      </div>
    );
  }
}
// test

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
