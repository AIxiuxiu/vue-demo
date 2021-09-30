import svgIcon from 'vite-plugin-svg-icons';
import path from 'path';

/**
 * 生成 svg 雪碧图
 * @param compress 是否压缩
 */
export default function createSvgIcon(compress) {
  return svgIcon({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: compress
  });
}
