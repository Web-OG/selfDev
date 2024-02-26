import {memo, useMemo} from 'react';
import {Alert} from 'shared/ui/Alert/Alert';
import {MultiLanguageMassage} from 'shared/lib/types';
import {getCurrentLanguage} from 'shared/lib/utils/getCurrentLanguage';
import {useTranslation} from 'react-i18next';

interface Props {
  sendingErrorMsg: MultiLanguageMassage | undefined
}

const AlertSendingError = memo((props: Props) => {
  const {sendingErrorMsg} = props;
  const currentLanguage = getCurrentLanguage();
  const {t} = useTranslation();

  return useMemo(() => {
    if (!sendingErrorMsg) return null;

    return <Alert severity='error' title={t('Ошибка отправки формы')}>{sendingErrorMsg[currentLanguage]}</Alert>;
  }, [currentLanguage, sendingErrorMsg, t]);
});

AlertSendingError.displayName = 'SendingErrorAlert';
export {AlertSendingError};