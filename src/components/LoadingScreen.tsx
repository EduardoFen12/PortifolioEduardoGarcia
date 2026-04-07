import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <motion.div
        className="h-14 w-14 rounded-full border border-accent/30 border-t-accent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
      />
    </div>
  );
}
