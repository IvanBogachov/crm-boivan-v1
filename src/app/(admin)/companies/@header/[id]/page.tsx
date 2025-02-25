import React from 'react';
import { Company, getCompany } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import Header from '@/app/components/header';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  const paramsId = params.id;

  await queryClient.prefetchQuery({
    queryKey: ['companies', paramsId],
    queryFn: () => getCompany(paramsId, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', paramsId]) as Company;

  return <Header>{company?.title}</Header>;
}
