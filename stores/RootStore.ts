import { LanguageStore } from '@/stores';
import { PreferencesStore } from '@/stores/PreferencesStore';
import { flow, types } from 'mobx-state-tree';

// Root Store Model
export const RootStore = types
  .model('RootStore', {
    languageStore: types.optional(LanguageStore, {}),
    preferencesStore: types.optional(PreferencesStore, {}),
  })
  .views((self) => ({
    // Global computed values can go here
    get isAppReady() {
      return self.languageStore.isInitialized && self.preferencesStore.isInitialized;
    },
  }))
  .actions((self) => ({
    // Initialize all stores
    initialize: flow(function* () {
      try {
        console.log('Initializing root store...');

        // Initialize language store
        yield self.languageStore.initialize();

        // Initialize preferences store
        yield self.preferencesStore.initialize();

        console.log('Root store initialized successfully');
      } catch (error) {
        console.error('Error initializing root store:', error);
        throw error;
      }
    }),

    // Reset all stores (useful for logout, etc.)
    reset: flow(function* () {
      try {
        console.log('Resetting root store...');

        // Reset individual stores
        self.languageStore.resetToDefault();
        self.preferencesStore.resetToDefaults();

        console.log('Root store reset successfully');
      } catch (error) {
        console.error('Error resetting root store:', error);
      }
    }),

    // Global actions that affect multiple stores can go here
    handleAppBackground() {
      // Handle app going to background
      console.log('App going to background');
    },

    handleAppForeground() {
      // Handle app coming to foreground
      console.log('App coming to foreground');
    },

    // Global error handling
    handleError(error: Error, context?: string) {
      console.error(`Global error ${context ? `in ${context}` : ''}:`, error);
      // You can add error reporting here (Sentry, Crashlytics, etc.)
    },
  }));

// Create the root store instance
export const rootStore = RootStore.create({});

// Initialize the root store
rootStore.initialize().catch((error) => {
  console.error('Failed to initialize root store:', error);
});

// Export individual stores for convenience
export const languageStore = rootStore.languageStore;
export const preferencesStore = rootStore.preferencesStore;

export default rootStore;