import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TextUi.css';

export interface TextUiProps {
  text: string;
  icon?: string;
  iconColor?: string;
  position?: 'right-center' | 'left-center' | 'top-center' | 'bottom-center';
  style?: React.CSSProperties;
}

const parseTextWithKeycap = (rawText: string) => {
  const match = rawText.match(/\[(.*?)\](.*)/);
  if (match) {
    return (
      <>
        <span className="ox-textui-keycap">{match[1]}</span>
        <span className="ox-textui-text">{match[2]}</span>
      </>
    );
  }
  return <span className="ox-textui-text">{rawText}</span>;
};

const TextUi: React.FC<TextUiProps> = ({
  text,
  icon,
  iconColor = '#A78BFA',
  style
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="ox-textui-glass"
        style={style}
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: -15 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <Flex align="center" gap={12} p="8px 14px">
          {icon && (
            <Box className="ox-textui-icon">
              <FontAwesomeIcon icon={icon as any} color={iconColor} size="lg" />
            </Box>
          )}
          <Box className="ox-textui-content">
            {parseTextWithKeycap(text)}
          </Box>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextUi;
