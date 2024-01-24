import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../lib/state/actions";
const Row = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const updateCartAction = (e) => {
    dispatch(updateCart(id, e.target.value));
  };
  const removeFromCartAction = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };
  return (
    <tr>
      <td>
        <figure className="itemside">
          <div className="aside">
            <img src={`images/items/${id}.jpg`} alt="kkkkk" className="img-sm" />
          </div>
          <figcaption className="info">
            <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="title text-dark">
              {name}
            </a>
          </figcaption>
        </figure>
      </td>
      <td>
        <select
          className="form-control"
          value={quantity}
          onChange={updateCartAction}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </td>
      <td>
        <div className="price-wrap">
          <span className="price">${price * quantity}</span>
        </div>
      </td>
      <td className="text-right">
        <a
          data-original-title="Save to Wishlist"
          title="tttttttt"
          href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531"
          className="btn btn-light"
          data-toggle="tooltip"
          onClick={() => null}
        >
          {" "}
          <i className="fa fa-heart"></i>
        </a>
        <a
          href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531"
          className="btn btn-light btn-round"
          onClick={removeFromCartAction}
        >
         
          Remove
        </a>
      </td>
    </tr>
  );
};
export default Row;
