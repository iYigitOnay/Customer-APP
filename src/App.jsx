import { useState } from "react";
import "./App.css";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import CustomerList from "./components/CustomerList/CustomerList";
import styled from "styled-components";

const AppWreapper = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 10px;

  & h1 {
    margin-bottom: 20px;

    @media (max-width: 576px) {
      font-size: 20px;
      
    }
  }
`;

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  return (
    <AppWreapper className="App">
      <h1>Customer Management</h1>
      {/* <h1>Müşteri Yönetimi</h1> */}

      <CustomerForm addNewCustomer={addNewCustomer} />

      <CustomerList customers={customers} setCustomers={setCustomers} />
    </AppWreapper>
  );
}

export default App;
