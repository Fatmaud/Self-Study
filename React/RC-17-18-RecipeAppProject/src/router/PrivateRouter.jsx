import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { name, password } = useContext(RecipeContext);

  return name === "ipek" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
    //
  );

  //!<Navigate> Bileşeni:JSX içinde kullanılır.
  //! Genellikle koşullu yönlendirme yapmak için kullanılır. Örneğin, bir kullanıcı oturum açtığında veya belirli bir koşul gerçekleştiğinde yönlendirme yapılabilir.to prop'uyla belirli bir rota adı veya URL'i alır ve o rotaya yönlendirme yapar.

  //! Outlet="PrivateRouter" belirli rotalara erişim kontrolü eklemek için kullanılırken, "Outlet" bu rotalardaki içeriği görüntülemek için kullanılır. Bu projede biz Login sayfasinda basarili giris yapilirsa home a yönlendiriyoruz.
};

export default PrivateRouter;
