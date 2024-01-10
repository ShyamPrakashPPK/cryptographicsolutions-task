


const TotalCard = () => {
    return (
        <div>
            <div className=" rounded-xl bg-cover bg-center p-10 bg-[url('src/assets/totlacardbg.png')]" >
                <div className="flex flex-col">
                    <div className="mt-2 font-medium text-white text-2xl">
                        Number of Paid Invoices
                    </div>
                    <div className="text-white text-4xl font-bold py-2">
                        324
                    </div>
                    <div className="mt-7 font-medium text-white text-2xl">
                        Value of Paid Invoices
                    </div>
                    <div className="text-white text-4xl font-bold py-2">
                        2705.96
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalCard