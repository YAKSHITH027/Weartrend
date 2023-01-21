export const autoImage = [
  {
    id: 1,
    image:
      "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_d_MEN_Coats.jpg?scl=1&fmt=webp&wid=1440",
  },

  {
    id: 3,
    image:
      "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_c_RTW_Coats.jpg?scl=1&fmt=webp&wid=1440",
  },
  {
    id: 4,
    image:
      "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_e_MEN_Denim.jpg?scl=1&fmt=webp&wid=1440",
  },
];

// login form
export const usernameValidate = {
  required: {
    value: true,
    message: "Please enter username",
  },
  minLength: {
    value: 6,
    message: "Username must be at least 6 characters long",
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: "Username must be alphanumeric",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "Please enter an email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Email address is not valid",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "Please enter password",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
};
