export interface LocalizedString {
  paste: string;
  noDataTips: string;
  backButtonString: string;
  item: string;
}

const ZhCN: LocalizedString = {
  paste: "粘贴",
  noDataTips: "剪贴板中没有数据",
  backButtonString: "返回",
  item: "项目",
};

const EnUs: LocalizedString = {
  paste: "Paste",
  noDataTips: "No data in clipboard",
  backButtonString: "Back",
  item: "Item",
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
