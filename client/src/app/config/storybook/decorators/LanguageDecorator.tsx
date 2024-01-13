import i18n from '../../i18n/i18n';
import {Decorator} from '@storybook/react';
import {Suspense, useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';

export const LanguageDecorator: Decorator  = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};