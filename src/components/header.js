import React, { Component, useState } from 'react'
import Logo from '../Assets/logo.png'
import '../App.css'

export default class header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
    }

    toggleNavbar = () => {
        this.setState(prevState => ({
             isActive: !prevState.isActive 
        }));
    };
      
  render() {
    const {isActive} = this.state;

    return (
      <>
        <nav class="navbar is-transparent navbar" rolw='navigation'>
            <div class="navbar-brand ">
                <img src={Logo} alt='logo' className='logo' />

                <a role='button' className={`navbar-burger ${isActive ? 'is-active' : ''}`} onClick={this.toggleNavbar} >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

                <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className='navbar-end'>
                        <a class="navbar-item" href="#"> Option 1 </a>
                    </div>
                </div>
            
        </nav>
            
      </>
    )
  }
}
