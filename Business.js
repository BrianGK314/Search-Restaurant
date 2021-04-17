import React from 'react'
import './Business.css'



class Business extends React.Component {
    // eslint-disable-next-line react/require-render-return
    render() {
      const {business} = this.props
        return (
            <div className="Business">
            <div className="image-container">
              <a href={business.url} target="_blank">
              <img src={business.imageSrc ? business.imageSrc : "https://images.pexels.com/photos/23086/food-restaurant-kitchen-meat-23086.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={business.name}/>
              </a>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
              <div className="Business-address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
              </div>
              <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating} stars</h3>
                <p>{business.reviewCount} reviews</p>
              </div>
            </div>
</div>
        )
    }
}


export default Business
