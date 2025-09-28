import React, { useContext, useState } from "react";
import Product_cards from "./Components/Product_cards";
import Navbar from "./Components/Navbar";
import { Mystore } from "./Context/MyContext";
import Model from "./Components/Model";


const App = () => {
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: "Mascara Lash",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 9.99,
        rating: 4.94,
      },
      {
        id: 2,
        name: "AirPods Max",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 549.0,
        rating: 4.8,
      },
      {
        id: 3,
        name: "Colombo Bed",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 1899.99,
        rating: 4.6,
      },
      {
        id: 4,
        name: "Smart Watch",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 199.99,
        rating: 4.3,
      },
      {
        id: 5,
        name: "Wireless Mouse",
        image:
          "https://images.unsplash.com/photo-1517430816045-df4b7de5df5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 25.5,
        rating: 4.7,
      },
      {
        id: 6,
        name: "Yoga Mat",
        image:
          "https://images.unsplash.com/photo-1594737625785-39ba4c34715c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 45.0,
        rating: 4.2,
      },
      {
        id: 7,
        name: "Bluetooth Speaker",
        image:
          "https://images.unsplash.com/photo-1512499617640-c2f9992e0e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 59.99,
        rating: 4.5,
      },
      {
        id: 8,
        name: "LED Lamp",
        image:
          "https://images.unsplash.com/photo-1534723452269-0d42e4f5a0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 30.0,
        rating: 4.1,
      },
      {
        id: 9,
        name: "Gaming Chair",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 299.99,
        rating: 4.6,
      },
      {
        id: 10,
        name: "Running Shoes",
        image:
          "https://images.unsplash.com/photo-1520975888253-697c578ec72f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 120.0,
        rating: 4.4,
      },
      {
        id: 11,
        name: "Fitness Tracker",
        image:
          "https://images.unsplash.com/photo-1545239396-6b7bd01e3140?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 99.99,
        rating: 4.3,
      },
      {
        id: 12,
        name: "Coffee Maker",
        image:
          "https://images.unsplash.com/photo-1517686469429-7b92a93c5864?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 85.0,
        rating: 4.2,
      },
      {
        id: 13,
        name: "Wireless Charger",
        image:
          "https://images.unsplash.com/photo-1556742040-3e8b3ba5d9f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 27.5,
        rating: 4.5,
      },
      {
        id: 14,
        name: "Backpack",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 49.99,
        rating: 4.4,
      },
      {
        id: 15,
        name: "Smartphone Case",
        image:
          "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 15.0,
        rating: 4.1,
      },
      {
        id: 16,
        name: "Desk Organizer",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 20.0,
        rating: 4.2,
      },
      {
        id: 17,
        name: "Sunglasses",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 18.5,
        rating: 4.3,
      },
      {
        id: 18,
        name: "Electric Kettle",
        image:
          "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 35.0,
        rating: 4.4,
      },
      {
        id: 19,
        name: "Table Fan",
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 40.0,
        rating: 4.0,
      },
      {
        id: 20,
        name: "Notebook",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
        price: 5.0,
        rating: 4.1,
      },
    ]);

let {toggle} =useContext(Mystore);

  return (
    <div className="w-screen h-full bg-zinc-200 pb-5 overflow-hidden">
      
     {toggle ? <Model /> : null}
      <Navbar/>    

      <div className="flex flex-wrap gap-10 mt-12 p-5  w-full h-full ">
        {products.map((product) => (
          <Product_cards product={product} key={product.id} products={products}/>
        ))}
      </div>
    </div>
  );
};

export default App;
