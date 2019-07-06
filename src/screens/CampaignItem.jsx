import React from "react";


/**
 * TODO: should be able to:
 * 1. update feedback for item
 * 2. Set rating value for item
 *
 *  */



export const CampaignItem = props => {
	const getItem = item => {
		const { title, imageUrl, description, setItemFeedback, setItemRatingValue } = item;

		return (
			<div className="item">
				<div className="item-title">
					<h2>{title}</h2>
					<div className="item-img">
						<img src="imageUrl" alt="" srcset="" />
					</div>
					<div className="item-description">
						<p>{description}</p>
					</div>
					<div className="item-rating">
						<label htmlFor="rating"></label>
						<input type="number" name="" id="rating"/>
					</div>
                    <textarea name="feedbackText" id="" cols="30" rows="10" onChange='setItemFeedBack'>
                    </textarea>
				</div>
			</div>
		);
	};

	return <div className="campaignContainer" />;
};
