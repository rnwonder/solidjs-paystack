# Solidjs-Paystack

This is a solidjs library for implementing paystack payment gateway

This is inspired by [react-paystack](https://github.com/iamraphson/react-paystack)

## Get Started

### Install

```sh
npm install solidjs-paystack --save
```

```sh
yarn add solidjs-paystack
```

```sh
pnpm add solidjs-paystack
```

### Usage

```javascript
  import { usePaystack } from "solidjs-paystack";

  
  const config = {
      ref: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };
  
  // you can call this function anything
  const onSuccess = (response) => {
    // Implementation for whatever you want to do with response and after success call.
    console.log(response);
  };

  // you can call this function anything
  const onCancel = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const { initializePayment, setConfig }= usePaystack();
	  setConfig(config)
	  
      return (
        <div>
            <button onClick={() => {
                initializePayment({ onSuccess, onCancel })
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };
 
```

Please checkout [Paystack Documentation](https://developers.paystack.co/docs/paystack-inline) for other available options you can add to the tag

## Deployment

REMEMBER TO CHANGE THE KEY WHEN DEPLOYING ON A LIVE/PRODUCTION SYSTEM

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/Rnwonder101)!
