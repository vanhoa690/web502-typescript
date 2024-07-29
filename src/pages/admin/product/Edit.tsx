import { SubmitHandler, useForm } from "react-hook-form";
import ProductForm from "../../../components/ProductForm";
import { Product, ProductInputs } from "../../../types/Product";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function AdminEditProduct() {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState<Product | undefined>();

  const getProductDetail = async (id: string) => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProductDetail(id);
  }, [id]);

  const updateProduct: SubmitHandler<ProductInputs> = async (data) => {
    try {
      await axios.put(`/products/${id}`, data);
      toast.success("Update Product Success");
      setTimeout(() => nav("/admin/product/list"), 3000);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Product</h1>
      <ProductForm onSubmit={updateProduct} product={product} />
    </div>
  );
}

export default AdminEditProduct;
