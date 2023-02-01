export const getNewUrl = (url: string) =>
  url?.split("/").splice(3, 4).join("/");
