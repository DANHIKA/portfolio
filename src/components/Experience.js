import React, { useState, useEffect } from 'react';
import '../styles/Experience.css'; // Import custom CSS for styling

const Experience = () => {
    const [experienceYears, setExperienceYears] = useState([0, 0]);
    const [experienceMonths, setExperienceMonths] = useState([0, 0]);
    const [experienceDays, setExperienceDays] = useState([0, 0]);
    const [experienceHours, setExperienceHours] = useState([0, 0]);
    const [experienceMinutes, setExperienceMinutes] = useState([0, 0]);

    useEffect(() => {
        const startDate = new Date(2023, 0, 1); // January 1, 2020
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = currentDate - startDate;

            const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            // Convert each number to an array of digits
            setExperienceYears([Math.floor(years / 10), years % 10]);
            setExperienceMonths([Math.floor(months / 10), months % 10]);
            setExperienceDays([Math.floor(days / 10), days % 10]);
            setExperienceHours([Math.floor(hours / 10), hours % 10]);
            setExperienceMinutes([Math.floor(minutes / 10), minutes % 10]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const flipDigit = (digit) => {
        digit.classList.add('flip');
        setTimeout(() => {
            digit.classList.remove('flip');
        }, 500);
    };

    return (
    <section className='py-3 py-md-5'>
        <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center">Experience</h2>
                        <p className="text-secondary mb-5 text-center lead fs-4">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                </div>
        </div>
            
        <div className="experience-container">
            <div className="experience-timer">
                <div className="experience-card my-2">
                    <div className={`digit ${experienceYears[0] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceYears[0]}</div>
                    <div className={`digit ${experienceYears[1] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceYears[1]}</div>
                    <div className="colon">:</div>
                    <div className="experience-label">Years</div>
                </div>
                <div className="experience-card my-2">
                    <div className={`digit ${experienceMonths[0] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceMonths[0]}</div>
                    <div className={`digit ${experienceMonths[1] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceMonths[1]}</div>
                    <div className="colon">:</div>
                    <div className="experience-label">Months</div>
                </div>
                <div className="experience-card my-2">
                    <div className={`digit ${experienceDays[0] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceDays[0]}</div>
                    <div className={`digit ${experienceDays[1] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceDays[1]}</div>
                    <div className="colon">:</div>
                    <div className="experience-label">Days</div>
                </div>
                <div className="experience-card my-2">
                    <div className={`digit ${experienceHours[0] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceHours[0]}</div>
                    <div className={`digit ${experienceHours[1] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceHours[1]}</div>
                    <div className="colon">:</div>
                    <div className="experience-label">Hours</div>
                </div>
                <div className="experience-card my-2">
                    <div className={`digit ${experienceMinutes[0] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceMinutes[0]}</div>
                    <div className={`digit ${experienceMinutes[1] !== 0 ? 'flip' : ''}`} onAnimationEnd={(e) => flipDigit(e.target)}> {experienceMinutes[1]}</div>
                    <div className="experience-label">Mins</div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Experience;
