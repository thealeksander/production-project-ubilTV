import { MutableRefObject, useEffect } from 'react';

export interface useInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement | null>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: useInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let observerRefValue = null;

    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      if (triggerRef.current) {
        observer.observe(triggerRef.current);
        observerRefValue = triggerRef.current;
      }
    }

    return () => {
      if (observer && observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [triggerRef, callback, wrapperRef]);
};
