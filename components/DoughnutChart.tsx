"use client"

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  
    const data = {
        datasets:[
            {
                label:"Bank",
                data:[10,20,30],
                backgroundColor:['#FF6384','#36A2EB','#FFCE56']


            }
        ],
        labels:['Red','Blue','Yellow']
    }
       

  return (
   <Doughnut 
   options={{
    cutout: '60%',
    plugins: {
        legend: {
            display: false,
        },
    },
   }}
   data={data}
   
   />
  )
}

export default DoughnutChart