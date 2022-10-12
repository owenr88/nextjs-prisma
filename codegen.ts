import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['./src/graphql/schema.ts'],
  documents: ['./src/graphql/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/graphql/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    // "./src/graphql/queries": {
    //   preset: "near-operation-file",
    //   presetConfig: {
    //     extension: ".generated.ts",
    //     baseTypesPath: "../types.ts",
    //   },
    //   plugins: ["typescript-operations"],
    // },
    './src/graphql/generated/hooks.tsx': {
      plugins: ['typescript-react-apollo'],
      config: { withHooks: true },
      preset: 'import-types-preset',
      presetConfig: { typesPath: './types' },
    },
  },
  hooks: {
    afterOneFileWrite: 'yarn prettier --write',
  },
};

export default config;
