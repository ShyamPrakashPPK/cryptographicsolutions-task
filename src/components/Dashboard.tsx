import AddCustomer from './Cards/AddCustomer'
import CreateInvoice from './Cards/CreateInvoice'
import ExpiringInvoices from './Cards/ExpiringInvoices'
import InvoicesCreated from './Cards/InvoicesCreated'
import NumberOfCustomers from './Cards/NumberOfCustomers'
import TodaysInvoice from './Cards/TodaysInvoice'
import TodaysPaidInvoice from './Cards/TodaysPaidInvoice'
import TotalCard from './Cards/TotalCard'
import ValueOfTransactions from './Cards/ValueOfTransactions'
import Filter from './Filter/Filter'
import Navbar from './NavBar/Navbar'
import { SideBar } from './SideBar/SideBar'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-row  '>

                <SideBar />
        
                <div className='p-10 flex-grow'>

                    <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-12 gap-5">
                        
                        <div className=" md:col-span-7"></div>
                        <div className=" col-span-1 md:col-span-3"><Filter /></div>
                        

                        <div className='col-span-1 md:col-span-4 row-span-4'>
                            <TotalCard />
                        </div>
                        <div className='col-span-1 md:col-span-3 row-span-2'>
                            <div className="">
                                <InvoicesCreated />
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-3 row-span-2'>
                            <div className="">
                                <NumberOfCustomers />
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-3 row-span-2'>
                            <div className="">
                                <ValueOfTransactions />
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-3 row-span-2'>
                            <div className="">
                                <ExpiringInvoices />
                            </div>
                        </div>

                        <div className='col-span-1 md:col-span-2 row-span-2'>
                            <CreateInvoice />
                        </div>
                        <div className='col-span-1 md:col-span-2 row-span-2'>
                            <AddCustomer />
                        </div>

                        <div className='col-span-1 md:col-span-6 row-span-2'>
                        </div>

                        <div className='col-span-1 md:col-span-4 row-span-4'>
                            <TodaysInvoice />
                        </div>
                        <div className='col-span-1 md:col-span-6 row-span-4'>
                            <TodaysPaidInvoice />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard