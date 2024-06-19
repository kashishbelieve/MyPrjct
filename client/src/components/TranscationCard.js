import React from "react";
import dayjs from 'dayjs';
import {
  Avatar,
  Card,
  Collapse,
  Divider,
  Button,
  message,
  Popconfirm,
  Flex,
} from "antd";
import moment from "moment";
import axios from "axios";
import { useState } from "react";
import { Modal } from "antd";

import { DatePicker, Form, Input, InputNumber } from "antd";

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

const { Meta } = Card;

const TranscationCard = ({
  cost,
  id,
  desc,
  tittle,
  detail,
  getExp,
  expanseDate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteHandler = async (user1, expenses_id1) => {
    try {
      console.log(user1, "user1 ", expenses_id1, "expance_id ");
      const payload = {
        user: user1,
        expenses_id: expenses_id1,
      };
      const res = await axios.post("./deletexpances", payload);
      console.log(payload);
      console.log(res, " ->hhhhhhhh ");
      getExp();
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = async(values) => {
    
    try {
      const payload = {
        ...values,
        expenses_id:id

      };
      const res = await axios.post("./editexp", payload);
      console.log(payload);
      console.log(res, " ->hhhhhhhh ");
      getExp();
    } catch (err) {
      console.log(err);
    }
  };

  const confirm = (e) => {
    console.log("expanseid", id);
    let { user } = JSON.parse(localStorage.getItem("user"));
    user = user._id;
    console.log("user->>", user);
    deleteHandler(user, id);

    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div>
      <Card
        style={{
          width: 800,
          marginTop: 16,
        }}
      >
        <Flex
          style={{ flexDirection: "row" }}
          justify="flex-end"
          align="center"
        >
          <Popconfirm
            title="Delete the transaction"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>delete</Button>
          </Popconfirm>
        </Flex>
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title={tittle}
          description={moment(expanseDate).format('dddd')+"  "+ moment(expanseDate).format("MMMM Do YYYY")}
        />
        <Divider orientation="left">"Amount - ₹{cost} Rs/-"</Divider>
        <Collapse
          size="small"
          items={[
            {
              key: "1",
              label: (
                <Flex
                  style={{ flexDirection: "row" }}
                  justify="space-between"
                  align="center"
                  gap="large"
                >
                  <p>{desc}</p>
                  <p>
                    <Button type="primary" onClick={showModal}>
                      Edit
                    </Button>
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <div>
                        <Form
                          onFinish={editHandler}
                          {...formItemLayout}
                          variant="filled"
                          style={{
                            maxWidth: 600,
                          }}
                        >
                          <Form.Item
                            label="Tittle"
                            name="tittle"
                           
                          >
                            <Input defaultValue={tittle}/>
                          </Form.Item>
                          <Form.Item label="Description" name="desc">
                            <Input defaultValue={desc} />
                          </Form.Item>

                          <Form.Item
                            label="Amount"
                            name="cost"
                           
                          >
                            <InputNumber
                              style={{
                                width: "100%",
                              }}
                              defaultValue={cost}
                            />
                          </Form.Item>

                          <Form.Item label="Detail Description" name="detail">
                            <Input.TextArea defaultValue={detail} />
                          </Form.Item>
                          <Form.Item
                            label="Transaction Date"
                            name="expanseDate"
                          
                          >
                            <DatePicker defaultValue={[dayjs(moment(expanseDate).format('L'))]}/>
                          </Form.Item>

                          <Flex align="center" justify="center">
                            <Button type="primary" htmlType="submit">
                              Submit
                            </Button>
                          </Flex>
                        </Form>
                      </div>
                    </Modal>
                  </p>
                </Flex>
              ),
              children: <div>{detail}</div>,
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default TranscationCard;
