import React from "react";

const Footer = () => {
  return (
    <div className='pt-[50px] px-10 text-white flex flex-col '>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16'>
        <div>
          <h3 className='font-bold text-sm uppercase'>Corporate</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>About us</a>
            <a href='#'>Support forum</a>
            <a href='#'>Contact us</a>
            <a href='#'>System status</a>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Get involved</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>Contribution bible</a>
            <a href='#'>Add new movie</a>
            <a href='#'>Add new tv show</a>
            <a href='#'>FAQs</a>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>community</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>Guidelines</a>
            <a href='#'>Discussions</a>
            <a href='#'>Leaderboard</a>
            <a href='#'>Twitter</a>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>legal</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>Terms of use</a>
            <a href='#'>Privacy policy</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
