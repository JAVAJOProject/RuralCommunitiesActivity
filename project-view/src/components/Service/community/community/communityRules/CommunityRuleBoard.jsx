import React from 'react';
import './CommunityRuleBoard.css';

export default function CommunityRuleBoard({ imgSrc, title, rules }) {
  return (
    <div className="communityRuleBoard">
      <div>
        <img src={imgSrc} alt="" />
        <div>
          <h2>{title}</h2>
          <hr />
        </div>
      </div>
      <div>
        {rules.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
