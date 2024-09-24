import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Shane, a seasoned Full Stack Developer with a passion for building cutting-edge web applications and robust trading systems. With years of experience in technologies like JavaScript, Python, React, and FastAPI, I specialize in creating user-centric solutions that are both efficient and innovative.
              <br />
              📈 Beyond web development, I’m deeply involved in stock trading and quantitative trading. I enjoy developing automated trading systems that leverage real-time data to make smart, data-driven decisions in the market. My focus on algorithmic trading combines my technical skills with a passion for finance, creating powerful tools that enhance trading strategies.
              <br />
              ✍️ Outside of coding and trading, I’m always exploring new technologies and tackling challenges that push my boundaries, ensuring I stay at the forefront of innovation.
            </p>

            <ButtonLink
              url='https://docs.google.com/document/d/1-MXR50PxfQvah1gM8UuASDwc7PPR3D-GBl24oHXfRP4/edit?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
