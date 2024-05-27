import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <section>
            <Container>
                <div className="row text-center">
                    <div className="col-md-12">
                        {/* Carousel wrapper */}
                        <Carousel>
                            {/* Single item */}
                            <Carousel.Item>
                                <p className="lead font-italic mx-4 mx-md-5">
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                    numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                                </p>
                                <div className="mt-5 mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                        className="rounded-circle img-fluid shadow-1-strong" alt="smaple image" width="100"
                                        height="100" />
                                </div>
                                <p className="text-muted mb-0">- Anna Morian</p>
                            </Carousel.Item>

                            {/* Single item */}
                            <Carousel.Item>
                                <p className="lead font-italic mx-4 mx-md-5">
                                    "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores
                                    repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing
                                    elit."
                                </p>
                                <div className="mt-5 mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                                        className="rounded-circle img-fluid shadow-1-strong" alt="smaple image" width="100"
                                        height="100" />
                                </div>
                                <p className="text-muted mb-0">- Teresa May</p>
                            </Carousel.Item>

                            {/* Single item */}
                            <Carousel.Item>
                                <p className="lead font-italic mx-4 mx-md-5">
                                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
                                    maiores."
                                </p>
                                <div className="mt-5 mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                        className="rounded-circle img-fluid shadow-1-strong" alt="smaple image" width="100"
                                        height="100" />
                                </div>
                                <p className="text-muted mb-0">- Kate Allise</p>
                            </Carousel.Item>
                        </Carousel>
                        {/* Carousel wrapper */}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;
