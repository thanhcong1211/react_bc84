import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CardProduct from "./componets/CardProduct";
import HeaderReact from "./componets/HeaderReact";
import BT1_HomeComponent from "./componets/BT-HomeComponets";
import "./css/index.css";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import RenderComposition from "./RenderConpotion/RenderConpodion";
import DemoState from "./RenderStatement/DemoState";
import DemoChangeNumber from "./RenderStatement/DemoChangeNumber";
import DemoChangeColor from "./RenderStatement/DemoChangeColor";
import DemoTinder from "./RenderStatement/DemoTinder";
import DemoStyle from "./StyleComponent/DemoStyle";
import DemoProps from "./Props/DemoProps";
import BT_StateProps from "./Props/BT_Stettepeag/BT_SeteProps";
import DemoFromLogin from "./From/DemoFromLogin";
import DemoFormik from "./From/DemoFormik";
import { BrowserRouter, Route, Routes , Outlet} from "react-router-dom";
import HomeIndex from "./Page/Home";
import Login from "./Page/Login";
import HomeTemplate from "./Templete/HomeTemplete";
import Register from "./Page/Register";

createRoot(document.getElementById("root")).render(
  <>
    {/* <BT1_HomeComponent /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* < RenderComposition /> */}
    {/* <DemoState /> */}
    {/* <DemoChangeNumber /> */}
    {/* <DemoChangeColor />  */}
    {/* <DemoTinder /> */}
    {/* <DemoStyle /> */}
    {/* <DemoProps /> */}
    {/* <BT_ProductList /> */}
    {/* <BT_StateProps /> */}
    {/* <DemoFromLogin /> */}
    {/* <DemoFormik /> */}
    <BrowserRouter>
       <Routes>
       <Route path='' element={<HomeTemplate />}>
          <Route index element={<HomeIndex />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>

        {/* <Route path='api'>
          <Route path='todolist' element={<ToDoListApi />} />
          <Route path='productpage' element={<ProductsPage />} />
        </Route> */}

      </Routes>
      
    </BrowserRouter>
  </>
);
