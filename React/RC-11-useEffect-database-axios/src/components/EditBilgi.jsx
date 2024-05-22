import React from "react";
import axios from "axios";

const EditBilgi = ({ item, setItem, getTutorials }) => {
  const { id, title, description } = item;

  //!editBilgi BilgiListin childi oldugu icin Home dan buraya url yi alamiyoruz. Burada tekrar tanimladik. Veri aktarimi (props) parent-child arasnda oluyor.
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const putTutorial = async (newElm) => {
    await axios.put(`${BASE_URL}+${newElm.id}/`, newElm);
    getTutorials();
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* input⬇ */}
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title || ""}
                onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                className="form-control"
                value={description || ""}
                onChange={(e) =>
                  setItem({ ...item, description: e.target.value })
                }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => putTutorial(item)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBilgi;
