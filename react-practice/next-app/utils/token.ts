// helper fn to get token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

// helper fn to set token in localStorage
export const setToken = (accessToken: string): void => {
  localStorage.setItem("accessToken", accessToken);
};
