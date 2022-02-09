import React from "react";
import "./Collections.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CollectionsProduct from "./CollectionsProduct";


function Collections() {
  const [{ collect, user }, dispatch] = useStateValue();

  return (
    <div className="collections">
      <div className="collections__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="collections__title">My collections</h2>

          {collect.map(item => (
            <CollectionsProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              preview= {item.preview}
              fresh={item.fresh}
            />
          ))}

        </div>
      </div>
{/* 
      <div className="collections__right">
        <Subtotal />
      </div> */}
    </div>
  );
}

export default Collections;
