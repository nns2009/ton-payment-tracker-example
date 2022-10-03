# Ton Payment Tracker Examples
These are the examples of how to easily accept payments in TON with `ton-payment-tracker` pachage

## Main repository
https://github.com/nns2009/ton-payment-tracker

## Examples

### `liveExample.ts`
The most basic example I coded live while giving presentation to show how simple it is to use `ton-payment-tracker`

### `basicExample.ts`
Very similar but slightly different, also uses testnet

### `persistentExample.ts`
Proper example of how to incorporate payments to make sure that payments made during service/tracker down-time are not "lost" (not-counted/skipped).

Processing payments and updating `trackingState` with `nextTrackingState` should be a singlt atomic operation (transaction) to make sure each payment is counted once and exactly once.

## Presentation
https://www.canva.com/design/DAFN6DbaJ2s/RWP3cA0nW96NIjr3KVsibg/view


# Author
## Igor Konyakhin
Telegram: [@nns2009](https://t.me/nns2009) <br>
YouTube: [Awesome GameDev](https://www.youtube.com/channel/UCZacxOhkmPS2cklzU1_Ya9Q) <br>
https://codeforces.com/profile/nns2009 <br>
https://vk.com/nns2009 <br>
https://facebook.com/nns2009
