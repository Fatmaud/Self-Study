import React, { useState } from "react";
import { patientsData, doctorsData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatients from "../components/AddPatients";
const Home = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [patients, setPatients] = useState(patientsData);

  const [show, setShow] = useState(true);

  const doctorClick = (idD) => {
    setShow(!show);

    setDoctors(show ? doctors.filter((a) => a.id === idD) : doctorsData);
  };

  return (
    <div style={{ display: show ? "block" : "flex" }}>
      <div>
        <header>
          <h1>Hospital</h1>

          <div className="dr-container">
            {doctors.map((dr) => (
              <div key={dr.id} className="dr-info ">
                <img
                  className="btn"
                  style={{ background: show ? "yellow" : "orange" }}
                  src={dr.doctorImg}
                  width="180px"
                  height="150px"
                  alt=""
                  onClick={() => doctorClick(dr.id)}
                />
                <h4
                  style={{
                    background: show ? "yellow" : "orange",
                    borderLeft: `10px solid ${show ? "orange" : "yellow"}`,
                    marginTop: "5px",
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!show && (
          <AddPatients
            patients={patients}
            setPatients={setPatients}
            doctors={doctors}
          />
        )}
      </div>

      <PatientList
        patients={patients}
        setPatients={setPatients}
        doctors={doctors}
      />
    </div>
  );
};

export default Home;
