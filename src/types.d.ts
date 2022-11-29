type ErrorRegister = {
  email: string;
  password: string;
};

type DecodedCredentials = {
  id: string;
  email: string;
};

type TUser = {
  id: string;
  email: "string";
  bio?: "string";
  firstname?: "string";
  lastname?: "string";
  fullname?: "string";
  phoneNumber?: "string";
  avatar?: "string";
  avaterUrl?: "string";
  createdAt: Date | "string";
  updatedAt: Date | "string";
};
