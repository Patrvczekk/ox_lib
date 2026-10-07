import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotificationItem.css';

export interface NotificationProps {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom';
  type?: 'inform' | 'error' | 'success' | 'warning';
  icon?: string;
  iconColor?: string;
  iconAnimation?: string;
  style?: React.CSSProperties;
  showDuration?: boolean;
  alignIcon?: 'top' | 'center';
}

const typeColors = {
  success: '#22C55E',
  error: '#EF4444',
  warning: '#F59E0B',
  inform: '#8B5CF6',
};

const NotificationItem: React.FC<NotificationProps> = ({
  title,
  description,
  duration = 3000,
  position = 'top-right',
  type = 'inform',
  icon,
  iconColor,
  iconAnimation,
  style,
  showDuration = true,
  alignIcon = 'center',
}) => {
  const isInform = type === 'inform';
  const activeColor = typeColors[type] || typeColors.inform;

  const getInitialX = () => {
    if (position.includes('right')) return 80;
    if (position.includes('left')) return -80;
    return 0;
  };

  const getInitialY = () => {
    if (position === 'top' || position === 'bottom') return position === 'top' ? -50 : 50;
    return 0;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: getInitialX(), y: getInitialY(), scale: 0.95 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="ox-noti-glass"
      style={{ ...style, '--noti-color': activeColor } as React.CSSProperties}
    >
      {!isInform && (
        <div className="ox-noti-bar" style={{ backgroundColor: activeColor }} />
      )}

      <Flex align={alignIcon === 'center' ? 'center' : 'flex-start'} gap={14} p={14}>
        {icon && (
          <Box className={`ox-noti-icon ${iconAnimation ? `fa-animate-${iconAnimation}` : ''}`}>
            <FontAwesomeIcon icon={icon as any} color={iconColor || activeColor} size="lg" />
          </Box>
        )}
        <Box style={{ flex: 1, overflow: 'hidden' }}>
          {title && <Text className="ox-noti-title">{title}</Text>}
          {description && <Text className="ox-noti-desc">{description}</Text>}
        </Box>
      </Flex>

      {showDuration && duration > 0 && (
        <div
          className="ox-noti-progress"
          style={{ backgroundColor: activeColor, animationDuration: `${duration}ms` }}
        />
      )}
    </motion.div>
  );
};

export default NotificationItem;
