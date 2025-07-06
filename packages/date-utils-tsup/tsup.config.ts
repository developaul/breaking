import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    formatters: 'src/formatters.ts',
    validators: 'src/validators.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  minify: false,
  treeshake: true,
  outDir: 'dist',
  target: 'es2022',
  // External dependencies (none for this utility library)
  external: [],
  // Bundle analysis
  metafile: true,
  // Add banner to identify build tool
  banner: {
    js: '// Built with tsup - Zero-config TypeScript bundler'
  }
})