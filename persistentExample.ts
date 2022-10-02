import fs from 'fs';
import { PaymentTracker, TrackingState } from "ton-payment-tracker";

const trackedAddress = 'EQAa_d5RopvY6ZLcQFNJHFmdA8wf_igH-V-5Jc8DRprJIZa-';

const paymentProcessor = new PaymentTracker({
	testnet: true,
	toncenterApiKey: '30d51a64f3d182c1767fcdfd887656b35b669683f18dc1c75bc7c6fd33edf075',
	checkIntervalInSeconds: 30,
});

const trackingStateFile = 'trackingState.json';


let trackingState: TrackingState;
function saveTrackingState() {
	fs.writeFileSync(trackingStateFile, JSON.stringify(trackingState), 'utf-8');
}

if (fs.existsSync(trackingStateFile)) {
	trackingState = JSON.parse(fs.readFileSync(trackingStateFile, 'utf-8'));
	console.log('Tracking state loaded:', trackingState);
} else {
	trackingState = await paymentProcessor.currentTrackingStateOf(trackedAddress);
	saveTrackingState();
	console.log('Created tracking state:', trackingState);
}

console.log(`Tracking address:`, trackedAddress);
console.log(`Initial tracking state is:`, trackingState);

paymentProcessor.startPaymentTracking(
	trackedAddress, trackingState,
	paymentsUpdate => {
		console.log(`Received paymentsUpdate:`, paymentsUpdate);

		// <<<<< Atomic operation / transaction start

		trackingState = paymentsUpdate.nextTrackingState;
		saveTrackingState();
		// Process payments: increase balances, issue NFTs, start shipping, allow access

		// >>>>> Atomic operation / transaction end
	}
);
console.log(`Started payment tracking`);
