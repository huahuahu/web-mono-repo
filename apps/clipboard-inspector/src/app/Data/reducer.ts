// An enum with all the types of actions to use in our reducer
export enum PasetActionKind {
  Reset = "Reset",
  Error = "Error",
  Data = "Data",
}

// An interface for our actions
interface PasteAction {
  type: PasetActionKind;
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
    case PasetActionKind.Reset:
      return {
        error: undefined,
        data: undefined,
        shouldShowPasteButton: true,
      };
    case PasetActionKind.Data:
      return {
        error: undefined,
        data: payload as ClipboardItem[],
        shouldShowPasteButton: false,
      };
    case PasetActionKind.Error:
      return {
        error: payload as Error,
        data: undefined,
        shouldShowPasteButton: false,
      };
    default:
      return state;
  }
}
