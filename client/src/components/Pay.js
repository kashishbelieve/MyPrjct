import React from 'react';
import { Button, Result } from 'antd';


const Pay = () => {
  return (
    <div className='mt-24'> <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  /></div>
  )
}

export default Pay
