import './App.css';
import BarChart from './components/barChart/Barchart';
import Navbar from './components/navbar/Navbar';
import PiChart from './components/piChart/PiChart';

function App() {
  return (
    <div className="container-fluid p-0">

      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <PiChart />

          </div>
          <div className="col-6">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
