import {isRouteErrorResponse, useRouteError} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const RouteErrorPage = () => {
  const error = useRouteError() as Error;
  const { t } = useTranslation();

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div id="error-page">
      <h1>{t('Опаньки!')}</h1>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export {RouteErrorPage};
