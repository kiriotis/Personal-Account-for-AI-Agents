// CustomLink.tsx
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

type CustomLinkProps = Omit<MuiLinkProps, 'component'> & RouterLinkProps & { disabled?: boolean };

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  function CustomLink(props, ref) {
    const { disabled, ...otherProps } = props;
    return (
      <MuiLink
        component={RouterLink}
        ref={ref}
        {...otherProps}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
          }
        }}
        sx={{ color: 'inherit', textDecoration: 'none' }}
      />
    );
  }
);

export default CustomLink;
