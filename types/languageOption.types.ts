import { types } from 'mobx-state-tree';

export const LanguageOption = types.model('LanguageOption', {
  code: types.string,
  name: types.string,
  nativeName: types.string,
});

export type ILanguageOption = typeof LanguageOption.Type;
