import React from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';

import UserInfo from './security/UserInfo';
import RootLayout from './components/Service/RootLayout';

// 메인 페이지
import MainPage from './page/Service/Main/MainPage';

// 에러 페이지
import NotFoundPage from './page/Error/NotFoundPage';

// 회원가입/약관
import SignUpMemberPage from './page/Service/Common/SignUpMemberPage';
import SignUpMemberAgreementPage from './page/Service/Common/SignUpMemberAgreementPage';
import SignUpSellerPage from './page/Service/Common/SignUpSellerPage';
import SignUpSellerAgreementPage from './page/Service/Common/SignUpSellerAgreementPage';

// 마이페이지 - 서비스 이용자
import RootLayoutExperiencer from './components/Service/mypage/Experiencer/RootLayoutExperiencer';
import MypageMemberPostPage from './page/Service/Mypage/Member/MypageMemberPostPage';
import MypageMemberReviewPage from './page/Service/Mypage/Member/MypageMemberReviewPage';
import MypageMemberReviewEditPage from './page/Service/Mypage/Member/MypageMemberReviewEditPage';
import MemberReservationInfoPage from './page/Service/Mypage/Member/MemberReservationInfoPage';
import MypageMemberEventPage from './page/Service/Mypage/Member/MypageMemberEventPage';
import MypageMemberFavoritesPage from './page/Service/Mypage/Member/MypageMemberFavoritesPage';
import MypageMemberUserInfoPage from './page/Service/Mypage/Member/MypageMemberUserInfoPage';
import MypageSellerAnalyticsPage from './page/Service/Mypage/Seller/MypageSellerAnalyticsPage';

// 마이페이지 - 서비스 제공자
import RootLayoutProvider from './components/Service/mypage/Provider/RootLayoutProvider';
import MypageSellerPostPage from './page/Service/Mypage/Seller/MypageSellerPostPage';
import MypageSellerServicePage from './page/Service/Mypage/Seller/MypageSellerServicePage';
import MypageSellerEventPage from './page/Service/Mypage/Seller/MypageSellerEventPage';
import MypageSellerUserInfoPage from './page/Service/Mypage/Seller/MypageSellerUserInfoPage';
import MypageSellerActivityManagementPage from './page/Service/Mypage/Seller/MypageSellerActivityManagementPage';
import MypageSellerEventParticipateManagementPage from './page/Service/Mypage/Seller/MypageSellerEventParticipateManagementPage';
import MypageSellerEventWinManagementPage from './page/Service/Mypage/Seller/MypageSellerEventWinManagementPage';
import MypageSellerEventApplyManagementPage from './page/Service/Mypage/Seller/MypageSellerEventApplyManagementPage';
import MypageSellerEventStoryManagementPage from './page/Service/Mypage/Seller/MypageSellerEventStoryManagementPage';
import MypageSellerActivityEditPage from './page/Service/Mypage/Seller/MypageSellerActivityEditPage';
import MypageSellerEventEditPage from './page/Service/Mypage/Seller/MypageSellerEventEditPage';
import MypageSellerEventStoryDetailPage from './page/Service/Mypage/Seller/MypageSellerEventStoryDetailPage';

// 추천 체험
import RootLayoutRecActKeyword from './components/Service/recActivity/RootLayoutRecActKeyword';
import RecActKeywordSelectedPage from './page/Service/Recommendation/RecActKeywordSelectedPage';
import RecActDetailPage from './page/Service/Recommendation/RecActDetailPage';
import RecActRegionPage from './page/Service/Recommendation/RecActRegionPage';
import RecTownRegionPage from './page/Service/Recommendation/RecTownRegionPage';
import RecTownDetailPage from './page/Service/Recommendation/RecTownDetailPage';
import RecTownReportPage from './page/Service/Recommendation/RecTownReportPage';

// 전체 체험
import RootLayoutTotalActivity from './components/Service/totalActivity/Nav/RootLayoutTotalActivity';
import RootLayoutTotalActTheme from './components/Service/totalActivity/RootLayoutTotalActTheme';
import ThemeActivityPage from './page/Service/TotalActivity/ThemeActivityPage';
import RegionActivityPage from './page/Service/TotalActivity/RegionActivityPage';
import CalendarActivityPage from './page/Service/TotalActivity/CalendarActivityPage';
import TotalActReviewPage from './page/Service/TotalActivity/TotalActReviewPage';
import TotalActDetailPage from './page/Service/TotalActivity/TotalActDetailPage';
import TotalActRegistrationPage from './page/Service/TotalActivity/TotalActRegistrationPage';
import TotalActReservationPage from './page/Service/TotalActivity/TotalActReservationPage';
import RuralRatingPage from './page/Service/TotalActivity/RuralRatingPage';
import AccommodationInfoPage from './page/Service/TotalActivity/AccommodationInfoPage';

// 커뮤니티
import RootLayoutEventTitle from './components/Service/community/event/RootLayoutEventTitle';
import RootLayoutEventNav from './components/Service/community/event/RootLayoutEventNav';
import EventCardListPage from './page/Service/Community/Event/EventCardListPage';
import EventTextListPage from './page/Service/Community/Event/EventTextListPage';
import EventDetailPage from './page/Service/Community/Event/EventDetailPage';
import EventRegistrationPage from './page/Service/Community/Event/EventRegistrationPage';
import EventApplyPage from './page/Service/Community/Event/EventApplyPage';
import EventApplyStoryEditPage from './page/Service/Community/Event/EventApplyStoryEditPage';
import RootLayoutMemberCommunity from './components/Service/community/memberCommunity/RootLayoutMemberCommunity';
import CommunityMemberCardListPage from './page/Service/Community/MemberCommunity/CommunityMemberCardListPage';
import CommunityMemberTextListPage from './page/Service/Community/MemberCommunity/CommunityMemberTextListPage';
import CommunityMemberDetailPage from './page/Service/Community/MemberCommunity/CommunityMemberDetailPage';
import CommunityMemberEditPage from './page/Service/Community/MemberCommunity/CommunityMemberEditPage';
import CommunityMemberRegistrationPage from './page/Service/Community/MemberCommunity/CommunityMemberRegistrationPage';
import RootLayoutSellerCommunity from './components/Service/community/sellerCommunity/RootLayoutSellerCommunity';
import CommunitySellerCardListPage from './page/Service/Community/SellerCommunity/CommunitySellerCardListPage';
import CommunitySellerTextListPage from './page/Service/Community/SellerCommunity/CommunitySellerTextListPage';
import CommunitySellerDetailPage from './page/Service/Community/SellerCommunity/CommunitySellerDetailPage';
import CommunitySellerRegistrationPage from './page/Service/Community/SellerCommunity/CommunitySellerRegistrationPage';
import CommunitySellerEditPage from './page/Service/Community/SellerCommunity/CommunitySellerEditPage';

// 고객센터
import RootLayoutNotice from './components/Service/customerCenter/notice/RootLayoutNotice';
import NoticePage from './page/Service/CustomerCenter/Notice/NoticePage';
import NoticeDetailPage from './page/Service/CustomerCenter/Notice/NoticeDetailPage';
import RootLayoutFaq from './components/Service/customerCenter/faq/RootLayoutFaq';
import FaqPage from './page/Service/CustomerCenter/FAQ/FaqPage';
import RootLayoutInquiryTitle from './components/Service/customerCenter/inquiry/RootLayoutInquiryTitle';
import InquiryListPage from './page/Service/CustomerCenter/Inquiry/InquiryListPage';
import InquiryDetailPage from './page/Service/CustomerCenter/Inquiry/InquiryDetailPage';
import InquiryPostPage from './page/Service/CustomerCenter/Inquiry/InquiryPostPage';
import InquiryEditPage from './page/Service/CustomerCenter/Inquiry/InquiryEditPage';

// 관리자 페이지
import RootLayoutAdmin from './components/Admin/RootLayoutAdmin';
import MainPageAdminPage from './page/Admin/mainPage/MainPageAdminPage';
import NotFoundAdminPage from './page/Admin/errorPage/NotFoundAdminPage';

// 관리자 - 회원관리
import MemberAdminPage from "./page/Admin/member/MemberAdminPage";
import MemberDetailAdminPage from "./page/Admin/member/detail/MemberDetailAdminPage";
import MemberInsertAdminPage from "./page/Admin/member/insert/MemberInsertAdminPage";
import MemberUpdateAdminPage from "./page/Admin/member/update/MemberUpdateAdminPage";
import MemberWrotePostAdminPage from './page/Admin/member/wrote/MemberWrotePostAdminPage';
import AdminPage from './page/Admin/member/AdminPage';
import SellerAdminPage from './page/Admin/member/SellerAdminPage';
import AdminDetailAdminPage from './page/Admin/member/detail/AdminDetailAdminPage';
import SellerDetailAdminPage from './page/Admin/member/detail/SellerDetailAdminPage';
import AdminInsertAdminPage from './page/Admin/member/insert/AdminInsertAdminPage';
import SellerInsertAdminPage from './page/Admin/member/insert/SellerInsertAdminPage';
import AdminUpdateAdminPage from './page/Admin/member/update/AdminUpdateAdminPage';
import SellerUpdateAdminPage from './page/Admin/member/update/SellerUpdateAdminPage';
import AdminWrotePostAdminPage from './page/Admin/member/wrote/AdminWrotePostAdminPage';
import SellerWrotePostAdminPage from './page/Admin/member/wrote/SellerWrotePostAdminPage'
import ApprovalAdminPage from './page/Admin/member/ApprovalAdminPage';

// 관리자 - 게시판 관리
import TotalActivityInfoListAdminPage from "./page/Admin/board/TotalActivityInfoList/TotalActivityInfoListAdminPage";
import ActivityDetailAdminPage from './page/Admin/board/detail/ActivityDetailAdminPage';
import ActivityInsertAdminPage from './page/Admin/board/insert/ActivityInsertAdminPage';
import ActivityUpdateAdminPage from './page/Admin/board/update/ActivityUpdateAdminPage';
import RecActivityInfoListAdminPage from './page/Admin/board/recActivity/RecActivityInfoListAdminPage';
import EventListAdminPage from './page/Admin/board/event/EventListAdminPage';
import EventRequestAdminPage from './page/Admin/board/eventRequest/EventRequestAdminPage';
import MemberCommunityAdminPage from './page/Admin/board/communityForMember/MemberCommunityAdminPage';
import SellerCommunityAdminPage from './page/Admin/board/communityForSeller/SellerCommunityAdminPage';
import NoticeListAdminPage from './page/Admin/board/notice/NoticeListAdminPage';

// 관리자 - 예약 통계/관리
import ReservationForMemberAdminPage from './page/Admin/board/reservation/ReservationForMemberAdminPage';
import ReservationForSellerAdminPage from './page/Admin/board/reservation/ReservationForSellerAdminPage';
import ReservationStatisticsAdminPage from './page/Admin/board/analytics/ReservationStatisticsAdminPage';
import AccessStatisticsAdminPage from './page/Admin/board/analytics/AccessStatisticsAdminPage';

// 관리자 - 서비스 관리(문의, 신고)
import ReportInfoAdminPage from './page/Admin/board/service/ReportInfoAdminPage';
import InquiryListAdminPage from './page/Admin/board/service/InquiryListAdminPage';
import InquiryDetailAdminPage from './page/Admin/board/detail/InquiryDetailAdminPage';
import InquiryUpdateAdminPage from './page/Admin/board/update/InquiryUpdateAdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Navigate replace to="/app/error" />,
    children: [
      { index: false, path: '/', element: <Navigate replace to="/app" /> },
      {
        path: 'admin', // 로그인 만들어서 url 매핑해야 함
        element: <RootLayoutAdmin />,
        errorElement: <NotFoundAdminPage />,
        children: [
          { index: true, path: '*', element: <NotFoundAdminPage /> },
          {
            path: '',
            element: <MainPageAdminPage />,
          },
            {
              path: 'user',
              children: [
                {
                  path: 'administrator',
                  children: [
                    {
                      path: 'list',
                      element: <AdminPage />
                    },
                    {
                      path: 'detail/:id',
                      element: <AdminDetailAdminPage />
                    },
                    {
                      path: 'update/:id',
                      element: <AdminUpdateAdminPage />
                    },
                    {
                      path: 'registration',
                      element: <AdminInsertAdminPage />
                    },
                    {
                      path: 'wrotePost/:id',
                      element: <AdminWrotePostAdminPage />
                    },
                  ],
                },
                {
                  path: 'experiencer',
                  children: [
                    {
                      path: 'list',
                      element: <MemberAdminPage />
                    },
                    {
                      path: 'detail/:id',
                      element: <MemberDetailAdminPage/>
                    },
                    {
                      path: 'update/:id',
                      element: <MemberUpdateAdminPage/>
                    },
                    {
                      path: 'registration',
                      element: <MemberInsertAdminPage />
                    },
                    {
                      path: 'wrotePost/:id',
                      element: <MemberWrotePostAdminPage />
                    },
                  ],
                },
                {
                  path: 'provider',
                  children: [
                    {
                      path: 'list',
                      element: <SellerAdminPage />
                    },
                    {
                      path: 'detail/:id',
                      element: <SellerDetailAdminPage />
                    },
                    {
                      path: 'update/:id',
                      element: <SellerUpdateAdminPage />
                    },
                    {
                      path: 'registration',
                      element: <SellerInsertAdminPage />
                    },
                    {
                      path: 'wrotePost/:id',
                      element: <SellerWrotePostAdminPage />
                    },
                  ],
                },
                {
                  path: 'membershipApproval',
                  element: <ApprovalAdminPage />
                },
              ],
            },
            {
              path: 'board',
              children: [
                {
                  path: 'notice',
                  element: <NoticeListAdminPage />
                  
                },
                {
                  path: 'recommendation',
                  element: <RecActivityInfoListAdminPage />
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
                      element: <TotalActivityInfoListAdminPage />
                    },
                    {
                      path: 'detail/:id',
                      element: <ActivityDetailAdminPage />
                    },
                    {
                      path: 'update/:id',
                      element: <ActivityUpdateAdminPage />
                    },
                    {
                      path: 'registration',
                      element: <ActivityInsertAdminPage />
                    },
                  ],
                },
                {
                  path: 'community',
                  children: [
                    {
                      path: 'experiencer',
                      element: <MemberCommunityAdminPage />
                    },
                    {
                      path: 'provider',
                      element: <SellerCommunityAdminPage />
                    },
                  ],
                },
                {
                  path: 'event',
                  children: [
                    {
                      path: 'list',
                      element: <EventListAdminPage />
                    },
                    {
                      path: 'request',
                      element: <EventRequestAdminPage />
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
                  element: <ReservationForMemberAdminPage />
                },
                {
                  path: 'provider',
                  element: <ReservationForSellerAdminPage />
                },
              ],
            },
            {
              path: 'analytics',
              children: [
                {
                  path: 'reservation',
                  element: <ReservationStatisticsAdminPage />
                },
                {
                  path: 'access',
                  element: <AccessStatisticsAdminPage />
                },
              ],
            },
            {
              path: 'service',
              children: [
                {
                  path: 'inquiry',
                  element: <InquiryListAdminPage />
                },
                {
                  path: 'inquiryDetail/:id',
                  element: <InquiryDetailAdminPage />
                },
                {
                  path: 'inquiryUpdate/:id',
                  element: <InquiryUpdateAdminPage />
                },
                {
                  path: 'report',
                  element: <ReportInfoAdminPage />
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
            path: 'agreement/member',
            element: <SignUpMemberAgreementPage />,
          },
          {
            path: 'agreement/seller',
            element: <SignUpSellerAgreementPage />,
          },
          {
            path: 'signUp/member',
            element: <SignUpMemberPage />,
          },
          {
            path: 'signUp/seller',
            element: <SignUpSellerPage />,
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
                path: 'region',
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'filter?order=date'} />,
                  },
                  {
                    path: 'filter',
                    element: <RecActRegionPage />,
                  },
                ],
              },
              {
                path: 'activity/detail/:recAPostId',
                element: <RecActDetailPage />,
              },
              {
                path: 'villageGuide',
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'region'} />,
                  },
                  {
                    path: 'region',
                    children: [
                      {
                        index: true,
                        path: '',
                        element: <Navigate replace to={'filter?order=date'} />,
                      },
                      {
                        path: 'filter',
                        element: <RecTownRegionPage />,
                      },
                    ],
                  },
                  {
                    path: 'detail/:recTId',
                    element: <RecTownDetailPage />,
                  },
                  {
                    path: 'report',
                    element: <RecTownReportPage />,
                  },
                ],
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
                element: <RootLayoutTotalActTheme />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'category'} />,
                  },
                  {
                    path: 'category',
                    element: <ThemeActivityPage />,
                  },
                  {
                    path: 'calendar',
                    element: <CalendarActivityPage />,
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
              {
                path: 'accommodation',
                element: <AccommodationInfoPage />,
              },
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
                  {
                    path: 'apply/:eventId',
                    element: <EventApplyPage />,
                  },
                  {
                    path: 'apply/edit/:eventReportId',
                    element: <EventApplyStoryEditPage />
                  }
                ],
              },
              {
                path: 'bulletinBoard',
                element: <RootLayoutMemberCommunity />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'board/card'} />,
                  },
                  {
                    path: 'board',
                    children: [
                      {
                        path: 'card',
                        element: <CommunityMemberCardListPage />,
                      },
                      {
                        path: 'list',
                        element: <CommunityMemberTextListPage />,
                      },
                    ],
                  },
                  {
                    path: 'detail/:uCommunityPostId',
                    element: <CommunityMemberDetailPage />,
                  },
                  {
                    path: 'registration',
                    element: <CommunityMemberRegistrationPage />,
                  },
                  {
                    path: 'edit/:uCommunityPostId',
                    element: <CommunityMemberEditPage />,
                  },
                ],
              },
              {
                path: 'news',
                element: <RootLayoutSellerCommunity />,
                children: [
                  {
                    index: true,
                    path: '',
                    element: <Navigate replace to={'board/card'} />,
                  },
                  {
                    path: 'board',
                    children: [
                      {
                        path: 'card',
                        element: <CommunitySellerCardListPage />,
                      },
                      {
                        path: 'list',
                        element: <CommunitySellerTextListPage />,
                      },
                    ],
                  },
                  {
                    path: 'detail/:sellerCommunityPostId',
                    element: <CommunitySellerDetailPage />,
                  },
                  {
                    path: 'registration',
                    element: <CommunitySellerRegistrationPage />,
                  },
                  {
                    path: 'edit/:sellerCommunityPostId',
                    element: <CommunitySellerEditPage />,
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
              {
                path: 'inquiry/edit/:inquiryId',
                element: <InquiryEditPage />,
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
                    element: <MypageMemberUserInfoPage />,
                  },
                  {
                    path: 'reservation',
                    element: <MemberReservationInfoPage />,
                  },
                  {
                    path: 'event',
                    element: <MypageMemberEventPage />,
                  },
                  {
                    path: 'favorites',
                    element: <MypageMemberFavoritesPage />,
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
                    element: <MypageSellerAnalyticsPage />,
                  },
                  {
                    path: 'businessInfo',
                    element: <MypageSellerUserInfoPage />,
                  },
                  {
                    path: 'myService',
                    element: <MypageSellerServicePage />,
                  },
                  {
                    path: 'myService/management/:aPostId',
                    element: <MypageSellerActivityManagementPage />,
                  },
                  {
                    path: 'event',
                    element: <MypageSellerEventPage />,
                  },
                  {
                    path: 'event/management/participate/:eventId',
                    element: <MypageSellerEventParticipateManagementPage />,
                  },
                  {
                    path: 'event/management/win/:eventId',
                    element: <MypageSellerEventWinManagementPage />,
                  },
                  {
                    path: 'event/management/apply/:eventId',
                    element: <MypageSellerEventApplyManagementPage />,
                  },
                  {
                    path: 'event/management/story',
                    children: [
                      {
                        index: true,
                        path: '',
                        element: <Navigate replace to={':eventId'} />,
                      },
                      {
                        path: ':eventId',
                        element: <MypageSellerEventStoryManagementPage />,
                      },
                      {
                        path: 'detail',
                        element: <MypageSellerEventStoryDetailPage />,
                      },
                    ],
                  },
                  {
                    path: 'post',
                    element: <MypageSellerPostPage />,
                  },
                ],
              },
              {
                path: 'provider/myService/edit/:aPostId',
                element: <MypageSellerActivityEditPage />,
              },
              {
                path: 'provider/event/edit/:eventId',
                element: <MypageSellerEventEditPage />,
              },
            ],
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
