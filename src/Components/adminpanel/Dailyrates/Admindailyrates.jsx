import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Admindailyrates.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useUpdateDailyRatesMutation } from "../../../Redux/RtkQuery/DailyRates";
import { toast } from "react-toastify";
import Spinner2 from "../../Common/spinner2/spinner2";
import { useNavigate } from "react-router-dom";

const schema = zod.object({
  bricksPrice: zod.string().min(1, 'Bricks quantity must be a positive number'),
  cementPrice: zod.string().min(1, 'Cement price must be a positive number'),
  sandPerSqft: zod.string().min(1, 'Sand price must be a positive number'),
  ironBarPerTon: zod.string().min(1, 'Iron bars price must be a positive number'),
  crushPerSqft: zod.string().min(1, 'Crush price must be a positive number'),
  pvcPipes: zod.string().min(1, 'PVC pipes price must be a positive number'),
  plasticPipes: zod.string().min(1, 'Plastic pipes price must be a positive number'),
});
export const Admindailyrates = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });
  const [updateDailyRates , {isLoading}] = useUpdateDailyRatesMutation();
const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await updateDailyRates(data).unwrap();
      toast.success('Daily Rates updated');
      console.log('Success:', response);
      navigate('/admin-profile');
    } catch (err) {
      toast.error('Daily rates update failed');
      console.error('Failed to update daily rates:', err);
    }
  };


  if(isLoading){
    return (
      <Spinner2/>
    )
  }
  return (
    <>
    <section className="admin_daily_rates-sec">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <h2 className="daily_headings">Daily Rates</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Bricks in Quantity</label> <br />
                <input
                  className="rates_inputs"
                  type="number"
                  placeholder="Bricks"
                  {...register("bricksPrice")}
                />
                {errors.bricksPrice && <p className="error-message">{errors.bricksPrice.message}</p>}
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Cement Per Bag</label> <br />
                <input
                  className="rates_inputs"
                  type="number"
                  placeholder="Cement"
                  {...register("cementPrice")}
                />
                {errors.cementPrice && <p className="error-message">{errors.cementPrice.message}</p>}
              </div>
            </Col>
          </Row>
           <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div>
                  <label className="rates_lablels">Sand in Sqft</label> <br />
                  <input
                    className="rates_inputs"
                    type="number"
                    placeholder="Sand"
                    {...register("sandPerSqft")}
                  />
                  {errors.sandPerSqft && <p className="error-message">{errors.sandPerSqft.message}</p>}
                </div>
              </Col>
              {/* Iron Bars in Tons Field */}
              <Col lg={6} md={6} sm={12} xs={12}>
                <div>
                  <label className="rates_lablels">Iron Bars in Tons</label> <br />
                  <input
                    className="rates_inputs"
                    type="number"
                    placeholder="Iron Bars"
                    {...register("ironBarPerTon")}
                  />
                  {errors.ironBarPerTon && <p className="error-message">{errors.ironBarPerTon.message}</p>}
                </div>
              </Col>
            </Row>
            {/* Crush in Sqft Field */}
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div>
                  <label className="rates_lablels">Crush in Sqft</label> <br />
                  <input
                    className="rates_inputs"
                    type="number"
                    placeholder="Crush in Sqft"
                    {...register("crushPerSqft")}
                  />
                  {errors.crushPerSqft && <p className="error-message">{errors.crushPerSqft.message}</p>}
                </div>
              </Col>
              {/* PVC Pipes Field */}
              <Col lg={6} md={6} sm={12} xs={12}>
                <div>
                  <label className="rates_lablels">PVC Pipes</label> <br />
                  <input
                    className="rates_inputs"
                    type="number"
                    placeholder="PVC Pipes"
                    {...register("pvcPipes")}
                  />
                  {errors.pvcPipes && <p className="error-message">{errors.pvcPipes.message}</p>}
                </div>
              </Col>
            </Row>
            {/* Plastic Pipes Field */}
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div>
                  <label className="rates_lablels">Plastic Pipes</label> <br />
                  <input
                    className="rates_inputs"
                    type="number"
                    placeholder="Plastic Pipes"
                    {...register("plasticPipes")}
                  />
                  {errors.plasticPipes && <p className="error-message">{errors.plasticPipes.message}</p>}
                </div>
              </Col>
              </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="rates_button">
                <button type="submit">Update</button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  </>
  );
};
