import { createRoot } from 'react-dom/client';
//import css
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ProductsPage from './api/ProductsPage';
import ToDoListApi from './api/ToDoListApi';
import "./css/index.css";
import AntdDemo from './Pages/AntdDemo/AntdDemo';
import HomeIndex from './Pages/HomeIndex';
import Login from './Pages/Login';
import DemoUseNavigate from './Pages/ReactRouterDom/DemoUseNavigate';
import DemoUseParam from './Pages/ReactRouterDom/DemoUseParam';
import DemoUseSearchParam from './Pages/ReactRouterDom/DemoUseSearchParam';
import ForGotPass from './Pages/ReactRouterDom/ForGotPass';
import Register from './Pages/Register';
import HeaderHome from './Templates/HeaderHome';
import HomeTemplate from './Templates/HomeTemplate';
//setup redux
import { Provider } from 'react-redux';
import ChangeNumberRedux from './Pages/ReduxDemo/ChangeNumberRedux';
import ReduxProductsPage from './Pages/ReduxProducts';
import ReduxShoppingCartPage from './Pages/ReduxShoppingCart';
import { store } from './redux/store';
import BookingTicketPage from './Pages/ReduxDemo/BookingTicketPage';
import DemoGetApiThunk from './ReduxMiddleware/DemoGetApiThunk';
import AdminTemplate from './Templates/AdminTemplate';
import ProductManagement from './Pages/Admin/ProductManagement';
import ProductEdit from './Pages/Admin/ProductEdit';


createRoot(document.getElementById('root')).render(
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
            <Route path='redux-products' element={<ReduxProductsPage />}></Route>
            <Route path='redux-shopping-cart' element={<ReduxShoppingCartPage />}></Route>
            <Route path='booking-ticket' element={<BookingTicketPage />}></Route>
            <Route path='reduxthunkdemo' element={<DemoGetApiThunk />}></Route>

            
          </Route>
          <Route path='api' element={<div>
            <header className='bg-dark text-white p-3'>Header</header>
            <Outlet />
            <footer className='bg-dark text-white p-3'>footer</footer>
          </div>}>
            <Route path='todolist' element={<ToDoListApi />} />
            <Route path='productpage' element={<ProductsPage />} />
          </Route>
          <Route path='react-router-dom' element={<HomeTemplate />}>
            <Route path='demo-use-navigate' element={<DemoUseNavigate />}></Route>
            <Route path='for-got-pass' element={<ForGotPass />}></Route>
            <Route path='use-search-param' element={<DemoUseSearchParam />}></Route>
          </Route>
          <Route path='demo-use-param'>
            <Route path=':id' element={
              <div>
                <HeaderHome />
                <DemoUseParam />
              </div>
            }></Route>
          </Route>

          <Route path='admin' element={<AdminTemplate/>}>
            <Route path='product-management' element={<ProductManagement/>}></Route>
            <Route path='product-edit/:id' element={<ProductEdit/>} >
            </Route>

          
          </Route>
        </Routes>
      </Provider>
    
    </BrowserRouter>
  </>
)


