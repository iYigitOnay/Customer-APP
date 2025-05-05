import styled from "styled-components";
import "./CustomerItem.css";

const DeleteButton = styled.button`
  background-color: red;
  padding: 8px;

  &:hover {
    background-color: darkred;
  }
`;


const CustomerItem = ({ customer, handleDelete }) => {
  //document.querySelection(".customer-item").style.backgroundColor = "lightblue";
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          alt="Customer Avatar"
          className="customer-avatar"
        />
        <span
          className="customer-name"
          style={{
            color: "blue",
            backgroundColor: "lightblue",
          }}
        >
          {customer.customerName}
        </span>
        <span className="customer-email">{customer.customerEmail}</span>
      </div>{" "}
      <DeleteButton
        className="delete-button"
        onClick={() => handleDelete(customer)}
      >
        <i className="bi bi-trash3 "></i>
      </DeleteButton>
    </li>
  );
};

export default CustomerItem;
