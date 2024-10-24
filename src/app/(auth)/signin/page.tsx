"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
  };

  console.log(formData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-white px-2">
      <Card className="w-full max-w-md p-6 shadow-2xl">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <p className="mt-2 text-center text-gray-600">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-black" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border-black text-black"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-black" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="bg-white border-black text-black"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-black hover:text-white border-2 border-black transition duration-700 !mt-10">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center mt-4">
          <p className="text-gray-800">
            Don't have an account?{' '}
            <Link href="/signup" className="text-gray-800 underline">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
