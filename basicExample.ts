//import fs from 'fs';
import { PaymentTracker } from "ton-payment-tracker";

const trackedAddress = 'EQAa_d5RopvY6ZLcQFNJHFmdA8wf_igH-V-5Jc8DRprJIZa-';

const paymentProcessor = new PaymentTracker({
	testnet: true,
	toncenterApiKey: '30d51a64f3d182c1767fcdfd887656b35b669683f18dc1c75bc7c6fd33edf075',
	checkIntervalInSeconds: 30,
});

// const trackingStateFile = 'trackingState.json';
// if ()
const trackingState = await paymentProcessor.currentTrackingStateOf(trackedAddress);

console.log(`Tracking address:`, trackedAddress);
console.log(`Initial tracking state is:`, trackingState);

paymentProcessor.startPaymentTracking(
	trackedAddress, trackingState,
	paymentsUpdate => {
		console.log(`Received paymentsUpdate:`, paymentsUpdate);
	}
);
console.log(`Started payment tracking`);
