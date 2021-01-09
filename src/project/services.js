import services from './data'
const Services = () => {
  return (
    <div>
      <div className="container mt-5">

        <img className="img-fluid rounded mb-4" src="https://source.unsplash.com/1200x300/?nature,water" alt="" />
        {services.map(s => {
          <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
          </div>
        })}



      </div>

    </div>
  )
}
export default Services;