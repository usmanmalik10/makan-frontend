import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "./Strategic.scss";
import OneImageCustomUploader from "../../Common/OneImageCustomUploader/OneImageCustomUploader";
import { provAndCities } from "../../../lib/pakProvAndCities";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useCreateStrategicSalePartnerMutation } from "../../../Redux/RtkQuery/StrategicSalesPartner";
import Spinner2 from "../../Common/spinner2/spinner2";

const emailSchema = z
  .string()
  .refine((value) => value.includes("@"), "Expected an email format");

const phoneSchema = z
  .string()
  .refine(
    (value) => /^[0-9+]{9,15}$/.test(value),
    "Expected a valid phone number format"
  );

const passwordSchema = z
  .string()
  .min(8, "Password should be at least 8 characters long")
  .refine(
    (value) => /[A-Z]/.test(value),
    "Password must contain at least one uppercase character"
  )
  .refine(
    (value) => /[a-z]/.test(value),
    "Password must contain at least one lowercase character"
  )
  .refine(
    (value) => /[0-9]/.test(value),
    "Password must contain at least one number"
  )
  .refine(
    (value) => /[^a-zA-Z0-9]/.test(value),
    "Password must contain at least one special character"
  );

const formSchema = z.object({
  userName: z.string().min(1, "Username is required"),
  emailOrPhone: z
    .string()
    .refine(
      (value) =>
        value.includes("@")
          ? emailSchema.safeParse(value).success
          : phoneSchema.safeParse(value).success,
      "Expected a valid email or phone number format"
    ),

  password: passwordSchema,
  cnicNumber: z
    .string()
    .refine(
      (value) => /^\d{5}-\d{7}-\d{1}$/.test(value),
      "Invalid CNIC format. Expected format: XXXXX-XXXXXXX-X"
    ),
  contactNumber: z
    .string()
    .refine(
      (value) => /^(?:\+92|0092|0)?3[0-9]{2}-?[0-9]{7}$/.test(value),
      "Invalid contact number format. Expected format: 03XX-XXXXXXX or +923XX-XXXXXXX"
    ),

  address: z.string().min(10, "Address must be at least 10 characters long"),

  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
});

export const Strategicsalepartner = () => {
  const [createStrategicSalePartner, { isLoading, isError }] =
    useCreateStrategicSalePartnerMutation();
  const [fileProfile, setFileProfile] = useState({
    file: null,
    src: "",
  });
  const [fileIdCardFront, setFileIdCardFront] = useState({
    file: null,
    src: "",
  });
  const [fileIdCardBack, setFileIdCardBack] = useState({
    file: null,
    src: "",
  });
  const [selectedProvince, setSelectedProvince] = useState("Punjab");
  const [selectedCity, setSelectedCity] = useState(
    provAndCities[selectedProvince][0]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const provinceValue = watch("province");
  const onSubmit = async (data) => {
    if (!fileProfile.file) {
      toast.error("Please Select your profile");
      return;
    }
    if (!fileIdCardFront.file) {
      toast.error("Please Select your Id Card Front Picture");
      return;
    }
    if (!fileIdCardBack.file) {
      toast.error("Please Select your Id Card Back Picture");
      return;
    }

    // Combine data and files for the request payload
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append("fileProfile", fileProfile.file);
    formData.append("fileIdCardFront", fileIdCardFront.file);
    formData.append("fileIdCardBack", fileIdCardBack.file);

    try {
      const response = await createStrategicSalePartner(formData).unwrap();
      toast.success("Data submitted successfully!");
      console.log(response);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error(error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <section className="strategic-sale-section">
          {isLoading && <Spinner2></Spinner2>}
          {!isLoading && (
            <Container>
              <Row>
                <Col>
                  <h3 className="strategic_heading">
                    Create Strategic Sale Partners
                  </h3>
                </Col>
              </Row>
              <Row>
                <label className="strategic_labels">User Profile :</label>{" "}
                <br />
                <OneImageCustomUploader
                  isCustom={true}
                  file={fileProfile}
                  setFile={setFileProfile}
                >
                  <div className="profile-pic">
                    <img
                      src={
                        fileProfile.src.length > 5
                          ? fileProfile.src
                          : "/user.webp"
                      }
                      alt="profile"
                    />
                  </div>
                </OneImageCustomUploader>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <label className="strategic_labels">
                    Front Id Card Pic :
                  </label>{" "}
                  <br />
                  <OneImageCustomUploader
                    isCustom={true}
                    file={fileIdCardFront}
                    setFile={setFileIdCardFront}
                  >
                    <div className="id-pic">
                      <img
                        src={
                          fileIdCardFront.src.length > 5
                            ? fileIdCardFront.src
                            : "/iccardback.jpg"
                        }
                        alt="profile"
                      />
                    </div>
                  </OneImageCustomUploader>
                  <small>(Click or drop on images to select image)</small>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <label className="strategic_labels">Back Id Card Pic :</label>{" "}
                  <br />
                  <OneImageCustomUploader
                    isCustom={true}
                    file={fileIdCardBack}
                    setFile={setFileIdCardBack}
                  >
                    <div className="id-pic">
                      <img
                        src={
                          fileIdCardBack.src.length > 5
                            ? fileIdCardBack.src
                            : "/iccardfront.jpg"
                        }
                        alt="profile"
                      />
                    </div>
                  </OneImageCustomUploader>
                  <small>(Click or drop on images to select image)</small>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">User Name :</label>{" "}
                    <br />
                    <input
                      className="strategic_inputs"
                      type="text"
                      placeholder="User Name"
                      {...register("userName")}
                    />
                    {errors.userName && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.userName.message}
                      </p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">
                      Email/Phone Number :
                    </label>
                    <br />
                    <input
                      className="strategic_inputs"
                      type="text"
                      placeholder="Email/Phone Number"
                      {...register("emailOrPhone")}
                    />
                    {errors.emailOrPhone && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.emailOrPhone.message}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">Password :</label>
                    <br />
                    <input
                      className="strategic_inputs"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">CNIC Number :</label>
                    <br />
                    <input
                      className="strategic_inputs"
                      type="text"
                      placeholder="CNIC Number"
                      {...register("cnicNumber")}
                    />
                    {errors.cnicNumber && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.cnicNumber.message}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">Contact Number :</label>
                    <br />
                    <input
                      className="strategic_inputs"
                      type="text"
                      placeholder="Contact Number"
                      {...register("contactNumber")}
                    />
                    {errors.contactNumber && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.contactNumber.message}
                      </p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">Address :</label>
                    <br />
                    <input
                      className="strategic_inputs"
                      type="text"
                      placeholder="Address"
                      {...register("address")}
                    />
                    {errors.address && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">
                      Select Province :
                    </label>
                    <br />
                    <Form.Select
                      className="strategic_inputs"
                      {...register("province")}
                    >
                      <option value="">Select Value</option>
                      {Object.keys(provAndCities).map((prov) => (
                        <option key={prov} value={prov}>
                          {prov}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.province && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.province.message}
                      </p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">Select City :</label>
                    <br />
                    <Form.Select
                      className="strategic_inputs"
                      {...register("city")}
                    >
                      <option value="">Select Value</option>
                      {provAndCities[provinceValue]?.map((city) => (
                        <option value={city}>{city}</option>
                      ))}
                    </Form.Select>
                    {errors.city && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className=" strategic_create_button">
                    <button type="submit">Create</button>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </section>
      </Form>
    </>
  );
};
