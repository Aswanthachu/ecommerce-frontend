"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role: string) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4545/api/auth/signup', {
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      console.log('Sign-up successful:', response.data);
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  console.log(formData);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-white px-2">
      <Card className="w-full max-w-md p-6 shadow-2xl">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <p className="mt-2 text-center text-gray-600">Create an account to start shopping</p>
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
            <div>
              <label className="block mb-1 text-black" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-white border-black text-black"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-black" htmlFor="role">
                Select Role
              </label>
              <Select value={formData.role} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-full border-black bg-white text-black">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-black hover:text-white border-2 border-black transition duration-700 !mt-10">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center mt-4">
          <p className="text-gray-800">
            Already have an account?{' '}
            <Link href="/signin" className="text-gray-800 underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
