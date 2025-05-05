import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

/*
const customerData = [
  { id: 1, customerName: "Yiğit Önay", customerEmail: "Mely1@gmail.com" },
  { id: 2, customerName: "Melisa Önay", customerEmail: "Mely2@gmail.com" },
  { id: 3, customerName: "Aybars Önay", customerEmail: "Mely3@gmail.com" },
  { id: 4, customerName: "Karsu Önay", customerEmail: "Mely4@gmail.com" },
  { id: 5, customerName: "SimbaBok AlyaBok", customerEmail: "Mely5@gmail.com" },
];
*/

//! delete customer

const CustomerList = ({ customers, setCustomers }) => {
  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };

  return (
    <ul className="customer-list">
      {customers.map((customer, index) => (
        <CustomerItem
          key={customer.id || index}
          customer={customer}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
