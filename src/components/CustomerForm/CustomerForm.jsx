import { useState } from "react";
import "./CustomerForm.css";
import styled from "styled-components";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length === 0 || customerEmail.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newCustomer = {
      id: Math.random(),
      customerName,
      customerEmail,
    };

    addNewCustomer(newCustomer);

    setCustomerName("");
    setCustomerEmail("");
  };

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value.trim();
    if (nameValue.trim().length > 0) {
      setIsValid(true);
    }
    setCustomerName(nameValue);
  };
  const emailInputChangeHandler = (e) => {
    const emailValue = e.target.value.trim();
    if (emailValue.trim().length > 0) {
      setIsValid(true);
    }
    setCustomerEmail(emailValue);
  };

  const CustomerForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 20px;
  `;

  return (
    <div>
      <CustomerForm className="customer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`customer-input ${isValid ? "inValid" : ""}`}
          placeholder="Customer's name"
          onChange={nameInputChangeHandler}
          value={customerName}
          style={{
            backgroundColor: !isValid ? "red" : " ",
            color: !isValid ? "white" : " ",
            placeholder: !isValid ? "white" : " ",
          }}
        />
        <input
          type="email"
          className={`customer-input ${isValid ? "inValid" : ""}`}
          placeholder="Customer's email"
          // placeholder="Müşteri e-postası"
          onChange={emailInputChangeHandler}
          value={customerEmail}
          style={{
            backgroundColor: !isValid ? "red" : " ",
            color: !isValid ? "white" : " ",
            placeholder: !isValid ? "white" : " ",
          }}
        />

        <button type="submit">
          <i className="bi bi-plus-circle"> Add Customer</i>
        </button>
      </CustomerForm>
    </div>
  );
};

export default CustomerForm;
