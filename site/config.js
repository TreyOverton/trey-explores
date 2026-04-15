/**
 * TabulaKit Site Configuration
 *
 * Edit these values to customize your documentation site.
 * The /startup wizard will configure these for you automatically.
 */
window.TABULAKIT_CONFIG = {
  // Site identity
  name: "Trey Explores",
  description: "Documenting the random knowledge exploration over time, tracking what Trey thinks about",
  logo: "",  // Path to logo image (optional, shown in sidebar)

  // Theme colors (CSS custom property overrides)
  theme: {
    color: "#f97316",           // Primary accent color (headings)
    tealColor: "#fbbf24",       // Secondary accent (links, nav highlights)
    sidebarWidth: "280px",
    baseFontSize: "20px"
  },

  // Docsify options (merged into window.$docsify)
  docsify: {
    subMaxLevel: 3,
    search: true
  }
};
