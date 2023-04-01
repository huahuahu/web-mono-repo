// Export an async function that returns an array of clipboard items

export async function getClipboardItems(): Promise<ClipboardItem[]> {
  // Get the clipboard data
  const items = await navigator.clipboard.read();
  // Return the clipboard items
  return items;
}
