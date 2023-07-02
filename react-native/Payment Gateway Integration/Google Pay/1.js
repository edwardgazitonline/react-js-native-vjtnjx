/*
Integrate Google Pay (Android Pay) into React Native Mobile App
https://medium.com/@hello_chirag/integrate-google-pay-android-pay-into-react-native-mobile-app-4701198e22a9

How to integrate Google Pay in React Native using react-native-gpay
  https://www.npmjs.com/package/react-native-gpay

  Step 1: Install and set up React Native application


  Step 2: Add and Link react-native-gpay package
  npm install --save react-native-gpay

  Step 3: Set up Google Pay (Android)

  Step 4 : Setting up GPay

  Step 5: Import Lib and configure in React Native Code

*/
  import GPay, { GooglePayImage } from 'react-native-gpay'

  // once gPay is enable and configure as App Level then initialise and setup payment request method.

    const paymentRequest = {
    cardPaymentMethodMap: {
    gateway: {
      name: 'GATEWAY_NAME', // Identify your gateway and your app's
      merchantId: '055XXXXXXXXXXXXX336',  // YOUR_GATEWAY_MERCHANT_ID
      clientKey: 'sandbox_XXXXXXXXXXXXndxm44jw',
      sdkVersion: 'client.VERSION
    },
    cardNetworks
    },
    transaction: {
    totalPrice: '50',
    totalPriceStatus: 'FINAL', // PAYMENT AMOUNT STATUS 
    currencyCode: 'USD' // CURRENCY CODE
    },
    merchantName: 'XXXXXXXXXXXX'  // MERCHANT NAME Information about the merchant requesting payment information
}



