import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Eye = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const eyeElements = container.querySelectorAll('.eye');

    eyeElements.forEach((el) => {
      const eyeX = e.clientX - rect.left - rect.width / 2;
      const eyeY = e.clientY - rect.top - rect.height / 2;

      const edgeDistanceX = Math.max(0, rect.width / 2 - Math.abs(eyeX));
      const edgeDistanceY = Math.max(0, rect.height / 2 - Math.abs(eyeY));
      
      const speedFactor = Math.min(edgeDistanceX, edgeDistanceY) / (rect.width / 4);
      const distance = Math.min(Math.sqrt(eyeX ** 2 + eyeY ** 2) * speedFactor, rect.width / 4);
      
      const angle = Math.atan2(eyeY, eyeX);
      const blackCircleX = distance * Math.cos(angle);
      const blackCircleY = distance * Math.sin(angle);
      
      const eyeRect = el.getBoundingClientRect();
      const maxX = eyeRect.width / 10 - 7.5;
      const maxY = eyeRect.height / 10 - 7.5;

      const clampedX = Math.max(-maxX, Math.min(maxX, blackCircleX));
      const clampedY = Math.max(-maxY, Math.min(maxY, blackCircleY));
      
      gsap.to(el.querySelector('.black-circle'), {
        x: clampedX,
        y: clampedY,
        duration: 0.4,
        ease: "power1.out"
      });
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" ref={containerRef} className="eyes-container gap-10 flex items-center justify-center h-screen w-full bg-center">
      {[1, 2].map((eyeIndex) => (
        <div key={eyeIndex} className="eye w-[11.5vw] h-[11.5vw] bg-white rounded-full flex items-center justify-center">
          <div className="black-circle w-[7.5vw] h-[7.5vw] bg-black rounded-full flex items-center justify-center">
            <div className={`small-circle w-[${eyeIndex === 1 ? '20' : '15'}px] h-[${eyeIndex === 1 ? '20' : '15'}px] bg-white rounded-full`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eye;
