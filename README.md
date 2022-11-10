# retry-stripe-loader

Stripe.js `loadStripe` function with retries.

## Install

```bash
pnpm add @stripe/stripe-js retry-stripe-loader
```

## Usage

```ts
import { loadStripe } from 'retry-stripe-loader'

const stripe = await loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh', {
  onFailedAttempt: (error) => {
    console.log(`Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`)
    // 1st request => Attempt 1 failed. There are 4 retries left.
    // 2nd request => Attempt 2 failed. There are 3 retries left.
    // …
  },
  retries: 5
})
```

## License

MIT
