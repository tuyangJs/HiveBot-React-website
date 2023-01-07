import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import { message } from 'antd';
//import Toplod from './Toplod';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});
class Home extends React.PureComponent {
  state = {
    isMobile,
    loaval: 0,
    winix: 'http://v.hiveai.cc/newv/Hivebot.exe'
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  download(data) {
  // message.info('正在启动下载......');
    const winix = this.state.winix
    let url = data ? winix : winix
    const link = document.createElement("a");
    link.href = url;
    link.download = 'Hivebot.exe';
    link.click()
    message.success('启动成功！请在下载列表找到 Hivebot.exe 启动',5)
  }
  render() {
    return (
      <DocumentTitle title="【预览】蜂巢 - bot服务平台 机器人框架方案平台">
        <div>
          {/*   <Toplod isMobile={this.state.loaval}/> */}
          <Header isMobile={this.state.isMobile} />
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} dowPrice={this.download.bind(this)} />
            <Page1 isMobile={this.state.isMobile} />
            <Page2 dowPrice={this.download.bind(this)} />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
