import { UserGroupIcon } from "@heroicons/react/20/solid"
UserGroupIcon

const AddCustomer = () => {
  return (
      <div>
          <div className='bg-sky-700 rounded-xl w-full h-full flex flex-row gap-5 items-center justify-center py-6'>
              <div className='text-2xl font-bold text-white'>Add Customer</div>
              <div className='text-white w-10 h-10  '>
                  <UserGroupIcon />
              </div>
          </div>
      </div>
  )
}

export default AddCustomer