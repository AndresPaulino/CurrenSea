import React from 'react';

function MainBody() {
  return (
    <main className='main'>
      <div className='main__container bg-gray-700 w-full h-[35rem] flex'>
        <div className='main__content bg-gray-700 w-full h-full flex flex-col items-center justify-center mt-16'>
          <h1 className='text-4xl text-white font-bold'>
            Hey, welcome to
            <span className='text-teal-500 font-whisper text-5xl'> currentSea</span>
          </h1>
          <p className='text-xl text-white pt-4 pb-16'>A real-time currency converter</p>
          <div className='main__buttons'>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainBody;
