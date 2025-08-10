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
import { BrowserRouter, Route, Routes , Outlet } from "react-router-dom";
import HomeIndex from "./Page/Home";
import Login from "./Page/Login";
import HomeTemplate from "./Templete/HomeTemplete";
import Register from "./Page/Register";
import AntdDemo from "./Page/AntdDemo/AntdDemo";
import DemoUseNavigate from "./Page/ReactRouterDom/DemoUseNavigate";
import ForGotPass from "./Page/ReactRouterDom/ForGotPass";
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ChangeNumberRedux from "./Page/ReduxDemo/ChangeNumberRedux";




createRoot(document.getElementById("root")).render(
  
  <>

    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<HomeIndex />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='antd' element={<AntdDemo />}></Route>
          <Route path='redux-change-number' element={<ChangeNumberRedux />}></Route>
        </Route>
        {/* <Route path='api' element={<div>
          <header className='bg-dark text-white p-3'>Header</header>
          <Outlet />
          <footer className='bg-dark text-white p-3'>footer</footer>
        </div>}>
        
          
        </Route> */}

        {/* <Route path='react-router-dom' element={<HomeTemplate />}>
          <Route path='demo-use-navigate' element={<DemoUseNavigate />}></Route>
          <Route path='for-got-pass' element={<ForGotPass />}></Route>
          <Route path='use-search-param' element={<DemoUseSearchParam />}></Route>
          
        </Route> */}
        {/* <Route path='demo-use-param'>
          <Route path=':id' element={
            <div>
              <HeaderHome />
              <DemoUseParam />
            </div>
          }></Route>
        </Route> */}

      </Routes>
       </Provider>
    </BrowserRouter>
  </>
);
