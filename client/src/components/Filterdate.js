import React from "react";
import { Card, DatePicker } from "antd";

import {
  Button,
  
  
  Form,
  
} from 'antd';
import axios from "axios";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};


const Filterdate = ({getExp}) => {
    const submitHandler=async(values)=>{
        try{
            console.log(values);
            const payload ={
                values:values.RangePicker,
            }
            console.log("payload", payload);
      const res = await axios.post("/createbudget", payload);
      console.log(res);

        }catch(err){

        }
    }
  return (
    <Card>
        <div>
      <Form
      onFinish={submitHandler}
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >

    

    <Form.Item
      label="RangePicker"
      name="RangePicker"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <RangePicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
    </Card>
  );
};

export default Filterdate;
