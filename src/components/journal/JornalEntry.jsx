import React from 'react';

const JornalEntry = () => {
  return (
    <div className='jornal__entry pointer'>
      <div
        className='jornal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className='jornal__entry-body'>
        <p className='jornal__entry-title'>Un nuevo día</p>
        <p className='jornal__entry-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis.
        </p>
      </div>

      <div className='jornal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JornalEntry;
