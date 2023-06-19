
import { Navigate, Route, Routes } from "react-router-dom";

import { useStore } from "../../context/ContextProvider";
import TemporaryDrawer from "../layout/AppLayout";
import ItemsComponent from "../components/ItemsComponent";
import HomeComponent from "../components/CarritoComponent";
import RequireAuth from "../../views/RequireAuth";

export const AppRoutes = () => {
  const { auth } = useStore();
  return (
  <Routes>
    <Route path="/" element={
    <TemporaryDrawer
    />}>
    <Route path="" element = {<RequireAuth/>}>
      <Route path="/" element={<ItemsComponent
      />} />
      <Route path="home" element={<HomeComponent

      />} />
      </Route>
      </Route>
      
      
  </Routes>
  )
};

