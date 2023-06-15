export const getLanguage = (code: string, baseLang = "en") => {
  const lang = new Intl.DisplayNames([baseLang], { type: "language" });
  return lang.of(code);
};
