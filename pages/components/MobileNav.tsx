import React from 'react'

export default function mobileNav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <img src={'/images/logo.png'} style={{width: '5rem'}}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href={'/Mobile/Guest'}>메인 페이지</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Mobile/GrowPlant">식물 도감</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
          </form>
        </div>
      </div>
    </nav>
  )
}
