// == Localhost
// =====================================================================================
import { placeholder, randomPlaceholder } from '../utils/svgs';

export default {
  name: 'Local Files',
  url: /(file:\/\/\/.+(index)?.html)/,
  homepage: '/index.html?raw=1',
  language: ['Raw'],
  category: 'manga',
  run() {
    const num: number = parseInt(/\d+/.exec(window.location.search)?.toString() ?? '5', 10);
    const comments = document.createElement('div');
    comments.innerHTML = Array(100).fill('Testing Comment<br/>').join('');
    return {
      title: 'Placeholder Manga Loaded',
      series: '?reload',
      pages: num,
      begin: 1,
      prev: '?pages=50',
      next: '?pages=1',
      listImages: [
        placeholder(1970, 1400, '#2D1657'),
        placeholder(985, 1400, '#152C55'),
        placeholder(985, 1400, '#7A1420'),
        placeholder(985, 1400, '#0F5B30'),
        placeholder(1970, 1400, '#806D15'),
        ...Array(num).fill(0).map(randomPlaceholder),
      ],
      comments,
    };
  },
};
