export const Background = ({ styles }: { styles?: string }) => {
  const className = `absolute -z-50 -top-20 right-0 ${styles}`;
  return (
    <div className={className}>
      <img src="/image.png" />
    </div>
  );
};
