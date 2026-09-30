# pi-me-jump-mode

Jump to visible prompt text using highlighted labels.

## Install

```sh
pi install git:github.com/vimhead/vipi-editor
pi install git:github.com/vimhead/pi-me-jump-mode
```

Run **`/reload`**. Enabled by default in [Vipi](https://github.com/vimhead/vipi).

## Use

1. Press **Esc**, then **s** to enter jump mode.
2. Type the text to find; matching is case-insensitive.
3. Press a highlighted label to jump, or **Enter** for the nearest match.

**Backspace** shortens the search. **Esc** cancels.

Disable in `/vipi` and sync, or run `pi remove git:github.com/vimhead/pi-me-jump-mode` and reload.
