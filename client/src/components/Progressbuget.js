import React, { useEffect } from "react";
import moment from "moment";
import { Card, Flex, Progress } from "antd";
const twoColors = {
  "0%": "#108ee9",
  "30%": "#108ee9",
  "70%": "#87d068",
  "100%": "#87d068",
};
const conicColors = {
  "0%": "#108ee9",
  "20%": "#108ee9",
  "40%": "#87d068",
  "50%": "#87d068",
  "60%": "#87d068",
  "80%": "#ffe58f",
  "100%": "#ffccc7",
};

const Progressbuget = ({userdeatil}) => {
  const expances = userdeatil.user.expenses.filter(values=>values.cost>0).reduce((accumulator, expense) => accumulator + expense.cost, 0);
  let app = (expances/userdeatil.user.budget)*100;
  app=app.toFixed(2);
  console.log(app);
  const currentDate = moment(userdeatil.user.budgetend);
  const date1=moment(userdeatil.user.budgetstart);
  const differenceInDays = currentDate.diff(date1, 'days');
  const today = moment().startOf('day');

  
  const targetMoment = moment(userdeatil.user.budgetend);


  const daysRemaining = Math.abs(targetMoment.diff(today, 'days'));
  console.log(daysRemaining);

  const dayLeft=100-((daysRemaining/differenceInDays)*100).toFixed(2);
  let SRS = (userdeatil.user.budget - expances) / userdeatil.user.budget * 100;
  SRS=SRS.toFixed(2);
  console.log(SRS);
  
 
  return (
    <div>
      <Flex vertical gap="large">
        <Card
          style={{
            marginTop: 100,
          }}
        >
          <h3>Forcasted usage</h3>
          <Progress percent={99.9} status="active" strokeColor={conicColors} />
        </Card>
        <Card>
          {" "}
          <h3>Budget Left</h3>
          <Progress percent={app} status="active" strokeColor={twoColors} />
        </Card>
        <Card>
          <Flex gap="small" wrap="wrap" justify="space-around">
            <Card>
              <Flex vertical justify="center" align="center">
                <h3>Savings Ratio Score (SRS)</h3>
                <Progress
                  type="circle"
                  status="active"
                  percent={SRS}
                  strokeColor={twoColors}
                />
              </Flex>
            </Card>
            <Card>
              <Flex vertical justify="center" align="center">
                <h3>hostel Rent</h3>
                <Progress type="circle" percent={100} strokeColor={twoColors} />
              </Flex>
            </Card>
            <Card>
              <Flex vertical justify="center" align="center">
                <h3>Days Left</h3>
                <Progress
                  status="active"
                  type="circle"
                  percent={dayLeft}
                  strokeColor={twoColors}
                  format={(percent) => `${daysRemaining} Days`}
                />
              </Flex>
            </Card>
          </Flex>
        </Card>
        <Card>
          <Flex gap="small" wrap="wrap" justify="space-around">
            <Card>
              <Flex vertical justify="center" align="center">
                <Progress
                  type="dashboard"
                  percent={99.9}
                  strokeColor={conicColors}
                  format={(percent) => `${userdeatil.user.budget}`}
                />
                <h3>Budget</h3>
              </Flex>
            </Card>
            <Card>
              <Flex vertical justify="center" align="center">
                <Progress
                  type="dashboard"
                  percent={40}
                  strokeColor={conicColors}
                  format={(percent) => `${expances}`}
                />
                <h3>Expances</h3>
              </Flex>
            </Card>
            <Card>
              <Flex vertical justify="center" align="center">
                <Progress
                  type="dashboard"
                  percent={99.99}
                  strokeColor={conicColors}
                  format={(percent) => `${differenceInDays} Days`}
                />
                <h3>tottal Days</h3>
              </Flex>
            </Card>
          </Flex>
        </Card>
      </Flex>
    </div>
  );
};
export default Progressbuget;
