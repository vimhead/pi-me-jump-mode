# vipir-jump-mode

Jump to visible prompt text using highlighted labels.

## Install

```sh
pi install git:github.com/vimhead/vipir-editor
pi install git:github.com/vimhead/vipir-jump-mode
```

Run **`/reload`**. Enabled by default in [Vipir](https://github.com/vimhead/vipir).

## Use

1. Press **Esc**, then **s** to enter jump mode.
2. Type the text to find; matching is case-insensitive.
3. Press a highlighted label to jump, or **Enter** for the nearest match.

**Backspace** shortens the search. **Esc** cancels.

Disable in `/vipir` and sync, or run `pi remove git:github.com/vimhead/vipir-jump-mode` and reload.
