import React, { createContext } from "react";
import "../App.css";
import User from "./User";
import EditModal from "./EditModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { Consumer } from "./contextApi";

export const UserInfo = createContext();

const Strorage = () => {
  return (
    <Consumer>
      {(value) => {
        const { users, deleteUser, editUser, image } = value;
        return (
          <div style={{ width: "80%" }}>
            {users.length > 0 ? (
              <table className="table table-striped mt-5 w-100">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <User
                      key={user._id}
                      {...user}
                      deleteUser={deleteUser}
                      editUser={editUser}
                      // image={image}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-center mt-5 text-primary text-uppercase">
                No Users{" "}
                <span role="img" aria-labelledby="sad">
                  😲
                </span>{" "}
                please fill up the form to add users{" "}
                <span role="img" aria-labelledby="happy">
                  {" "}
                  🙂
                </span>
              </h1>
            )}
            <EditModal />
            <ConfirmDeleteModal />
          </div>
        );
      }}
    </Consumer>
  );
};

export default Strorage;
