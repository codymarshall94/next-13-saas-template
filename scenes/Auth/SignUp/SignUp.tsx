'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icons } from '@/components/social-icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  //creates a supabase client within the component
  const supabase = createClientComponentClient();

  //if you would like to have Oauth sign in, you can read up on it here:
  //https://supabase.com/docs/guides/auth/social-login

  const handleSignUp = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    let { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // location.origin will be localhost:3000, locally or your production URL
        emailRedirectTo: `${location.origin}/callback`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
    }
  };

  return (
    <Card className='mx-auto w-full max-w-sm'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='flex justify-center space-x-2'>
          <Button variant='outline'>
            <Icons.google className='mr-2 h-4 w-4' />
            Google
          </Button>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>

        <fieldset className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='m@example.com'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </fieldset>
        <fieldset className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
          />
        </fieldset>
        <div className='text-red-500'>{error}</div>

        <div className='flex justify-center'>
          <span className='text-sm text-muted-foreground'>
            Have an account?
          </span>
          <Link className='ml-1 text-sm' href='/sign-in'>
            Sign In
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full' onClick={handleSignUp}>
          Create account
        </Button>
      </CardFooter>
    </Card>
  );
}
