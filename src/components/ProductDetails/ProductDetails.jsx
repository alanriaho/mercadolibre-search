import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (!productInfo) {
      setIsLoading(true);
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((data) => data.json())
        .then((parsedData) => setProductInfo(parsedData))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [id, productInfo]);

  useEffect(() => {
    if (!productDescription) {
      setIsLoading(true);
      fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((data) => data.json())
        .then((parsedData) => setProductDescription(parsedData))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [id, productDescription]);

  return  (
    <>
      {/* Would be good to have te category in the breadcrumbs, but it's not returned from the API */}
      <Breadcrumbs sections={["Resultados de búsqueda", productInfo?.title]} />
      {isLoading || !productDescription || !productInfo ? <p>Cargando...</p> : (
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
                    currency: productInfo?.currency_id || "ARS",
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
      )}
    </>
  );
}

export default ProductDetails;