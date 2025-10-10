import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK); // or process.env

export default function CheckoutButton({ cart }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/payments/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart, // [{name:"Apple", price:50, quantity:2}, ...]
        currency: "usd",
        successUrl: window.location.origin + "/success",
        cancelUrl:  window.location.origin + "/cancel"
      })
    });
    const { sessionId } = await res.json();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) console.error(error);
  };

  return <button onClick={handleCheckout}>前往付款</button>;
}