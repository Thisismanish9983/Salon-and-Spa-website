import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <article className="service-card">
      <div className="service-card-image-wrapper">
        <img
          src={service.image}
          alt={service.name}
          className="service-card-img"
          loading="lazy"
        />
        <span className="service-card-badge">{service.categoryName}</span>
        <span className="service-card-duration">
          <Clock size={13} />
          {service.duration}
        </span>
      </div>

      <div className="service-card-body">
        <h3 className="service-card-title">
          <Link to={`/services/${service.id}`}>{service.name}</Link>
        </h3>
        <p className="service-card-desc">{service.shortDesc}</p>

        <div className="service-card-footer">
          <div className="service-card-price">
            <span className="service-card-price-label">Starting at</span>
            <span className="service-card-price-val">${service.price}</span>
          </div>

          <Link to={`/services/${service.id}`} className="service-card-btn" aria-label={`View details for ${service.name}`}>
            <span>View Details</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
