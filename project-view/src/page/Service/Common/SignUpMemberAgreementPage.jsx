import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useForm } from 'react-hook-form';

import SignUpMainTitle from '../../../components/Service/signup/mainTitle/SignUpMainTitle';
import AgreementBox from '../../../components/Service/signup/AgreementBox';
import UserInfoInputLastBtnBox from '../../../components/Service/signup/UserInfoInputLastBtnBox';

import titleImg from '../../../view_img/Service/common/signUpMember.jpg';
import uncheckedImg from '../../../view_img/Service/common/emptyCheckBox.svg';
import checkedImg from '../../../view_img/Service/common/fullCheckBox.svg';

const defaultContents = {
  titles: {
    imgSrc: titleImg,
    text: '개인정보 제공 및 약관 동의 - 빛길 트레커',
  },
  agreement: {
    text: '위 내용에 동의합니다.',
    images: [uncheckedImg, checkedImg],
    inputName: 'agreement',
  },
  buttons: [
    {
      colorType: 'black',
      inputType: 'button',
      btnText: '가입하기',
      disabled: true,
      handleClick(e, formRef) {},
    },
    {
      colorType: 'gray',
      inputType: 'reset',
      btnText: '취소',
      disabled: false,
      handleClick(e) {},
    },
  ],
};

const testContents = [
  {
    title: '어쩌구에 대한 동의1',
    inputId: 'agreement_1',
    content: `어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구
		
		어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구
		
		어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구`,
  },
  {
    title: '어쩌구에 대한 동의2',
    inputId: 'agreement_2',
    content: `어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구 어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구
		어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구
		
		어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구
		
		어쩌구저쩌구저쩌구어쩌구 엄청 길게 어쩌구`,
  },
];

export default function SignUpMemberAgreementPage() {
  const [dbContents, updateDbContents] = useImmer([]);
  const { register, watch, handleSubmit } = useForm();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    updateDbContents(testContents);
  }, []);
  useEffect(() => {
    if (document?.forms?.agreement?.agreement) {
      const isDisabled = Object.values(watch()).some(Boolean);
      setDisabled(isDisabled);
    }
  }, [watch]);

  const { titles, agreement, buttons } = defaultContents;

  return (
    <main className="appMain">
      <SignUpMainTitle imgSrc={titles.imgSrc} title={titles.text} />
      <form
        onSubmit={handleSubmit((data) => {
          alert(data);
        })}
        name="agreement"
      >
        {dbContents?.length > 0 &&
          dbContents.map((item, index) => (
            <AgreementBox
              title={item.title}
              agreeContent={item.content}
              agreeText={agreement.text}
              images={agreement.images}
              inputName={agreement.inputName}
              inputId={item.inputId}
              register={register}
              watch={watch}
              index={index}
            />
          ))}
        <div style={{ marginTop: '-1rem', marginBottom: '3rem' }}>
          <UserInfoInputLastBtnBox
            inputTexts={[
              {
                ...buttons[0],
                disabled: disabled, // disabled가 아직 안먹힘
              },
              buttons[1],
            ]}
          />
        </div>
      </form>
    </main>
  );
}
