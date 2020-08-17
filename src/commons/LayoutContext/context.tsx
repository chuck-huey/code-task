import React from 'react';

export type SidebarType = {
  sidebar: string;
  mobile: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export function useProvideLayoutData(): SidebarType {
  const [sidebar, setSidebar] = React.useState('closed');
  const [mobile, setMobile] = React.useState(false);

  const toggleSidebar = () => {
    const nextState = sidebar === 'open' ? 'closed' : 'open';
    setSidebar(nextState);
  };

  const closeSidebar = () => setSidebar('closed');

  const handleSidebar = () => {
    const breakpoint = '(max-width: 700px)';
    const matchList = window.matchMedia(breakpoint);

    if (matchList.matches) {
      setMobile(true);
      setSidebar('closed');
    } else {
      setSidebar('open');
      setMobile(false);
    }

    return matchList;
  };

  React.useLayoutEffect(() => {
    // Runs only once on initial load
    const matchListener = handleSidebar();

    if (window) {
      matchListener.addEventListener('change', handleSidebar);
    }

    return () => matchListener.removeEventListener('change', handleSidebar);
  }, []);

  return { mobile, sidebar, toggleSidebar, closeSidebar };
}
