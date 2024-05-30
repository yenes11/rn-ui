import { ReactNode, createContext, useContext, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
interface Context {
  theme: ColorSchemeName;
  toggleTheme: () => void;
}

const ColorSchemeContext = createContext<Context>({
  theme: Appearance.getColorScheme(),
  toggleTheme: () => {},
});

function ColorSchemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <ColorSchemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export const useColorScheme = () => {
  return useContext<Context>(ColorSchemeContext);
};

export default ColorSchemeProvider;
