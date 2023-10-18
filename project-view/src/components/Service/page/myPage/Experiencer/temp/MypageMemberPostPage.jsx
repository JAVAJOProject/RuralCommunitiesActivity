import React from 'react';
import CardListContentBox from '../../../../common/UI/CardListContentBox';
import GreenCardBox from '../../UI/GreenCardBox';
import CardBoxTitleSet from '../../../../common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageMiniBoxSet from '../../UI/MypageMiniBoxSet';
import MypageMypost from '../../Provider/temp/post/MypageMypost';
import MypageMypostBtnBox from '../../Provider/temp/post/MypageMypostBtnBox';
import PageNoBox from '../../../../common/PageNo/PageNoBox';

import memberPostImg from '../../../../../../view_img/Service/myPage/provider/mypost.jpg';

const title = { text: '내가 쓴 글', imgSrc: memberPostImg };
const testContents = [
  {
    content: `디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑… 디자이너가 있었으면 좋겠다 흑흑…`,
    favoriteNum: 123456,
    viewingsNum: 234567,
  },
  {
    content: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아
난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    favoriteNum: 123456,
    viewingsNum: 234567,
  },
];

export default function MypageMemberPostPage() {
  const { text, imgSrc } = title;

  return (
    <>
      <CardListContentBox style={{ paddingBottom: '1rem' }}>
        <CardBoxTitleSet imgSrc={imgSrc} text={text} isDarken={true} />
        {testContents.map((item) => {
          const { content, favoriteNum, viewingsNum } = item; //TODO: 임시 url

          return (
            <GreenCardBox>
              <MypageMiniBoxSet
                favoriteNum={favoriteNum}
                viewingsNum={viewingsNum}
              />
              <MypageMypost text={content} />
              <MypageMypostBtnBox links={['', '', '']} />
            </GreenCardBox>
          );
        })}
        <PageNoBox curr={1} total={6} />
      </CardListContentBox>
    </>
  );
}