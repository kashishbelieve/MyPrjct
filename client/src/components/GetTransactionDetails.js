import React, { useState } from "react";
import './gettranscation.css'
import { Button, Flex, message, Popconfirm } from "antd";

import { Avatar, Card } from "antd";
const { Meta } = Card;
const GetTransactionDetails = () => {
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <div>
      <div>
        <Flex gap="small">
          <div>
            <Card
              style={{
                width: 400,
                marginTop: 10,
                
              }}
            >
            <Flex align="flex-start" justify="flex-end">
              <Popconfirm 
                placement="topRight" 
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button danger  className="delete-button" >Delete</Button>
              </Popconfirm>
            </Flex>
             <Card gap="large">
             <Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
                title="Card title  RS 4000"
                description="This is the description"
              />
             </Card>
             
            </Card>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default GetTransactionDetails;
