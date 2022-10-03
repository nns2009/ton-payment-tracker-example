import { PaymentTracker } from "ton-payment-tracker";


const address = 'EQAa_d5RopvY6ZLcQFNJHFmdA8wf_igH-V-5Jc8DRprJIZa-';
const toncenterApiKey = '2b9df1083b5124990d30a1f3c5d489303eeb0e0574c3da7f575dd2dd0245b2ca';

const tracker = new PaymentTracker({ toncenterApiKey });

let trackingState = await tracker.currentTrackingStateOf(address);
tracker.startPaymentTracking(
	address, trackingState,
	paymentsUpdate => {
		console.log('new payments:', paymentsUpdate);
	}
)

console.log('tracking:', address);
