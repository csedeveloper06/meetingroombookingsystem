
export type TUserName = {
    firstName: string;
    middleName? : string;
    lastName: string;
  };


export type TUser = {
    id: string;
    name: TUserName;
    email: string;
    password: string;
    needPasswordChange : boolean;
    phone: string;
    role: 'user' | 'admin'; 
    address: string;
    status: 'in-progress' | 'blocked';
    isDeleted: boolean;
}


  