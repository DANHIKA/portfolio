import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectsSkeleton = () => {
  return (
    <section className="container row mx-auto">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center">
            <Skeleton width={200} />
          </h2>
          <p className="text-secondary mb-5 text-center lead fs-4">
            <Skeleton count={2} />
          </p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
      <div className="row">
        {Array(3).fill().map((_, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="p-3 h-100 shadow-lg">
              <Skeleton height={250} />
              <div className="card-body d-flex flex-column">
                <h5 className="my-2">
                  <Skeleton width={150} />
                </h5>
                <div>
                  <div className="row row-cols-auto">
                    {Array(3).fill().map((_, i) => (
                      <div key={i} className="col mb-2">
                        <div className="p-2">
                          <Skeleton width={100} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton height={5} />
                </div>
                <div className="mt-3 d-flex flex-wrap">
                  {Array(3).fill().map((_, i) => (
                    <div key={i} className="d-flex align-items-center me-3">
                      <Skeleton circle={true} width={20} height={20} className='me-2'/>
                      <Skeleton width={50} />
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Skeleton width={100} height={30} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
