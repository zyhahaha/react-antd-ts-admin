import * as React from 'react';
import './App.less';
import PublicHeader from './components/header/public_header';
import PublicSide from './components/side/public_side';
import Routes from './router/index';
import Login from './pages/login/login';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

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
    const noLogin = false;
    return (
      noLogin ? <Login /> : 
      <div className="main">
        <PublicSide collapsed={this.state.collapsed} />
        {/*  main */}
        <div className="main-wrap">
          <PublicHeader toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed} />
          <Content>
            <Routes />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            react-antd-ts-admin ©{new Date().getFullYear()} Created by 980355088@qq.com
          </Footer>
        </div>
      </div>
    );
  }
}

export default App;
