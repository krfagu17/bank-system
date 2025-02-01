import { formatAmount } from '@/lib/utils'

import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'


const TotalBalanceBox = ({ accounts, totalCurrentBalance, totalBanks }: TotlaBalanceBoxProps) => {
    return (
        <section className='total-balance'>
            <div className='total-balance-chart'>
               <DoughnutChart accounts={accounts} />
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='h2'>
                    Banck Accounts:{totalBanks}
                </h1>
                <div className='flex flex-col gap-2'>
                    <p className='total-balance-label'>Total Current Balance</p>
                    <div className='total-balance-amount flex-center gap-2'>
                      <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox