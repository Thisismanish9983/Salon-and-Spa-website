import React from 'react';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) => {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : ''} ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
