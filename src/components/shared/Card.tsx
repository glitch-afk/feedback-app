import { FC } from "react";
import styles from "./card.module.css";

type Props = {
  children: React.ReactNode;
  reverse: Boolean;
};

const Card: FC<Props> = ({ children, reverse }) => {
  return reverse ? (
    <div className={styles.reverse}>{children}</div>
  ) : (
    <div className={styles.card}>{children}</div>
  );
};

export default Card;
