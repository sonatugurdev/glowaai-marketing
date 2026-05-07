"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3";
  once?: boolean;
  style?: CSSProperties;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: custom.delay
    }
  })
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
  style
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={cn(className)}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={{ delay }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  children,
  className,
  staggerDelay = 0.08,
  style
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
