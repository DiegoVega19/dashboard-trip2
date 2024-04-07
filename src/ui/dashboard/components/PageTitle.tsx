import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const location = usePathname();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

export default PageTitle;
