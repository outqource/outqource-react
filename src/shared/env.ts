export const getCRAEnvKey = (key: string) => `REACT_APP_${key}`;

export const getCRAEnvValues = <T = any>(keys: string[]): T | undefined => {
  if (typeof window === 'undefined') return;

  const processEnv = process.env;
  if (!processEnv) return;

  const env = {} as T;
  keys.forEach(key => {
    const craKey = getCRAEnvKey(key);
    if (processEnv[craKey]) env[key] = processEnv[craKey];
  });

  return env;
};
