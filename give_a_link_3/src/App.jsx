import './App.css'
import logo from './images/react-img.png'
import Haqqımızda from './components/Haqqımızda'
import Məhsullar from './components/Məhsullar'
import Əlaqə from './components/Əlaqə'
import AnaSəhifə from './components/AnaSəhifə'
import { Link, Routes, Route, useParams } from 'react-router-dom';

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Ana Səhifə</Link>
              </li>

              <li className="nav-item">
                <Link to="/Haqqımızda" className="nav-link">Haqqımızda</Link>
              </li>
              <li className="nav-item">
                <Link to="/Məhsullar" className="nav-link">Məhsullar</Link>
              </li>
              <li className="nav-item">
                <Link to="/Əlaqə" className="nav-link">Əlaqə</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >

      <div className="container mt-3">
        <div className="row">
          <Routes>
            <Route path="/" element={<AnaSəhifə />}> </Route>
            <Route path="/Haqqımızda" element={<Haqqımızda />}>  </Route>
            <Route path="/Məhsullar/*" element={<Məhsullar />}>  </Route>
            <Route path="/Əlaqə" element={<Əlaqə />}>  </Route>
          </Routes >

          <div className="col-md-12">
            <div class="alert alert-warning" role="alert">
              <Routes>
                <Route path="/:id" element={<Child />}></Route>
              </Routes>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>İD : {id}</h3>
    </div>
  )
}

export default App