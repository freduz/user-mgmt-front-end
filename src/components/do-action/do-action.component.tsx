import { ChangeEvent, FC, useContext, useState } from "react";
import { ModelContext } from "../../context/modal.context";
import Button from "../../common/button/button.component";
import { UserContext } from "../../context/user.context";
import { UserService } from "../../service/user.service";
import { toast } from "react-toastify";


const DoAction:FC<{}> = () => {

    const {isOpen,setIsOpen} = useContext(ModelContext)
    const [selectedValue, setSelectedValue] = useState('create-item');
    const {state,setState}  = useContext(UserContext)

  const handleSelectChange:(event:ChangeEvent<HTMLSelectElement>) => void = (event) => {
    setSelectedValue(event.target.value);
  };

    const closeModal = () => {
        setIsOpen({
          add_modal:false,
          run_modal:false
        });
     }

     const runAction = async () => {
        try {
           await UserService.runAction({userId:state.selectedId as number,actions:[selectedValue]})
           toast.success("Action executed successfully")
           setState((state) => ({...state,selectedId:undefined}))
           closeModal()
        } catch (error:any) {
          toast.error(error.response.data.message ?? 'Bad Request')
        }
     }

   

   return (<>
   {
     isOpen.run_modal && ( <div id="modal" className="modal">
     <div className="modal-content">
        <div className="modal-header">
        <h2>Run action</h2>
        <span className="close" onClick={closeModal}>&times;</span>
        </div>
       <div className="modal-from">
       <label className="block text-gray-700 font-bold mb-2">Select action</label>
       <select id="selectBox" className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500" onChange={handleSelectChange}>
        <option value="create-item" selected>Create item</option>
        <option value="delete-item">Delete item</option>
        <option value="view-item">View item</option>
        <option value="move-item">Move item</option>
  </select>
  <div className="button-area">
                      <Button name="Cancel" handler={closeModal} className="btn btn-grey"/>
                      <Button name="Run" type="submit" handler={runAction} className="btn btn-primary"/>
                    </div>
       </div>
     </div>
   </div>)
   }
       
   </>)
}

export default DoAction;