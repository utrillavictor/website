import React from 'react'
import Footer from './footer'
import '../styles/index.css'
import '../styles/responsive.css'

const Layout = (props) => {
  return(
    <div id="wrap">
      <main className="main-content">
        <div className="resume">
          <div className="container">
            <div className="row">
              {props.children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
