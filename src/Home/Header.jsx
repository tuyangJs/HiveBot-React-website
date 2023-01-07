import React from 'react';

import { Row, Col, Icon, Menu, Button, Popover } from 'antd';

import { enquireScreen } from 'enquire-js';

const LOGO_URL = 'dist/logo.png';

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }

  render() {

    const { menuMode, menuVisible } = this.state;
    const menu = (
      <Menu mode='horizontal' id="nav" key="nav">
        {
          menuMode === 'horizontal' && (
            <Menu.Item key="home">
              <a>首页</a>
            </Menu.Item>
          )
        }
        <Menu.Item key="docs">
          <a target="_blank" href="https://com.hiveai.cc/" rel="noopener noreferrer"><span>社区</span></a>
        </Menu.Item>
        <Menu.Item key="components">
          <a target="_blank" href="https://cy9129qwc8.feishu.cn/wiki/wikcno5gFUvNzKBE4gvRo12HOJc" rel="noopener noreferrer">文档</a>
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

      <div id="header" className="header">
        <Row>
          <Col xxl={4} xl={5} lg={5} md={5} sm={5} xs={5}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>Hive Bot</span>
            </div>
          </Col>
          <Col offset={0} xxl={19} xl={18} lg={18} md={17} sm={17} xs={17}>
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
    );
  }
}

export default Header;
