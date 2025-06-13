// InputBox.jsx
import React ,{ useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId()
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 w-full shadow-md">
     
      <input
        id={amountInputId}
        type="number"
        value={amount}
        placeholder="Amount"
        disabled={amountDisable}
        className="text-xl font-semibold outline-none mb-2"
        onChange={(e) => onAmountChange  && onAmountChange(Number(e.target.value))}
      />
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{label}</span>
        <select
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="bg-gray-100 px-2 py-1 rounded-md text-sm outline-none"
        >
         
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
       
        </select>
      </div>
    </div>
  );
};

export default InputBox;
