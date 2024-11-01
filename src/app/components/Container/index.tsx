import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames([className, styles.container])} {...rest}>
      {children}
    </div>
  );
};

export default Container;
