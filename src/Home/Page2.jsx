import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button, Tooltip } from 'antd'
function Page2(props) {
  const locae = window.Hivelocale.messages
  function clickGoods(e) {
    // 在此函数中传入值
    props.dowPrice(e);
  }
  return (

    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>{locae["Page2.h1"][0]}<span>{locae["Page2.h1"][1]}</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              {locae["Page2.p"]}
            </p>
            <div key="code1" className="home-code">
              <div>
                <span>{locae["Page2.span1"]}</span> http://v.hiveai.cc/newv/Hivebot.exe <span className="home-code-comment">
                  {locae["Page2.span2"]}
                </span>
              </div>
              <div> <span>{locae["Page2.span3"]}</span> http://v.hiveai.cc/newv/mysetup.exe</div>
              <div>
                {locae["Page2.span4"]}
                <span className="home-code-comment">
                  {locae["Page2.span5"]} http://v.hiveai.cc/newv/edition.json
                </span>
              </div>
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
                <Button onClick={clickGoods.bind(this, true)} type="primary">{locae["Page2.button"]}</Button>
              </Tooltip>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
