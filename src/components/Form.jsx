import { useState } from 'react';

function Form({ onClose, cartItems }) {
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());

    console.log(formData);

    const orderData = {
      items: cartItems,
      customer: {
        name: formData.name,
        email: formData.email,
        street: formData.street,
        'postal-code': formData['postal-code'],
        city: formData.city,
      },
    };
    console.log(orderData);

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify({ order: orderData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to update user data.');
    } else {
      setIsSuccess(true);
    }
    console.log(resData.message);
    return resData.message;
  }

  return (
    <>
      {!isSuccess && (
        <form onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" name="name" />
          </div>
          <div className="control">
            <label htmlFor="email">E-Mail Address</label>
            <input id="email" type="email" name="email" />
          </div>
          <div className="control">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" name="street" />
          </div>
          <div className="control-row">
            <div className="control">
              <label htmlFor="postal-code">Postal Code</label>
              <input id="postal-code" type="text" name="postal-code" />
            </div>
            <div className="control">
              <label htmlFor="city">City</label>
              <input id="city" type="text" name="city" />
            </div>
          </div>
          <div className="modal-actions">
            <button className="text-button" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="button">
              Submit Order
            </button>
          </div>
        </form>
      )}
      {isSuccess && (
        <>
          <h2>Success</h2>
          <p>Your order was submitted successfully.</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
          <div className="modal-actions">
            <button className="button" onClick={onClose}>
              Okay
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Form;
