import React from 'react';

import { Row, Col, Icon, Menu, Button,Affix } from 'antd';

import { enquireScreen } from 'enquire-js';

const LOGO_URL = 'dist/logo.png';

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
    hendergsh:'header',
    loca:this.props.lostab
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }
  //修改导航栏状态
   henderg(err){
    this.setState({
      hendergsh: err? 'header borderShow':'header'
    },()=>{
     // console.log(this.state.hendergsh)
    })
    }
  render() {
    const hedloca = Hivelocale.messages['Header.menu']
    const {menuMode} = this.state;
    const menu = (
      <Menu mode='horizontal' id="nav" key="nav" style={{background:'#fff0'}}>
        {
          menuMode === 'horizontal' && (
            <Menu.Item key="home">
              <a>{hedloca[0]}</a>
            </Menu.Item>
          )
        }
        <Menu.Item key="docs">
          <a target="_blank" href="https://com.hiveai.cc/" rel="noopener noreferrer"><span>{hedloca[1]}</span></a>
        </Menu.Item>
        <Menu.Item key="components">
          <a target="_blank" href="https://cy9129qwc8.feishu.cn/wiki/wikcno5gFUvNzKBE4gvRo12HOJc" rel="noopener noreferrer">{hedloca[2]}</a>
        </Menu.Item>
        {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="https://pd.qq.com/s/9dcy6kjpl" rel="noopener noreferrer">
                QQ频道
              </a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    return (
    <Affix style={{width:'100% !important'}} onChange={affixed => this.henderg(affixed)}>
      <div id="header" className={this.state.hendergsh}>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={5} sm={5} xs={4}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>Hive Bot</span>
            </div>
          </Col>
          <Col  xxl={12} xl={13} lg={15} md={17} sm={17} xs={20}>
            <div className="header-meta">
              {menuMode === 'horizontal' ? <div id="preview"><a
                id="preview-button"
                target="_blank"
                href="https://pd.qq.com/s/9dcy6kjpl"
                rel="noopener noreferrer"
              >
                <Button icon="export">
                  QQ频道
                </Button>
              </a></div> : null}
              
              <div id="menu">{menu}</div>
            </div>
          </Col>
        </Row>
      </div>
      </Affix>
    );
  }
}

export default Header;
