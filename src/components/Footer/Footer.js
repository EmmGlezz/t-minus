import React from 'react'


import './Footer.css'

const Footer = () => {
  return (
    <footer class="styled_footer">
        <div class="d-flex flex-wrap justify-content-between align-items-center py-3 px-5 border-top">
            <p class="col-md-4 mb-0">© 2022 Company, Inc</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
            <h2>T-MINUS</h2>
            </a>

            <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-white">Home</a></li>
            <li class="nav-item"><a href="/" class="nav-link px-2 text-white">About</a></li>
            <li class="nav-item"><a href="/" class="nav-link px-2 text-white">Launches</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer