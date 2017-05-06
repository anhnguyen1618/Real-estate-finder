import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router'

import { getOnePost } from "../redux/entities/posts/selectors.js";
import { MAP_TITLES } from "../utils/property-const";

import Map from "./Map.jsx";

export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: ''
    }
  }

  changeMainImage = (mainImage) => this.setState({ mainImage })

  mapProperties = (data) => {
    return Object.keys(MAP_TITLES)
      .map(key => {
        return {
          title: MAP_TITLES[key],
          value: data[key] || 'N/A'
        }
      })
  }

  render() {
    const { apartment } = this.props
    console.log(apartment)
    if (!apartment) {
      return <h1>fdsf</h1>
    }

    const mainImage = this.state.mainImage || apartment.imageUrls[0]
    const properties = this.mapProperties(apartment)
    return (
      <div className="details">
       <div className="cover">
          <div className="container">
            <Link to={'/'} className="back-button">Back</Link>
          </div>          
       </div>
       <div className="container">
          <div className="detail-content">
            <div className="row">
              <div className="col-sm-8">
                <img src={mainImage} className="main-img"/>

                <div className="sm-img">
                  {apartment.imageUrls.map((img) => {
                    return (<img src={img} onMouseOver={()=>this.changeMainImage(img)} />)
                  })}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="basic-info">
                  <h2>Apartment for sale</h2>
                    <h3>{`${apartment.street}, ${apartment.city}`}</h3>   
                    <h1><span className="label label-danger">$ {apartment.price}</span></h1>  
                  </div>
                  <div className="map">
                    <Map latitude={parseFloat(apartment.latitude)} longitude={parseFloat(apartment.longitude)}/>
                  </div>  
              </div>
            </div>          
            <hr/>
            <div className="properties row">
              <h4>PROPERTY INFORMATION</h4>
              {properties.map(({title, value}) => {
                return (
                  <div className="col-sm-4">
                    <div className="property">
                      <span className="property-title">{title}: </span>
                      <span className="property-value">{value}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
       </div>
       
    </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    apartment: getOnePost(state, ownProps.params.apartmentID)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {


  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Details))
