import { Form, Field } from "react-final-form";
import { forgotPassword } from "../services/auth.service";

interface UserInfoType {
  email: string;
}

const ForgotPassword = () => {
  const onSubmit = (body: UserInfoType) => {
    forgotPassword(body);
  };

  const required = (value: undefined | string) =>
    value ? undefined : "Required";

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="container-fluid min-vh-100 bg-dark d-flex">
              <div className="row d-flex align-items-center justify-content-center flex-column w-100">
                <div className="col-6">
                  <h1 className="text-white">Forgot Password</h1>
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

export default ForgotPassword;
