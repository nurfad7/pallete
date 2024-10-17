export interface Member {
  name: MemberName;
  picture: MemberPicture;
}

interface MemberPicture {
  large: string;
}

interface MemberName {
  first: string;
  last: string;
}

export interface MemberDetail {
  title: string;
  desc: string;
}