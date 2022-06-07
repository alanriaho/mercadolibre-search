import { useEffect, useState } from "react";
import "./ProductDetails.scss";

const ProductDetails = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [productDescription, setProductDescription] = useState("");

  useEffect(() => {
    if (!productInfo) {
      setIsLoading(true);
      fetch(`https://api.mercadolibre.com/items/${productId}`)
        .then((data) => data.json())
        .then((parsedData) => setProductInfo(parsedData))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [productId, productInfo]);

  useEffect(() => {
    if (!productDescription) {
      setIsLoading(true);
      fetch(`https://api.mercadolibre.com/items/${productId}/description`)
        .then((data) => data.json())
        .then((parsedData) => setProductDescription(parsedData))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [productId, productDescription]);

  useEffect(() => console.log(productDescription), [productDescription]); // TO DO: REMOVE THIS
  useEffect(() => console.log(productInfo), [productInfo]); // TO DO: REMOVE THIS

  return isLoading ? <p>Cargando...</p> : (
    <div className="product-details">
      <div className="product-details__container">
        <div className="product-details__container__info-and-image">
          <div className="product-details__container__info-and-image__info">
            <span className="product-details__container__info-and-image__info__condition-and-sold">
              {productInfo?.condition === "new" ? "Nuevo" : "Usado"} - {productInfo?.sold_quantity} vendidos
            </span>
            <h2>{productInfo?.title}</h2>
            <p className="product-details__container__info-and-image__info__price">
              {(productInfo?.price ?? "").toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
            <button>
              Comprar
            </button>
          </div>
          <img src={productInfo?.thumbnail} alt={productInfo?.title} />
        </div>
        <div className="product-details__container__details">
            <h3>Descripción del producto</h3>
            <p>{productDescription?.text || productDescription?.plain_text}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;