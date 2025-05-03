'use client';

import HourCalculatorRow from '../components/HourCalculatorRow';
import { useState } from 'react';
import Link from 'next/link';

export default function QuickCalcPage() {
  const [result, setResult] = useState(0);

  return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl mb-8">Quick Hours Calculator</h1>
        <Link href="/" className="text-blue-600 mb-4 block">
          ← Back to Monthly View
        </Link>

        <div className="grid grid-cols-7 gap-4 mb-4 font-bold">
          <span>Start Time</span>
          <span>End Time</span>
          <span>Hours</span>
        </div>
        <div className="grid grid-cols-7 gap-4 items-center mb-4">
          <HourCalculatorRow
              date=""
              onChange={(_, hours) => setResult(hours)}
          />
          <span className="text-lg">{result.toFixed(2)}</span>
        </div>
      </div>
  );
}