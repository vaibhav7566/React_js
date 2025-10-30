import React from "react";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const RAZORPAY_KEY_ID = "rzp_test_RT4hfRjvyrvBNX"; // Your test Key ID

async function handlePayment() {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Try again later!");
    return;
  }
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: 50000, // Amount in paisa
    currency: "INR",
    name: "Demo Company",
    description: "Test Transaction",
    handler: function (response) {
      alert("Payment Success: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Test User",
      email: "testuser@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#528FF0",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Razorpay Demo</h1>
      <button
        className="bg-blue-600 py-3 px-8 rounded text-white text-xl font-semibold shadow hover:bg-blue-700 transition"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}
