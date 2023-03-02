import React from 'react';
import { Row, Menu,Dropdown, Icon,Col, Button, BackTop } from 'antd';

function Footer(ort) {
 const load = window.Hivelocale.messages
   const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={ort.loacTeab.bind(this,'zh-CN')}>简体中文 🇨🇳</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={ort.loacTeab.bind(this,'en-US')}>English 🇺🇸</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={ort.loacTeab.bind(this,'ja-JP')}>にほんご 🇯🇵</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <footer id="footer" className="dark">
      <div>
        <BackTop />
        <strong style={{ color: 'rgba(64, 64, 64, 0.6)',right:'20px'}}> </strong>
      </div>
        <div className="footer-wrap">
        <Row>
  {/*         <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                  Ant Design Pro GitHub
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant.design">
                  Ant Design
                </a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
              <div>
                <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                  Awesome Ant Design
                </a>
              </div>
            </div>
          </Col> */}
          <Col lg={12} sm={12} xs={24}>
            <div className="footer-center">
              <h2>{load["Footer.urlname"][0]}</h2>
              <div>
                <a target="_blank"  href="https://api.wer.plus/">一铭API</a>
                <span> - </span>
                <span>{load["Footer.url"][0]}</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://api.lovewei.top/">维梦API</a>
                <span> - </span>
                <span>{load["Footer.url"][1]}</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://q.qq.com/">QQ开放平台</a>
                <span> - </span>
                <span>{load["Footer.url"][2]}</span>
              </div>
            </div>
          </Col>
          <Col lg={12} sm={12} xs={24}>
            <div className="footer-center">
              <h2>{load["Footer.urlname"][1]}</h2>
              <div>
                <a target="_blank" href="https://com.hiveai.cc/cate/5/seq/0">
                {load["Footer.urlA"][0]}
                </a>
              </div>
              <div>
                <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=4YaUlGuA">
                {load["Footer.urlA"][1]}
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://com.hiveai.cc/">
                {load["Footer.urlA"][2]}
                </a>
              </div>
            </div>
          </Col>
         {/*  <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="http://ant.design/">Ant Design</a>
                <span> - </span>
                <span>蚂蚁 UI 设计体系</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://antv.alipay.com/">AntV</a>
                <span> - </span>
                <span>蚂蚁数据可视化方案</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                <span>企业级 Node Web 开发框架</span>
              </div>
            </div>
          </Col> */}
        </Row>
      </div>

      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Dropdown overlay={menu} placement="topCenter">
            <Button ghost size="small" >
              {window.Hivelocale.messages.localesName}
              <Icon type="up" />
            </Button>
            </Dropdown>
           
          </div>
        </Col>
        <Col lg={18} sm={24}>
            <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noopener noreferrer"
              target="_blank"
            >
              蜀ICP备2022000695号-1
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
          增值电信业务经营许可证：
            <a
              href="https://tsm.miit.gov.cn/#/home"
              rel="noopener noreferrer"
              target="_blank"
            >
              川B2-20230159
            </a>
          </span>
        </Col>
        <span style={{ marginRight: 12 }}>Copyright © 四川镜芯网络科技有限公司</span>

      </Row>
    </footer>
  );
}


export default Footer;
