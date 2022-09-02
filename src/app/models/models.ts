export interface SubscriptionType {
	ammount: number;
	type: 'Yearly' | 'Monthly';
	discount: number;
	selected: boolean
}