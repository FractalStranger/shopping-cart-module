import React from 'react';

type Props = {
  payment: string;
  changePayment: (value: string) => void;
  error: any;
};

function Payment({ payment, changePayment, error }: Props) {
  console.log(error);
  return (
    <div className="shopping-cart-step_payment">
      {error && (
        <p className="error-request-message">
          <i className="fas fa-exclamation-triangle" />
          {`Fehler! Bitte versuchen Sie es erneut oder `}
          <a href="/kontakt">kontaktiere uns.</a>
        </p>
      )}
      <div>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas varius tortor nibh, sit amet tempor nibh finibus et. 
          Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. 
          Mauris malesuada nisi sit amet augue accumsan tincidunt. 
          Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros 
          facilisis libero, vitae commodo nunc quam et ligula. Ut nec 
          ipsum sapien. Interdum et malesuada fames ac ante ipsum primis 
          in faucibus. Integer id nisi nec nulla luctus lacinia non eu 
          turpis. Etiam in ex imperdiet justo tincidunt egestas. 
          Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.`}
        </p>
      </div>
      <div className="payment-wrapper">
        <div className="input-wrapper">
          <input
            id="vorauskasse"
            type="radio"
            name="payment"
            value="vorauskasse"
            checked={payment === 'vorauskasse'}
            onChange={(e) => e.target.checked && changePayment(e.target.value)}
          />
          <label htmlFor="vorauskasse">Vorauskasse</label>
        </div>
        {payment === 'vorauskasse' && (
          <p className="payment-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh,
            sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit
            molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.
          </p>
        )}
      </div>
      <div className="payment-wrapper">
        <div className="input-wrapper">
          <input
            id="rechnung"
            type="radio"
            name="payment"
            value="rechnung"
            checked={payment === 'rechnung'}
            onChange={(e) => e.target.checked && changePayment(e.target.value)}
          />
          <label htmlFor="rechnung">Rechnung - Die Zahlungsfrist beträgt 30 Tage.</label>
        </div>
        {payment === 'rechnung' && (
          <p className="payment-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh,
            sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit
            molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.
          </p>
        )}
      </div>
      <div className="payment-wrapper">
        <div className="input-wrapper">
          <input
            id="twint"
            type="radio"
            name="payment"
            value="twint"
            checked={payment === 'twint'}
            onChange={(e) => e.target.checked && changePayment(e.target.value)}
          />
          <label htmlFor="twint">
            TWINT – Bitte den Betrag per TWINT auf folgende Nummer zu senden: +41 XXXXXXXXX
          </label>
        </div>
        {payment === 'twint' && (
          <p className="payment-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh,
            sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit
            molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.
          </p>
        )}
      </div>
    </div>
  );
}

export default Payment;
