import React from 'react';
import { Box } from 'theme-ui';

const Card = ({ className, children, ...props }) => {
  return (
    <Box
      as="div"
      className={`tabedaar-card ${className || ''}`.trim()}
      sx={{
        borderRadius: '16px',
        border: '1px solid #e0e0e0',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: '#f0f8ff',
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export const CardContent = ({ children, ...props }) => {
  return (
    <Box
      as="div"
      sx={{
        px: 3,
        py: 3,
        textAlign: 'center',
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
