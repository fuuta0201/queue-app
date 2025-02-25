import React from 'react';

const Finish = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center gap-[5rem] py-[10rem]">
      <h1 className="text-[6.9rem] font-bold">受付完了</h1>
      <p className="font-500 text-[4.9rem] text-center">
        順番待ちの受付が完了しました。
        <br />
        従業員に呼ばれるまでお待ちください。
      </p>
      <div className="w-[50rem] h-[25rem] bg-[var(--color-blue)] rounded-[var(--radius)] py-[2rem] flex flex-col items-center justify-center">
        <p className="font-bold text-[3rem] text-white">受付番号</p>
        <p className="font-bold text-[14.4rem] text-white leading-none">001</p>
      </div>
    </div>
  );
};

export default Finish;
