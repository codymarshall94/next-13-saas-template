'use client';

import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error signing out:', error.message);

    console.log('Signed out');
    router.refresh();
  };

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10 '>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl '>
          Saas Dashboard Next13 Template
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          Route ready, ready to use components.
        </p>

        <h2 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
          Built with
        </h2>
        <ul className='list-inside list-disc'>
          <li>NextJS</li>
          <li>Supabase</li>
          <li>Shadcn</li>
          <li>TailwindCSS</li>
          <li>Typescript</li>
        </ul>
        <h2 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
          Features
        </h2>
        <ul className='list-inside list-disc'>
          <li>Authentication</li>
          <li>Ready to use components</li>
          <li>Prettier Plugin + CN util</li>
        </ul>
      </div>
      <Button variant='default' onClick={handleSignOut}>
        Log Out
      </Button>
    </section>
  );
}
