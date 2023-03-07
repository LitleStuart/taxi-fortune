import React from "react";
import axios from "axios";
import "./Orders.scss";
import Header from "./Header";
import BottomNav from "./BottomNav";
import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

type Order = {
  id: number;
  date: string;
  street: string;
  building: string;
  firstName: string;
};

const OrderItem = ({ order }: { order: Order }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src="https://loremflickr.com/640/640" alt={order.firstName} />
      </ListItemAvatar>
      <ListItemText
        primary={order.firstName}
        secondary={`Ул. ${order.street}, д. ${order.building}`}
      />
    </ListItem>
    // <div className="item">
    //   <img src="https://loremflickr.com/640/640" alt="user" />
    //   <div className="details">
    //     <h3>{order.firstName}</h3>
    //     <span>
    //       Ул. {order.street}, д. {order.building}
    //     </span>
    //   </div>
    // </div>
  );
};

const Orders = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://64072416862956433e65838e.mockapi.io/orders")
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="orders">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
