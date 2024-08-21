import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <motion.div
      initial={{ y: '-500%', opacity: 0 }}
      animate={{ y: '100%', opacity: 1 }}
      transition={{ duration: 2,delay:1, ease: 'easeOut' }}
      className='px-4 py-2 mt-20 font-mono text-white bg-blue-700 rounded-full'
    >
      Namasthe! nenu mee GUNA BHA!
    </motion.div>
  );
}

export default MyComponent;
