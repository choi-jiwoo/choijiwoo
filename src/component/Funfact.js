import React from 'react';

function Funfact() {
  return (
    <div className='pt-20'>
      <div className='section-heading'>Fun Facts</div>
      <div className='leading-7'>
        <p>
          -&nbsp;
          <a href='https://www.16personalities.com/' className='text-blue-500'>
            Personality test
          </a>
          &nbsp;result says I'm an&nbsp;
          <a
            href='https://www.16personalities.com/istj-personality'
            className='text-lg font-bold tracking-wider'
          >
            ISTJ
          </a>
          type of person.&nbsp;
        </p>
        <p>- I love going to a cafΓ© to work, study, read, clear up my mind</p>
        <p>- Using MacBook Pro, 2017 π»</p>
        <p>- Traveled places:</p>
      </div>
      <div className='flag flex flex-wrap gap-2 pl-3'>
        <p>
          <span>π΅π­</span> Philippines
        </p>
        <p>
          <span>π­π°</span> Hong Kong
        </p>
        <p>
          <span>π²π΄</span> Macau
        </p>
        <p>
          <span>πΈπ¬</span> Singapore
        </p>
        <p>
          <span>π²πΎ</span> Malaysia
        </p>
      </div>
    </div>
  );
}

export default Funfact;
