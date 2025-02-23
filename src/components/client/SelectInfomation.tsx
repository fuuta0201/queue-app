import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const SelectInfomation = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div className="w-[100%] h-[13rem] pt-[3rem] pl-[4rem]">
        <Button
          text="戻る"
          isIcon={true}
        />
      </div>
      <div className="w-[88rem] mx-[auto]">
        <h1 className="text-[6.9rem] font-bold mb-[3rem] text-center">席の種類</h1>
        <ul className="w-[100%] flex justify-between mb-[7rem]">
          <li>
            <Button
              text="カウンター"
              isIcon={false}
            />
          </li>
          <li>
            <Button
              text="テーブル"
              isIcon={false}
            />
          </li>
          <li>
            <Button
              text="どちらでも"
              isIcon={false}
            />
          </li>
        </ul>
        <span className="block bg-[var(--color-blue-2)] w-[100%] h-[4px] rounded-[var(--radius)] mb-[7rem]" />
        <div className="flex justify-center items-center h-[17.4rem]">
          <p className="text-[6.9rem] font-bold">人数：</p>
          <p className="text-[14.4rem] font-bold">1名</p>
          <div className="h-[100%] flex flex-col justify-between ml-[4.5rem] mr-[3.5rem]">
            <button className="bg-white w-[5rem] h-[5rem] rounded-[var(--radius)] flex justify-center items-center">
              <Image
                src="images/icons/plus.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
            <button className="bg-white w-[5rem] h-[5rem] rounded-[var(--radius)] flex justify-center items-center">
              <Image
                src="images/icons/minus.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>
          <Button
            text="確定"
            isIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectInfomation;
