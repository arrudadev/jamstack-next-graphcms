const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

module.exports = {
  overwrite: true,
  schema: `${process.env.GRAPHCMS_SCHEMA_PATH}`,
  documents: './src/graphql/**/*.graphql',
  generates: {
    'src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: { withHooks: true },
    },
  },
  hooks: {
    afterAllFileWrite: 'yarn eslint --fix',
  },
};
