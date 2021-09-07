import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <div className='lightgrey-foot-bg'>
        <span>Allraga</span>
        <span>Olahraga? Allraga aja!</span>
        <img src='./images/icons/phone.svg'/>
        <span>0812-3456-7890</span>
        <img src='./images/icons/mail.svg'/>
        <a href='mailto:hello@allraga.id'>hello@allraga.id</a>
      </div>
      <div className='darkgrey-foot-bg'>
        <span>Copyright © 2021 PT Allraga Olahraga Aja</span>
      </div>
    </div>
  );
};

export default Footer;