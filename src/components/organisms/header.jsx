import React from 'react';
import logo from '../../images/logo.svg'

class Header extends React.Component {
  render() {
    return (
      <div class='header w-full z-50 top-0 py-3 sm:py-5  absolute'>
        <div class="flex items-center justify-between">
          <a href="/">
            <img src={logo} class=" mx-4 w-24 lg:w-48 lg:mx-0" alt="" />
          </a>
          <nav class=" relative">
            <div class="max-w-screen-xl px-4  mx-auto">
              <div class="flex items-center justify-between">
                <div class="lg:hidden">
                  <div class="relative my-2">
                    <button class="navbar-burger flex items-center text-white p-3" >
                      <svg class="block h-4 w-4 fill-current " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h30v2H0v-2z" ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <ul class="hidden font-medium mt-0 mr-6 space-x-8 text-sm lg:flex lg: flex-row ">
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#home">Home</a></li>
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:text-gray-400" href="#about">About Me</a></li>
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#carrier">Carrier</a></li>
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#skills">Skills</a></li>
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#qualifications">Qualifications</a></li>
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#works">Works</a></li>
                  <li ><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#socialmedia">Social Media</a></li>
                  <li><a class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white" href="#blog">Blog</a></li>
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


