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
    journal: Yup.string().required("Journal title is required"),
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
                      {/* <option value="India">India</option> */}
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua&Deps">Antigua & Deps</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="BosniaHerzegovina">Bosnia & Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina">Burkina</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="CapeVerde">Cape Verde</option>
                      <option value="CentralAfricanRep">Central African Rep</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo(DemocraticRep)">Congo (Democratic Rep)</option>
                      <option value="CostaRica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="CzechRepublic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="DominicanRepublic">Dominican Republic</option>
                      <option value="EastTimor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="ElSalvador">El Salvador</option>
                      <option value="EquatorialGuinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland(Republic)">Ireland (Republic)</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="IvoryCoast">Ivory Coast</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="KoreaNorth">Korea North</option>
                      <option value="KoreaSouth">Korea South</option>
                      <option value="Kosovo">Kosovo</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="MarshallIslands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="NewZealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="PapuaNewGuinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="RussianFederation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="StKitts&Nevis">St Kitts & Nevis</option>
                      <option value="StLucia">St Lucia</option>
                      <option value="SaintVincent&theGrenadines">Saint Vincent & the Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="SanMarino">San Marino</option>
                      <option value="SaoTome&Principe">Sao Tome & Principe</option>
                      <option value="SaudiArabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="SierraLeone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="SolomonIslands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="SouthAfrica">South Africa</option>
                      <option value="SouthSudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="SriLanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad&Tobago">Trinidad & Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="UnitedArabEmirates">United Arab Emirates</option>
                      <option value="UnitedKingdom">United Kingdom</option>
                      <option value="UnitedStates">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="VaticanCity">Vatican City</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </Field>
                    <label htmlFor="country">Country</label>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Journal */}
                  <div className="form-floating col-md-6">
                    <Field
                      type="text"
                      name="journal"
                      className="form-control mb-2"
                      id="journal"
                      placeholder="Journal Title"
                    />
                    <label htmlFor="journal">Journal Title</label>
                    <ErrorMessage
                      name="journal"
                      component="div"
                      className="text-danger small"
                    />
                  </div>

                  {/* Article Title */}
                  <div className="form-floating col-md-6">
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
                  <div className="form-floating  mb-2">
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
