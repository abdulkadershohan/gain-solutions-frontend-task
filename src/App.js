import './App.css';
import Chart from './components/chartSection/Chart';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';


function App() {
  return (
    <div className="container-fluid p-0">

      <Navbar />
      <Chart />
      <Products />

    </div>
  );
}

export default App;
