import { RootStore, rootStore } from '@/stores/RootStore';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import React, { createContext, ReactNode, useContext } from 'react';

// Create the context
const StoreContext = createContext<Instance<typeof RootStore> | null>(null);

interface StoreProviderProps {
  children: ReactNode;
  store?: Instance<typeof RootStore>;
}

// Store Provider Component
export const StoreProvider: React.FC<StoreProviderProps> = observer(
  ({ children, store = rootStore }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
  },
);

// Hook to use the store context
export const useStore = (): Instance<typeof RootStore> => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};

// Individual store hooks for convenience
export const useLanguageStore = () => {
  const store = useStore();
  return store.languageStore;
};
