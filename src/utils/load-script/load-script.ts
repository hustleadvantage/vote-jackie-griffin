type ScriptOptions = {
  src: string;
  id: string;
  async?: boolean;
  defer?: boolean;
  callback?: any;
};

export const loadScript = (options: ScriptOptions) => {
  const { src, id, async = true, defer = true, callback } = options;

  const existingScript = document.getElementById(id);

  if (existingScript) return;

  const script = document.createElement('script');
  script.src = src;
  script.id = id;
  script.async = async;
  script.defer = defer;

  script.addEventListener('load', () => {
    if (callback) {
      callback();
    }
  });

  document.body.appendChild(script);
};
