import { useEffect } from 'react';

export const useBodyScrollLock = isLocked => {
  useEffect(() => {
    if (isLocked) {
      const { scrollY } = window;
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.overflowY = 'scroll'
      document.body.style.top = `-${scrollY}px`

      return () => {
        document.body.style.position = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isLocked]);
};
