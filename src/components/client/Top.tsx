import React from 'react';

const Top = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div>
        <h1 className="text-[6.2rem] text-center text-black font-bold mb-[5rem]">現在の待ち組数</h1>
        <p className="flex justify-center items-end gap-[2.5rem] mb-[5rem]">
          <span className="text-[14rem] font-bold">8</span>
          <span className="text-[6.9rem] font-bold mb-[1.8rem]">組</span>
        </p>
        <button className="bg-[var(--color-blue)] w-[60rem] h-[16rem] flex justify-center items-center rounded-[var(--radius)]">
          <span className="text-[6.9rem] text-white font-bold">順番待ちをする</span>
        </button>
      </div>
    </div>
  );
};

export default Top;
