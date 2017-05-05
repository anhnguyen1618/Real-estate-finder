import React from 'react';

import { Link } from 'react-router'

import { truncate, convert_to_sqrMeter } from '../utils/helpers.js'

const Post = (props) => {
  const { post } = props
  const address = truncate(`${post.street}, ${post.city}`, 30)
  return (
    <div className="col-sm-4">
    	<Link to={`apartment/${post.id}`}>
			<div className="post">
				<div className="image">
					<img src={post.imageUrls && post.imageUrls[0]} className="img-responsive"/>
					<div className="price">
						<text>{`${post.price} $`}</text>
					</div>
				</div>
				<div className="info">
					<div className="info-text">
						<h3>Room for rent</h3>
						<h4>{address}</h4>
						<h5>{post.owner}</h5>
					</div>
					<div className="room-info">
						<h4><i className="fa fa-bed"></i> {post.bedrooms}</h4>
						<h4><i className="fa fa-bath"></i> {parseInt(post.bathrooms)}</h4>
						<h4><i className="fa fa-car"></i> {post.parkingType ? "Yes": "No"}</h4>
						<h4><i className="fa fa-arrows-alt"></i> {convert_to_sqrMeter(post.finishedSqFt)}</h4>
					</div>
				</div>
			</div>
		</Link>
	</div>
  )
}

export default Post;
