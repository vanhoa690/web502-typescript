import { useForm } from "react-hook-form";
import { Product, ProductInputs } from "../types/Product";
import { useEffect } from "react";
import axios from "axios";

type ProductFormProps = {
  product?: Product;
  onSubmit: (data: ProductInputs) => void;
};

function ProductForm({ product, onSubmit }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInputs>();

  useEffect(() => {
    if (!product) return;
    reset(product);
  }, [product]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Label + Input text*/}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Product Title"
          {...register("title", { required: "Title is Required" })}
        />
        {errors?.title && (
          <small className="text-danger">{errors.title.message}</small>
        )}
      </div>
      {/* End Input text */}

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Product Price"
          {...register("price", {
            required: "Price is Required",
            min: {
              value: 1,
              message: "Price is min 1",
            },
          })}
        />
        {errors?.price && (
          <small className="text-danger">{errors.price.message}</small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="Product Image"
          {...register("image")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Desc">Desc</label>
        <textarea
          className="form-control"
          id="Desc"
          rows={3}
          defaultValue={""}
          {...register("desc")}
        />
      </div>

      {/* Check box: Show Product */}
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isShowProduct"
          {...register("isShowProduct")}
        />
        <label className="form-check-label" htmlFor="isShowProduct">
          Show Product
        </label>
      </div>

      {/* Category: Select box */}
      <div className="form-group">
        <label htmlFor="Category">Category</label>
        <select
          className="form-control"
          id="Category"
          {...register("category")}
        >
          <option value="1">Hp</option>
          <option value="2">Apple</option>
          <option value="3">Dell</option>
        </select>
      </div>

      <button className="btn btn-primary">
        {product ? "Edit" : "Add"} Product
      </button>
    </form>
  );
}

export default ProductForm;
