
const TodaysInvoice = () => {
  return (
        <div className="bg-white p-6 rounded-lg w-full h-full flex flex-col shadow-2xl">
            <h2 className="text-2xl  text-sky-500 font-semibold mb-4">Today's Invoice</h2>
                <div className="grid grid-cols-3 text-sm font-semibold mb-2 text-center text-black bg-gray-200 p-2">
                    <p>Payment Ref</p>
                    <p>Invoice Value</p>
                    <p>Invoice Status</p>
                </div>
          <div className="text-center text-gray-500 my-10">No Data Found</div>
          <div className="order-last border-t border-gray-400 mt-8"></div>

        </div>
    );
  
}

export default TodaysInvoice