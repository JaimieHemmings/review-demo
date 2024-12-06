import React from 'react';
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLElement, BoundedProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...props}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Component>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;