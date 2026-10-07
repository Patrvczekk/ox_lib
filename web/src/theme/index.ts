import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'violet',
  primaryShade: 5, // #8B5CF6
  colors: {
    violet: [
      '#F5F3FF', // 0
      '#EDE9FE', // 1
      '#DDD6FE', // 2
      '#C4B5FD', // 3 - tekst przygaszony
      '#A78BFA', // 4 - primary light
      '#8B5CF6', // 5 - primary
      '#7C3AED', // 6
      '#6D28D9', // 7 - primary dark
      '#5B21B6', // 8
      '#4C1D95', // 9
    ],
  },
  fontFamily: 'Inter, Poppins, system-ui, sans-serif',
  shadows: {
    md: '0 4px 15px rgba(139, 92, 246, 0.15)',
    xl: '0 8px 30px rgba(139, 92, 246, 0.25)',
  },
  components: {
    Modal: {
      defaultProps: {
        transitionProps: { transition: 'scale-up', duration: 300 },
      },
      styles: {
        content: {
          backgroundColor: 'rgba(18, 12, 30, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(167, 139, 250, 0.25)',
          borderRadius: '8px',
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.2)',
        },
        header: {
          backgroundColor: 'transparent',
          borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
          paddingBottom: '12px',
        },
        title: {
          color: '#F5F3FF',
          fontWeight: 700,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        },
        close: {
          color: '#A78BFA',
          transition: 'all 0.2s',
          '&:hover': {
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            color: '#F5F3FF',
          },
        },
      },
    },
    Button: {
      styles: () => ({
        root: {
          borderRadius: '6px',
          border: '1px solid transparent',
          transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          '&:hover': {
            transform: 'translateX(2px)',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
            border: '1px solid rgba(167, 139, 250, 0.4)',
          },
          '&:disabled': {
            backgroundColor: 'rgba(18, 12, 30, 0.5)',
            color: '#C4B5FD',
          }
        },
      }),
    },
    Menu: {
      styles: {
        dropdown: {
          backgroundColor: 'rgba(18, 12, 30, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(139, 92, 246, 0.25)',
        },
        item: {
          color: '#C4B5FD',
          fontWeight: 500,
          borderRadius: '6px',
          margin: '2px 4px',
          transition: 'all 0.2s ease',
          '&[data-hovered]': {
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            color: '#F5F3FF',
            transform: 'translateX(3px)',
            boxShadow: 'inset 3px 0 0 #8B5CF6',
          },
        },
        label: {
          color: '#A78BFA',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: 600,
        }
      },
    },
    Progress: {
      styles: {
        root: {
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
        },
        bar: {
          backgroundImage: 'linear-gradient(90deg, #6D28D9 0%, #A78BFA 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transform: 'translateX(-100%)',
            animation: 'ox-shimmer 1.5s infinite',
          }
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: 'rgba(18, 12, 30, 0.6)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          color: '#F5F3FF',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          '&:focus': {
            borderColor: '#8B5CF6',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
          }
        }
      }
    },
  },
};
