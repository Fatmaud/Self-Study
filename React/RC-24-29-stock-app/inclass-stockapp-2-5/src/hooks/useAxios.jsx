import React from 'react'
import { useSelector } from 'react-redux'


// //?Token bilgisine ya da react hooklarina ihtiyacimiz olamsaydi sadece bu sekilde de instance tanimlayabilirdik. (Kirmiyi aciklamayi oku!)
// export const axiosWithToken=xios.create({
//     baseURL: import.meta.env.VITE_BASE_URL,
//   });

  //!Bizim token bilgisine ihtiyacimiz oldugu icin ve token bilgisi de sonradan okuanabildigi icin biz instance i custom hook icinde tanimladik⬇️
const useAxios = () => {
    const {token}=useSelector(state=>state.auth)
    const axiosWithToken = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {"Authorization": `Token ${token}`}
      });
  return (
 
  )
}

export default useAxios