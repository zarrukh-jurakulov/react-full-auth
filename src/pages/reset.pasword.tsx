import { Form, Field } from "react-final-form";
import { resetPassword } from "../services/auth.service";

interface UserInfoType {
  email: string;
  password: string;
  password_confirmation: string;
  token?: any;
}

const ResetPassword = () => {
  const onSubmit = (body: UserInfoType) => {
    body.token = localStorage.getItem("token");
    resetPassword(body);
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
                  <h1 className="text-white">Reset Password</h1>
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
                    name="password_cofirmation"
                    validate={composeValidators(required, minValue(6))}
                    render={({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="password"
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
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

export default ResetPassword;
