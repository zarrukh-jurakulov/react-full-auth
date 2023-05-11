import { Form, Field } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

interface UserInfoType {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (body: UserInfoType) => {
    const result = await register(body);
    if (result.status === 200) {
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
                  <h1 className="text-white">Register</h1>
                </div>
                <div className="col-6">
                  <Field
                    name="name"
                    validate={required}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          onChange={input.onChange}
                          value={input.value}
                          className="form-control mt-3 "
                          placeholder="Name"
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
                    name="email"
                    validate={required}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
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
                    name="phone"
                    validate={composeValidators(required, minValue(10))}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          onChange={input.onChange}
                          value={input.value}
                          className="form-control mt-3 "
                          placeholder="Phone"
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
                          type="text"
                          onChange={input.onChange}
                          value={input.value}
                          className="form-control mt-3 "
                          placeholder="Password"
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
                    name="password_confirmation"
                    validate={composeValidators(required, minValue(6))}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          onChange={input.onChange}
                          value={input.value}
                          className="form-control mt-3 "
                          placeholder="Password Confirmation"
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
                <div className="col-6 d-flex">
                  <p className="text-white mt-3">
                    If you have an account you should{" "}
                    <Link to="/login">login</Link> !
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

export default Register;
