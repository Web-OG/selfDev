import {Decorator} from '@storybook/react';

export const SecondaryElementDecorator: Decorator = (Story) => {
  const styles = {
    width: 'fit-content',
    padding: '20px',
    backgroundColor: 'var(--secondary-color)'
  };
  
  return (
    <div style={styles}>
      <Story/>
    </div>
  );
};

