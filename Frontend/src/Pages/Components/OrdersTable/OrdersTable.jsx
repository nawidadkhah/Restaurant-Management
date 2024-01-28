import "../Table/Table.css";
import { ToastContainer, toast } from "react-toastify";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

export const OrdersTable = (props) => {
  const timeAgo = (createdAtDate) => {
    return formatDistanceToNow(createdAtDate, {
      addSuffix: true,
    });
  };

  return (
    props.orders && (
      <table id="customers">
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.map((order, index) => (
            <tr key={order.id}>
              <td>{order.restaurantName}</td>
              <td>{timeAgo(new Date(order.date))}</td>
              <td>{order.Price}</td>
              <td>{order.orders}</td>
            </tr>
          ))}
        </tbody>
        <ToastContainer />
      </table>
    )
  );
};