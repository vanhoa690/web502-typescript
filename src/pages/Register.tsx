import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Error = {
  response: {
    data: string;
  };
};
type Inputs = {
  username: string;
  email: string;
  password: string;
};

function Register() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("http://localhost:3000/register", data);
      nav("/login");
    } catch (error) {
      toast.error((error as Error)?.response.data);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Register User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors?.username && (
            <small id="emailHelp" className="text-danger">
              {errors?.username?.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
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

export default Register;
