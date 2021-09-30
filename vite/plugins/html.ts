import type { Plugin } from 'vite';
import htmlPlugin from 'vite-plugin-html';

/**
 *
 * @param env
 * @param mini
 * @returns
 */
export default function createHtml(env, mini) {
  const { VITE_APP_TITLE } = env;
  const html: Plugin[] = htmlPlugin({
    inject: {
      injectData: {
        title: VITE_APP_TITLE
      }
    },
    minify: mini
  });
  return html;
}
