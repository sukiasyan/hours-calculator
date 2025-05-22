import { useEffect, useState } from 'react';

const roundToNearest15 = (time: 'start' | 'end', minutes: number) => {
  if (time === 'start') return Math.floor(minutes / 15) * 15;
  return Math.ceil(minutes / 15) * 15;
};

export default function HourCalculatorRow({ date, onChange }: {
  date: string;
  onChange: (date: string, hours: number) => void;
}) {
  const [startH, setStartH] = useState('');
  const [startM, setStartM] = useState('');
  const [endH, setEndH] = useState('');
  const [endM, setEndM] = useState('');

  useEffect(() => {
    if (startH && startM && endH && endM) {
      const startMinutes = roundToNearest15('start', parseInt(startM));
      const endMinutes = roundToNearest15('end', parseInt(endM));

      const startTime = new Date(2000, 0, 1, parseInt(startH), startMinutes);
      const endTime = new Date(2000, 0, 1, parseInt(endH), endMinutes);

      const diff = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
      onChange(date, diff > 0 ? diff : 0);
    }
  }, [startH, startM, endH, endM, onChange, date]);

  return (
      <>
        <div className="w-40">
          <input
              type="date"
              value={date}
              className="w-full p-2 border rounded"
              disabled
          />
        </div>

        <div className="flex items-center gap-2">
          <input
              type="number"
              min="0"
              max="23"
              value={startH}
              onChange={(e) => setStartH(e.target.value)}
              className="w-20 p-2 border rounded"
              placeholder="HH"
          />
          <span>:</span>
          <input
              type="number"
              min="0"
              max="59"
              value={startM}
              onChange={(e) => setStartM(e.target.value)}
              className="w-20 p-2 border rounded"
              placeholder="MM"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
              type="number"
              min="0"
              max="23"
              value={endH}
              onChange={(e) => setEndH(e.target.value)}
              className="w-20 p-2 border rounded"
              placeholder="HH"
          />
          <span>:</span>
          <input
              type="number"
              min="0"
              max="59"
              value={endM}
              onChange={(e) => setEndM(e.target.value)}
              className="w-20 p-2 border rounded"
              placeholder="MM"
          />
        </div>
      </>
  );
}