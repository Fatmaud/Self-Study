import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddPatients = ({ patients, setPatients, doctors }) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setPatients([
      ...patients,
      {
        id: uuidv4(),
        patientName: patientName,
        day: date,
        myDoctor: doctors[0].doctorName,
      },
    ]);
    setPatientName("");
    setDate("");
    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={hastaName} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Patient Information</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">Date & Time</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="doc">
            <span>{doctors[0].doctorName}</span> icin kayit olustur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatients;
