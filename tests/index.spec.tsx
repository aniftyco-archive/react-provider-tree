import { render } from '@testing-library/react';
import React, { FunctionComponent } from 'react';
import { createProviderTreeFromList } from '../src/';

describe('react-provider-tree', () => {
  const App = () => <div>Application</div>;
  const MockProvider: FunctionComponent = ({ children, ...props }) => <div {...props}>{children}</div>;

  it('should render the tree of providers', () => {
    const Provider = createProviderTreeFromList(
      [MockProvider, { name: 'provider-a' }],
      [MockProvider, { name: 'provider-b' }],
      [MockProvider, { name: 'provider-c' }]
    );
    const { container } = render(
      <Provider>
        <App />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
