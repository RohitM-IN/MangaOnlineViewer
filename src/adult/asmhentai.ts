// == ASMHentai ====================================================================================
export default {
  name: 'ASMHentai',
  url: /https?:\/\/(www.)?asmhentai.com\/gallery\/.+/,
  homepage: 'https://asmhentai.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const num = $('.pag_info:first option').get().length - 2;
    const src = $('.no_image')
      .attr('src')!
      .replace(/\d+\.jpg/, '');
    return {
      title: $('title')
        .text()
        .trim()
        .replace(/ Page.+/, ''),
      series: $('.rt').attr('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(null)
        .map((_, i) => `${src + (i + 1)}.jpg`),
    };
  },
};
