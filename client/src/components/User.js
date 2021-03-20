import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "./styles/elements";
const User = ({ _id, email, mobile, name, image, deleteUser, editUser }) => {
  return (
    <>
      <tr key={_id}>
        <td className="text-capitalize">{name}</td>
        <td className="text-capitalize">{mobile}</td>
        <td>{email}</td>

        <td>
          <img
            src={image && `http://localhost:4000${image}`}
            width="50px"
            height="50px"
          />
        </td>
        <td>
          <Button danger onClick={() => deleteUser(_id)}>
            <FaTrash />
          </Button>
        </td>
        <td>
          <Button waraning onClick={() => editUser(_id)}>
            <FaEdit />
          </Button>
        </td>
      </tr>
    </>
  );
};
export default User;
