import React from "react";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";

export const OnlineSubForm = () => {
  const initialValues = {
    name: "",
    email: "",
    country: "",
    articleTitle: "",
    articleType: "",
    journal: "",
    abstract: "",
    file: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    toast.success("Submission successful!");
    resetForm();
  };

  return (
    <div
      className="modal fade"
      id="submissionModal"
      tabIndex={-1}
      aria-labelledby="submissionModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content shadow-lg">
          <div className="modal-header">
            <h3 className="modal-title" id="submissionModalLabel">
              Online Submission
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ setFieldValue }) => (
                <Form className="row g-2">
                  {/* Name */}
                  <div className="form-floating col-12">
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>

                  {/* Email */}
                  <div className="form-floating col-md-6">
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  {/* Country */}
                  <div className="form-floating col-md-6">
                    <Field
                      as="select"
                      name="country"
                      className="form-select"
                      id="country"
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Australia">Australia</option>
                    </Field>
                    <label htmlFor="country">Country</label>
                  </div>

                  {/* Article Title */}
                  <div className="form-floating col-12">
                    <Field
                      type="text"
                      name="articleTitle"
                      className="form-control"
                      id="articleTitle"
                      placeholder="Article Title"
                    />
                    <label htmlFor="articleTitle">Article Title</label>
                  </div>

                  {/* Article Type */}
                  <div className="form-floating col-md-4">
                    <Field
                      as="select"
                      name="articleType"
                      className="form-select"
                      id="articleType"
                    >
                      <option value="">Select Article Type</option>
                      <option value="Research">Research</option>
                      <option value="Reviewer">Reviewer</option>
                      <option value="Case Report">Case Report</option>
                      <option value="Short Communication">Short Communication</option>
                      <option value="Opinion Article">Opinion Article</option>
                    </Field>
                    <label htmlFor="articleType">Article Type</label>
                  </div>

                  {/* Journal */}
                  <div className="form-floating col-md-8">
                    <Field
                      as="select"
                      name="journal"
                      className="form-select"
                      id="journal"
                    >
                      <option value="">Select Journal</option>
                      <option value="Journal of Health and Medicine">
                        Journal of Health and Medicine
                      </option>
                      <option value="Journal of Applied Science and Engineering">
                        Journal of Applied Science and Engineering
                      </option>
                      <option value="Journal of Earth And Environmental Science">
                        Journal of Earth And Environmental Science
                      </option>
                    </Field>
                    <label htmlFor="journal">Journal</label>
                  </div>

                  {/* Abstract */}
                  <div className="form-floating col-12">
                    <Field
                      as="textarea"
                      name="abstract"
                      className="form-control"
                      id="abstract"
                      placeholder="Abstract"
                      style={{ height: "80px" }}
                    />
                    <label htmlFor="abstract">Abstract</label>
                  </div>

                  {/* File Upload */}
                  <div className="col-12">
                    <label className="form-label">Upload File</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(event) =>
                        setFieldValue("file", event.currentTarget.files[0])
                      }
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
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
};
