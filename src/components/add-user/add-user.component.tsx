import React, { useContext } from "react";
import { ModelContext } from "../../context/modal.context";
import Input from "../../common/input/input.component";

import './add-user.styles.css'
import Button from "../../common/button/button.component";

const AddUser:React.FC = () => {
   const {isOpen,toggle} = useContext(ModelContext)
     return (

    <>
      { isOpen ? (
        <>
          <div id="modal" className="modal">
            <div className="modal-content">
               <div className="modal-header">
               <h2>Create user</h2>
               <span className="close" onClick={toggle}>&times;</span>
               </div>
              <div className="modal-from">
                <form>
                    <div className="input-area">
                    <Input type="text" label="Firstname"/>
                    <Input type="text" label="Lastname"/>
                    <Input type="email" label="E-mail"/>
                    </div>
                    <h2 className="action-title">Actions</h2>
                    <div className="actions-area">
                          <div className="check-box-group">
                            <input type="checkbox" />
                            <label>Create item</label>
                          </div>
                          <div className="check-box-group">
                            <input type="checkbox" />
                            <label>Delete item</label>
                          </div>
                          <div className="check-box-group">
                            <input type="checkbox" />
                            <label>View item</label>
                          </div>
                          <div className="check-box-group">
                            <input type="checkbox" />
                            <label>Move item</label>
                          </div>
                    </div>
                    <div className="button-area">
                      <Button name="Cancel" handler={toggle} className="btn btn-grey"/>
                      <Button name="Create" type="submit" className="btn btn-primary"/>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddUser;