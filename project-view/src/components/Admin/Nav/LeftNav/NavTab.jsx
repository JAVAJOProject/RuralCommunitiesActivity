import React from 'react';
import NavTitle from './NavTitle';
import NavContent from './NavContent';
import NavTitleInner from './NavTitleInner';
import './NavTab.css';

export default function NavTab({ titleInfo, className }) {
  const { title, titleImg, contents } = titleInfo;

  return (
    <div className="navTab">
      <NavTitle className={className} imgSrc={titleImg} navTitle={title} />
      {contents.map((content) =>
        content.type ? (
          <NavTitleInner navContent={content} />
        ) : (
          <NavContent className="adminNavContentInner" navContent={content} />
        )
      )}
    </div>
  );
}
