import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "react-toastify";

type Error = {
  message: string;
};
type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      alert("Ok");
      localStorage.setItem("token", res.data.accessToken);
    } catch (error) {
      toast.error((error as Error)?.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Login User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors?.email && (
            <small id="emailHelp" className="text-danger">
              {errors?.email?.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password is min length 6 characters",
              },
            })}
          />
          {errors?.password && (
            <small id="emailHelp" className="text-danger">
              {errors?.password?.message}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
