export function activate(api) {
  api.registerTheme({
    id: "theme-catppuccin-mocha.theme",
    name: "catppuccin-mocha",
    colorscheme: "dark",
    vars: {
      "--color-surface-0": "#1e1e2e", // base
      "--color-surface-1": "#181825", // mantle
      "--color-surface-2": "#11111b", // crust
      "--color-surface-3": "#313244", // surface 0
      "--color-surface-4": "#11111b", // crust

      "--color-border": "#313244", // surface 0
      "--color-border-subtle": "#45475A", // surface 1

      "--color-text-primary": "#cdd6f4", // text
      "--color-text-secondary": "#bac2de", // subtext 1
      "--color-text-muted": "#a5adcb", // subtext 0

      "--color-accent": "#CBA6F7", // mauve
      "--color-accent-hover": "#313244", // surface 0
      "--color-slider-fill": "#CBA6F7", // mauve

      // Ratings
      "--color-rating": "#f9e2af", // yellow
      "--color-flag-pick": "#cdd6f4", // text
      "--color-flag-reject": "#f38ba8", // red

      "--color-label-red": "#f38ba8", // red
      "--color-label-yellow": "#f9e2af", // yellow
      "--color-label-green": "#a6e3a1", // green
      "--color-label-blue": "#89b4fa", // blue
      "--color-label-purple": "#cba6f7", // mauve
    },
  });
}
