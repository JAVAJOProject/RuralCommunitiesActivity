import './App.css';

import React, { lazy } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import UserInfo from './security/UserInfo';
import RootLayout from './components/Service/RootLayout';
import RootLayoutAdmin from './components/Admin/RootLayoutAdmin';
import NotFoundPage from './components/Service/page/errorPage/NotFoundPage';
import NotFoundAdmin from './components/Admin/page/errorPage/NotFoundAdmin';

import MainPageContents from './components/Service/page/mainPage/MainPageContents';
import MainPageAdmin from './components/Admin/page/mainPage/MainPageAdmin';
// const MainPageContents = lazy(() =>
//   import('./components/Service/page/mainPage/MainPageContents')
// );
// const MainPageAdmin = lazy(() =>
//   import('./components/Admin/page/mainPage/MainPageAdmin')
// );

// const RootLayoutFaq = lazy(() =>
//   import('./components/Service/page/customerCenterPage/faq/RootLayoutFaq')
// );
// const RootLayoutNotice = lazy(() =>
//   import('./components/Service/page/customerCenterPage/notice/RootLayoutNotice')
// );
// const RootLayoutProvider = lazy(() =>
//   import('./components/Service/page/myPage/Provider/RootLayoutProvider')
// );
// const RootLayoutExperiencer = lazy(() =>
//   import('./components/Service/page/myPage/Experiencer/RootLayoutExperiencer')
// );
// const RootLayoutTotalActivity = lazy(() =>
//   import(
//     './components/Service/page/totalActivityPage/Nav/RootLayoutTotalActivity'
//   )
// );
// const RootLayoutEventTitle = lazy(() =>
//   import('./components/Service/page/communityPage/event/RootLayoutEventTitle')
// );
// const RootLayoutEventNav = lazy(() =>
//   import('./components/Service/page/communityPage/event/RootLayoutEventNav')
// );
// const RootLayoutRecActKeyword = lazy(() =>
//   import('./components/Service/page/recActivityPage/RootLayoutRecActKeyword')
// );
import RootLayoutFaq from './components/Service/page/customerCenterPage/faq/RootLayoutFaq';
import RootLayoutNotice from './components/Service/page/customerCenterPage/notice/RootLayoutNotice';
import RootLayoutProvider from './components/Service/page/myPage/Provider/RootLayoutProvider';
import RootLayoutExperiencer from './components/Service/page/myPage/Experiencer/RootLayoutExperiencer';
import RootLayoutTotalActivity from './components/Service/page/totalActivityPage/Nav/RootLayoutTotalActivity';
import RootLayoutEventTitle from './components/Service/page/communityPage/event/RootLayoutEventTitle';
import RootLayoutEventNav from './components/Service/page/communityPage/event/RootLayoutEventNav';
import RootLayoutRecActKeyword from './components/Service/page/recActivityPage/RootLayoutRecActKeyword';

// const EventCardListPage = lazy(() =>
//   import('./components/Service/page/communityPage/event/EventCardListPage')
// );
// const EventTextListPage = lazy(() =>
//   import('./components/Service/page/communityPage/event/EventTextListPage')
// );
// const EventDetailPage = lazy(() =>
//   import('./components/Service/page/communityPage/event/EventDetailPage')
// );
// const ThemeActivityPage = lazy(() =>
//   import('./components/Service/page/totalActivityPage/Theme/ThemeActivityPage')
// );
// const EventRegistrationPage = lazy(() =>
//   import('./components/Service/page/communityPage/event/EventRegistrationPage')
// );
import EventCardListPage from './components/Service/page/communityPage/event/EventCardListPage';
import EventTextListPage from './components/Service/page/communityPage/event/EventTextListPage';
import EventDetailPage from './components/Service/page/communityPage/event/EventDetailPage';
import ThemeActivityPage from './components/Service/page/totalActivityPage/Theme/ThemeActivityPage';
import EventRegistrationPage from './components/Service/page/communityPage/event/EventRegistrationPage';

// const TotalActivityInfoListAdmin = lazy(() =>
//   import(
//     './components/Admin/page/board/TotalActivityInfoList/TotalActivityInfoListAdmin'
//   )
// );
// const NoticePage = lazy(() =>
//   import('./components/Service/page/customerCenterPage/faq/FaqPage')
// );
// const FaqPage = lazy(() =>
//   import('./components/Service/page/customerCenterPage/faq/FaqPage')
// );
// const NoticeDetailPage = lazy(() =>
//   import('./components/Service/page/customerCenterPage/notice/NoticeDetailPage')
// );
// const MypageSellerPostPage = lazy(() =>
//   import('./components/Service/page/myPage/Provider/temp/MypageSellerPostPage')
// );
// const MypageMemberPostPage = lazy(() =>
//   import(
//     './components/Service/page/myPage/Experiencer/temp/MypageMemberPostPage'
//   )
// );
// const MypageSellerServicePage = lazy(() =>
//   import(
//     './components/Service/page/myPage/Provider/temp/MypageSellerServicePage'
//   )
// );
// const MypageSellerEventPage = lazy(() =>
//   import('./components/Service/page/myPage/Provider/temp/MypageSellerEventPage')
// );
// const MypageMemberReviewPage = lazy(() =>
//   import(
//     './components/Service/page/myPage/Experiencer/temp/MypageMemberReviewPage'
//   )
// );
// const MypageMemberReviewEditPage = lazy(() =>
//   import(
//     './components/Service/page/myPage/Experiencer/temp/MypageMemberReviewEditPage'
//   )
// );
// const RuralRatingPage = lazy(() =>
//   import('./components/Service/page/totalActivityPage/Rating/RuralRatingPage')
// );
// const TotalActReviewPage = lazy(() =>
//   import(
//     './components/Service/page/totalActivityPage/review/TotalActReviewPage'
//   )
// );
// const TotalActDetailPage = lazy(() =>
//   import(
//     './components/Service/page/totalActivityPage/Detail/TotalActDetailPage'
//   )
// );
import TotalActivityInfoListAdmin from './components/Admin/page/board/TotalActivityInfoList/TotalActivityInfoListAdmin';
import NoticePage from './components/Service/page/customerCenterPage/notice/NoticePage';
import FaqPage from './components/Service/page/customerCenterPage/faq/FaqPage';
import NoticeDetailPage from './components/Service/page/customerCenterPage/notice/NoticeDetailPage';
import MypageSellerPostPage from './components/Service/page/myPage/Provider/temp/MypageSellerPostPage';
import MypageMemberPostPage from './components/Service/page/myPage/Experiencer/temp/MypageMemberPostPage';
import MypageSellerServicePage from './components/Service/page/myPage/Provider/temp/MypageSellerServicePage';
import MypageSellerEventPage from './components/Service/page/myPage/Provider/temp/MypageSellerEventPage';
import MypageMemberReviewPage from './components/Service/page/myPage/Experiencer/temp/MypageMemberReviewPage';
import MypageMemberReviewEditPage from './components/Service/page/myPage/Experiencer/temp/MypageMemberReviewEditPage';
import RuralRatingPage from './components/Service/page/totalActivityPage/Rating/RuralRatingPage';
import TotalActReviewPage from './components/Service/page/totalActivityPage/review/TotalActReviewPage';
import TotalActDetailPage from './components/Service/page/totalActivityPage/Detail/TotalActDetailPage';

// const MemberReservationInfoPage = lazy(() =>
//   import(
//     './components/Service/page/myPage/Experiencer/MemberReservationInfoPage/MemberReservationInfoPage'
//   )
// );
// const RecActKeywordSelectedPage = lazy(() =>
//   import('./components/Service/page/recActivityPage/RecActKeywordSelectedPage')
// );
// const RecActDetailPage = lazy(() =>
//   import('./components/Service/page/recActivityPage/RecActDetailPage')
// );
// const ExPage = lazy(() => import('./components/Service/page/ExPage'));
// const LoadingPage = lazy(() =>
//   import('./components/Intro/loading/LoadingPage')
// );
// const = lazy(() => import())
import MemberReservationInfoPage from './components/Service/page/myPage/Experiencer/MemberReservationInfoPage/MemberReservationInfoPage';
import RecActKeywordSelectedPage from './components/Service/page/recActivityPage/RecActKeywordSelectedPage';
import RecActDetailPage from './components/Service/page/recActivityPage/RecActDetailPage';
import ExPage from './components/Service/page/ExPage';

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
            element: <MainPageContents />,
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
                    element: <Navigate replace to={'filter?order=최신순'} />,
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
              { path: 'region' },
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
