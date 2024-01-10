const TotalCard = () => {
    return (
        <div className="h-[98%]">
            <div className="rounded-xl bg-cover bg-center h-full p-10  bg-gradient-to-r from-sky-400 to-blue-500">
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
    );
}

export default TotalCard;


// bg-[url('src/assets/totlacardbg.png')]     // add this to set bg image