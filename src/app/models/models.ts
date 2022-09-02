export interface SubscriptionType {
	ammount: number;
	type: 'Yearly' | 'Monthly';
	discount: number;
	selected: boolean
}

export interface Review {
	name: string;
	rating: number;
	text: string;
}