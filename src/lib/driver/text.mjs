/* This file is part of xVM.js
 * Copyright (C) 2024 Byte156
 * Licensed under the MIT license. See license in LICENSE */

// TODO: finish this error proof stuff
export function driver$text$write_char(char) {
  // Error proof stuff
  // Detect xVM existense on this session
  if (!(window.xVM)) {
    console.error('[Driver][text][write_char] No xVM found');
  }
  // Detect screen (canvas)
  if (!(window.xVM.memory)) {
    console.error('[Driver][text][write_char] No screen found');
    return;
  }
  if (!(window.xVM)) {}
  console.log(`[Driver][text][write_char] Detected screen ${window.xVM.dev.screen.id}`);
}
