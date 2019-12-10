"use strict";

const { ConcatSource } = require("webpack-sources");

class ReturnPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("ReturnPlugin", compilation => {
      const { mainTemplate, chunkTemplate } = compilation;

      const onRenderWithEntry = (source, chunk, hash) => {
        return new ConcatSource("return ", source);
      };

      for (const template of [mainTemplate, chunkTemplate]) {
        template.hooks.renderWithEntry.tap("ReturnPlugin", onRenderWithEntry);
      }

      mainTemplate.hooks.hash.tap("ReturnPlugin", hash => {
        hash.update("return");
      });
    });
  }
}

module.exports = ReturnPlugin;
