import React from "react";
import { Consumer } from "./contextApi";
import { Button } from "./styles/elements";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditModal = () => {
  return (
    <Consumer>
      {(value) => {
        const {
          handleEdit,
          modal,
          closeToogle,
          selectedUserId,
          onSaveEdit,
        } = value;
        return (
          <Modal isOpen={modal}>
            <ModalHeader cssModule={{ "modal-title": "w-100 text-center" }}>
              Edit User
            </ModalHeader>
            <ModalBody>
              {selectedUserId && (
                <div>
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      value={selectedUserId.fname}
                      onInput={(e) => handleEdit({ fname: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      value={selectedUserId.lname}
                      onInput={(e) => handleEdit({ lname: e.target.value })}
                      className="form-control ml-2"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter You Email"
                    value={selectedUserId.email}
                    onInput={(e) => handleEdit({ email: e.target.value })}
                    className="form-control ml-2"
                  />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button primary onClick={onSaveEdit}>
                OK
              </Button>
              <Button gray onClick={closeToogle}>
                Cancle
              </Button>
            </ModalFooter>
          </Modal>
        );
      }}
    </Consumer>
  );
};

export default EditModal;
