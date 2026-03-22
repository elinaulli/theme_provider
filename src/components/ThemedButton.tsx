import React from 'react';
import type { ThemeType, ThemeColors } from '../types';

interface ThemedButtonProps {
  theme: ThemeType;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const themeStyles: Record<ThemeType, ThemeColors> = {
  light: {
    background: '#ffffff',
    text: '#000000',
    buttonBackground: '#747674ff',
    buttonText: '#010101ff',
    border: '#dddddd',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    buttonBackground: '#080808ff',
    buttonText: '#ffffff',
    border: '#333333',
  },
};

const ThemedButton = React.forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ theme, onClick, children, disabled = false }, ref) => {
    const colors = themeStyles[theme];

    const buttonStyle: React.CSSProperties = {
      backgroundColor: colors.buttonBackground,
      color: colors.buttonText,
      border: `1px solid ${colors.border}`,
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.3s ease',
    };

    const containerStyle: React.CSSProperties = {
      backgroundColor: colors.background,
      color: colors.text,
      padding: '20px',
      borderRadius: '8px',
      border: `1px solid ${colors.border}`,
    };

    return (
      <div style={containerStyle}>
        <p>Текущая тема: {theme}</p>
        <button
          ref={ref}
          onClick={onClick}
          disabled={disabled}
          style={buttonStyle}
          onMouseEnter={(e) => {
            if (!disabled) {
              e.currentTarget.style.opacity = '0.8';
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              e.currentTarget.style.opacity = '1';
            }
          }}
        >
          {children || 'Нажми меня'}
        </button>
      </div>
    );
  }
);

ThemedButton.displayName = 'ThemedButton';

export default ThemedButton;