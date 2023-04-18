import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div id="navigation">
          <nav class="navbar navbar-expand-lg navbar-light " role="navigation">
            <div class="row">
              <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav">
                  <li class="active nav-item"><a class="nav-link" href="#home">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href="#about">About Me</a></li>
                  <li class="nav-item"><a class="nav-link" href="#carrier">Carrier</a></li>
                  <a class="nav-link" href="#skills">Skills</a>
                  <li class="nav-item"><a class="nav-link" href="#qualifications">Qualifications</a></li>
                  <li class="nav-item"><a class="nav-link" href="#works">Works</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;


