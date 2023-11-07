import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CommunityPickImages from '../../../../components/Service/community/community/pickImg/CommunityPickImages';
import CommunityListBar from '../../../../components/Service/community/community/listBar/CommunityListBar';
import CommunityPageBtn from '../../../../components/Service/community/community/buttons/CommunityPageBtn';
import CommunityWritingBtn from '../../../../components/Service/community/community/buttons/CommunityWritingBtn';

import noteImg from '../../../../view_img/Service/community/community/note.svg';
import pickYellow from '../../../../view_img/Service/community/community/communityYellow.png';
import pickGreen from '../../../../view_img/Service/community/community/communityGreen.png';

const defaultContents = {
  pickImages: {
    yellow: pickYellow,
    green: pickGreen,
  },
  writingBtn: {
    text: '글쓰기',
    imgSrc: noteImg,
  },
  pageBtn: {
    text: '더보기',
  },
};

const testContents = [
  {
    sId: 1,
    sellerCommunityPostId: 1,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 2,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 3,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 4,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 5,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 6,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 7,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 8,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 9,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 10,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 11,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
  {
    sId: 1,
    sellerCommunityPostId: 12,
    postTypeId: 6,
    sComName: '이거슨잘못된거시야',
    sellerCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
    sellerCommunityDateCreated: '2023-11-01',
    communityLikeCnt: 234234,
    communityViewCnt: 12345,
  },
];

export default function CommunitySellerTextListPage() {
  const [dbContents, updateDbContents] = useImmer([]);
  const [currentPos, setCurrentPos] = useState(0);
  const [totalPostNo, setTotalPostNo] = useState(0);

  useEffect(() => {
    if (currentPos > 0) {
      updateDbContents((draft) => {
        testContents.forEach((item) => {
          draft.push({
            ...item,
            sellerCommunityPostId: item.sellerCommunityPostId + 12,
          });
        });
      });
    } else {
      updateDbContents(testContents);
    }
    setTotalPostNo(60);
  }, [currentPos]);

  const { pickImages, writingBtn, pageBtn } = defaultContents;

  return (
    <div>
      <div
        style={{
          margin: 'auto',
          position: 'relative',
          zIndex: '550',
        }}
      >
        <CommunityWritingBtn
          imgSrc={writingBtn.imgSrc}
          text={writingBtn.text}
        />
      </div>
      <CommunityPickImages
        imgPickLeft={pickImages.yellow}
        imgPickRight={pickImages.green}
      />
      <CardListContentBox
        style={{
          width: '68.5rem',
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: '2.5rem',
          marginBottom: 0,
        }}
      >
        {dbContents.length > 0 &&
          dbContents.map((item) => (
            <CommunityListBar
              postId={item.sellerCommunityPostId}
              postTypeId={item.postTypeId}
              likesNum={item.communityLikeCnt}
              content={item.sellerCommunityContent}
              author={item.sComName}
              dateCreated={item.sellerCommunityDateCreated}
            />
          ))}
      </CardListContentBox>
      <div
        style={{
          paddingTop: dbContents.length < totalPostNo ? '2rem' : '3.5rem',
        }}
      >
        {dbContents.length > 0 && dbContents.length < totalPostNo && (
          <CommunityPageBtn
            text={pageBtn.text}
            handleClick={() => {
              setCurrentPos((prev) => prev + 12);
            }}
          />
        )}
      </div>
    </div>
  );
}
