# React Provider Tree

> Break out of provider tree hell.

### Install

```sh
$ yarn add react-provider-tree
```

### Usage

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createProviderTreeFromList } from 'react-provider-tree';
import { App } from './App';
import { ProviderA } from './providers/ProviderA';
import { ProviderB } from './providers/ProviderB';
import { ProviderC } from './providers/ProviderC';

const ProviderTree = createProviderTreeFromList(
  [ProviderA, { value: 'foo' }],
  [ProviderB, { value: 'bar' }],
  [ProviderC, { value: 'baz' }]
);

ReactDOM.render(
  <ProviderTree>
    <App />
  </ProviderTree>,
  document.getElementById('root')
);
```
