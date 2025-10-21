import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export const OnlineSubForm = () => {
  const [journals, setJournals] = useState([]);

  // ✅ Fetch journals
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const res = await axios.get(`${API_URL}/journals/all`);
        if (res.data.success) {
          setJournals(res.data.data);
        } else {
          toast.error("Failed to load journals");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error loading journals");
      }
    };
    fetchJournals();
  }, []);

  // ✅ Initial values
  const initialValues = {
    name: "",
    email: "",
    country: "",
    articleTitle: "",
    articleType: "",
    journal: "",
    abstract: "",
    files: [],
  };

  // ✅ Allowed file types (safe list)
  const allowedFileTypes = [
    "application/pdf", // PDF
    "image/jpeg", // JPG
    "image/png", // PNG
    "application/vnd.ms-excel", // XLS
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX
  ];

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    country: Yup.string().required("Country is required"),
    articleTitle: Yup.string().required("Article title is required"),
    articleType: Yup.string().required("Article type is required"),
    journal: Yup.string().required("Please select a journal"),
    abstract: Yup.string().required("Abstract is required"),
    files: Yup.array()
      .min(1, "Please upload at least one file")
      .test("fileType", "Invalid file type detected", (files) => {
        if (!files || files.length === 0) return false;
        return files.every((file) => allowedFileTypes.includes(file.type));
      })
      .test("fileSize", "Each file must be under 10MB", (files) => {
        if (!files || files.length === 0) return false;
        return files.every((file) => file.size <= 10 * 1024 * 1024);
      }),
  });

  // ✅ Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "files" && Array.isArray(value)) {
          value.forEach((file) => formData.append("files", file));
        } else {
          formData.append(key, value);
        }
      });

      const res = await axios.post(`${API_URL}/submissions/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        toast.success("Submission successful!");
        resetForm();
      } else {
        toast.error(res.data.message || "Submission failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting form");
    }
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form className="row g-2">
                  {/* Name */}
                  <div className="form-floating col-12">
                    <Field
                      type="text"
                      name="name"
                      className="form-control mb-2"
                      id="name"
                      placeholder="Name"
                    />
                    <label htmlFor="name">Username</label>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-floating col-md-6">
                    <Field
                      type="email"
                      name="email"
                      className="form-control mb-2"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger small"
                    />
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
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Article Title */}
                  <div className="form-floating col-12">
                    <Field
                      type="text"
                      name="articleTitle"
                      className="form-control mb-2"
                      id="articleTitle"
                      placeholder="Article Title"
                    />
                    <label htmlFor="articleTitle">Article Title</label>
                    <ErrorMessage
                      name="articleTitle"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Article Type */}
                  <div className="form-floating col-md-6 mb-2">
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
                      <option value="Short Communication">
                        Short Communication
                      </option>
                      <option value="Opinion Article">Opinion Article</option>
                    </Field>
                    <label htmlFor="articleType">Article Type</label>
                    <ErrorMessage
                      name="articleType"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Journal */}
                  <div className="form-floating col-md-6">
                    <Field
                      as="select"
                      name="journal"
                      className="form-select"
                      id="journal"
                    >
                      <option value="">Select Journal</option>
                      {journals.map((journal) => (
                        <option key={journal._id} value={journal._id}>
                          {journal.title}
                        </option>
                      ))}
                    </Field>
                    <label htmlFor="journal">Journal</label>
                    <ErrorMessage
                      name="journal"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Abstract */}
                  <div className="form-floating col-12">
                    <Field
                      as="textarea"
                      name="abstract"
                      className="form-control mb-2"
                      id="abstract"
                      placeholder="Abstract"
                      style={{ height: "80px" }}
                    />
                    <label htmlFor="abstract">Abstract</label>
                    <ErrorMessage
                      name="abstract"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* File Upload (Multiple) */}
                  <div className="col-12 mb-3">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.xls,.xlsx,.jpg,.jpeg,.png"
                      className="form-control"
                      onChange={(event) => {
                        const selectedFiles = Array.from(event.currentTarget.files);
                        const validFiles = selectedFiles.filter((file) =>
                          allowedFileTypes.includes(file.type)
                        );

                        if (validFiles.length !== selectedFiles.length) {
                          toast.error("Some files were rejected (invalid type)");
                        }

                        setFieldValue("files", validFiles);
                      }}
                    />
                    <ErrorMessage
                      name="files"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="online-submission-btn d-none d-md-inline-block me-2 w-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
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
