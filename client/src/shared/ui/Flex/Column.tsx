import {memo} from 'react';
import {Flex, FlexProps} from './Flex';

const Column = memo((props: Omit<FlexProps, 'direction'>) => {
  return (
    <Flex direction='column' {...props}>
      {props.children}
    </Flex>
  );
});

Column.displayName = 'Column';
export {Column};