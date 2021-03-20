import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { UserInfo } from "./Strorage";
import { Button } from "./styles/elements";
import { Consumer } from "./contextApi";
const ConfirmDeleteModal = () => {
  return (
    <Consumer>
      {(value) => {
        const {
          confirmModal,
          confirmDelete,
          confirmToogle,
          selectedUserId,
        } = value;
        return (
          <Modal isOpen={confirmModal}>
            <ModalHeader
              cssModule={{ "modal-title": "w-100 text-center text-primary" }}
            >
              Confirmation Alert
            </ModalHeader>
            <ModalBody>
              <div>
                <div className="form-group d-flex">
                  Are you sure you want to delete{" "}
                  {selectedUserId && (
                    <span className="text-info text-capitalize ml-2 mr-1">
                      {selectedUserId.name}{" "}
                      <span role="img" aria-labelledby="question">
                        ❓{" "}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button primary onClick={confirmDelete}>
                Confirm
              </Button>
              <Button gray onClick={confirmToogle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        );
      }}
    </Consumer>
  );
};

export default ConfirmDeleteModal;
