import { CalendarIcon } from "@heroicons/react/24/outline"



const Filter = () => {
    return (
        <div className="m-5  flex flex-row ">
            <div className="bg-white rounded-md  flex flex-row  p-2 mr-4">
                <div className="bg-blue-400 text-white font-semibold rounded-md m-1 px-2">Today</div>
                <div className=" text-blue-400 font-semibold  m-1 px-2">Weekly</div>
                <div className=" text-blue-400 font-semibold  m-1 px-2">Monthly</div>
            </div>
            <div className="bg-white  flex flex-row  rounded-md p-2 items-center justify-center">
                <div className=" text-blue-500 font-semibold  m-1 px-2">Date</div>
                <div className="w-5 h-5 mx-2 text-blue-500"><CalendarIcon/></div>
            </div>

        </div>
    )
}


export default Filter