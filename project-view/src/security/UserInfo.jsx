import React, { createContext, useState } from 'react';
import { useImmer } from 'use-immer';

export const UserInfoContext = createContext({});
const initialInfo = {
  userRole: ['GUEST', 'MEMBER', 'SELLER', 'ADMIN', 'ADMIN'],
  // USER_ROLE: 'GUEST'
  // USER_ROLE: 'MEMBER'
  // USER_ROLE: 'SELLER'
  // USER_ROLE: 'ADMIN'
  uId: [null, 1, null, null, null],
  sId: [null, null, 1, null, null],
  isSuperAdmin: [false, false, false, false, true],
};

export default function UserInfo({ children }) {
  const [index, setIndex] = useState(0);
  const [userInfo, updateUserInfo] = useImmer({
    // ...initialInfo,
    userRole: initialInfo.userRole[index],
    uId: initialInfo.uId[index],
    sId: initialInfo.sId[index],
    isSuperAdmin: initialInfo.isSuperAdmin[index],
  });
  const tempChangeUser = () => {
    setIndex((prev) => (prev === 4 ? 0 : ++prev));
    updateUserInfo((draft) => ({
      ...draft,
      userRole: initialInfo.userRole[index],
      uId: initialInfo.uId[index],
      sId: initialInfo.sId[index],
      isSuperAdmin: initialInfo.isSuperAdmin[index],
    }));
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, tempChangeUser }}>
      {children}
    </UserInfoContext.Provider>
  );
}
