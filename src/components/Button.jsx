import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'outline-white'
  size = 'md', // 'sm' | 'md' | 'lg'
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon = null,
  ...rest
}) => {
  const classes = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {Icon && <Icon size={18} />}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer" {...rest}>
        {Icon && <Icon size={18} />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
