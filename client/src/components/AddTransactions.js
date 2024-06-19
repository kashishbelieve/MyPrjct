import React from 'react';
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
 
} from 'antd';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
   
    sm: {
      span: 10,
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




const AddTransactions = ({getExp}) => {
  
  const submitted=async(v1)=>{
    try{
      console.log(v1);
      const {user} =JSON.parse(localStorage.getItem('user'));
      let userId=user._id;
      console.log(userId,"user",user);
      const payload={
        ...v1,
        user:userId,
      }
      console.log("payload",payload);
      const res = await axios.post('/expances',payload);
      console.log("res",res);
      getExp();
    }catch(err){
      console.log("error in form create expances ",err);
    }
    
}
  return (
    <div><Form
    onFinish={submitted}
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Tittle"
      name="tittle"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Description"
      name="desc"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Amount"
      name="cost"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="Detail Description"
      name="detail"
    >
      <Input.TextArea />
    </Form.Item>    
    <Form.Item
      label="Transaction Date"
      name="expanseDate"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>


      <Flex align='center' justify='center'><Button type="primary" htmlType="submit" >
        Submit
      </Button></Flex>
    
  </Form></div>
  )
}

export default AddTransactions;

