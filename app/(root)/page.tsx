import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'



const Home = () => {
  const loggedIn = {firstName:"Randhir",lastName:"Singh",email:"randhir@gmail.com"}
  
  return (
    <section className='home'>
      <div className='home-content' >
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            subtext='access and  your account information eaily'
            title='Welcome '
            user={loggedIn?.firstName || 'Guest'}
            />
         <TotalBalanceBox 
          accounts={[]}
          totalCurrentBalance={1250}
          totalBanks={1}
         />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
      user={loggedIn}
      banks={[{currentBalance:125.50},{}]}
      />
    </section>
  )
}

export default Home