import React from "react";
import { useRouter } from "next/router";
import { BiMovie } from "react-icons/bi";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <nav className='text-gray-500 flex justify-between items-center bg-gray-800/70 py-4 px-6 lg:py-2 rounded-3xl '>
      <div>
        <Link href='/' className='text-red-500  lg:text-5xl hidden md:flex'>
          <BiMovie size={55} />
        </Link>
      </div>

      <div className='flex gap-8 md:gap-16 text-xs md:text-lg max-md:w-full items-center'>
        <Link
          href='/'
          className={`${router.pathname == "/" ? "text-white" : ""}`}
        >
          Home
        </Link>
        <Link
          href='/movies'
          className={`${router.pathname == "/movies" ? "text-white" : ""}`}
        >
          Movies
        </Link>
        <Link
          href='/series'
          className={`${router.pathname == "/series" ? "text-white" : ""}`}
        >
          TV Shows
        </Link>
        <Link
          href='/bookmarks'
          className={`${router.pathname == "/bookmarks" ? "text-white" : ""}`}
        >
          Bookmarks
        </Link>
      </div>
      <Link href='/profile' className='cursor-pointer '>
        {session ? (
          <Image
            src={session.user.image}
            alt='/'
            width={50}
            height={50}
            className='rounded-full'
          />
        ) : (
          <BsPersonCircle
            size={50}
            className='border-2 rounded-full hidden md:flex'
          />
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
