/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

const Button = ({ children, iconName, variant, onVariant, ...props }) => {
  const theme = useTheme();

  const styles = {
    width: props.width,
    padding: '6px 10px',
    backgroundColor: theme[variant],
    color: theme[onVariant],
    borderRadius: '8px',
    border: `1px solid ${theme[variant]}`,
    fontSize: '14px',
    fontWeight: '500',
    'box-icon': {
      verticalAlign: 'middle',
      marginRight: 4
    },
    span: {
      verticalAlign: 'middle',
    }
  };

  return (
    <button {...props} css={styles}>
      {iconName && <box-icon color={theme[onVariant]} type={props.icontype} name={iconName} />}
      <span>{children}</span>
    </button>
  )
}

Button.defaultProps = {
  width: 'auto',
  text: 'Default',
  iconName: null,
  icontype: 'solid',
  variant: 'primary',
  onVariant: 'onPrimary',
};

export default Button;
