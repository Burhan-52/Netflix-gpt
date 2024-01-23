interface LanguageData {
  [key: string]: {
    search: string;
    searchPlaceHolder: string;
  };
}

const lang: LanguageData = {
  en: {
    search: "Search",
    searchPlaceHolder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    searchPlaceHolder: "आज आप क्या देखना चाहेंगे?",
  },
  turkish: {
    search: "Aramak",
    searchPlaceHolder: "Bugün ne izlemek istersin?",
  },
};

export default lang;
