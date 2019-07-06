import React from "react";
import { CampaignItem } from "./CampaignItem";

/**
 * TODO: should be able to:
 * 1. update feedback for item
 * 2. Set rating value for item
 *
 *  */

export default class Campaign {
	render() {
		const { campaignItems, title, description } = this.props;
		return (
			<div className="campaing-container">
				<h1>{title}</h1>
				<p>{description}</p>
				<div className="item-list">
					{campaignItems.map(item => (
						<CampaignItem item="item" />
					))}
				</div>
			</div>
		);
	}
}
