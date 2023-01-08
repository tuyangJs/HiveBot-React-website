import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import { message } from 'antd';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
})
if (navigator.language != localStorage.getItem('locales')) {
  message.warning('检测到您的电脑是中文，如需切换到中文，请在页尾选择语言按钮！', 8)
}
class Home extends React.PureComponent {
  state = {
    isMobile,
    loaval: 0,
    winix: 'https://v.hiveai.cc/newv/Hivebot.exe',
    laddata: window.Hivelocale.locale
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
    message.success('启动成功！请在下载列表找到 Hivebot.exe 启动', 5)
  }
  loacTeab(name) {
    if (localStorage.getItem('locales') == name) {
      return
    }

    localStorage.setItem('locales', name)
    let eer = window.TabHivelad()
    if (eer) {
      window.location.reload()
    } else {
      message.error('语言切换失败！我们可能没有找到您选择的语言！', 5)
    }
  }
  render() {
    return (
      <DocumentTitle title={Hivelocale.messages.HiveWebName}>

        <div>
          {/*   <Toplod isMobile={this.state.loaval}/> */}
          <Header isMobile={this.state.isMobile} />
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} dowPrice={this.download.bind(this)} />
            <Page1 isMobile={this.state.isMobile} />
            <Page2 dowPrice={this.download.bind(this)} />
          </div>
          <Footer loacTeab={this.loacTeab.bind(this)} />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
