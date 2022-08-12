import React from 'react'
import SearchIcon from '../../assets/svg/SearchIcon'
import Modal from '../modal/Modal'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className={'navbar navbar-expand-lg'} >
                <div className="container-fluid  ">
                    <a className="navbar-brand logo  text-white " href="#home">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse gap-2 " id="navbarSupportedContent">
                        <form className='form-search' >
                            <input
                                className='search '
                                type="search"
                                placeholder="Search by Title or Brand"
                                aria-label="Search"
                                id='search'
                            />
                            <span className='search-icon'>
                                <SearchIcon />
                            </span>
                        </form>


                        <button

                            className=' add-product-btn py-2 px-3 ' type='submit'
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                        >Add Product</button>
                    </div>
                </div>

            </nav >
            <Modal />

        </>
    )
}

