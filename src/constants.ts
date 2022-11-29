export const BASE_URL = "http://localhost:3000";
export const KEY_ACCESS_TOKEN = "access_token";

export const socialsConnect = [
  { name: "google", icon: "mdi:google", link: "https://google.com" },
  {
    name: "facebook",
    icon: "ri:facebook-box-fill",
    link: "https://google.com",
  },
  { name: "twitter", icon: "ph:twitter-logo-fill", link: "https://google.com" },
  { name: "github", icon: "ri:github-fill", link: "https://google.com" },
];

export const regexes = {
  email: `^[a-zA-Z0-9.!#$%&'*+\/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
    [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`,
  // TODO: use proper validation - ATM not in use
  password: `(.){4}`,
};
