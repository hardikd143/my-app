import './css/App.css';
import './css/bootstrap.min.css';
// import React from 'react';
import React from 'react';

function mainSection() {
    const element = <h1>Hello, world!</h1>;
    return (
        <>
        <div className=' p-4 py-5 border border-dark rounded-3 shadow my-3'>
            {element}
            <h3>This is third section imported by Section component</h3>
            <hr  />
            <div className="row">
              <div className="col-lg-6 mb-2 d-flex align-items-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nostrum aspernatur minima laboriosam, vel deserunt asperiores a natus voluptas et quis nisi suscipit earum corporis amet iusto repellat! Quo voluptate pariatur necessitatibus reiciendis  fugiat.
              </div>
              <div className="col-lg-6 mb-2 d-flex align-items-center">
                <p className='bg-dark text-white p-3 rounded-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus temporibus possimus doloribus hic molestiae porro in animi.</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default mainSection;