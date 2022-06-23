import React from 'react'

const Nav = () => {
  return (

    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a href={'/'} className="navbar-brand">Smart Farm</a  >

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">

            <li className="nav-item active">
              <a href={'/'} className="nav-link">메인 페이지</a>
            </li>

            <li className="nav-item active">
              <a href={'/GrowPlant'} className="nav-link">식물 도감</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav