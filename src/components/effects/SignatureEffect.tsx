import React from 'react';
import { motion } from 'framer-motion';

// This component handles specific visual effects requested via data-signature-effect
// Currently implemented: 'pulse' (for the status dot)

interface SignatureEffectProps {
  effect?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, children, className }) => {
  if (effect === 'pulse') {
    return (
      <motion.div
        className={className}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(0, 255, 157, 0.4)",
            "0 0 0 6px rgba(0, 255, 157, 0)",
            "0 0 0 0 rgba(0, 255, 157, 0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
