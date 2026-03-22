import React from 'react';
import type { ComponentType }  from 'react';
import type { ThemeType } from '../types';

export interface WithThemeProps {
  theme: ThemeType;
}

export function withTheme<P extends WithThemeProps>(
  WrappedComponent: ComponentType<P>
) {
  type HOCProps = Omit<P, keyof WithThemeProps> & {
    theme: ThemeType;
  };
  
  const WithThemeComponent = (props: HOCProps) => {
    const { theme, ...rest } = props;
    
    return React.createElement(
      WrappedComponent,
      {
        ...rest,
        theme,
      } as P
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithThemeComponent.displayName = `withTheme(${displayName})`;

  return WithThemeComponent;
}