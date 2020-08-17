import React from 'react';
import { useProvideLayoutData, SidebarType } from './context';

const ResponsiveContext = React.createContext<SidebarType | null>(null);

export function LayoutProvider(props: React.PropsWithChildren<unknown>) {
  const value = useProvideLayoutData();

  return (
    <ResponsiveContext.Provider value={value}>
      {props.children}
    </ResponsiveContext.Provider>
  );
}

export function useLayoutContext() {
  return React.useContext(ResponsiveContext);
}
