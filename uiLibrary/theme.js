const colors = {
  green:'#28a745',
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  brick: '#bd4932',
  orange: '#fd7e14',
  yellow: '#ffc107',
  teal: '#20c997',
  cyan: '#17a2b8',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400:'#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
}

export default {
  colors: {
    primary: colors.brick,
    secondary: colors.gray600,
    success: colors.green,
    danger: colors.red,
    warning: colors.yellow,
    info: colors.cyan,
    light: colors.gray100,
    dark: colors.gray800,
  },
  fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ],
  space: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    xxl: 64,
    xxxl: 128,
    xxxxl: 256,
    xxxxxl: 512 
  },
  breakpoints: {
    sm: 0,    // zero represents the default (for mobile-first approach)
    md: '48em',
    lg: '80em'
  }
};
