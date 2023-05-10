import Buttons from './Buttons';

function Banner() {
  return (
    <div className="hero-banner">
      <div className="grid">
        <div className="item-1">
          <figure>
            <img 
              alt='electric car' 
              src='https://images.unsplash.com/photo-1612627968592-e8eaa54aa861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
              />
          </figure>
        </div>
        <div className="item-2">
          <h2>Electric Vehicles</h2>
          <p>
            eVolve your way of transportation, switch to electric and bring us
            closer to cleaner motors. Be part of the movement to reduce carbon
            emissions and a greener future.
          </p>
          <div className='center'>
            <div className="inputs">
              <Buttons name='Shop Now' type='first'/>
              <Buttons name='Learn More' type='second'/>
            </div>
          </div>
        </div>
        <div className="item-3">
          <figure>
            <img 
              className="landscape-pic"
              alt='electric car' 
              src='https://images.unsplash.com/photo-1611651186486-415f04eb78e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Banner