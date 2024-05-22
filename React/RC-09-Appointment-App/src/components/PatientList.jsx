import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ patients, setPatients, doctors }) => {
  return (
    <div>
      {patients.map((patient) => (
        <div>
          {doctors.map(
            (dr) =>
              dr.doctorName === patient.myDoctor && (
                <div
                  className={patient.isDone ? "trueStyle" : "falseStyle"}
                  onDoubleClick={() =>
                    setPatients(
                      patients.map((pt) =>
                        pt.id === patient.id
                          ? { ...patient, isDone: !pt.isDone }
                          : pt
                      )
                    )
                  }
                >
                  <div>
                    <h3>{patient.patientName}</h3>
                    <h5>{patient.day}</h5>
                    <h5>{patient.myDoctor}</h5>
                  </div>
                  <FaTimesCircle
                    onClick={() =>
                      setPatients(patients.filter((p) => p.id !== patient.id))
                    }
                  />
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default PatientList;
