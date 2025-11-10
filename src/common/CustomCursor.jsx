import { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 500, damping: 30 };

  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  useEffect(() => {
    smoothX.set(position.x);
    smoothY.set(position.y);
  }, [position, smoothX, smoothY]);

  return (
    <motion.div className="animate-follow-cursor" style={{
      x: smoothX,
      y: smoothY,
      translateX: "-50%",
      translateY: "-50%"
    }}
    />
  )
}

export default CustomCursor