import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import range from '../../../utils/range';

import SignUpMainTitle from '../../../components/Service/signup/mainTitle/SignUpMainTitle';
import AgreementBox from '../../../components/Service/signup/AgreementBox';
import AgreementBtnBox from '../../../components/Service/signup/AgreementBtnBox';
import AppYNModal from '../../../components/Service/common/Modal/AppYNModal';

import titleImg from '../../../view_img/Service/common/signUpMember.jpg';
import uncheckedImg from '../../../view_img/Service/common/emptyCheckBox.svg';
import checkedImg from '../../../view_img/Service/common/fullCheckBox.svg';

const modalYNContents = {
  titleText: '뒤로가기',
  contentText: '가입 진행을 취소하고 뒤로가시겠습니까?',
  yesText: '뒤로가기',
  noText: '가입 진행하기',
};

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
  buttons: {
    submit: {
      inputType: 'submit',
      btnText: '가입하기',
    },
    cancel: {
      inputType: 'reset',
      btnText: '뒤로가기',
    },
  },
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
  const [dbContents, updateDbContents] = useImmer({});
  const { register, watch, handleSubmit } = useForm();

  useEffect(() => {
    updateDbContents(testContents);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  defaultContents.buttons.submit.handleClick = () => {
    navigate('/app/signUp/member');
    window.scrollTo(0, 0);
  };
  defaultContents.buttons.cancel.handleClick = () => {
    if (modalOpen) {
      setModalOpen(false);
      navigate(-1);
    } else {
      setModalOpen(true);
    }
  };

  const { titles, agreement, buttons } = defaultContents;

  return (
    <main className="appMain">
      <SignUpMainTitle imgSrc={titles.imgSrc} title={titles.text} />
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        name="agreementForm"
      >
        {dbContents?.length > 0 &&
          dbContents.map((item, index) => {
            const { title, content, inputId } = item;
            const { text, images, inputName } = agreement;

            return (
              <AgreementBox
                title={title}
                agreeContent={content}
                agreeText={text}
                images={images}
                inputName={inputName}
                inputId={inputId}
                register={register(`${inputName}[${index}]`)}
                watchedValue={watch(`${inputName}[${index}]`)}
                index={index}
              />
            );
          })}
        <div style={{ marginTop: '-1rem', marginBottom: '3rem' }}>
          <AgreementBtnBox
            inputTextsSubmit={buttons.submit}
            isSubmitDisabled={
              !range(dbContents?.length, 0)
                .map((idx) => watch(`${agreement.inputName}[${idx}]`))
                .every((val) => val)
            }
            inputTextsCancel={buttons.cancel}
          />
        </div>
      </form>

      <AppYNModal
        texts={modalYNContents}
        isOpen={modalOpen}
        yesAction={buttons.cancel.handleClick}
        noAction={() => {
          setModalOpen(false);
        }}
      ></AppYNModal>
    </main>
  );
}
