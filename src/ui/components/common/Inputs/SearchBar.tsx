import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-6 py-4 font-normal text-lg outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        placeholder="Search"
      />

      <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            fill="#64748B"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
