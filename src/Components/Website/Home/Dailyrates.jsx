import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetchDailyRatesQuery } from '../../../Redux/RtkQuery/DailyRates';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export const Dailyrates = () => {
    const { data, error, isLoading } = useFetchDailyRatesQuery();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading rates</p>;

    const rates = [
        { label: 'Bricks Price', value: data?.data.bricksPrice },
        { label: 'Sand Per Sqft', value: data?.data.sandPerSqft },
        { label: 'Crush Per Sqft', value: data?.data.crushPerSqft },
        { label: 'Plastic Pipes', value: data?.data.plasticPipes },
        { label: 'Cement Price', value: data?.data.cementPrice },
        { label: 'Iron Bar Per Ton', value: data?.data.ironBarPerTon },
        { label: 'PVC Pipes', value: data?.data.pvcPipes }
    ];

    return (
        <>
            <section className='daily_rate_sec'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='daily_rates_heading'>Daily Rates</h1>
                        </Col>
                    </Row>
                    <Row className='daily-rates-slides'>
                        <Col>
                            <div className='rates_display'>
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    loop={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        reverseDirection: false
                                    }}
                                    freeMode={true}
                                    freeModeMomentum={false}
                                >
                                    {rates.map((rate, index) => (
                                        <SwiperSlide key={index}>
                                            <p>
                                                {rate.label}: <span className="rate">₨ {rate.value}</span> 
                                            </p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
