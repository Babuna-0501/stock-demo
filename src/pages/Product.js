import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StarIcon from '@material-ui/icons/Star';
import FolderIcon from '@material-ui/icons/Folder';

function Product({ id, title, image, price, rating, preview, fresh, creator}) {
  const [{ basket, collect }, dispatch] = useStateValue();
  // const [{ collect }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        preview: preview,
        fresh: fresh,
        creator: creator,
      }, 
    });
  };
  const addToCollect = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_COLLECT",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        preview: preview,
        fresh: fresh,
        creator: creator,
      }, 
    });
  };

  return (
    <div className="product">
      {/* <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div> */}
      <div className="product_fresh"><span>{fresh}</span></div>
      
      <video  onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}>
      
      <source src={preview}  type="video/mp4"/>
      </video>

      <button onClick={addToBasket} className="btn-basket"> <ShoppingBasketIcon /></button>
      <button onClick={addToCollect} className="btn-star"> <StarIcon/></button>
      <button onClick={addToBasket} className="btn-folder"> <FolderIcon/></button>
      {/* <div className="creater">{creator}</div> */}
    </div>
  );
}

export default Product;
