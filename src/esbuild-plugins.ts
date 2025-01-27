import type { Plugin, PluginBuild } from 'esbuild';

const defineEnv: Plugin = {
  name: 'define-env',
  setup(build: PluginBuild) {
    const buildOptions = build.initialOptions;
    buildOptions.define = buildOptions.define || {};
    buildOptions.define['process.env.MY_VAR'] = JSON.stringify(
      process.env['MY_VAR']
    );
  },
};

export default defineEnv;
