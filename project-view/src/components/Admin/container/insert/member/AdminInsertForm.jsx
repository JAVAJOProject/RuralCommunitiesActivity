import React,{useState,useEffect,useRef} from 'react';
import { useImmer } from 'use-immer';
import { fetchDataPOSTAndObj } from '../../../../../config/ApiService';

import FormBox from '../../../common/box/formBox/FormBox';
import Buttonbtn from '../../../common/Button/Buttonbtn';
import PopupInsert from '../../../common/popup/PopupInsert';
import InputForm from '../../../common/Input/InputForm';



export default function AdminInsertForm() {
    const formRefForAdminInsert = useRef([]);
    const popupView = useRef(false);


    const [ adminInsertInfo, updateAdminInsertInfo] = useImmer({});
    const [ adminInsertDTO, setAdminInsertDTO] = useState({
        u_name: '',
        u_gender: 'M',
        u_nick: '',
        u_birth: '',
        u_pw: '',
        u_tel: '',
        u_email: '',
        u_marketing: 1,
    });

    const [ resultMsg, setResultMsg]= useState(false);
    const [ isCheck, setIsCheck] = useState(new Set());

    const inputsForMemberInsert = [
        {type: 'checkbox', key: 'u_genderF',name: 'u_gender', value: 'F', title: '여',style: { borderRadius: '0px  5px 5px 0px' }},
        {type: 'checkbox', key: 'u_genderM',name: 'u_gender', value: 'M', title: '남'},
        {type: 'text', key: 'u_name',name: 'u_name', value: '', title: '이름',style: { width: '10.2rem' }},
        {type: 'text', key: 'u_nick',name: 'u_nick', value: '', title: '닉네임'},
        {type: 'text', key: 'u_birth',name: 'u_birth', value: '', title: '생년월일'},
        {type: 'text', key: 'u_pw',name: 'u_pw', value: '', title: '비밀번호'},
        {type: 'text', key: 'u_tel',name: 'u_tel', value: '', title: '전화번호'},
        {type: 'text', key: 'u_email',name: 'u_email', value: '', title: '이메일'},
        {type: 'checkbox', key: 'u_marketingZero',name: 'u_marketing', value: 0, title: '미동의',style: { borderRadius: '0px  5px 5px 0px' }},
        {type: 'checkbox', key: 'u_marketingOne',name: 'u_marketing', value: 1, title: '동의'},
    ]

    
 //등록하기
 const FetchInsertData  = async () => {
    try {
        const insertData = await fetchDataPOSTAndObj(
            '/admin/membermanage/registrationMember', adminInsertDTO 
        );
        console.log('insert결과: ',insertData.errorMsg);
        if(insertData.errorMsg === null){
            setResultMsg(true);
        }else {
            setResultMsg(false);
        }
    }catch(error){
        console.error(error);

      }
};


    useEffect(() => {
        console.log(adminInsertDTO);
        FetchInsertData();
    },[adminInsertDTO]);


        const onSubmitForMemberInsert = (event) => {
            event.preventDefault();

            popupView.current = true;
            console.log('popup',popupView.current);


            const inputValues = formRefForAdminInsert.current.map((inputRef) => inputRef.value);
            console.log(inputValues);

           

            setAdminInsertDTO({
                u_name: inputValues[0],
                u_gender: isCheck.has('M') ? inputValues[1] : (isCheck.has('F') ? inputValues[2] : inputValues[1]),
                u_nick: inputValues[3],
                u_birth: inputValues[4],
                u_pw: inputValues[5],
                u_tel: inputValues[6],
                u_email: inputValues[7],
                u_marketing: isCheck.has('1') ? inputValues[8] : (isCheck.has('0') ? inputValues[9] : inputValues[8]),
            });
            
        };
const checkItem = ( value, ischecked) => {
    if(ischecked) {
        if(value === 'M' && isCheck.has('F') ) {     
            isCheck.add(value)
            setIsCheck(isCheck)
            isCheck.delete('F')
            setIsCheck(isCheck)
        }else if(value === 'F' && isCheck.has('M') ){    
            isCheck.add(value)
            setIsCheck(isCheck)
            isCheck.delete('M')
            setIsCheck(isCheck)       
        }else if(value === '1' && isCheck.has('0') ){    
            isCheck.add(value)
            setIsCheck(isCheck)
            isCheck.delete('0')
            setIsCheck(isCheck)       
        }else if(value === '0' && isCheck.has('1') ){    
            isCheck.add(value)
            setIsCheck(isCheck)
            isCheck.delete('1')
            setIsCheck(isCheck)       
        }else {
            isCheck.add(value)
            setIsCheck(isCheck)
        }
        
        console.log(isCheck)
    }else if(!ischecked) {
        isCheck.delete(value)
        setIsCheck(isCheck)
    }
}

        const backA = () => {
            window.history.back();
          };
        
    const rednderPopup = popupView.current ? <PopupInsert  name={adminInsertDTO.u_name} result={resultMsg} /> : null;
    return (
        <>
        <FormBox clipColor='green' formName='관리자 정보등록'>
            <form onSubmit={onSubmitForMemberInsert}>
            <InputForm inputFormData={inputsForMemberInsert} isInputRef={formRefForAdminInsert} change={checkItem} isCheckList={isCheck}/>

            <Buttonbtn type='reset' text='닫 기' style={{marginRight: '7.2rem'}} click={backA}/>
            <Buttonbtn type='submit' text='저 장' />
            </form>
            {rednderPopup}
        </FormBox>
        </>
    );
}

