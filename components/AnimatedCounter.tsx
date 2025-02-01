"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div>
        <CountUp 
        end={amount}
        prefix='$'
        duration={1.25} />
    </div>
  )
}

export default AnimatedCounter