import React from 'react';
import Link from 'next/link';
import './Mail.scss';  

const MailLink = () => {
  return (
    <div className="header-mail">
      <img src="/icons/mail-icon.svg" alt="geo" width={17} height={14} />
      <p>
        <Link href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
      </p>
      <p className="header-signature">На связи в любое время</p>
    </div>
  );
};

export default MailLink;
