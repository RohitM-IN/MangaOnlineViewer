// ==UserScript==
// @name Manga OnlineViewer Adult
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: ASMHentai, BestPornComix, DoujinMoeNM, 8Muses, ExHentai,e-Hentai, HBrowser, Hentai2Read, HentaiFox, HentaiHand, HentaIHere, HentaiMimi, hitomi, Imhentai, KingComix, MultPorn, MyHentaiGallery, nHentai.net,nHentai.xxx, nHentai.com, 9Hentai, PornComixOnline, Pururin, Simply-Hentai, TMOHentai, Tsumino, vermangasporno,vercomicsporno, xyzcomics
// @version 2022.05-22
// @license MIT
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js
// @include /https?:\/\/(www.)?asmhentai.com\/gallery\/.+/
// @include /https?:\/\/(www.)?bestporncomix.com\/gallery\/.+/
// @include /https?:\/\/(www.)?doujins.com\/.+/
// @include /https?:\/\/comics.8muses.com\/comics\/picture\/.+/
// @include /https?:\/\/(g.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include /https?:\/\/(www.)?hbrowse.com\/.+/
// @include /https?:\/\/(www.)?hentai2read.com\/[^/]+\/[0-9]+(.[0-9]+)?\//
// @include /https?:\/\/(www.)?hentaifox.com\/g\/.+/
// @include /https?:\/\/(www.)?hentaihand.com\/viewc\/[0-9]+\/[0-9]+/
// @include /https?:\/\/(www.)?hentaihere.com\/.+\/.+\//
// @include /https?:\/\/(www.)?hentaimimi.com\/view\/.+/
// @include /https?:\/\/hitomi.la\/reader\/.+/
// @include /https?:\/\/(www.)?imhentai.xxx\/view\/.+\/.+\//
// @include /https?:\/\/(www.)?kingcomix.com\/.+/
// @include /https?:\/\/(www.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include /https?:\/\/(www.)?myhentaigallery.com\/gallery\/show\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?nhentai.(net|xxx)\/g\/.+\/.+/
// @include /https?:\/\/(www.)?nhentai.com\/.+\/comic\/.+/
// @include /https?:\/\/(www.)?9hentai.(ru|to)\/g\/.+/
// @include /https?:\/\/(www.)?porncomixone.net\/comic\/.+/
// @include /https?:\/\/(www.)?pururin.(io|to)\/(view|read)\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?simply-hentai.com\/.+\/page\/.+/
// @include /https?:\/\/(www.)?tmohentai.com\/reader\/.+\/paginated\/[0-9]+/
// @include /https?:\/\/(www.)?tsumino.com\/Read\/Index\/[0-9]+(\?page=.+)?/
// @include /https?:\/\/(www.)?(vermangasporno|vercomicsporno).com\/.+/
// @include /https?:\/\/(www.)?xyzcomics.com\/.+/
// ==/UserScript==
