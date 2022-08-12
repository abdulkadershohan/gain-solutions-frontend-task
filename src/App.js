import React from 'react';
import './App.css';
import Chart from './components/chartSection/Chart';
import Modal from './components/modal/Modal';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';


function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="container-fluid p-0">

      <Navbar setShowModal={setShowModal} />
      {/* {
        showModal && (
          <Modal />
        )
      } */}

      <Chart />
      <Products />


    </div>
  );
}

export default App;
