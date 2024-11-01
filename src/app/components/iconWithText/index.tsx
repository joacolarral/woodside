import React, { ReactNode } from "react";
import styles from "./IconWithText.module.scss";

interface IconWithTextProps {
  icon: ReactNode;
  text: string;
  href: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text, href }) => {
  return (
    <a
      href={href}
      className={styles.container}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <p>{text}</p>
    </a>
  );
};

export default IconWithText;
