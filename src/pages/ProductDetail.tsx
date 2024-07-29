import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | undefined>();

  const getProduct = async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data);
    } catch (error) {}
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  return (
    <>
      {product && (
        <div className="container">
          <div className="d-flex">
            <img src={product.image} width={"400px"} />
            <div className="card-body">
              <h5 className="card-title">Title: {product.title}</h5>
              <p className="card-text">Mo ta: {product.desc}</p>
              <p className="card-text">Price: {product.price}</p>
              <p className="card-text">Category: {product.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductDetail;
