import React, { useState, useRef, useEffect } from 'react';
import { withTheme } from './hoc/withTheme';
import ThemedButton from './components/ThemedButton';
import type { ThemeType } from './types';

const ThemedButtonWithTheme = withTheme(ThemedButton);

interface ThemedCardProps {
  theme: ThemeType;
  title: string;
  content: string;
}

const ThemedCard: React.FC<ThemedCardProps> = ({ theme, title, content }) => {
  const cardStyles: Record<ThemeType, React.CSSProperties> = {
    light: {
      backgroundColor: '#f5f5f5',
      color: '#333',
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px',
    },
    dark: {
      backgroundColor: '#2c2c2c',
      color: '#e0e0e0',
      border: '1px solid #444',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px',
    },
  };

  const titleStyles: Record<ThemeType, React.CSSProperties> = {
    light: { color: '#747674ff', marginBottom: '10px' },
    dark: { color: '#090909ff', marginBottom: '10px' },
  };

  return (
    <div style={cardStyles[theme]}>
      <h3 style={titleStyles[theme]}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

ThemedCard.displayName = 'ThemedCard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ThemedCardWithTheme = withTheme(ThemedCard);

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (buttonRef.current) {
      console.log('Button ref доступен:', buttonRef.current);
      buttonRef.current.focus();
    }
  }, []);

  const appStyles: Record<ThemeType, React.CSSProperties> = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '100vh',
      transition: 'all 0.3s ease',
    },
    dark: {
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={appStyles[theme]}>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: theme === 'light' ? '#333' : '#fff',
              color: theme === 'light' ? '#fff' : '#333',
              border: `1px solid ${theme === 'light' ? '#fff' : '#333'}`,
              borderRadius: '4px',
            }}
          >
            Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
          </button>
        </div>

        <ThemedButtonWithTheme
          ref={buttonRef}
          theme={theme}
        >
          Кнопка с темой {theme}
        </ThemedButtonWithTheme>

      </div>
    </div>
  );
};

export default App;