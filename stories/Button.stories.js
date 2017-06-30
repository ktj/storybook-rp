import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';

const stories = storiesOf('Button', module);

stories.add('default', () => {
  return (
    <Button>
      Default Button
    </Button>);
}
, { displayName: 'Button' });
