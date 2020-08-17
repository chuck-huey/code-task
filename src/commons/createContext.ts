import { createContext, useContext } from 'react';

export function createCtx<ContextType>(): readonly [
  () => ContextType,
  React.Provider<ContextType | undefined>,
] {
  const ctx = createContext<ContextType | undefined>(undefined);

  function useCtx(): ContextType {
    const context = useContext(ctx);

    if (!context) {
      throw new Error('useCtx must be inside a Provider with a value');
    }

    return context;
  }

  return [useCtx, ctx.Provider] as const;
}
