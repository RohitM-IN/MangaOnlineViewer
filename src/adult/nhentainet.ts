// == nHentai.net ==================================================================================
export default {
  name: ['nHentai.net', 'nHentai.xxx'],
  url: /https?:\/\/(www.)?nhentai.(net|xxx)\/g\/.+\/.+/,
  homepage: ['https://nhentai.net/', 'https://nhentai.xxx/'],
  language: ['English'],
  category: 'hentai',
  run() {
    function getExt(ext: string) {
      if (ext === 'g') return 'gif';
      if (ext === 'b') return 'bmp';
      if (ext === 'p') return 'png';
      return 'jpg';
    }

    const num = parseInt(document.querySelector('.num-pages')?.textContent || '', 10);
    const src = document
      .querySelector('#image-container img')
      ?.getAttribute('src')
      ?.replace(/\d+.\w\w\w$/, '');
    // eslint-disable-next-line camelcase
    const ext =
      (window as any).images_ext?.map(getExt) ||
      // eslint-disable-next-line no-underscore-dangle
      (window as any)._gallery?.images?.pages?.map((i: { t: string }) => getExt(i.t)) ||
      Array(num).fill('jpg');
    return {
      title: document.querySelector('title')?.textContent?.split('- Page')[0].trim(),
      series: document.querySelector('.go-back')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `${src}${i + 1}.${ext[i]}`),
    };
  },
};
