import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from "../data"
const CardDetails = () => {
  //router dan path olarak gelen namee burada useParams hook u ile yakalandı
 const {namee}=   useParams()


 //tekrar bir önceki sayfaya dönebilmek için useNavigate
const navigate=useNavigate()
  return (
    <div className="container text-center mt-4">
      {data.map(
        ({ name, text, yorum, img }) =>
          name === namee && (
            <div>
              <h3>{name}</h3>
              <img src={img} alt="" width="300px" />
              <h3>{text} </h3>
              <h4>{yorum} </h4>
              <div>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(-1)}
                >
                  GO BACK
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  GO HOME
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default CardDetails