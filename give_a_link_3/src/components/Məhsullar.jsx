import React from 'react'
import { Link, Routes, Route, useParams, useMatch } from 'react-router-dom'


const data = [
  {
    id: 0,
    category: "Kompüter",
    məhsul: "Asus XX58",
    qiymət: 5500,
    açığlama: "Asus XX58 2024 Model "
  },
  {
    id: 1,
    category: "Planşet",
    məhsul: "Samsung 89",
    qiymət: 2500,
    açığlama: "Samsung 89 2024 Model"
  },
  {
    id: 2,
    category: "Telefon",
    məhsul: "Iphone 15",
    qiymət: 3000,
    açığlama: "Iphone 15 2024 Model"
  },
]

function Məhsullar(props) {
  let { path, url } = useMatch;

  return (
    <div className="container"> {/* Part-2 - İçlərin doldurmağ */}
      {/* <div className="row">
        <div className="col-md-12">
          <div class="alert alert-primary" role="alert">
            Məhsullar Səhifəsinə Xoş Gəldiniz
          </div>
        </div>
      </div> */}


      <div className="alert alert-primary" role="alert">
        <h3 className="text-center">Məhsullar Səhifəsinə Xoş Gəldiniz</h3>
        <div className="con">
          <div className="row">
            {
              data.map((linklər, i) => {
                return (
                  <div className="col-md-6 mt-3" key={i}>
                    <div className="card" > {/*style="width: 18rem;" */}
                      {/* <img src="..." class="card-img-top" alt="..." /> */}
                      <div className="card-body">
                        <h5 className="card-title">{linklər.category}</h5>
                        <p className="card-text">{linklər.məhsul}</p>
                        <Link to={`${url}/${linklər.id}`} className="btn btn-primary">Məlumatlara bax</Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div >
      <Routes>
        <Route path={path} />
        <Route path={`${path}/:məhsulİd`} element={<Məhsul />}> </Route>
      </Routes>

    </div >
  )
}


export function Məhsul() {
  let { məhsulİd } = useParams();
  let paket = data.filter((veri) => {
    return veri.id == məhsulİd
  })
  console.log(paket);

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h3>Category : {paket[0].category}</h3>
        <h3>Məhsul : {paket[0].məhsul}</h3>
        <h3>Qiymət : {paket[0].qiymət}</h3>
        <h3>Açığlama : {paket[0].açığlama}</h3>
      </div>
    </div>
  )
}

export default Məhsullar