import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: true,
      include: ['src/**/*'],
      exclude: ['node_modules', 'dist']
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        formatters: resolve(__dirname, 'src/formatters.ts'),
        validators: resolve(__dirname, 'src/validators.ts')
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (format === 'es') {
          return `${entryName}.js`
        }
        return `${entryName}.cjs`
      }
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        banner: '// Built with Vite - Next Generation Frontend Tooling'
      }
    },
    sourcemap: true,
    target: 'es2022',
    minify: false
  }
})