import type { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white"
    >
      {children}
    </button>
  );
};
