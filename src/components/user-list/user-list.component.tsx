import React, { useContext } from 'react'
import AddUser from '../add-user/add-user.component';
import { UserContext } from '../../context/user.context';
import UserItem from '../user-item/user-item.component';
import { RotatingSquare } from 'react-loader-spinner';
import DoAction from '../do-action/do-action.component';

const UserList:React.FC = () => {

  const {state} = useContext(UserContext)
   

  return (
    <>
    <AddUser/>
    <DoAction/>
    <div className='p-5 border border-solid border-gray-300 rounded-lg'>
    {
        state.isLoading ? (<><RotatingSquare
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rotating-square-loading"
          strokeWidth="4"
          wrapperStyle={{ width:'100%',display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          visible={true}
        /></>) : (<>
          <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-grey-300">
            <tr>
              <th scope="col" className="px-6 py-4">NAME</th>
              <th scope="col" className="px-6 py-4">E-MAIL</th>
              <th scope="col" className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
          {
              state.users.map((user) => <UserItem key={user.id} user={user}/>)
            }
          </tbody>
        </table>
        </>)
      }
    </div>
    </>
  )
}

export default UserList;