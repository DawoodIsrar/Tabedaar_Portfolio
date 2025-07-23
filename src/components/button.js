import React from 'react';
import { Box } from 'theme-ui';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <Box
      as="button"
      className={`tabedaar-button ${className || ''}`.trim()}
      onClick={onClick}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
        py: 2,
        borderRadius: '10px',
        fontWeight: 'bold',
        backgroundColor: '#1d4ed8',
        color: '#ffffff',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#1e40af',
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Button;
