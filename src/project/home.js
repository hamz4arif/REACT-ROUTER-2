const Home = () => {
    return (
        <div>
            <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1600x500/?nature,water" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x500/?nature,water" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x500/?nature,water" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
            <div className="text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    {/* <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">Cover</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header> */}

                    <main role="main" className="inner cover">
                        <h1 className="cover-heading">Cover your page.</h1>
                        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                        </p>
                    </main>

                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>Cover template</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Home;