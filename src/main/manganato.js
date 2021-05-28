// == MangaNato ====================================================================================
export default {
  name: 'MangaNato',
  url: /https?:\/\/(www.)?(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+/,
  homepage: 'http://www.manganato.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = $('#vungdoc img, .container-chapter-reader img').get();
    return {
      title: $('.info-top-chapter h2, .panel-chapter-info-top h1').text().trim(),
      series: $('span a[title]').eq(1).attr('href'),
      quant: images.length,
      prev: $('.navi-change-chapter-btn-prev:first, .next:first').attr('href'),
      next: $('.navi-change-chapter-btn-next:first, .back:first').attr('href'),
      listImages: images.map((i) => $(i).attr('src')),
    };
  },
};
