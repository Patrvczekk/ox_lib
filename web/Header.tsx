import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    background: 'linear-gradient(135deg, rgba(91, 33, 182, 0.95), rgba(26, 16, 48, 0.98))',
    border: '1px solid rgba(192, 132, 252, 0.5)',
    boxShadow: '0 0 24px rgba(124, 58, 237, 0.45)',
    height: 60,
    width: 384,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: '#fff',
    textShadow: '0 0 14px rgba(192, 132, 252, 0.8)',
  },
}));

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Text className={classes.heading}>{title}</Text>
    </Box>
  );
};

export default React.memo(Header);
