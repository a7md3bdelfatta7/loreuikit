import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";

// To handle css files
import postcss from "rollup-plugin-postcss";

import terser from "@rollup/plugin-terser";

import peerDepsExternal from "rollup-plugin-peer-deps-external";

import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: false,
      //   inlineDynamicImports: true,
      // },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      scss(),
      postcss(),
      terser(),
      copy({
        targets: [{ src: "src/shared/styles", dest: "lib" }],
      }),
    ],
  },
  {
    input: "lib/dist/esm/types/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts.default()],

    external: [/\.css$/, /\.scss$/], // telling rollup anything that is .css aren't part of type exports
  },
];
