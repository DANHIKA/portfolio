import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ServicesSkeleton = () => {
  return (
    <section className='container'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center"><Skeleton width={150} height={50}/></h2>
          <p className="text-secondary mb-5 text-center lead fs-4"><Skeleton width={500} count={2}/></p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="active-service position-relative">
            <h4><Skeleton width={200}/></h4>
            <Skeleton width={400} height={400}/>
            <p><Skeleton width={350}/></p>
          </div>
        </div>
        {/* Right Column (Show all services with dot navigation) */}
        <div className="col-md-4">
          <div className="row">
            {/* Left Column for Vertical Line and Dots */}
            <div className="col-1">
              <div className="vertical-line"></div>
            </div>
            {/* Right Column for Services */}
            <div className="col-11">
              <div className="dot-navigation">
                  <div className="dot">
                    <Skeleton width={80} height={80}/>
                    <div className="ms-2"><Skeleton width={100}/></div>
                  </div>
                  <div className="dot">
                    <Skeleton width={80} height={80}/>
                    <div className="ms-2"><Skeleton width={150}/></div>
                  </div>
                  <div className="dot">
                    <Skeleton width={80} height={80}/>
                    <div className="ms-2"><Skeleton width={50}/></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesSkeleton