import React from 'react';
import { Field, reduxForm } from 'redux-form'

import InputRange from 'react-input-range';

const SilderForm = ({ input: { onChange, value }, minBound, maxBound }) => {
  console.log("value", value);
  return (<InputRange maxValue={maxBound} minValue={minBound} value={value} onChange={onChange}/>)
}

const FilterForm = (props) => {
  const { handleSubmit, reset, submitting } = props
  return (
    <div className="filter-bar">
		<form className="container" onSubmit={handleSubmit}>
			<h2>Filter</h2>
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
				<Field name="parking" className="form-control" component="select">
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
				<Field component={SilderForm} name="area" maxBound={500} minBound={0}/>
			</div>
			<div className="col-md-4">
				<button type="submit" className="btn btn-primary" disabled={submitting}>Search</button>
			</div>
		</form>
	</div>
  )
}

export default reduxForm({
  form: 'filter-form',
  initialValues: {
    price: { min: 100, max: 400 },
    area: { min: 100, max: 400 },
    bedrooms: 1,
    bathrooms: 1,
    parking: "yes"
  }
})(FilterForm);
