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
        `Bricks Price: ${data?.data.bricksPrice}`,
        `Sand Per Sqft: ${data?.data.sandPerSqft}`,
        `Crush Per Sqft: ${data?.data.crushPerSqft}`,
        `Plastic Pipes: ${data?.data.plasticPipes}`,
        `Cement Price: ${data?.data.cementPrice}`,
        `Iron Bar Per Ton: ${data?.data.ironBarPerTon}`,
        `PVC Pipes: ${data?.data.pvcPipes}`
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
                    <Row>
                        <Col>
                            <div className='rates_display'>
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    loop={true}
                                    speed={1000} // Adjust speed for smoother scrolling
                                    autoplay={{
                                        delay: 0, // Set delay to 0 for continuous movement
                                        disableOnInteraction: false,
                                        reverseDirection: false
                                    }}
                                    freeMode={true} // Enables free mode for non-fixed slides positions
                                    freeModeMomentum={false} // Disables momentum to keep constant speed
                                >
                                    {rates.map((rate, index) => (
                                        <SwiperSlide key={index}>
                                            <p>{rate}</p>
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