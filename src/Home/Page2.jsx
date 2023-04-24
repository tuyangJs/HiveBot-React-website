/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button, Tooltip, Spin } from 'antd'
function Page2(props) {
  const locae = window.Hivelocale.messages
  function clickGoods(e) {
    // 在此函数中传入值
    props.dowPrice(e);
  }
  function updowurl(...e) {
    props.updowurl(...e)
  }
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>{locae["Page2.h1"][0]}<span>{locae["Page2.h1"][1]}</span></h2>
        <OverPack onChange={updowurl.bind(this)}>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              {locae["Page2.p"]}
            </p>
            <div key="code1" className="home-code">
              <Spin spinning={props.loading}>
                <div>
                  <span>{locae["Page2.span1"]}</span> {props.dowurl}&terrace=win_i_x64&channel=0&type=0 <span className="home-code-comment">
                    {locae["Page2.span2"]}
                  </span>
                </div>
                <div> <span>{locae["Page2.span3"]}</span> {props.dowurl}&terrace=win_i_x64&channel=0&type=1</div>
                <div>
                  {locae["Page2.span4"]}
                  <span className="home-code-comment">
                    {locae["Page2.span5"]} https://api.hiveai.cc/Release
                  </span>
                </div>
              </Spin>
            </div>

            <p key="p2" className="page-content">
              {locae["Page2.pa"][0]}
              <a href='https://cy9129qwc8.feishu.cn/wiki/wikcnLn1Ex2F5GePiXXTc9eZT7e' target="_blank">  {locae["Page2.pa"][1]} </a>
              {locae["Page2.pa"][2]}
              <a href='https://com.hiveai.cc/' target="_blank"> {locae["Page2.pa"][3]} </a>
              {locae["Page2.pa"][4]}
              <a href="https://pd.qq.com/s/9dcy6kjpl" target="_blank">  {locae["Page2.pa"][5]} </a>
              {locae["Page2.pa"][6]}
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <Tooltip title={locae["Page2.buttonT"]}>
                <Button onClick={clickGoods.bind(this, true)} icon="download" type="primary">{locae["Page2.button"]}</Button>
              </Tooltip>
            </div>
          </QueueAnim>
        </OverPack>
      </div>

    </div>
  );
}

export default Page2;
