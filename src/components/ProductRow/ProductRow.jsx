import { useNavigate } from "react-router-dom";
import shippingImage from "../../assets/shipping.png";
import "./ProductRow.scss";

const ProductRow = ({ title, imageSource, price, stateName, productAttribute, currency, id, hasFreeShipping }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="product-row">
      <img src={imageSource} alt="Imagen del producto" className="product-row__thumbnail" onClick={handleClick} />
      <div className="product-row__info">
        <div className="product-row__info__top">
          <div className="product-row__info__top__price-and-shipping">
            <span className="product-row__info__top__price-and-shipping__price">
              {price.toLocaleString("es-AR", {
                style: "currency",
                currency: currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
            {hasFreeShipping && <img src={shippingImage} alt="Envío gratis" />}
          </div>
          <span className="product-row__info__top__location">{stateName}</span>
        </div>
        <p className="product-row__info__title" onClick={handleClick}>{title}</p>
        <p>{productAttribute}</p>
      </div>
    </div>
  );
};

export default ProductRow;
