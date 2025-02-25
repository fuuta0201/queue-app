import React from 'react';
import Image from 'next/image';

type Props = {
  text: string;
  isIcon: boolean;
  func: (...args: [] | [number]) => void;
};

const Button = ({ text, isIcon, func }: Props) => {
  return (
    <button
      className="bg-[var(--color-blue)] w-[26rem] h-[7rem] flex justify-center items-center rounded-[var(--radius)] relative"
      onClick={() => func()}
    >
      {isIcon && (
        <Image
          src="images/icons/chevron-left.svg"
          alt=""
          width={40}
          height={40}
          className="absolute top-[50%] left-[1rem] translate-y-[-50%]"
        />
      )}
      <span className="text-[4.3rem] text-white font-bold">{text}</span>
    </button>
  );
};

export default Button;
