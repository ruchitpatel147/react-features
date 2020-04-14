import React from 'react'

function Bootstap() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="n dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div id="demo" className="carousel slide" data-ride="carousel">

        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('./../Images/2.jpg')} alt="Los Angeles" height="400px" width="100%"/>
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./../Images/3.jpg')} alt="Chicago" height="400px"  width="100%"/>
            <div className="carousel-caption">
              <h3>Chicago</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./../Images/2.jpg')} alt="New York" height="400px"  width="100%"/>
            <div className="carousel-caption">
              <h3>New York</h3>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>

      </div>

      <section>
        <div className='container-fluid'>
          <h1 className='text-center text-capitalize pt-5 pb-5'>About us</h1>
          <hr className='w-25 mx-auto'/>

          <div className='row mb-5'>
            <div className='col-lg-6 col-md-6 col-12'>
              <img src={require('../Images/3.jpg')} alt='About us' className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <h1>Who am I ? </h1>
              <hr/>
              <p className='text-left' style={{'font-family': 'sans-serif'}}>Students learning a new computer programming language will often begin by writing a "Hello, World!" program, which does nothing but issue the message "Hello, world" to the user  </p>
              <button className='btn bg-primary text-white'>Wanna know Me</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <h1 className='text-center pt-5'>Services</h1>
          <hr className='w-25 mx-auto pt-5'/>

          <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card" style={{"width":"400px"}}>
                <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card mb-5" style={{"width":"400px"}}>
                <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card mb-5" style={{"width":"400px"}}>
                <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-primary text-white'>
        <article className='py-5 text-center'>
          <div>
            <h3 className='display-4'>+111111111</h3>
            <p>If you want best service Call us now.</p>
            <button className='btn btn-warning'>Contact Now</button>
          </div>
        </article>
      </section>

      <section>
        <div className='container'>
          <h1 className='text-center pt-5'>Gallery</h1>
          <hr className='w-25 mx-auto pt-5'/>

          <div className='row mb-5'>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
          </div>
          <div className='row mb-5'>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
          </div>

        </div>
      </section>

      <section className='bg-primary mb-5'>
        <article className='py-5'>
          <div className='text-center text-white'>
            <h3 className='display-4'>Want to join</h3>
            <p>If you want best service join us now.</p>
            <button className='btn btn-warning' data-toggle='modal' data-target="#myModal">Join Us</button>
          </div>

          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">Sign Up</h4>
                </div>

                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" placeholder="User email" id="email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Password:</label>
                    <input type="email" className="form-control" placeholder="User password" id="pwd"/>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Sing Up</button>
                </div>

              </div>
            </div>
          </div>
        </article>
      </section>


      <section>
        <div className='container mb-5'>
          <h1 className='text-center pt-5'>Contact Us</h1>
          <hr className='w-25 mx-auto pt-5'/>

          <div className='w-50 mx-auto'>
            <form action="">
              <div className="form-group">
                <label htmlFor="email">User name:</label>
                <input type="email" className="form-control" placeholder="User name" id="userName"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>
      </section>

      <footer className='bg-dark text-light'>
        <p  className='text-center'>@copyright xyz@gmail.com 2020</p>
      </footer>
    </div>
  )
}

export default Bootstap