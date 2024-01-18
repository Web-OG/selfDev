import {isRouteErrorResponse, useRouteError} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import cls from './RouteErrorPage.module.scss';

interface RouteError {
  statusText: string
  message: string
}

interface RouteErrorPageProps {
  initialError?: RouteError
}

const RouteErrorPage = (props: RouteErrorPageProps) => {
  const {initialError} = props;
  const initialErrorMsg = initialError && (initialError.statusText || initialError.message);
  const error = useRouteError() as Error;
  const errorMsg = isRouteErrorResponse(error) && (error.statusText || error.message);
  const { t } = useTranslation();

  if (!isRouteErrorResponse(error) && !initialError) {
    return null;
  }

  return (
    <div className={cls.page} id="error-page">
      <h1>{t('Опаньки!')}</h1>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <p>
        <i>{errorMsg || initialErrorMsg}</i>
      </p>
    </div>
  );
};

export {RouteErrorPage};
