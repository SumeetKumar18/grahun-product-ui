import { useRef, useCallback, useEffect } from 'react';

interface ScrollElement {
  ref: React.RefObject<HTMLDivElement>;
  isAtEnd: boolean;
}

export const useJointScroll = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const checkScrollEnd = useCallback((element: HTMLDivElement): boolean => {
    const { scrollTop, scrollHeight, clientHeight } = element;
    return scrollTop + clientHeight >= scrollHeight - 5; // 5px tolerance
  }, []);

  const syncScroll = useCallback((source: 'left' | 'right', scrollTop: number) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    
    if (source === 'left' && rightRef.current) {
      const leftAtEnd = checkScrollEnd(leftRef.current!);
      if (!leftAtEnd) {
        rightRef.current.scrollTop = scrollTop;
      }
    } else if (source === 'right' && leftRef.current) {
      const rightAtEnd = checkScrollEnd(rightRef.current!);
      if (!rightAtEnd) {
        leftRef.current.scrollTop = scrollTop;
      }
    }

    // Reset scrolling flag after a short delay
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 100);
  }, [checkScrollEnd]);

  const handleLeftScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    syncScroll('left', e.currentTarget.scrollTop);
  }, [syncScroll]);

  const handleRightScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    syncScroll('right', e.currentTarget.scrollTop);
  }, [syncScroll]);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return {
    leftRef,
    rightRef,
    handleLeftScroll,
    handleRightScroll,
  };
};
