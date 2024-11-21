import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>throw error</Button>;
};
