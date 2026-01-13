import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

type InteractionType = 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress' | 'hover';

interface SignatureInteractionProps {
  type: InteractionType;
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  speed = 1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'parallax') {
    const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
    return (
      <motion.div ref={ref} style={{ y }} className={className}>
        {children}
      </motion.div>
    );
  }

  if (type === 'text-reveal') {
    return (
      <motion.div
        ref={ref}
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
