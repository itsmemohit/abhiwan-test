import React from 'react';

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://twistedvoxel.com/wp-content/uploads/2022/11/call-of-duty-warzone-2.0-1.jpg')", height: 400 }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Call of Duty WARZONE 2.0</h1>
              <h4 className='mb-3'>Drop in and play for free</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}