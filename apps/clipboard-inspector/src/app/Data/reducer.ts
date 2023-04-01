// An enum with all the types of actions to use in our reducer
export enum PasteActionKind {
  Reset = "Reset",
  Error = "Error",
  Data = "Data",
}

// An interface for our actions
interface PasteAction {
  type: PasteActionKind;
  payload: Error | ClipboardItem[] | undefined;
}

// An interface for our state
export interface PasteState {
  error: Error | undefined;
  data: ClipboardItem[] | undefined;
  shouldShowPasteButton: boolean;
}

export function createInitialState(): PasteState {
  return {
    error: undefined,
    data: undefined,
    shouldShowPasteButton: true,
  };
}

// Our reducer function that uses a switch statement to handle our actions
export function counterReducer(
  state: PasteState,
  action: PasteAction
): PasteState {
  const { type, payload } = action;
  switch (type) {
    case PasteActionKind.Reset:
      return {
        error: undefined,
        data: undefined,
        shouldShowPasteButton: true,
      };
    case PasteActionKind.Data:
      return {
        error: undefined,
        data: payload as ClipboardItem[],
        shouldShowPasteButton: false,
      };
    case PasteActionKind.Error:
      return {
        error: payload as Error,
        data: undefined,
        shouldShowPasteButton: false,
      };
    default:
      return state;
  }
}
