import React from 'react';
import '../styles/Skills.css'; // Import custom CSS for styling

const Skills = () => {
    return (
        <section className="bsb-skill-1 py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center">Skills</h2>
                        <p className="text-secondary mb-5 text-center lead fs-4">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* Tools & Technologies */}
                    <div className="col-12 col-sm-6 col-xl-5">
                        <div className="rounded skills-list text-center">
                            <ul className="list-unstyled d-flex justify-content-center flex-wrap">
                                <li className="mx-3 mb-3">
                                    <i className="fab fa-figma fa-2x"></i>
                                    <div className="progress mt-3">
                                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li className="mx-3 mb-3">
                                    <i className="fab fa-react fa-2x"></i>
                                    <div className="progress mt-3">
                                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li className="mx-3 mb-3">
                                    <i className="fab fa-node-js fa-2x"></i>
                                    <div className="progress mt-3">
                                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li className="mx-3 mb-3">
                                    <i className="fab fa-php fa-2x"></i>
                                    <div className="progress mt-3">
                                        <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li className="mx-3 mb-3">
                                    <i className="fab fa-js fa-2x"></i>
                                    <div className="progress mt-3">
                                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
