'use client';

import { useState } from 'react';
import HourCalculatorRow from '../components/HourCalculatorRow';

export default function MonthlyPage() {
  const [month] = useState(new Date().toISOString().slice(0, 7));
  const [totalHours, setTotalHours] = useState(0);
  const [dailyHours, setDailyHours] = useState<{ [date: string]: number }>({});

  const days = Array.from({ length: 31 }, (_, i) => {
    const date = new Date();
    date.setDate(i + 1);
    return date.toISOString().split('T')[0];
  });

  const handleDayChange = (date: string, hours: number) => {
    setDailyHours(prev => {
      const newHours = { ...prev, [date]: hours };
      setTotalHours(Object.values(newHours).reduce((a, b) => a + b, 0));
      return newHours;
    });
  };

  return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl mb-8">Monthly Hours Calculator</h1>
        <div className="mb-8">
          <strong>Total Hours: {totalHours.toFixed(2)}</strong>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4 font-bold">
          <span>Date</span>
          <span>Start Time</span>
          <span>End Time</span>
          <span>Hours</span>
        </div>

        {days.map(date => (
            <div key={date} className="grid grid-cols-7 gap-4 items-center mb-4">
              <HourCalculatorRow date={date} onChange={handleDayChange} />
              <span className="text-lg">
            {dailyHours[date]?.toFixed(2) || '0.00'}
          </span>
            </div>
        ))}
      </div>
  );
}