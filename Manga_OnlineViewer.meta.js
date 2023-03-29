// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, ComiCastle, Dynasty-Scans, Asura Scans, Flame Scans, Realm Scans, Voids-Scans, Luminous Scans, INKR, InManga, KLManga, Leitor, LHTranslation, LynxScans, MangaBuddy, MangaDex, MangaFox, MangaHere, MangaFreak, mangahosted, MangaHub, MangaKakalot, MangaNelo, MangaNato, Mangareader, MangaSee, Manga4life, MangaTigre, MangaToons, MangaTown, ManhuaScan, MReader, MangaGeko, NaniScans, NineManga, OlympusScans, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, Funmanga, MangaDoom, MangaInn, ReaperScans, Reset-Scans, SenManga(Raw), ShimadaScans, KLManga, TenManga, TuMangaOnline, UnionMangas, WebNovel, WebToons, Manga33, YugenMangas, ZeroScans, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, LeviatanScans, NovelMic
// @version 2023.03.29
// @license MIT
// @grant unsafeWindow
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @noframes on
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require https://cdn.jsdelivr.net/npm/hotkeys-js@3.10.1/dist/hotkeys.min.js
// @include /https?:\/\/beta.asurascans.com\/read\/.+\/.+/
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @include /https?:\/\/(www.)?(bilibilicomics).com\/.+\/.+/
// @include /https?:\/\/(www.)?comicastle.org\/read\/.+\/\d+.*/
// @include /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include /https?:\/\/(www.)?(asurascans|flamescans|realmscans|void-scans|luminousscans).(com|org|gg)\/.+/
// @include /https?:\/\/(comics.)?inkr.com\/title\/.+\/chapter\/.+/
// @include /https?:\/\/(www.)?inmanga.com\/ver\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?klmanga.com\/.+chapter.+/
// @include /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include /https?:\/\/(www.)?lynxscans.com\/comics?\/.+/
// @include /https?:\/\/(www.)?mangabuddy.com\/.+\/chapter.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/
// @include /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato|chapmanganato).com\/manga-\w\w\d+\/chapter-\d+)/
// @include /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include /https?:\/\/(www.)?mangatigre.net\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?mangatoon.mobi\/.+\/watch\/.+/
// @include /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?manhuascan.io\/.+chapter.+/
// @include /https?:\/\/(www.)?(mreader|mangageko).com?\/reader\/.*/
// @include /https?:\/\/(www.)?(naniscans).com\/chapters\/.+\/read/
// @include /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include /https?:\/\/(www.)?olympusscans.com\/capitulo\/.+\/.+/
// @include /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/
// @include /https?:\/\/(www.)?reaperscans.com\/comics\/.+\/chapters\/.+/
// @include /https?:\/\/(www.)?reset-scans.com\/manga\/.+\/chapter.+/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?shimadascans.com\/.+(series|chapter).+/
// @include /https?:\/\/(www.)?tapas.io\/episode\/.+/
// @include /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/
// @include /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/
// @include /https?:\/\/(www.)?webnovel.com\/comic\/.+/
// @include /https?:\/\/(www.)?webtoons.com\/.+viewer.+/
// @include /https?:\/\/(www.)?(manga33).com\/manga\/.+/
// @include /https?:\/\/(www.)?(yugenmangas).com\/series\/.+/
// @include /https?:\/\/(www.)?zeroscans.com\/comics\/.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/.+\/(manga|series|manhua|comic)\/.+\/.+/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.io\/.+/
// ==/UserScript==
