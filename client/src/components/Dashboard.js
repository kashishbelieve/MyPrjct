

import React, { useEffect, useState } from 'react';
import TranscationCard from './TranscationCard';
import Progressbuget from './Progressbuget';
import {Button, Flex, Modal } from 'antd';
import FormTransactions from './FormTransactions';
import axios from 'axios';
import Filterdate from './Filterdate';


const Dashboard = () => {
  const [expData,setdeatils]=useState(false);
  const [allTransactions,setTransactions]=useState({});
  const [userid,setUserId] = useState({});
 
  const getexpances =async()=>{
    try{
      const {user}=JSON.parse(localStorage.getItem('user'));
      const res = await axios.post('/getAll',{id:user._id});
      console.log(user._id);
      setUserId(user._id);
      console.log(res);
      setTransactions(res.data);
      console.log("res.data user",res.data);
      setdeatils(true);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getexpances();    
  }, [])
    
  console.log("hello get all",expData);
  const [reload,setReload] = useState(false); 

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

  return (
    <div>
      
      { expData &&
        <Progressbuget userdeatil={allTransactions}></Progressbuget>
      }
      <Flex ><FormTransactions userid={userid} getExp={getexpances}></FormTransactions></Flex>
      <>
      <Button type="primary" onClick={showModal}>
        Filter
      </Button>
      <Modal title="Filter data by date" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Filterdate setTransactions={setTransactions}></Filterdate>
      </Modal>
    </>
      {expData &&
        allTransactions.user.expenses.map((expance,index)=>{
          return(<TranscationCard key={index}  getExp={getexpances}reload={reload} setReload={setReload} id={expance._id} cost={expance.cost} desc={expance.desc} tittle={expance.tittle} detail={expance.detail} expanseDate={expance.expanseDate}/>);
        })
      }
      
      
    </div>
  )
}

export default Dashboard