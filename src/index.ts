import { Fragment, createElement } from 'react';

export type Provider = [any, Record<string, any>];

const createProviderTree = (providers: Provider[], index: number = 0, children: any) => {
  const [Provider, props = {}] = providers[index];

  if (index === providers.length - 1) {
    return createElement(Provider, { ...props, children });
  }

  return createElement(Provider, props, createProviderTree(providers, ++index, children));
};

export const createProviderTreeFromList = (...providers: Provider[]) => {
  return ({ children }: { children?: any }) => {
    return createProviderTree(providers, 0, children);
  };
};
