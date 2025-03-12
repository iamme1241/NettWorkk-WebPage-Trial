import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}
const AnimatedText = ({
  text,
  className,
  once = true,
  delay = 0,
  tag: Tag = 'span'
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const textArray = text.split(' ');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove('animate-in');
        }
      });
    }, {
      threshold: 0.3
    });
    if (elementRef.current) {
      const spanElements = elementRef.current.querySelectorAll('span');
      spanElements.forEach((span, index) => {
        setTimeout(() => {
          observer.observe(span);
        }, delay);
      });
    }
    return () => {
      if (elementRef.current) {
        const spanElements = elementRef.current.querySelectorAll('span');
        spanElements.forEach(span => {
          observer.unobserve(span);
        });
      }
    };
  }, [once, delay]);
  return <Tag className={cn('inline-block', className)}>
      <div ref={elementRef} className="inline">
        {textArray.map((word, index) => <span key={index} style={{
        transitionDelay: `${index * 50 + delay}ms`
      }} className="inline-block opacity-0 translate-y-[20px] transition-transform duration-700 ease-out my-0 mx-[5px]">
            {word}
            {index !== textArray.length - 1 && ' '}
          </span>)}
      </div>
    </Tag>;
};
export default AnimatedText;