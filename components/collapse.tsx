import { ReactNode, useState } from 'react';

export function Collapse({
  title,
  children,
  previewShown,
  className,
}: {
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  previewShown?: boolean;
}) {
  const [shown, setShown] = useState(false);

  return (
    <div className={className}>
      <div style={{ padding: 16 }} onClick={() => setShown(!shown)}>
        {title}
      </div>
      {(shown || previewShown) && <div style={{ padding: 16 }}>{children}</div>}
    </div>
  );
}
