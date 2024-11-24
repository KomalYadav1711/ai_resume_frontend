import React from 'react';
import { Button } from '../ui/button';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white">
      <img src="/logo.svg" width={100} height={100} alt="Logo" />

      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to={'/dashboard'}>
            <Button
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all"
            >
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/sign-in'}>
          <Button
            className="bg-teal-500 text-white hover:bg-teal-400 transition-all"
          >
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
