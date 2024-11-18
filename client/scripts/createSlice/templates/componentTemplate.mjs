const interfaceConst = 'interface';

export default (componentName) => `import cls from './${componentName}.module.scss';
import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();
    
  return (
    <div className={classNames(cls.${componentName}, {}, [className])}>
      {t('template')}
    </div>
  );
});`;
