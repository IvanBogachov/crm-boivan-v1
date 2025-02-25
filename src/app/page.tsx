'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleMoveToCRM = () => {
    router.push('/dashboard');
  };
  return (
    <main className="text-center">
      <h1 className="text-xxl mb-2">Home Page</h1>
      <hr />
      <button
        onClick={handleMoveToCRM}
        type="button"
        className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded hover:bg-gray-800 active:bg-gray-950 mt-2"
      >
        Move to CRM
      </button>
    </main>
  );
}