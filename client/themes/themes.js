import mainTheme from "./main_theme.js";

export function applyTheme(tenantId) {
  let orgTheme = mainTheme.find(theme => {
    return theme.name === tenantId;
  });
  if (orgTheme) return { colors: orgTheme.theme, name: tenantId + "Theme" }
  return { colors: mainTheme[0].theme, name: "idxTheme" }
}
