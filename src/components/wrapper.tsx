import * as React from 'react';

interface WrapperType {
  instances: { key: string; content: JSX.Element }[];
}

export const Wrapper: React.FC<WrapperType> = ({ instances }) => {
  return (
    <div className="wrapper-notification">
      {instances.map((child) => (
        <div key={`notification-${child.key}`}>
          {React.cloneElement(child.content, { id: child.key })}
        </div>
      ))}
    </div>
  );
};
