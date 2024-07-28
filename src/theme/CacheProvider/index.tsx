import React, { ReactNode } from 'react';

// material-ui
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Types
interface Props {
  children: ReactNode;
}

// ---------------------------------------|| CACHE PROVIDER ||----------------------------------------------------------

const EmotionCache: React.FC<Props> = ({ children }) => {
  const cacheLTR = createCache({
    key: 'css',
    prepend: true,
    stylisPlugins: []
  });

  return <CacheProvider value={cacheLTR}>{children}</CacheProvider>;
};

export default EmotionCache;
