import { use } from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);
  return (
    <Toolbar action={<AddPromotionButton companyId={resolvedParams.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
