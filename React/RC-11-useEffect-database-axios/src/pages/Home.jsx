import React, { useEffect, useState } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
    const data = await axios.get(BASE_URL);
    setTutorials(data.data);
  };

  getTutorials(); //aPI dan veri cektik, setstate ile veriyi state e atadik. Fonksiyon sürekli kendini tekrar etti. Bunu engellemek icin useEffect ilk asamasini kullanacagiz.

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddBilgi />
      <BilgiList tutoriaal={tutorials} />
    </>
  );
};

// const [tutorials, setTutorials] = useState([]);
// const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
// //!GET (READ) Islemi: databaseden verileri alip okuma:
// const getTutorials = async () => {
//   const veri = await axios.get(BASE_URL);
//   // console.log(veri.data);
//   setTutorials(veri.data);
// };
// //!then zinciriyle de yazilabilir:
// // useEffect(()=>{
// // axios.get(BASE_URL).then((res) => setTutorials(res.data))},[])}
// useEffect(() => {
//   getTutorials();
// }, []);
// //! POST (create islemi: database e veri gönderme)
// const postTutorial = async (yeniVeri) => {
//   await axios.post(BASE_URL, yeniVeri);
//   //tekrar verilerin güncel halini çekip diziye atmak ve ekrani güncellemek icin, zaten yukarda databaseden veri cekme fonksiyonu oldugu icin onu tekrar burada cagiriyoruz:
//   getTutorials();
// };
// //! DELETE (Database den veri silme)
// const deleteTutorial = async (id) => {
//   await axios.delete(`${BASE_URL}${id}/`);
//   getTutorials();
// };
// return (
//   <>
//     <AddBilgi postTutorial={postTutorial} />
//     <BilgiList
//       tutorials={tutorials}
//       deleteTutorial={deleteTutorial}
//       getTutorials={getTutorials}
//     />
//   </>
// );

export default Home;
