import {memo} from 'react';
import {Flex, FlexProps} from './Flex';

const Row = memo((props: Omit<FlexProps, 'direction'>) => {
  return (
    <Flex direction='row' {...props}>
      {props.children}
    </Flex>
  );
});

Row.displayName = 'Row';
export {Row};