
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/women'}>Women</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />}>
            <Route path="Grooming" element={<p>Grooming</p>} />
            <Route path="Shirt" element={<p>Shirt</p>} />
            <Route path="Trouser" element={<p>Trouser</p>} />
            <Route path="Jewellery" element={<p>Jewellery</p>} />
          </Route>
          <Route path="*" element={<p>Page not Found</p>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

function Home() {
  return <p>Index</p>
}

function Women() {
  return (

    <div>
      <p>Women Items:</p>
      <ul>
        <li><Link to={'/women/Grooming'}>Grooming</Link></li>
        <li><Link to={'/women/Shirt'}>Shirt</Link></li>
        <li><Link to={'/women/Trouser'}>Trouser</Link></li>
        <li><Link to={'/women/Jewellery'}>Jewellery</Link></li>
        <Outlet />
      </ul>
    </div>

  )
}