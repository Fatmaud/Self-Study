import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from "./EditBilgi";

const BilgiList = ({ tutoriaal }) => {
  //console.log(tutoriaal);

  const [item, setItem] = useState("");

  //deleteTutorial fonksiyonu parenttan (Home) geldi:
  // const deleteTutorial = async (id) => {
  //   await axios.delete(`${BASE_URL}/${id}/`);
  // };

  //!bootstrapten hareketli bi yapi kullanacagimiz zaman (modal,carousel, accordion gibi) bootstrap in js cdn ini public-index in body sine ekledik.

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutoriaal.map(({ id, title, description }) => {
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description} </td>
                <td className="text-center ">
                  <FaEdit
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="text-warning  me-2"
                    size={22}
                    onClick={() => setItem({ id, title, description })}
                  />

                  <AiFillDelete
                    type="button"
                    className="text-danger }"
                    size={22}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal kismi--editBilgi sayfasindan gelecek */}
      {/* <EditBilgi item={item} setItem={setItem} /> */}
    </div>
  );
};

export default BilgiList;
