import type { StripeConstructorOptions } from '@stripe/stripe-js'
import { loadStripe as _loadStripe } from '@stripe/stripe-js'
import type { Options as RetryOptions } from 'p-retry'
import pRetry from 'p-retry'

export const loadStripe = (
  publishableKey: string,
  options?: StripeConstructorOptions & RetryOptions,
) => pRetry(() => _loadStripe(publishableKey, options), options)
