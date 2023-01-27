export const autoImage = [
  {
    id: 1,
    image:
      "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_d_MEN_Coats.jpg?scl=1&fmt=webp&wid=1440",
  },

  {
    id: 3,
    image:
      "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0119_0122_D_02_CAR_e_RTW_Denim.jpg?scl=1&fmt=webp&wid=1440",
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
export const nameValidate = {
  required: {
    value: true,
    message: "Please enter your Firstname",
  },
  minLength: {
    value: 4,
    message: "First name must be at least 4 character long",
  },
};
export const addressValidate = {
  required: {
    value: true,
    message: "Please enter your address",
  },
  minLength: {
    value: 6,
    message: "address must be at least 6 characters long",
  },
};
export const cityValidate = {
  required: {
    value: true,
    message: "Please enter your city",
  },
  minLength: {
    value: 2,
    message: "city must be at least 2 characters long",
  },
};
export const stateValidate = {
  required: {
    value: true,
    message: "Please enter your state",
  },
  minLength: {
    value: 2,
    message: "state must be at least 2 characters long",
  },
};
export const pinValidate = {
  required: {
    value: true,
    message: "Please enter your Pincode",
  },
  minLength: {
    value: 6,
    message: "pincode must be  6 digit numbers",
  },
  maxLength: {
    value: 6,
    message: "pincode must be  6 digit numbers",
  },
};
export const cardValidate = {
  required: {
    value: true,
    message: "Please enter your card Number",
  },
  minLength: {
    value: 16,
    message: "card number must be at least 16 digit number",
  },
  maxLength: {
    value: 16,
    message: "card number should be of 16 digit number",
  },
};
export const monthValidate = {
  required: {
    value: true,
    message: "Please enter expiry month",
  },
};
export const yearValidate = {
  required: {
    value: true,
    message: "Please enter expiry year",
  },
};
export const cvvValidate = {
  required: {
    value: true,
    message: "Please enter cvv",
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
