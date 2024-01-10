import { NewspaperIcon } from "@heroicons/react/24/solid"



const CreateInvoice = () => {
    return (
        <div>
            <div className='bg-sky-700 rounded-xl w-full h-full flex flex-row gap-5 items-center justify-center p-12'>
                <div className='text-2xl font-bold text-white'>Create Invoice</div>
                <div className='text-white w-10 h-10  '>
                    <NewspaperIcon/>
                </div>
            </div>
        </div>
    )
}

export default CreateInvoice