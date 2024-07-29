import { useEffect, useState } from "react";
import { Product } from "../../../types/Product";
import axios, { AxiosError } from "axios";
import Loading from "../../../components/Loading";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AdminProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm("Xoa that ko?")) {
      try {
        setLoading(true);
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("Xoa thanh cong !");
        getAllProduct();
      } catch (error) {
        toast.error((error as AxiosError)?.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="container">
      <Loading isShow={isLoading} />
      <h1>AdminProductList</h1>
      <Link to="/admin/product/add">
        <button className="btn btn-success">Add Product</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Desc</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <th scope="col">{product.title}</th>
              <th scope="col">{product.price}</th>
              <th scope="col">
                <img src={product.image} width={"100px"} />
              </th>
              <th scope="col">{product.desc.substring(0, 60)}...</th>
              <th scope="col">
                <Link to={`/admin/product/edit/${product.id}`}>
                  <button className="btn btn-info">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProductList;
