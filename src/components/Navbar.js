import React from "react";
import { useRouter } from "next/router";
import { BiMovie } from "react-icons/bi";
import Link from "next/link";
import {
  BsFillGridFill,
  BsFillBookmarkFill,
  BsPersonCircle,
} from "react-icons/bs";
import { RiFilmFill } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className='text-gray-500 flex lg:flex-col justify-between items-center bg-gray-800/70 py-4 px-6 lg:py-8 rounded-3xl'>
      <div>
        <Link href='/' className='text-red-500 pb-8 text-4xl lg:text-5xl'>
          <BiMovie />
        </Link>
      </div>

      <div className='flex lg:flex-col gap-6 lg:pt-8 items-center'>
        <Link
          href='/'
          className={`${router.pathname == "/" ? "text-white" : ""}`}
        >
          <BsFillGridFill size={20} />
        </Link>
        <Link
          href='/movies'
          className={`${router.pathname == "/movies" ? "text-white" : ""}`}
        >
          <RiFilmFill size={20} />
        </Link>
        <Link
          href='/series'
          className={`${router.pathname == "/series" ? "text-white" : ""}`}
        >
          <TbDeviceTvOld size={20} />
        </Link>
        <Link
          href='/bookmarks'
          className={`${router.pathname == "/bookmarks" ? "text-white" : ""}`}
        >
          <BsFillBookmarkFill size={20} />
        </Link>
      </div>
      <div className='lg:flex lg:justify-center lg:pt-[290%] '>
        <BsPersonCircle size={30} className='border-2 rounded-full' />
      </div>
    </nav>
  );
};

export default Navbar;
