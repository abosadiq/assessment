import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext();
export const ContextApi = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectUser] = useState();
  const [isRelaod, setIsReload] = useState(false);
  const [fullName, setFullname] = useState({
    name: "",
    mobile: "",
    userEmail: "",
    userImage: "",
  });

  const [preData, setPreData] = useState({});
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [image, setImage] = useState("");
  // const [uploading, setUploading] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  const selectedUserId = users.find((user) => user._id === selectedUser);
  useEffect(() => {
    getUsers();
  }, [isRelaod]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullname({ ...fullName, [name]: value });
  };

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const fb = new FormData();
    fb.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "http://localhost:4000/upload",
        fb,
        config
      );
      // console.log(data, "imagedata ");
      setImage(data);
    } catch (err) {
      console.log(err);
    }
  };
  const addUserHandler = async (e) => {
    e.preventDefault();
    let { name, mobile, userEmail, userImage } = fullName;
    const obj = {
      name: name,
      mobile: mobile,
      email: userEmail,
      image: userImage || image,
    };
    //console.log(obj);
    await axios.post("http://localhost:4000/user", obj).then(() => seNewUser());
    setFullname({
      name: "",
      mobile: "",
      userEmail: "",
    });
    setImage("");
  };

  const seNewUser = () => {
    setIsReload(true);
  };

  const getUsers = async () => {
    try {
      let res = await axios.get("http://localhost:4000/user");
      setUsers(res.data);
      setIsReload(false);
    } catch (error) {
      console.log(error, "rrrr");
    }
  };

  const deleteUser = (id) => {
    setSelectUser(id);

    setConfirmModal(true);
  };
  const confirmDelete = async () => {
    await axios
      .delete(`http://localhost:4000/user/${selectedUser}`)
      .then(() => seNewUser());
    setConfirmModal(false);
  };

  const editUser = (id) => {
    setModal(!modal);
    setSelectUser(id);
    const previous = [...users];
    const previousInd = previous.findIndex((user) => user._id === id);
    setPreData(previous[previousInd]);
  };
  const handleUserEdit = async (id, new_user) => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user._id === id);
    newUsers[index] = new_user;
    setUsers(newUsers);
  };

  function handleEdit(changes) {
    const selectedUsrId = users.find((user) => user._id === selectedUser);
    handleUserEdit(selectedUsrId._id, { ...selectedUsrId, ...changes });
  }
  const onSaveEdit = async () => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user._id === selectedUser);
    let data = newUsers[index];
    await axios
      .patch(`http://localhost:4000/user/${data._id}`, data)
      .then(() => seNewUser());
    setModal(false);
  };
  const closeToogle = async () => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user._id === selectedUser);
    newUsers[index] = preData;
    setUsers(newUsers);
    setModal(false);
  };
  const confirmToogle = () => {
    setConfirmModal(false);
  };
  const state = {
    users,
    selectedUser,
    isRelaod,
    preData,
    modal,
    confirmModal,
    selectedUserId,
    handleChange,
    addUserHandler,
    deleteUser,
    confirmDelete,
    editUser,
    handleEdit,
    onSaveEdit,
    closeToogle,
    confirmToogle,
    fullName,
    uploadFile,
    image,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
