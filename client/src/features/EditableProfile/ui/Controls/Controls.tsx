import {Typography} from '@/shared/ui/Typography';
import {Button, ButtonSubmit} from '@/shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {memo, useCallback, useMemo} from 'react';
import {getUserAuthData} from '@/entities/User';
import cls from './Controls.module.scss';
import {useAppDispatch} from '@/app/providers/StoreProvider';
import classNames from 'classnames';
import {profileActions} from '../../model/slice/profileSlice';
import {putProfileData} from '../../model/services/putProfileData';
import {selectReadonly} from '../../model/selectors/selectReadonly';
import {selectId} from '../../model/selectors/selectId';
import {selectIsSending} from '../../model/selectors/selectIsSending';

interface ProfilePageHeaderProps {
  className?: string;
}

const Controls = memo((props: ProfilePageHeaderProps) => {
  const {className} = props;
  const {t} = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileId = useSelector(selectId);
  const canEdit = (authData?._id && profileId) && authData?._id === profileId;
  const readonly = useSelector(selectReadonly);
  const isSending = useSelector(selectIsSending);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(putProfileData());
  }, [dispatch]);

  const ControlButtons = useMemo(() => {
    if (canEdit) {
      return (
        <div className={cls.wrapper}>
          {readonly
            ?
            <Button
              className={cls.editBtn}
              variant='outlined'
              onClick={onEdit}
            >
              {t('Редактировать')}
            </Button>
            :
            <>
              <Button
                className={cls.editBtn}
                variant={'danger'}
                onClick={onCancelEdit}
              >
                {t('Отменить')}
              </Button>
              <ButtonSubmit variant="outlined" isSending={isSending} onClick={onSave}>
                {t('Сохранить')}
              </ButtonSubmit>
            </>
          }
        </div>
      );
    } else return null;
  }, [canEdit, isSending, onCancelEdit, onEdit, onSave, readonly, t]);

  return (
    <div className={classNames(cls.controls, className)}>
      <Typography.Text>
        {t('Профиль')}
      </Typography.Text>
      {ControlButtons}
    </div>
  );
});


Controls.displayName = 'EditableProfileControls';
export {Controls};
