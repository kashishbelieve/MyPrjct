import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import './SimpleSlider.css'
import { Card, Carousel, Flex } from 'antd';


export default function SimpleSlider() {
  
    const contentStyle = {
      margin: 0,
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
    
 

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }

  return (
    <div className="header mt-24">
     <Card
    title="Card title"
    bordered={false}
    style={{
      width: 800,
      height:500
    }}
  >
    <Carousel afterChange={onChange}>
         <Flex justify="center" align="center"> 
            {/* <h3 style={contentStyle}>1</h3> */}
            <img  style={contentStyle} src={image1}/>
          </Flex>


         
          <Flex justify="center" align="center"> <div>
          <img  style={contentStyle} src={image2}/>
          </div></Flex>
          
         
          <Flex justify="center" align="center"><div>
          <img  style={contentStyle} src={image3}/>
          </div></Flex>
          
          <Flex justify="center" align="center"><div>
          <img  style={contentStyle} src={image4}/>
          </div></Flex>
          
        </Carousel>
    
  </Card>
     
      <br />
      <br />
      <div className="AboutUs">
        <div className="Heading">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <p>
            Welcome to Expensy, where we believe that managing student expenses
            should be easy and empowering. Our platform is designed specifically
            for students, offering a range of intuitive tools to help you track,
            budget, and optimize your finances. From tuition fees to daily
            expenses, we're here to simplify the financial aspect of your
            student journey.
          </p>
          <p>
            At Expensy, our mission is to provide students with the tools and
            resources they need to take control of their finances. We understand
            the challenges students face, which is why our platform offers
            features like expense tracking, budget planning, receipt management,
            and insightful reporting. Our goal is to empower you to make
            informed financial decisions and achieve greater financial
            stability.
          </p>
          <p>
            What sets us apart is our commitment to student success. We offer a
            user-friendly interface, robust security measures, and dedicated
            support to ensure that managing your expenses is both efficient and
            secure. With [Your Company Name], you can focus on your studies and
            extracurricular activities while we handle the financial side,
            giving you peace of mind and financial confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
