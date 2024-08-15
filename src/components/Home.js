import React from 'react'
import '../App.css'
import {  BsFillArchiveFill, BsMenuButtonWideFill,BsListCheck,BsFillGearFill, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsFillPeopleFill } from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line} from 'recharts';
import Footer from './Footer';
const Home = () => {
    const data = [
        {
          name: 'Products',
          uv: 400,
          pv: 240,
          amt: 2400,
        },
        {
          name: 'Categories',
          uv: 300,
          pv: 139,
          amt: 2210,
        },
        {
          name: 'Customers',
          uv: 207,
          pv: 980,
          amt: 2290,
        },
        {
          name: 'Inventory',
          uv: 29,
          pv: 39,
          amt: 2000,
        },
        {
          name: 'Report',
          uv: 18,
          pv: 480,
          amt: 2181,
        },
        {
          name: 'Settings',
          uv: 2,
          pv: 38,
          amt: 2500,
        },
        {
          name: 'Overall',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        }
      ];
  return (
    <main className='main-container'>
        <div className='main-title'>
        <BsGrid1X2Fill/>
            <h3>DASHBOARD</h3>
           
        </div>
        <div className='main-cards'>
            <div className='card'>
            <div className='card-inner'>
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill />
            </div>
            <h1>300</h1>
            </div>
            <div className='card'>
            <div className='card-inner'>
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill/>
            </div>
            
            <h1>50</h1>
            </div>
            <div className='card'>
            <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsFillPeopleFill/>
            </div>
            <h1>210</h1>
            </div>
            <div className='card'>
            <div className='card-inner'>
                <h3>INVENTORY</h3>
                <BsMenuButtonWideFill/>
            </div>
            <h1>10</h1>
            </div>
            <div className='card'>
            <div className='card-inner'>
                <h3>REPORT</h3>
                <BsListCheck/>
            </div>
            <h1>30</h1>
            </div>
            <div className='card'>
            <div className='card-inner'>
                <h3>SETTINGS</h3>
                <BsFillGearFill/>
            </div>
            <h1>4</h1>
            </div>
        </div>
        <div className='charts'>
            <div className='chart-container'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div className='chart-container'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
   </div>
   <Footer/>
    </main>
  )
}

export default Home
