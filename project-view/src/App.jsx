import './App.css';

import React from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import UserInfo from './security/UserInfo';
import RootLayout from './components/Service/RootLayout';
import RootLayoutAdmin from './components/Admin/RootLayoutAdmin';
import NotFoundPage from './page/Error/NotFoundPage';
import NotFoundAdmin from './components/Admin/page/errorPage/NotFoundAdmin';

import MainPage from './page/Service/Main/MainPage';
import MainPageAdmin from './components/Admin/page/mainPage/MainPageAdmin';

import RootLayoutFaq from './components/Service/customerCenter/faq/RootLayoutFaq';
import RootLayoutNotice from './components/Service/customerCenter/notice/RootLayoutNotice';
import RootLayoutProvider from './components/Service/mypage/Provider/RootLayoutProvider';
import RootLayoutExperiencer from './components/Service/mypage/Experiencer/RootLayoutExperiencer';
import RootLayoutTotalActivity from './components/Service/totalActivity/Nav/RootLayoutTotalActivity';
import RootLayoutEventTitle from './components/Service/community/event/RootLayoutEventTitle';
import RootLayoutEventNav from './components/Service/community/event/RootLayoutEventNav';
import RootLayoutRecActKeyword from './components/Service/recActivity/RootLayoutRecActKeyword';

import EventCardListPage from './page/Service/Community/Event/EventCardListPage';
import EventTextListPage from './page/Service/Community/Event/EventTextListPage';
import EventDetailPage from './page/Service/Community/Event/EventDetailPage';
import ThemeActivityPage from './page/Service/TotalActivity/ThemeActivityPage';
import EventRegistrationPage from './page/Service/Community/Event/EventRegistrationPage';

import TotalActivityInfoListAdmin from './components/Admin/page/board/TotalActivityInfoList/TotalActivityInfoListAdmin';
import NoticePage from './page/Service/CustomerCenter/Notice/NoticePage';
import FaqPage from './page/Service/CustomerCenter/FAQ/FaqPage';
import NoticeDetailPage from './page/Service/CustomerCenter/Notice/NoticeDetailPage';
import MypageSellerPostPage from './page/Service/Mypage/Seller/MypageSellerPostPage';
import MypageMemberPostPage from './page/Service/Mypage/Member/MypageMemberPostPage';
import MypageSellerServicePage from './page/Service/Mypage/Seller/MypageSellerServicePage';
import MypageSellerEventPage from './page/Service/Mypage/Seller/MypageSellerEventPage';
import MypageMemberReviewPage from './page/Service/Mypage/Member/MypageMemberReviewPage';
import MypageMemberReviewEditPage from './page/Service/Mypage/Member/MypageMemberReviewEditPage';
import RuralRatingPage from './page/Service/TotalActivity/RuralRatingPage';
import TotalActReviewPage from './page/Service/TotalActivity/TotalActReviewPage';
import TotalActDetailPage from './page/Service/TotalActivity/TotalActDetailPage';

import MemberReservationInfoPage from './page/Service/Mypage/Member/MemberReservationInfoPage';
import RecActKeywordSelectedPage from './page/Service/Recommendation/RecActKeywordSelectedPage';
import RecActDetailPage from './page/Service/Recommendation/RecActDetailPage';
import InquiryListPage from './page/Service/CustomerCenter/Inquiry/InquiryListPage';
import ExPage from './page/ExPage';
import InquiryDetailPage from './page/Service/CustomerCenter/Inquiry/InquiryDetailPage';
import RootLayoutInquiryTitle from './components/Service/customerCenter/inquiry/RootLayoutInquiryTitle';
import InquiryPostPage from './page/Service/CustomerCenter/Inquiry/InquiryPostPage';
import RegionActivityPage from './page/Service/TotalActivity/RegionActivityPage';
import TotalActRegistrationPage from './page/Service/TotalActivity/TotalActRegistrationPage';
import TotalActReservationPage from './page/Service/TotalActivity/TotalActReservationPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Navigate replace to="/app/error" />,
    children: [
      { index: false, path: '/', element: <Navigate replace to="/app" /> },
      {
        path: 'admin', // 로그인 만들어서 url 매핑해야 함
        element: <RootLayoutAdmin />,
        errorElement: <NotFoundAdmin />,
        children: [
          { index: true, path: '*', element: <NotFoundAdmin /> },
          {
            path: '',
            element: <MainPageAdmin />,
          },
          {
            path: 'user',
            children: [
              {
                path: 'administrator',
                children: [
                  {
                    path: 'list',
                  },
                  {
                    path: 'registration',
                  },
                ],
              },
              {
                path: 'experiencer',
                children: [
                  {
                    path: 'list',
                  },
                  {
                    path: 'registration',
                  },
                ],
              },
              {
                path: 'provider',
                children: [
                  {
                    path: 'list',
                  },
                  {
                    path: 'registration',
                  },
                ],
              },
              {
                path: 'membershipApproval',
              },
            ],
          },
          {
            path: 'board',
            children: [
              {
                path: 'notice',
              },
              {
                path: 'recommendation',
              },
              {
                path: 'totalActivity',
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'list'} />,
                  },
                  {
                    path: 'list',
                    element: <TotalActivityInfoListAdmin />,
                  },
                ],
              },
              {
                path: 'community',
                children: [
                  {
                    path: 'experiencer',
                  },
                  {
                    path: 'provider',
                  },
                ],
              },
              {
                path: 'event',
                children: [
                  {
                    path: 'list',
                  },
                  {
                    path: 'request',
                  },
                ],
              },
            ],
          },
          {
            path: 'reservation',
            children: [
              {
                path: 'experiencer',
              },
              {
                path: 'provider',
              },
            ],
          },
          {
            path: 'analytics',
            children: [
              {
                path: 'reservation',
              },
              {
                path: 'access',
              },
            ],
          },
          {
            path: 'service',
            children: [
              {
                path: 'inquiry',
              },
              {
                path: 'report',
              },
            ],
          },
        ],
      },
      {
        path: 'app', // 로그인 만들어서 url 매핑해야 함
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
          { index: true, path: '*', element: <NotFoundPage /> },
          {
            path: '',
            element: <MainPage />,
          },
          {
            path: 'recommendation',
            children: [
              {
                index: true,
                path: '',
                element: <Navigate replace to={'keywordActivity'} />,
              },
              {
                path: 'keywordActivity',
                element: <RootLayoutRecActKeyword />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'filter?order=date'} />,
                  },
                  {
                    path: 'filter',
                    element: <RecActKeywordSelectedPage />,
                  },
                ],
              },
              {
                path: 'detail/:recAPostId',
                element: <RecActDetailPage />,
              },
            ],
          },
          {
            path: 'activity',
            children: [
              {
                index: true,
                path: '',
                element: <Navigate replace to={'theme'} />,
              },
              {
                path: 'theme',
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'list'} />,
                  },
                  {
                    path: 'list',
                    element: <ThemeActivityPage />,
                  },
                ],
              },
              {
                path: 'region',
                element: <RegionActivityPage />,
              },
              {
                path: 'detail/:aPostId',
                element: <RootLayoutTotalActivity />,
                children: [
                  {
                    path: '',
                    element: <Navigate replace to={'info'} />,
                  },
                  {
                    path: 'info',
                    element: <TotalActDetailPage />,
                  },
                  {
                    path: 'review',
                    element: <TotalActReviewPage />,
                  },
                ],
              },
              {
                path: 'registration',
                element: <TotalActRegistrationPage />,
              },
              {
                path: 'reservation/:aPostId',
                element: <TotalActReservationPage />,
              },
              {
                path: 'grade',
                element: <RuralRatingPage />,
              },
              { path: 'accommodation' },
            ],
          },
          {
            path: 'community',
            children: [
              {
                index: true,
                path: '',
                element: <Navigate replace to={'event'} />,
              },
              {
                path: 'event',
                children: [
                  {
                    index: true,
                    element: <Navigate replace to={'board'} />,
                  },
                  {
                    path: 'board',
                    element: <RootLayoutEventTitle />,
                    children: [
                      {
                        index: true,
                        element: <Navigate replace to={'list/card'} />,
                      },
                      {
                        path: 'list',
                        element: <RootLayoutEventNav />,
                        children: [
                          {
                            index: true,
                            element: <Navigate replace to={'card'} />,
                          },
                          {
                            path: 'card',
                            element: <EventCardListPage />,
                          },
                          {
                            path: 'text',
                            element: <EventTextListPage />,
                          },
                        ],
                      },
                      {
                        path: 'detail/:eventId',
                        element: <EventDetailPage />,
                      },
                    ],
                  },
                  {
                    path: 'registration',
                    element: <EventRegistrationPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'customerService',
            children: [
              {
                index: true,
                path: '',
                element: <Navigate replace to={'notice'} />,
              },
              {
                path: 'notice',
                element: <RootLayoutNotice />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: (
                      <Navigate
                        replace
                        to={'completeList'}
                        state={{ selected: 0 }}
                      />
                    ),
                  },
                  {
                    path: 'completeList',
                    element: <NoticePage />,
                  },
                  {
                    path: 'notification',
                    element: <NoticePage />,
                  },
                  {
                    path: 'notification/detail/:noticeId',
                    element: <NoticeDetailPage />,
                  },
                  {
                    path: 'policy',
                    element: <NoticePage />,
                  },
                  {
                    path: 'policy/detail/:noticeId',
                    element: <NoticeDetailPage />,
                  },
                  {
                    path: 'event',
                    element: <NoticePage />,
                  },
                  {
                    path: 'event/detail/:noticeId',
                    element: <NoticeDetailPage />,
                  },
                ],
              },
              {
                path: 'faq',
                element: <RootLayoutFaq />,
                children: [
                  {
                    path: '',
                    element: (
                      <Navigate
                        replace
                        to={'personalInfo'}
                        state={{ selected: 0 }}
                      />
                    ),
                  },
                  {
                    path: 'personalInfo',
                    element: <FaqPage />,
                  },
                  {
                    path: 'reservation',
                    element: <FaqPage />,
                  },
                  {
                    path: 'event',
                    element: <FaqPage />,
                  },
                  {
                    path: 'extra',
                    element: <FaqPage />,
                  },
                ],
              },
              {
                path: 'inquiry',
                element: <RootLayoutInquiryTitle />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'list'} />,
                  },
                  {
                    path: 'list',
                    element: <InquiryListPage />,
                  },
                  {
                    path: 'detail/:inquiryId',
                    element: <InquiryDetailPage />,
                  },
                ],
              },
              {
                path: 'inquiry/post',
                element: <InquiryPostPage />,
              },
            ],
          },
          {
            path: 'myInfo',
            children: [
              {
                index: true,
                path: '',
                element: <Navigate replace to={''} />, //TODO: 액터에 따라 다르게 매핑
              },
              {
                path: 'experiencer',
                element: <RootLayoutExperiencer />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'personalInfo'} />,
                  },
                  {
                    path: 'personalInfo',
                  },
                  {
                    path: 'reservation',
                    element: <MemberReservationInfoPage />,
                  },
                  {
                    path: 'event',
                  },
                  {
                    path: 'favorites',
                  },
                  {
                    path: 'review',
                    element: <MypageMemberReviewPage />,
                  },
                  {
                    path: 'review/edit/:reviewId',
                    element: <MypageMemberReviewEditPage />,
                  },
                  {
                    path: 'post',
                    element: <MypageMemberPostPage />,
                  },
                ],
              },
              {
                path: 'provider',
                element: <RootLayoutProvider />,
                children: [
                  {
                    path: '',
                    element: <Navigate replace to={'analytics'} />,
                  },
                  {
                    path: 'analytics',
                  },
                  {
                    path: 'businessInfo',
                  },
                  {
                    path: 'myService',
                    element: <MypageSellerServicePage />,
                  },
                  {
                    path: 'event',
                    element: <MypageSellerEventPage />,
                  },
                  {
                    path: 'post',
                    element: <MypageSellerPostPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'test-ex',
            element: <ExPage />,
            // element: <LoadingPage />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <UserInfo>
      <RouterProvider router={router} />
    </UserInfo>
  );
}
