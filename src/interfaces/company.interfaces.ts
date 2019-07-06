import {IDate, IAddress, IUser} from './global.interfaces'

interface ICompany {
    id: string;
    name: string;
    address: IAddress;
}

interface ICampaign {
    id: string;
    title: string;
    items: ICampaignItem[];
    author: ICompanyUser;
    // currentStatus: ICampaignStatus; // planned, findished etc.
    // comments: IComment[];
    timeline: {
        createDate: IDate;
        // startDate: IDate;
        // endDate: IDate;
    };
    // budget: any;
}

export interface ICompanyUser extends IUser {
    tel?: string;
}

export interface ICampaignItem {
    id: string;
    title: string;
    imageUrl: string;
    description?: string;
}