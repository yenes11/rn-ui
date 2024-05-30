const tintColorLight = '#25D366';
const tintColorDark = '#25D366';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    button: {
      primary: {
        background: '#25D366',
        label: '#fff',
      },
      secondary: {
        background: '#25D36650',
        label: '#075E54',
      },
    },
    input: {
      background: '#d9fdd3',
      border: '#25D36670',
      text: '#075E54',
      placeholder: '#128C7E75',
    },
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    button: {
      primary: {
        background: '#25D366',
        label: '#000',
      },
      secondary: {
        background: '#075E5470',
        label: '#DCF8C6',
      },
    },
    input: {
      background: '#103529',
      border: '#25D36650',
      text: '#DCF8C6',
      placeholder: '#25D36660',
    },
  },
};
