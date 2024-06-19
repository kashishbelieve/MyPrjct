import React, { useState } from "react";
import { Button, Card, Flex, Modal, Space } from "antd";
import AddTransactions from "./AddTransactions";
import AddBudget from "./AddBudget";

const LocalizedModal = ({userid}) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        budget
      </Button>
      <Modal
        title="Budget"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Okay"
        cancelText="dont change"
      >
        <AddBudget userid={userid}></AddBudget>
      </Modal>
    </>
  );
};
const FormTransactions = ({ getExp ,userid}) => {
  const [ contextHolder] = Modal.useModal();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Flex justify="space-evenly" align="center" style={{
        width:800,
        marginTop:16
      }}>
        <Card >
          <Space>
            <LocalizedModal userid={userid}></LocalizedModal>
            
            <Button type="primary" onClick={showModal}>
              Add Transaction
            </Button>
            <Modal
              title="Modal"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="Okay"
              cancelText="dont change"
            >
              <AddTransactions getExp={getExp}></AddTransactions>
            </Modal>
          </Space>
          {/* {contextHolder} */}
        </Card>
      </Flex>
    </>
  );
};
export default FormTransactions;
