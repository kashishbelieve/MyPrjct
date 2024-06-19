import React from "react";
import {
  Button,
  DatePicker,
  Form,
  InputNumber  
} from "antd";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 11,
    },
  },
  wrapperCol: {
    xs: {
      span: 14,
    },
    sm: {
      span: 10,
    },
  },
};

const AddBudget = ({ userid }) => {
  const submitHandler = async (values) => {
    try {
      console.log(userid);
      const payload = {
        id:userid,
        ...values
      };
      console.log("payload", payload);
      const res = await axios.post("/createbudget", payload);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
          label="Budget"
          name="budget"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          label="start Date"
          name="budgetstart"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="end Date"
          name="budgetend"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <DatePicker />
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
  );
};

export default AddBudget;
