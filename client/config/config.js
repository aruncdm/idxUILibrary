import config from "./main_config.js";

export function applyConfig(tenantId) {
  let orgConfig = config.find(config => {
    return config.name === tenantId;
  });
  if (orgConfig) return { config: orgConfig.configs}
  return { config: config[0].configs }
}
