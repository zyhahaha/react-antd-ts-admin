import * as React from 'react';
import './App.less';
import PublicHeader from './components/header/public_header';
import PublicSide from './components/side/public_side';

// test
// import { Badge, Icon, Layout, Menu } from 'antd';

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
        <PublicSide collapsed={this.state.collapsed} />
        {/*  main */}
        <div className="main-wrap">
          <PublicHeader toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed} />
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
