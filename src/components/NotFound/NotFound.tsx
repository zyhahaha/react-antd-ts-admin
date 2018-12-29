import * as React from 'react';
// import img from './assets/images/404.png';


class NotFound extends React.Component {
  public state = {
    animated: ''
  };
  public enter = () => {
    this.setState({ animated: 'hinge' })
  };
  public render() {
    return (
      <div className="center" style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}>
        <img src="./assets/images/404.png" alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
      </div>
    )
  }
}

export default NotFound;