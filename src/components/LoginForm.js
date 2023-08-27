import React from "react";
import { Field, Formik, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom'
import useCookies from 'react-cookie'

export default function LoginForm() {
  const navigate=useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  return (
    <div className="col-4 mt-4">
      <div className="card">
        <div className="card-header">Sign In</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <div className="card-text">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={yup.object({
                email: yup.string().required("Email Required"),
                password: yup
                  .string()
                  .min(8, "At least 8 Digit")
                  .trim()
                  .required(" Password Required"),
              })}
              onSubmit={(values) => {
                alert(JSON.stringify(values));
                setCookie("user",values.email);
                navigate("/dashboard");
              }}
            >
              {(props) => (
                <Form>
                    <div>
                      <div className="row mb-3">
                        <label
                          htmlFor="email"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <Field
                            type="email"
                            className="form-control"
                            name="email"
                          />
                          <ErrorMessage
                            className="text-danger"
                            name="email"
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          htmlFor="inputPassword3"
                          className="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-10">
                          <Field
                            type="password"
                            className="form-control"
                            name="password"
                          />
                          <ErrorMessage
                            className="text-danger"
                            name="password"
                          ></ErrorMessage>
                        </div>
                      </div>
                      <button className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
