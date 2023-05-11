import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { login } from "../services/auth.service";

interface UserInfoType {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (body: UserInfoType) => {
    const result = await login(body);

    if (result?.status === 200) {
      navigate("/", { replace: true });
    }
  };

  const required = (value: undefined | string) =>
    value ? undefined : "Required";
  // const mustBeNumber = (value: any) =>
  //   isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min: number) => (value: any) =>
    value.length >= min ? undefined : `Password should be bigger ${min} digit`;
  const composeValidators =
    (...validators: any) =>
    (value: any) =>
      validators.reduce(
        (error: string, validator: any) => error || validator(value),
        undefined
      );

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="container-fluid min-vh-100 bg-dark d-flex">
              <div className="row d-flex align-items-center justify-content-center flex-column w-100">
                <div className="col-6">
                  <h1 className="text-white">Login</h1>
                </div>
                <div className="col-6">
                  <Field
                    name="email"
                    validate={required}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="email"
                          onChange={input.onChange}
                          value={input.value}
                          className="form-control mt-3 "
                          placeholder="Email"
                        />
                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="col-6">
                  <Field
                    name="password"
                    validate={composeValidators(required, minValue(6))}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="password"
                          onChange={input.onChange}
                          value={input.value}
                          className="form-control mt-3"
                          placeholder="Password"
                        />

                        {meta.error && meta.touched && (
                          <span className="text-danger">{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="col-6 d-flex">
                  <button type="submit" className="btn bg-warning w-100 mt-3">
                    Submit
                  </button>
                </div>
                <div className="col-6">
                  <p className="text-white mt-3 mb-0">
                    If you don't have an account you should{" "}
                    <Link to="/register">register</Link> !
                  </p>
                  <p className="mb-0">
                    <Link to="/forgot-password">Forgot Password !</Link>
                  </p>
                  <p>
                    <Link to="/reset-password">Reset Password !</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

export default Login;
