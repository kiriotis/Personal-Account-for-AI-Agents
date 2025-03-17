// CustomLink.tsx
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

type CustomLinkProps = Omit<MuiLinkProps, 'component'> & RouterLinkProps;

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  function CustomLink(props, ref) {
    return (
      <MuiLink
        component={RouterLink}
        ref={ref}
        {...props}
        sx={{ color: 'inherit', textDecoration: 'none' }}
      />
    );
  }
);

export default CustomLink;
