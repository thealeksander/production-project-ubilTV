export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;

  // выглядит как костыль
  _inited: boolean;
}
