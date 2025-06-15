import { MMKV } from 'react-native-mmkv';

class StorageService {
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  // Generic methods for any type of data
  set<T>(key: string, value: T): void {
    try {
      if (typeof value === 'string') {
        this.storage.set(key, value);
      } else if (typeof value === 'number') {
        this.storage.set(key, value);
      } else if (typeof value === 'boolean') {
        this.storage.set(key, value);
      } else {
        // For objects, arrays, etc.
        this.storage.set(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting ${key}:`, error);
    }
  }

  get<T>(key: string, defaultValue?: T): T | undefined {
    try {
      const value = this.storage.getString(key);

      if (value === undefined) {
        return defaultValue;
      }

      // Try to parse as JSON first
      try {
        return JSON.parse(value) as T;
      } catch {
        // If parsing fails, return as string
        return value as unknown as T;
      }
    } catch (error) {
      console.error(`Error getting ${key}:`, error);
      return defaultValue;
    }
  }

  getString(key: string, defaultValue?: string): string | undefined {
    try {
      return this.storage.getString(key) ?? defaultValue;
    } catch (error) {
      console.error(`Error getting string ${key}:`, error);
      return defaultValue;
    }
  }

  getNumber(key: string, defaultValue?: number): number | undefined {
    try {
      return this.storage.getNumber(key) ?? defaultValue;
    } catch (error) {
      console.error(`Error getting number ${key}:`, error);
      return defaultValue;
    }
  }

  getBoolean(key: string, defaultValue?: boolean): boolean | undefined {
    try {
      return this.storage.getBoolean(key) ?? defaultValue;
    } catch (error) {
      console.error(`Error getting boolean ${key}:`, error);
      return defaultValue;
    }
  }

  remove(key: string): void {
    try {
      this.storage.delete(key);
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
    }
  }

  clear(): void {
    try {
      this.storage.clearAll();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  // Get all keys
  getAllKeys(): string[] {
    try {
      return this.storage.getAllKeys();
    } catch (error) {
      console.error('Error getting all keys:', error);
      return [];
    }
  }

  // Check if key exists
  contains(key: string): boolean {
    try {
      return this.storage.contains(key);
    } catch (error) {
      console.error(`Error checking if ${key} exists:`, error);
      return false;
    }
  }
}

export const storageService = new StorageService();
