import styles from './Heading.module.css';

type HeadingProps = {
  children?: React.ReactNode;
  title: string;
};

function Heading({ title, children }: HeadingProps) {
  return (
    <h1 className={styles.heading}>
      {title} {children}
    </h1>
  );
}

export { Heading };
