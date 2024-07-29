import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/Product";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      // show loi react-toastify
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="container  mt-4">
      <div className="d-flex flex-wrap gap-3">
        {products.map((product, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt="..."
              width={"100px"}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.desc}</p>
              <a href={`/product/${product.id}`} className="btn btn-primary">
                Detail
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
