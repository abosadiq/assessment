import React from "react";
import { Consumer } from "./contextApi";
const From = () => {
  return (
    <Consumer>
      {(value) => {
        const {
          addUserHandler,
          handleChange,
          fullName,
          uploadFile,
          image,
        } = value;
        return (
          <form onSubmit={addUserHandler} className="mt-4">
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <div className="d-flex">
                <input
                  // style={{ width: "400px" }}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter First Name"
                  value={fullName.name}
                  onChange={handleChange}
                />
                <input
                  // style={{ width: "400px" }}
                  type="text"
                  name="mobile"
                  placeholder="Enter Youe Mobile Number"
                  value={fullName.mobile}
                  onChange={handleChange}
                  className="form-control ml-2 mr-2"
                />
                <input
                  // style={{ width: "400px" }}
                  type="text"
                  name="userEmail"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={fullName.userEmail}
                  onChange={handleChange}
                />
                <input
                  // style={{ width: "400px" }}
                  type="text"
                  name="userImage"
                  className="form-control ml-2 mr-2"
                  placeholder="Enter image url"
                  value={fullName.userImage}
                  onChange={handleChange}
                />
                <input
                  // style={{ width: "400px" }}
                  type="file"
                  name="image"
                  id="image"
                  //  value={image}
                  className="form-control"
                  placeholder="Enter image url"
                  onChange={uploadFile}
                />
              </div>
              <button
                type="submit"
                className="btn btn-md btn-outline-primary ml-2"
                disabled={!fullName.name}
              >
                Save
              </button>
            </div>
          </form>
        );
      }}
    </Consumer>
  );
};

export default From;
