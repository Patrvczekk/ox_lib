import { MantineThemeOverride, MantineTheme } from '@mantine/core';

// Neon violet theme
const border = '1px solid rgba(167, 139, 250, 0.28)';
const borderStrong = '1px solid rgba(216, 180, 254, 0.8)';
const panel = 'linear-gradient(155deg, rgba(42, 18, 90, 0.97), rgba(12, 5, 28, 0.98))';
const glow = '0 0 18px rgba(168, 85, 247, 0.55)';

const inputStyles = (theme: MantineTheme) => ({
  input: {
    backgroundColor: 'rgba(20, 10, 42, 0.85)',
    border: '1px solid rgba(168, 85, 247, 0.4)',
    borderRadius: 10,
    color: '#f3e8ff',
    transition: 'border-color 160ms ease, box-shadow 160ms ease',
    '&:focus, &:focus-within': {
      borderColor: 'rgba(216, 180, 254, 0.95)',
      boxShadow: glow,
    },
  },
  label: { color: '#e9d5ff', fontWeight: 500, marginBottom: 4 },
  description: { color: '#a78bfa' },
  dropdown: {
    background: panel,
    border: borderStrong,
    borderRadius: 12,
    boxShadow: '0 14px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(124, 58, 237, 0.3)',
  },
  item: {
    borderRadius: 8,
    color: '#ede9fe',
    '&[data-hovered]': { backgroundColor: 'rgba(168, 85, 247, 0.4)' },
    '&[data-selected]': { backgroundColor: theme.colors.violet[7], color: '#fff' },
  },
});

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  primaryColor: 'violet',
  primaryShade: 7,
  shadows: { sm: '0 4px 14px rgba(0, 0, 0, 0.55), 0 0 12px rgba(124, 58, 237, 0.25)' },
  radius: { xs: 4, sm: 10, md: 14, lg: 18, xl: 24 },
  colors: {
    // Mantine "dark" palette is used by every ox_lib component, so recolouring it recolours the whole UI
    dark: ['#ede9fe', '#ddd6fe', '#c4b5fd', '#7c6bb0', '#4a3a82', '#33266b', '#241845', '#1a1030', '#130a26', '#0b0518'],
  },
  components: {
    Button: {
      styles: () => ({
        root: {
          border,
          borderRadius: 10,
          transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background-color 160ms ease',
          '&:hover': { borderColor: 'rgba(216, 180, 254, 0.8)', boxShadow: glow },
        },
        label: { letterSpacing: '0.04em', fontWeight: 500 },
      }),
    },
    Modal: {
      styles: () => ({
        modal: {
          background: panel,
          border: borderStrong,
          borderRadius: 18,
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.75), 0 0 40px rgba(124, 58, 237, 0.35)',
        },
        title: { fontWeight: 600, letterSpacing: '0.04em', textShadow: '0 0 12px rgba(192, 132, 252, 0.6)' },
        overlay: { backdropFilter: 'blur(4px)' },
      }),
    },
    Input: { styles: inputStyles },
    TextInput: { styles: inputStyles },
    PasswordInput: { styles: inputStyles },
    NumberInput: { styles: inputStyles },
    Textarea: { styles: inputStyles },
    Select: { styles: inputStyles },
    MultiSelect: { styles: inputStyles },
    ColorInput: { styles: inputStyles },
    DatePicker: { styles: inputStyles },
    DateRangePicker: { styles: inputStyles },
    TimeInput: { styles: inputStyles },
    Checkbox: {
      styles: (theme: MantineTheme) => ({
        input: {
          backgroundColor: 'rgba(20, 10, 42, 0.85)',
          border: '1px solid rgba(168, 85, 247, 0.5)',
          '&:checked': { backgroundColor: theme.colors.violet[7], borderColor: '#c084fc' },
        },
        label: { color: '#e9d5ff' },
      }),
    },
    Slider: {
      styles: () => ({
        track: { backgroundColor: 'rgba(20, 10, 42, 0.9)' },
        bar: { background: 'linear-gradient(90deg, #7c3aed, #c084fc)' },
        thumb: { backgroundColor: '#f3e8ff', border: '2px solid #a855f7', boxShadow: glow },
      }),
    },
    Progress: {
      styles: () => ({
        root: { border, borderRadius: 999 },
        bar: { boxShadow: '0 0 10px rgba(192, 132, 252, 0.8)', transition: 'width 300ms ease' },
      }),
    },
    HoverCard: {
      styles: () => ({
        dropdown: {
          background: panel,
          border: borderStrong,
          borderRadius: 12,
          boxShadow: '0 14px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(124, 58, 237, 0.35)',
        },
      }),
    },
    Tooltip: {
      styles: () => ({
        tooltip: { background: panel, border, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)' },
      }),
    },
  },
};
