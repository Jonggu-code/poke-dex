import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/theme.ts';
import { RootState } from './store/index.ts';
import { useSelector } from 'react-redux';

function RootApp() {
  const themeMode = useSelector((state: RootState) => state.themeType.themeMode);
  return (
    <ThemeProvider theme={themeMode === 'dark' ? dark : light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}

export default RootApp;
