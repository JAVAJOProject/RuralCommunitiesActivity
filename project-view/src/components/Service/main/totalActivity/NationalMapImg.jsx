import React from 'react';
import './NationalMapImg.css';

import koreaAddVer from '../../../../view_img/Service/mainPage/koreaAddVer.svg';

export default function NationalMapImg() {
  return (
    <div className="nationalMapImg">
      <img src={koreaAddVer} usemap="#image-map" />

      <map name="image-map">
        <area
          target="_self"
          alt="경기"
          title="경기"
          href="app/recommendation/region/filter?order=date&sido=8"
          coords="357,185,329,163,338,143,327,120,305,111,296,93,265,107,272,119,254,144,254,163,239,148,223,146,224,165,235,173,249,163,261,170,281,160,288,159,295,174,298,178,294,190,283,195,266,192,257,179,254,178,259,188,251,199,254,204,234,214,264,252,289,247,299,255,301,257,318,239,334,236,345,226"
          shape="poly"
        />
        <area
          target="_self"
          alt="서울"
          title="서울"
          href="app/recommendation/region/filter?order=date&sido=1"
          coords="281,163,286,163,292,178,294,180,291,188,283,191,268,188,260,176"
          shape="poly"
        />
        <area
          target="_self"
          alt="인천"
          title="인천"
          href="app/recommendation/region/filter?order=date&sido=4"
          coords="249,167,258,172,251,180,255,187,250,195,243,183,237,177"
          shape="poly"
        />
        <area
          target="_self"
          alt="강원"
          title="강원"
          href="app/recommendation/region/filter?order=date&sido=15"
          coords="299,93,308,108,330,118,342,141,333,160,361,183,349,224,403,233,432,247,500,241,420,63,406,86,360,91"
          shape="poly"
        />
        <area
          target="_self"
          alt="경북 울릉도"
          title="경북 울릉도"
          href="app/recommendation/region/filter?order=date&sido=13"
          coords="531,207,539,207,541,210,542,215,539,217,539,222,531,224,528,222,526,214,526,211"
          shape="poly"
        />
        <area
          target="_self"
          alt="경북 독도"
          title="경북 독도"
          href="app/recommendation/region/filter?order=date&sido=13"
          coords="538,232,547,233,552,227,552,224,549,223,544,228"
          shape="poly"
        />
        <area
          target="_self"
          alt="경북"
          title="경북"
          href="app/recommendation/region/filter?order=date&sido=13"
          coords="433,252,501,246,495,377,501,381,510,375,515,382,507,402,500,422,491,417,484,420,480,413,467,409,457,419,431,425,415,422,412,414,418,410,427,411,429,399,436,390,432,375,422,373,412,378,403,380,393,390,396,399,396,410,393,416,376,411,368,390,350,381,350,368,369,340,351,332,348,301,360,300,376,278,393,272,408,280"
          shape="poly"
        />
        <area
          target="_self"
          alt="대구"
          title="대구"
          href="app/recommendation/region/filter?order=date&sido=3"
          coords="423,376,429,377,432,389,425,397,424,407,416,406,409,411,398,414,400,410,399,396,397,389,404,383"
          shape="poly"
        />
        <area
          target="_self"
          alt="충북"
          title="충북"
          href="app/recommendation/region/filter?order=date&sido=9"
          coords="348,228,401,236,428,249,407,274,393,267,373,273,358,295,345,297,348,335,364,340,347,364,326,359,317,337,323,317,304,305,302,285,301,282,314,278,303,260,320,242,337,239"
          shape="poly"
        />
        <area
          target="_self"
          alt="대전"
          title="대전"
          href="app/recommendation/region/filter?order=date&sido=6"
          coords="302,309,319,319,312,337,298,340,293,328,297,316"
          shape="poly"
        />
        <area
          target="_self"
          alt="충남"
          title="충남"
          href="app/recommendation/region/filter?order=date&sido=10"
          coords="289,251,265,256,265,255,228,234,188,266,234,359,268,343,295,348,314,365,322,359,315,340,297,343,289,328,292,314,301,304,297,285,294,281,309,277,296,257"
          shape="poly"
        />
        <area
          target="_self"
          alt="전북"
          title="전북"
          href="app/recommendation/region/filter?order=date&sido=11"
          coords="314,370,324,362,346,368,347,379,323,393,315,419,320,437,313,447,299,440,278,443,262,425,254,432,241,418,218,438,209,431,227,413,209,403,230,387,236,363,268,347,293,351"
          shape="poly"
        />
        <area
          target="_self"
          alt="울산"
          title="울산"
          href="app/recommendation/region/filter?order=date&sido=7"
          coords="467,413,478,416,484,424,490,420,500,426,484,460,477,449,464,435,457,433,458,422"
          shape="poly"
        />
        <area
          target="_self"
          alt="부산"
          title="부산"
          href="app/recommendation/region/filter?order=date&sido=2"
          coords="475,453,481,463,458,491,434,487,440,477,442,471"
          shape="poly"
        />
        <area
          target="_self"
          alt="경남"
          title="경남"
          href="app/recommendation/region/filter?order=date&sido=14"
          coords="347,383,366,393,373,413,394,420,408,415,412,424,431,427,454,423,453,436,462,439,473,449,467,453,439,467,436,475,430,487,413,486,394,496,395,521,389,522,384,499,369,504,345,492,325,500,322,500,332,485,316,463,316,450,324,438,318,418,326,396"
          shape="poly"
        />
        <area
          target="_self"
          alt="제주"
          title="제주"
          href="app/recommendation/region/filter?order=date&sido=16"
          coords="198,619,245,615,257,634,252,648,225,658,190,658,178,650,174,634"
          shape="poly"
        />
        <area
          target="_self"
          alt="전남"
          title="전남"
          href="app/recommendation/region/filter?order=date&sido=12"
          coords="206,434,190,448,202,467,185,479,194,482,188,502,190,512,182,507,180,524,192,531,201,560,208,558,227,534,231,546,245,546,252,524,274,515,281,520,264,540,279,549,298,534,288,517,292,508,303,507,309,517,313,531,327,526,326,508,312,502,319,500,327,484,313,464,312,450,298,443,275,447,262,430,254,436,241,423,218,443"
          shape="poly"
        />
        <area
          target="_self"
          onClick={(e) => {
            e.stopPropagation();
          }}
          alt="광주"
          title="광주"
          href="app/recommendation/region/filter?order=date&sido=5"
          coords="224,456,230,451,247,451,256,459,253,468,233,470,223,463"
          shape="poly"
        />
      </map>
    </div>
  );
}
