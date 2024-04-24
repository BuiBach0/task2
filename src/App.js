
import './App.css';
import Login from './components/FormLogin/Login';
import Menu from './components/SideBar/Menu';
import Home from './components/Dashboard/Home';
import StudentTable from './components/Students/StudentTable';
import ListStudents from './components/ListStudents/ListStudents';
import AntTable from './components/AntTable/AntTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddModal from './components/PopUp/AddModal';
import Search from './components/Search/Search';
import { ToastContainer,Toast } from 'react-bootstrap';


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='Login' element={<Login></Login>}></Route>
        <Route path='' element={<Menu></Menu>}>
          <Route path='' element={<Home></Home>}>
          </Route>
          <Route path='ListStudents' element={<AntTable></AntTable>}>
          </Route>
          <Route path='searchlist'>
            <Route path=":searchname" element={<Search></Search>}></Route>
          </Route>
        </Route>
      </Routes>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
/>
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
