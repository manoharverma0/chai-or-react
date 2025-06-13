// App.jsx
import React, { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'; // You can add custom styling here


function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
       <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
  >
    <source src="https://videos.pexels.com/video-files/32388701/13815636_640_360_25fps.mp4" type="video/mp4" />
  
  </video>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-[90%] max-w-md shadow-lg">
        <InputBox
          label='From'
          amount={amount}
          currencyOptions={options}
          onAmountChange={(amount) => {setAmount(amount) }}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}

        />

        <div className="flex justify-center my-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md"
          onClick={swap}
          >swap</button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          value={convert}
          onCurrencyChange={(currency) => { setTo(currency) }}
          amountDisable
        />

        <button onClick={convert}  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
