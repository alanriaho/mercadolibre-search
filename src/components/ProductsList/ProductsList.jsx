import { Fragment } from "react";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductsList.scss";

const ProductsList = ({ productsList }) => (
  <div className="products-list">
    {productsList.map((product, index) => (
      <Fragment key={product.id}>
        <ProductRow
          title={product.title}
          imageSource={product.thumbnail}
          price={product.original_price ?? product.price}
          stateName={product.address.state_name}
          productAttribute={product.attributes[0].values[0].name}
          hasFreeShipping={product.shipping.free_shipping}
        />
        {index !== (productsList.length - 1) && <hr />}{/* Don't show the separator for the last product row */}
      </Fragment>
    ))}
  </div>
);

export default ProductsList;
