import { createElement, ComponentElement } from 'react';

export type Provider = [any, Record<string, any>];

const createProviderTree = (providers: Provider[], children: any): ComponentElement<any, any> => {
  const [Provider, props = {}] = providers.shift() || [];

  if (providers.length === 0) {
    return createElement(Provider, { ...props, children });
  }

  return (createElement(Provider, props, createProviderTree(providers, children)) as unknown) as ComponentElement<
    any,
    any
  >;
};

export const createProviderTreeFromList = (...providers: Provider[]) => {
  return ({ children }: { children?: any }) => {
    return createProviderTree(providers, children);
  };
};
