import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

import InputRange from 'react-input-range';

const SilderForm = ({ input: { onChange, value }, minBound, maxBound }) => {
  return (<InputRange 
  			maxValue={maxBound} 
  			minValue={minBound} 
  			value={value} 
  			onChange={onChange}/>)
}

const FilterForm = (props) => {
  const { handleSubmit, reset, submitting, queryParams } = props
  return (
    <div className="filter-bar">
		<form className="container" onSubmit={handleSubmit}>
			<div className="upperForm">
				<center><img src="http://i.imgur.com/x85LtZs.png" alt=""/></center>
				<div className="col-md-3">
					<label htmlFor="">Location</label>
					<Field name="city" className="form-control" component="input" type="text" placeholder="location"/>
				</div>
				<div className="col-md-3">
					<label htmlFor="">Bedrooms</label>
					<Field name="bedrooms" className="form-control" component="input" type="number" min="1"/>
				</div>
				<div className="col-md-3">
					<label htmlFor="">Bathrooms</label>
					<Field name="bathrooms" className="form-control" component="input" type="number" min="1"/>
				</div>
				<div className="col-md-3">
					<label htmlFor="">Parking</label>
					<Field name="garage" className="form-control" component="select">
						<option value="yes">Yes</option>
			            <option value="no">No</option>
					</Field>
				</div>

				<div className="col-md-4">
					<label htmlFor="">Price</label>
					<Field component={SilderForm} name="price" maxBound={500} minBound={0}/>
				</div>
				<div className="col-md-4">
					<label htmlFor="">Area</label>
					<Field component={SilderForm} name="area" maxBound={6000} minBound={0}/>
				</div>
				<div className="col-md-4">
					<button type="submit" className="btn btn-primary" disabled={submitting}>Search</button>
				</div>
			</div>

			{queryParams &&
				<div className="col-md-4 col-md-offset-4">
					<Link to="/" className="btn btn-danger">Clear</Link>
				</div>
			}
		</form>
	</div>
  )
}

export default reduxForm({
  form: 'filter-form',
  initialValues: {
    price: { min: 0, max: 400 },
    area: { min: 0, max: 3000 },
    bedrooms: 1,
    bathrooms: 1,
    parking: "yes"
  }
})(FilterForm);
