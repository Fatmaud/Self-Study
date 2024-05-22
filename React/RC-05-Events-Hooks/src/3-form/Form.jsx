import React, { useState } from "react";

// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.

const Form = () => {
  const [name, setName] = useState(""); //en basta bos oldugu icin, sonra icine gelecek data tipine göre bos icerik koyuyoruz

  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const getDatabase = (e) => {
    e.preventDefault();
    //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
    //? const res = axios.post("url", { name, password, country })

    alert(`name:${name} password:${password} country:${country}`);
  };

  return (
    <div className="container text-center mt-4">
      <h1>******************************</h1>
      <h1>FORM (EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-name" htmlFor="name">
            NAME: <span>{name}</span>
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            onInput={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-name" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-name" htmlFor="country">
            COUNTRY: <span>{country}</span>
          </label>
          <select
            onChange={(e) => setCountry(e.target.value)}
            className="form-select"
          >
            <option selected="">COUNTRIES</option>
            <option value="Turkey">TURKEY</option>
            <option value="Germany">GERMANY</option>
            <option value="Usa">USA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
