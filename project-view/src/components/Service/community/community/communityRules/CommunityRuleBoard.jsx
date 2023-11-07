import React from 'react';
import './CommunityRuleBoard.css';

export default function CommunityRuleBoard({ imgSrc, title, rules, imgPick }) {
  return (
    <div className="communityRuleBoard">
      <img src={imgPick} alt="" />
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
