import React from 'react';
import NavContent from './NavContent';

export default function NavTitleInner({ navContent }) {
  const { title, link, contents, type } = navContent;
  const navTitleContents = {
    text: title,
    link: link,
  };

  return (
    <div>
      <NavContent
        navContent={navTitleContents}
        style={{ marginLeft: '2.5rem' }}
        type={type}
      />
      {(type === 'subtitle' || type === 'content') &&
        contents.map((content) => (
          <NavContent
            navContent={content}
            style={{ marginLeft: '5rem' }}
            type={content.type}
          />
        ))}
    </div>
  );
}
