import { en } from './en';
import { fr } from './fr';

export const translations = {
  en,
  fr,
} as const;

export type TranslationKey = keyof typeof en;
export type SupportedLanguage = keyof typeof translations;
export type TranslationObject = typeof en;

// Helper type for nested keys
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationNestedKey = NestedKeyOf<TranslationObject>;
