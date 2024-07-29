import axios, { AxiosError } from "axios";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductForm from "../../../components/ProductForm";
import { ProductInputs } from "../../../types/Product";

function AdminAddProduct() {
  const nav = useNavigate();

  const handleAddProduct: SubmitHandler<ProductInputs> = async (data) => {
    try {
      await axios.post("/products", data);
      toast.success("Add Product Success");
      setTimeout(() => nav("/admin/product/list"), 3000);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  return (
    <div className="container">
      <h1>Add Product</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}

export default AdminAddProduct;
