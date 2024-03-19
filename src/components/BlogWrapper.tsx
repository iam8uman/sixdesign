// components/BlogWrapper.tsx
import React, { ReactNode } from 'react';

interface BlogWrapperProps {
  children: ReactNode;
}

const BlogWrapper: React.FC<BlogWrapperProps> = ({ children }) => {
  return (
    <div style={{ margin: '0 10%', padding: '20px' }}>
      {children}
    </div>
  );
};

export default BlogWrapper;
