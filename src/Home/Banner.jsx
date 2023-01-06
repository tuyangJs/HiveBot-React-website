import React from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';

function Banner(props) {
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
        <h1 key="h1">蜂巢机器人服务平台</h1>
        <p key="content">
          开箱即用机器人解决方案框架平台<p>一旦你熟悉它后，能够为你节约大量时间，即写即用、不中断，让你可以更加专注、方便地开发。</p>
        </p>
        <div key="button" className="button-wrapper">
          <a href="https://cy9129qwc8.feishu.cn/wiki/wikcnE0nKvC3erDKAK3GztjIxjh" target="_blank" rel="noopener noreferrer">
            <Button type="primary">
              开发文档
            </Button>
          </a>
          <Button style={{ margin: '0 16px' }} type="primary" ghost>
            开始使用
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
