/* eslint-disable prettier/prettier */
export interface LocalizedString {
  paste: string;
  noDataTips: string;
  backButtonString: string;
  item: string;
  home: string;
  privacy: string;
  privacyPolicy: string;
}

const ZhCN: LocalizedString = {
  paste: "粘贴",
  noDataTips: "剪贴板中没有数据",
  backButtonString: "返回",
  item: "项目",
  home: "主页",
  privacy: "关于隐私",
  privacyPolicy: "本程序不会收集任何个人信息,不会发出任何网络请求。",
};

const EnUs: LocalizedString = {
  paste: "Paste",
  noDataTips: "No data in clipboard",
  backButtonString: "Back",
  item: "Item",
  home: "Home",
  privacy: "Privacy",
  privacyPolicy: "This app will not collect any personal information, and will not send any network requests.",
};

export class LocalizedStringManager {
  // eslint-disable-next-line no-use-before-define -- declare a singleton
  private static instance: LocalizedStringManager;

  readonly currentLocalizedStrings: LocalizedString;

  public static getInstance() {
    if (!LocalizedStringManager.instance) {
      LocalizedStringManager.instance = new LocalizedStringManager();
    }

    return LocalizedStringManager.instance;
  }

  // declare a private constructor with readonly property
  private constructor() {
    // set currentLocalizedStrings based on the navigator.language
    if (navigator.language === "zh-CN") {
      this.currentLocalizedStrings = ZhCN;
    } else {
      this.currentLocalizedStrings = EnUs;
    }
  }
}
