import React from 'react';
import { Progress } from 'antd';
class Toplod extends React.Component {
  state = {
    weblodvl: 0
  }
  render() {
    const {weblodvl} = this.state;
    const weblod = (
      <div style={{ width: '100%'}}>
        <Progress percent={weblodvl} strokeWidth={5} showInfo={false} />
      </div>
    )

    return (
      <div className="Toplod">{weblod}</div>
    )
  }
}
export default Toplod;