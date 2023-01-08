import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';

function Banner(props) {
  const load = window.Hivelocale.messages
  function clickGoods(e) {
    // 在此函数中传入值
    props.dowPrice(e);
  }
  return (
    
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img
              alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">{load['Banner.h1']}</h1>
        <p key="content">
         {load['Banner.p'][0]}<p> {load['Banner.p'][1]}<p> {load['Banner.p'][2]}</p></p>
        </p>
        <div key="button" className="button-wrapper">
          <a href="https://cy9129qwc8.feishu.cn/wiki/wikcnE0nKvC3erDKAK3GztjIxjh" target="_blank" rel="noopener noreferrer">
            <Button type="primary">
            {load['Banner.button'][0]}
            </Button>
          </a>

          <Button onClick={clickGoods.bind(this,true)} style={{ margin: '0 16px' }} type="primary" ghost>
          {load['Banner.button'][1]}
          </Button>
          {/*   <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          /> */}
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
