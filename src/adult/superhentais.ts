// == SuperHentais =================================================================================
export default {
  name: 'SuperHentais',
  url: /https?:\/\/(www.)?superhentais.com\/.+\/.+\/[0-9]+/,
  homepage: 'http://www.superhentais.com/',
  language: ['Portuguese'],
  category: 'hentai',
  run() {
    const url = $('.capLoad').attr('data-cdn');
    const num = $('.capListPage option').get().length;
    const chapter = $('.capList option:selected');
    return {
      title: $('.conteudoBox .boxBarraInfo:first').text().trim(),
      series: $('.capList option').eq(2).val(),
      pages: num,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listImages: Array(num)
        .fill(null)
        .map((_, i) => `${url}/${i + 1}.jpg`),
    };
  },
};
