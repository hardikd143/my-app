import './css/App.css';
import './css/index.css';
import './css/bootstrap.min.css';
import './css/footer.css';
import React from 'react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';

// function to get alert message 
function getAlert(){
  alert('this is alert message');
}

function App() {
  return (
    <div className="App">
        <Header/> {/* header */}
        <div className='container'>
          <h1 className='bg-warning rounded-pill py-2'>Hello World</h1>
          <div className='bg-dark  my-5 p-4 pb-3 text-white rounded-3 shadow'>
            <h3>This is first section</h3>
            <hr  />
            <div className="row">
              <div className="col-lg-6 mb-2 d-flex align-items-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nostrum aspernatur minima laboriosam, vel deserunt asperiores a natus voluptas et quis nisi suscipit earum corporis amet iusto repellat! Quo voluptate pariatur necessitatibus reiciendis  fugiat.
              </div>
              <div className="col-lg-6 mb-2 d-flex align-items-center">
                <p className='bg-white text-dark p-3 rounded-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus temporibus possimus doloribus hic molestiae porro in animi.</p>
              </div>
            </div>
          </div>
          <div className='btn-group'>
            <button target='_blank' onClick={getAlert} className='btn  btn-outline-dark'>click me to get alert </button>
            <a href='https://www.applocum.com/' target='_blank' className='btn  btn-outline-dark'>Applocum</a>
          </div>
          <div className='bg-danger my-5 p-4 pb-3 text-light rounded-3 shadow'>
            <h3>This is second section</h3>
            <hr  />
            <div className="row">
              <div className="col-lg-6 mb-2 d-flex align-items-center">
                <p className='bg-white text-dark p-3 rounded-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus temporibus possimus doloribus hic molestiae porro in animi.</p>
              </div>
              <div className="col-lg-6 mb-2 d-flex align-items-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nostrum aspernatur minima laboriosam, vel deserunt asperiores a natus voluptas et quis nisi suscipit earum corporis amet iusto repellat! Quo voluptate pariatur necessitatibus reiciendis  fugiat.
              </div>
            </div>
          </div>
          <Section /> {/* third section */}
        </div>
          <Footer /> {/* footer */}
    
    </div>
  
  );
}

export default App;
