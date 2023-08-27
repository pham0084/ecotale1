import React, { useState, useEffect } from 'react';

const quotes = [
  "Singapore generates approximately 800,000 tonnes of food waste every year, which is equal to 2 bowls of rice per person, every day.",
  "Singaporeans threw out about 7.7 million tonnes of waste in 2018, enough to fill about 15,000 Olympic-size swimming pools.",
  "If we continue sending waste to Singapore’s only landfill at Pulau Semakau at our current rate, we’ll run out of space by 2035",
  "820 million supermarket plastic bags are used in Singapore each year, which is equivalent to the land of 126 Gardens by the bays.  ",
  "473 million plastic disposable items are used in singapore each year, which is equivalent to the land mass of 3 sentosa islands",
];

const AutoTransitionQuote: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000); // Transition every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-24 bg-gray-100 p-4">
      <p className="text-center text-lg break-words">
        {quotes[currentQuoteIndex]}
      </p>
    </div>
  );
};

export default AutoTransitionQuote;
