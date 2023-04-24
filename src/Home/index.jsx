/* eslint-disable quotes */
/* eslint-disable indent */
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
const options = {
  method: 'POST',
  url: 'https://api.hiveai.cc/Apply',
  timeout: 15000,
};
enquireScreen((b) => {
  isMobile = b;
});
if (navigator.language != Hivelocale.locale) {
  message.warning(Hivelocale.localesmsg, 8);
}

class Home extends React.PureComponent {
  state = {
    isMobile,
    loaval: 0,
    laddata: window.Hivelocale.locale,
    dowurl: 'https://api.hiveai.cc/',
    urlload: true,
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  updowurl(e) {
    if (e.mode == "leave") {
      this.setState({ urlload:true})
    } else {
      fetch(options.url, { method: "post" }).then(res => res.json()).then(data => {
        this.setState({ dowurl: data.url, urlload: false })
      }).catch((err) => {
        console.log(err);
      })
    }

  }
  download(data) {
    const hide = message.loading('正在启动下载......');
    fetch(options.url, { method: "post" }).then(res => res.json()).then(data => {
      const codeobj = data
      const url = codeobj.url + '&terrace=win_i_x64&channel=0&type=0'
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Hivebot.exe';
      link.target = '_blank'
      hide()
      message.success('启动成功！请在下载列表找到 Hivebot.exe 启动', 5);
      link.click();
    }).catch((err) => {
      hide()
      message.error('获取下载链接失败！', 5);
    })
    request.on('timeout', () => {
      request.abort();
    });
  }
  loacTeab(name) {
    if (localStorage.getItem('locales') == name) {
      return;
    }
    localStorage.setItem('locales', name);
    const eer = window.TabHivelad();
    if (eer) {
      window.location.reload();
    } else {
      message.error('语言切换失败！我们可能没有找到您选择的语言！', 5);
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
            <Page2 dowPrice={this.download.bind(this)} dowurl={this.state.dowurl} updowurl={this.updowurl.bind(this)} loading={this.state.urlload} />
          </div>
          <Footer loacTeab={this.loacTeab.bind(this)} />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
