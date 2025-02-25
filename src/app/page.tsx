'use client';
import Top from '@/components/client/Top';
import SelectInfomation from '@/components/client/SelectInfomation';
import Finish from '@/components/client/Finish';
import { useState } from 'react';

export default function Home() {
  const [pageState, setPageState] = useState<number>(0);
  return (
    <div>
      <main>
        {pageState == 0 && <Top setPageState={setPageState} />}
        {pageState == 1 && <SelectInfomation setPageState={setPageState} />}
        {pageState == 2 && <Finish />}
      </main>
    </div>
  );
}
