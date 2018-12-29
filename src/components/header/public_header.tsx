import * as React from 'react';
import './header.less';
const screenfull = require('screenfull');
// import screenfull = require('screenfull');
// import {screenfull} from 'screenfull';

import { Badge, Icon, Layout, Menu } from 'antd';
const { Header } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface IpropsType {
  collapsed: boolean,
  toggleCollapsed: () => any
}

class PublicHeader extends React.Component<IpropsType, {}>{

  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  };

  public render() {
    return (
      <Header className="custom-theme header">
        <Icon
          className="header__trigger custom-trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggleCollapsed}
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
          <Menu.Item key="full" onClick={this.screenFull}>
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
    );
  }
}

export default PublicHeader;
