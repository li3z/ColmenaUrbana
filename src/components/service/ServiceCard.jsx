import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card p-8 border border-transparent hover:border-primary/20 hover:bg-white h-full transition-all duration-300 group">
      <div className="w-16 h-16 min-w-[4rem] bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
        <svg className="w-8 h-8" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-secondary mb-3 group-hover:translate-x-1 transition-transform">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-6">
        <span className="text-primary font-bold text-sm uppercase tracking-wider border-b-2 border-transparent group-hover:border-primary transition-all pb-1 inline-block">
          Saber más
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;