function r(r,e){return r[e]=1,r}function FindProxyForURL(r,u){if(isPlainHostName(u))return i;var a=u,f=0;do{if(n.hasOwnProperty(a))return e;if(t.hasOwnProperty(a))return i;f=u.indexOf(".",f)+1,a=u.substring(f)}while(f>0);var o=dnsResolve(u);if(!o)return e;if(o.indexOf(":")>=0)return i;var l=o.split("."),d=(255&l[1])<<8|255&l[2],c=l[0],h=_[c],p=s[c];if(0===h)return e;if(16===p)return i;var v=0,w=h.length,L=w>>1;do h[L]>d?w=L:v=L,L=v+w>>1;while(w>v+1);return d-h[v]>>p[v]===0?i:e}var e="SOCKS5 127.0.0.1:1080",i="DIRECT",t="ip.sb|shimo.im|pkusc.org|acm.org|ieee.org|db-ip.com|ele.me|lan|cn|acfun.tv|local|zhi.hu|iapps.im|bdwm.net|themex.net|126.net|scholar.google.com|alipay.com|baidu.com|netease.com|phobos.apple.com|lcdn-registration.apple.com|appldnld.apple.com|adcdownload.apple.com|ls.apple.com|swcdn.apple.com|tmall.com|weibo.com|elemecdn.com|bilibili.com|youku.com|tiebaimg.com|alicdn.com|taobao.com|zhimg.com|taobaocdn.com|baidupcs.com|www.coursera.org|bdstatic.com|zhihu.com|acgvideo.com|ykimg.com|icloud-content.com|daocloud.io|163.com|speedtest.net|localhost".split("|").reduce(r,{}),n="me|youtu.be|coursera.org|hulu.com|akamaitechnologies.fr|z.cn|amazon.cn|t.co|g.co|name|im|io|in|wikinews.org|google.org|gwtproject.org|wikimedia.org|wiktionary.org|wikipedia.org|wikivoyage.org|golang.org|mediawiki.org|wikiversity.org|wordpress.org|webmproject.org|wikisource.org|wikimediafoundation.org|wikidata.org|wikibooks.org|chromium.org|polymer-project.org|wikiquote.org|fbcdn.net|akam.net|pixiv.net|akamaihd.net|sstatic.net|adzerk.net|akadns.net|akamaitech.net|srip.net|akamaiedge.net|cloudfront.net|akamaistream.net|tfbnw.net|azurewebsites.net|typekit.net|facebook.net|akamai.net|fastly.net|edgekey.net|googlezip.net|edgesuite.net|goo.gl|googlecode.com|googlesource.com|google.com|apple.com|thefacebook.com|googlehosted.com|twitter.com|googlelabs.com|gstatic.com|youtube.com|appspot.com|yimg.com|akamaitechnologies.com|zybang.com|twitpic.com|twimg.com|gmail.com|googleadservices.com|gmodules.com|withgoogle.com|chrome.com|androidify.com|googleapis.com|youtube-nocookie.com|googlevideo.com|wordpress.com|dropboxforum.com|blogger.com|blogspot.com|android.com|flickr.com|githubusercontent.com|googlesyndication.com|staticflickr.com|mzstatic.com|tweetdeck.com|tinypic.com|yahoo.com|googlemail.com|facebook.com|icloud.com|wp.com|dropbox.com|amazonaws.com|cdn-apple.com|googledrive.com|panoramio.com|ggpht.com|stackoverflow.com|googleusercontent.com|github.com|dropboxstatic.com|dropboxusercontent.com|dmm.com|itunes.com|ytimg.com|gravatar.com|keyhole.com|google-analytics.com|feedburner.com|pushbullet.com".split("|").reduce(r,{}),_=[[0],[1,3,8,32,256,258,290,306,314,318,512,514,516,580,612,628,636,768,1025,1089,1121,1137,1145,1149,1151,2048,2560,2568,2571,2635,2667,2683,2687,3072,6144,11520,12288,14336,17408,20480,29696,46080,47104,48128,50176,51712,52736],0,0,0,0,0,0,0,0,[0],0,0,0,[0,12,256,280,352,364,4096,26240,26268,26368,30464,32512,33280,34304,36864,49212,49228,50176,52224,53248],0,0,0,0,0,0,0,0,0,0,0,0,[2048,6144,8936,9216,11264,12840,12928,13896,13976,14016,25296,25328,25472,26368,27264,27340,27936,28028,28672,28752,28784,29056,29440,29740,31048,31096,32768,33756,36864,37888,39936,47104,55296,57344],0,0,0,0,0,0,0,0,[0,8,264,392,456,488,504,1024,4096,8192,9216,9472,9508,9511,9527,9535,10240,12288,13056,14336,24576,63488,65024],0,0,[0,2,130,194,226,242,250,254,16384,24576,26624,27648,32768],[18432,32128,32320],0,[0,8,24,32,128,256,288,304,312,384,1024,12288,14336,15872,16000,16032,16052,16060,16128,20480,21312,21328,21336,23384,24408,24536,24568,24640,24672,24684,24940,25068,25084,25344,25408,25440,25456,25464,25600,30720,31232,31488,31524,31652,31716,31732,31740,32768,39936,39972,44068,46116,47140,47652,47908,47972,47988,48000,49152,51456,51712,59904,60928,61440,61952,64000,65024],[57356,57368,57388,57396,57408,57416,57424,57444,57484,57504,57520,57528,57544,57560,57568,57584,57676,57684,57720,57740,57772,57780,57808,57816,57852,57888,57952,57968,57976,57984,58048,58064,58092,58140,58204,58248,58256,58264,58300,58332,58344,58360,58424,58444,58468,58484,58500,58516,58548,58556,58572,58608,58640,58664,58672,58680,58720,58732,58744,58760,58768,58792,58840,58856,58900,58912,58948,58964,59004,59016,59048,59100,59132,59168,59216,59272,59304,60416,60928,61184,61216,61232,61300,61356,61440,61488,61496,61508,61516,61524,61564,61596,61660,61676,61708,61716,61744,61772,61788,61808,61864,61880,61892,61904,61936,61944,61960,61976,61996,62012,62024,62040,62048,62096,62112,62120,62132,62140,62148,62156,62168,62204,62212,62232,62296,62336,62344,62352,62364,62376,62388,62396,62436,62452,62976,63040,63072,63188,63204,63236,63276,63300,63308,63316,63332,63340,63380,63408,63428,63492,63508,63516,63536,63564,63628,63636,63664,63696,63716,63732,63744,63752,63768,63864,63876,63888,63904,63912,63936,63980,64004,64012,64020,64028,64036,64072,64096,64112,64128,64144,64160,64168,64176,64200,64212,64220,64236,64244,64260,64268,64292,64372,64448,64488,64500,64552,64560,64568,64736,65024,65032,65048,65060,65068,65076,65088,65096,65108,65116,65124,65136,65152,65160,65176,65192,65204,65220,65232,65244,65260,65272,65288,65296,65328,65340,65356,65364,65376,65388,65424,65448,65456,65464,65472,65480,65504,65512,65524],0,[28804,28860,28880,28900,28908,28940,28956,28968,28980,29000,29036,29072,29096,29104,29112,29128,29144,29156,29168,29180,29196,29216,29224,29236,29280,29288,29320,29380,29412,29420,29436,29484,29540,29560,29572,29584,29596,29604,29640,29652,29668,29676,29684,29708,29728,29748,29756,29792,29836,29848,29904,29960,29972,29992,30020,30076,30204,30516,30524,30568,30580,30624,30696,30820,30860,30876,30884,30940,30960,30996,31028,31040,31048,31068,31080,31148,31188,31216,31248,31264,31272,31292,31324,31340,31348,31392,31424,31440,31448,31516,31524,31532,31564,31608,31616,31624,31636,31644,31652,31668,31692,31700,31712,31744,31764,31772,31780,31788,31812,31820,31844,31868,31916,31952,31992,32012,32024,32032,32044,32052,32076,32136,32304,32356,32364,32468,32476,32520,32548,32608,32628,32636,32656,32668,32728],0,[23552,31744],0,[1024,13056,14080,16384,28672,30720,32768,32770,32774,35840,38912,53248,56320,59392,61184,61376,63200],0,0,[20480],0,[56832],0,0,0,[3584,5632,7680,15872,16872,16896,17536,20992,21248,22336,25472,25984,29696,32768,36864,39424,49152,61440],[8192,16384,20480,27392,28416,38656,38928,38944,38976,39024,39172,39200,39228,39260,39284,39304,39320,39332,39680,44032,48896,49136,65520],[0,14080,16128,40960,49664,51200,55296,59392,60160,62848,63232,64512,64896,65280],[1104,1200,2208,3796,3804,3824,7168,7552,11648,11744,12160,12288,22464,32768,59392,60416,61440],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[0,256,684,1024,4096,12288,12808,12856,13312,13668,13824,14304,16384,18432,19456,19968,20000,20480,24576,24584,24592,24704,25440,25920,25956,25958,25974,25982,26176,26212,26214,26216,26232,26624,28224,28256,28276,28284,30720,31744,32256,32768,32776,32808,32824,33024,34048,34560,36864,49152,51200,52096,52128,52140,52156,52224,57344,59392,59968,59980,60012,60028,60416,62464,63488,64256,64264,64776,65032,65160,65224,65256,65272],0,[264,276,328,344,424,620,668,676,712,852,884,900,908,916,924,1080,1192,1208,1248,1316,1332,1432,1448,1472,1532,1612,1644,1756,1764,1796,1820,1932,2004,2012,2052,2080,2100,2116,2156,2204,2248,2268,2312,2328,2412,2456,2552,2560,2576,2644,2700,2984,2996,3104,3140,3164,3208,3256,3304,3340,3400,3452,3472,3524,3548,3572,3668,3684,3696,3716,3740,3824,3844,3856,3936,4040,4148,4176,4184,4204,4220,4392,4472,4488,4512,4556,4580,4800,4816,4832,4864,4876,4904,4928,4936,5096,5132,5152,5164,5188,5232,5248,5280,5368,5488,5512,5552,5584,5616,5632,5696,5732,5748,5756,5820,5860,5884,5896,5944,6048,6064,6116,6260,6272,6288,6320,6328,6364,6372,6392,6408,6420,6436,6448,6464,6548,6556,6616,6656,6720,6732,6772,6788,6812,6884,6896,6916,6924,6936,6968,7008,7120,7152,7172,7372,7380,7440,7552,7560,7700,7776,7828,7880,7908,7916,7936,7984,8000,8084,8096,8104,8136,8172,8192,8704,8960,8992,9008,9064,9076,9160,9180,9236,9244,9252,9272,9280,9288,9312,9348,9376,9440,9456,9472,9484,9496,9516,9524,9544,9572,9596,9608,9644,9680,9720,9728,9760,9768,9784,9804,9812,9820,9844,9860,9868,9948,9980,10000,10048,10072,10084,10092,10144,10184,10216,10252,10284,10328,10340,10352,10432,10452,10460,10468,10512,10548,10612,10636,10644,10656,10716,10760,10776,10784,10816,10828,10856,10932,10984,11024,11092,11104,11112,11132,11140,11172,11192,11200,11216,11228,11240,11248,11320,11344,11352,11384,11396,11408,11416,11432,11440,11488,11500,11564,11580,11592,11720,11736,11744,11768,11776,11788,11928,12020,12036,12052,12068,12080,12112,12128,12140,12148,12168,12232,12244,12252,12280,12308,12340,12380,12432,12490,12504,12556,12564,12616,12636,12652,12672,12720,12740,12792,12836,12844,12908,12924,12932,12940,12972,13020,13352,13384,13408,13416,13472,13484,13496,13508,13572,13632,13660,13668,13692,13708,13728,13748,13772,13784,13804,13816,13832,13872,13884,13984,14036,14052,14064,14104,14160,14200,14232,14252,14284,14308,14316,14344,14352,14368,14388,14396,14408,14436,14476,14488,14520,14536,14552,14604,14644,14668,14700,14728,14788,14872,15030,15180,15204,15216,15232,15252,15268,15320,15392,15404,15524,15588,15596,15676,15720,15756,15768,15776,15788,15800,15896,15924,15944,15960,15968,16000,16028,16060,16076,16092,16160,16192,16208,16216,16268,16280,16288,16304,16312,16320,16336,16368,49152,49200,49208,49236,49280,49296,49316,49340,49360,49368,49404,49448,49528,49548,49556,49568,49596,49620,49680,49894,50024,50032,50056,50068,50080,50112,50236,50248,50264,50272,50344,50360,50380,50612,50660,50684,50708,50748,50760,50812,50844,50868,50884,50904,51108,51140,51172,51192,51228,51252,51264,51336,51368,51384,51392,51420,51452,51468,51476,51484,51516,51532,51564,51608,51736,51752,51768,51832,51848,51856,51864,51896,51912,51924,51940,51948,51980,51996,52020,52064,52096,52108,52132,52160,52168,52180,52248,52296,52312,52336,52360,52376,52420,52456,52484,52520,52532,52588,52596,52616,52642,52668,52716,52728,52736,52780,57360,57384,57404,57424,57564,57684,57872,57896,57912,57936,57972,57988,58012,58036,58052,58160,58184,58192,58212,58232,58244,58308,58316,58324,58340,58380,58396,58436,58456,58496,58528,58544,58572,58596,58644,58760,58772,58796,58836,58844,58852,58860,58880,58908,58920,58976,59076,59084,59092,59116,59152,59200,59280,59316,59380,59396,59536,59604,59652,59692,59700,59752,59776,59784,59876,59904,59924,59960,60028,60076,60084,60148,60176,60208,60216,60240,60288,60304,60344,60352,60360,60380,60508,60536,60600,60636,60648,60656,60696,60740,60760,60824,60848,60912,60928,60944,60976,60984,61016,61024,61060,61068,61088,61124,61132,61180,61224,61252,61280,61336,61360,61368,61376,61388,61408,61428,61456,61476,61512,61524,61564,61596,61612,61684,61708,61768,61788,61856,61880,61916,61960,62016,62080,62112,62120,62128,62152,62164,62172,62192,62344,62460,62480,62522,62538,62546,62550,62580,62628,62696,62716,62743,62772,62780,62800,62844,62984,63096,63108,63128,63400,63408,63432,63444,63488,63552,63588,63612,63640,63656,63680,63700,63708,63716,63752,63796,63848,63872,63880,63888,63908,63932,63988,63996,64032,64104,64124,64180,64192,64216,64224,64236,64248,64288,64340,64352,64380,64416,64448,64460,64492,64540,64548,64576,64616,64684,64716,64744,64760,64772,64828,64972,64988,65000,65032,65044,65088,65136,65200,65212,65220,65244,65348,65368,65416,65464,65480,65488,65508],0,0,[0,2,18,26,30,64,512,2816,11008,13312,15360,18944,20480,27648,31744,57344],0,0,0,[1536,4096,8744,10240,11276,11408,12288,13056,13568,14336,16384,18432,19200,19456,19588,19612,19640,19648,19776,20480,22528,23620,23840,24064,32256,38912,39936,42272,42496,44224,44288,44320,44352,44480,45056,53248,58368,59424,60416,61440],[0,16896,17344,17472,18432,21760,23488,23800,28672,29696,30408,30528,30592,30720,31744,32256,40448,42496,43520,44032,46080,47616,49152,53248,56604,56704,56960,57092,57328,57336,57344,60256,60316,60348],[0,16384,18688,19200,20480,24576,28032,28416,29440,29952,31232,33280,33792,35120,49152,57344],[0,2048,3008,3072,4096,4608,5608,6144,7936,11264,13472,13540,13824,14848,15104,15328,15872,32256,33376,33392,33792,35840,49664,50532,51200,51712,52224,53344,53600,53728,54272,54372,54456,54528,54784,55808,64000],[7168,8000,13824,15360,17408,20288,20480,24576,26624,28160,28224,28416,28576,28672,33792,34560,35328,36160,36176,36224,50176,50936,53248,61440],[6144,7168,8000,8192,10808,11264,15360,17728,21504,21696,21952,25600,30720,31760,37888,39936,42560,43008,46080,47872,48640,56832,60928],[8,24,256,2304,2816,3328,4096,12800,13312,14336,14976,15056,15360,16896,17544,17584,17664,17920,19456,21760,22928,23120,23224,24320,28672,29696,32768,49152,49424,49456,49560,49572,49584,49664,50176,50592,50688,50944,51072,52224,52992,54016,54432,54568,54592,54720,54816,54848,54912,55936,56192,57344,61952,64320,64512,65128,65152,65408],[2048,5376,9472,11520,12288,13616,13744,14592,14848,15104,17152,18176,18688,19008,19072,23168,24192,24448,25600,26384,26408,26440,26496,26792,27136,28672,30784,31040,31168,31360,31744,48128],[6144,6656,7168,16384,16896,17264,18432,20480,21504,22560,22816,22944,23008,23536,26128,26144,26532,28672,30720,31744,32256,32640,33792,36864,45568,46080,47104,47616,48128,48640,49152,49408,49440,49472,49504,50528,51040,51168,51712,52736,54272,57344,58368,58880,61184,61952,62464,64512],[0,512,640,1664,2176,2560,3976,4096,4800,4816,4832,5856,6112,6976,7488,7616,7728,8128,8192,10240,10304,10368,10624,10752,10880,10976,11264,12288,14592,15232,15744,16000,16160,19408,19968,20480,21200,21504,24576,27648,28672,36864,38048,38848,41160,41336,42360,42872,43000,45056,59392,60288,63488,64608,64752],[0,6144,7680,11776,13312,16384,18464,18560,19456,21504,22536,23040,23552,24064,32768,34832,34944,35072,36736,49152],[8,24,1024,2048,10240,11776,11904,12416,12672,12808,13056,13472,13520,13552,14000,14080,14336,14848,14984,15104,16128,17408,19456,20352,22784,25728,25856,26064,49152,51392,51456,52224,57344,63488,65280],[64,192,1024,2048,2560,2816,3072,3584,12288,12544,13056,16384,24576,26112,26176,28672,30464,32868,32888,34816,36992,39104,39936,48128,50688,51240,51264,51504,52224,57344,61440,63512,63536,65344],[128,1024,3072,12672,12960,13312,15360,15872,16384,24576,25088,25472,25600,25856,26368,27776,27856,28672,32768,34896,35072,35584,36864,45116,45136,45312,47360,48384,48896,50176,51072,52736,59392,61952,62144,62464,63744,64768,65120],[1600,3584,5120,7360,7488,7936,10352,10416,10448,10480,10752,12032,16384,16896,17152,19200,20224,22528,27656,27688,28000,28672,32256,34304,37760,38656,39936,40960,44032,49152,50176,51200,56320,60416,61440,61568,61952,62400,63488,63744,64256,65024],[8128,12224,14976,15744,15872,16384,24576,25088,26624,30720,43264,43776,53248,53760,54528,54880,55040,55296,65152],0,[0],0,0,0,0,0,0,0,0,0,[15192],0,[2304,33024,37888,39680,40704,43520,45056,46848,47616,48384,50176,54272,55552,56064,56576,57344,57856],[19200,36608,52480,52992,53760,57344,60672,61440,62208,62976,63744,65280],0,0,0,[0,1792,3072,13312,31488,65280],0,0,0,0,0,[0,29440,30976,33160,33176,33216,33240,33276,35328,57088,61952,61960,61980,61996,62028,62044,62064,62072,62104,62120,62136,62144,62164,62176,62184,62200,65280],0,[26752],[0,768,8704,25344,25856,30208],0,0,0,[0,4608,15616,31232,37888,39936,65280],0,[57856],0,[52992],[26880],[0,12036,13568,13604,13656,13688,13704,13728,13756,13788,13808,32000,36352,45312,45824,52224],0,0,[28416],[35584,48384,56564],[40960],[65024],0,[2048,8704,10752,11776,20480,26624,30720,53248],[4096],0,0,[0,4096,6144,7680,10752,11264,11776,19968,24064,26112,27264,28524,37376,39424,40544,40960,45212,45232,45244,45568,47232,47360,48384,48896],0,0,0,0,[19456,21504,22016,22528,24120,24160,24184,24448,32640,33152,33408,34816,37904,38040,38104,38136,38272,38560,38912,43008,45680,45760,47104,48128,48532,51452,51964,52220,53248,53972,53984,54272,57056,57312,59648,59712,59792,60224,60272,60296],0,[4240,4288,4608,6072,6088,8192,12384,12544,12800,12912,13056,13824,14068,15616,20480,22528,23552,24576,32768,36864,40192,41024,44544,51200,60544,60696,60928,61184,61440,65024],[0,16384,20128,20148,20908,20916,21504,23424,23432,23448,23552,32768,40960,43008,43520,44032,46592,47104,63488],0,0,0,0,0,0,0,0,[0,2,22627,31898,43008,48298],0,0,0,0,0,[4608,13156],0,0,0,[100,122,176,896,1152,1276,1488,1496,1542,1602,1608,1623,1625,1628,1639,1644,1646,1650,1712,2048,2050,2060,2072,2125,2176,2240,2336,2338,2352,2355,2361,2363,2624,2672,3073,3089,3091,3144,3156,3168,3170,3178,3183,3188,3648,3653,3657,3662,3672,3681,3688,3692,3695,3698,3702,3708,3711,3713,3719,3733,3735,3741,3743,3753,3768,3792,3797,3803,3806,3809,3811,3815,3819,3823,3830,3835,5186,5199,5207,5214,5234,5237,5240,5245,5247,5424,5507,5517,5523,5526,5530,5532,5880,7048,9728,9736,9776,9840,9856,9864,9866,9868,9874,9877,9886,9892,9904,9912,9976,10244,10247,10255,10375,10380,10383,10385,10390,10395,10398,10402,10504,10507,10509,10624,10626,10648,10688,10692,10736,11084,11152,11280,11312,11331,11338,11393,11396,11410,11520,11522,11535,11551,11792,11794,11796,11808,11904,12000,12114,12128,12158,12160,12162,14784,14804,14832,14848,14952,14960,15104,15316,15336,15340,15408,15456,15472,15492,15508,15516,15684,15692,15704,15984,16120,16124,16127,16209,16217,16221,16223,16288,16376,16640,16648,16736,17064,17152,17668,17680,17920,18016,18112,18208,18472,18512,18544,18816,18928,18952,19024,19176,19198,19408,19452,19708,19792,19804,19976,20448,20472,20672,20736,20912,21500,21516,21520,21528,21968,22265,22268,22352,22560,22792,22880,22892,23016,23040,23056,23136,23236,23264,23296,23392,23424,23472,23520,23552,23560,23600,23804,24060,24156,24320,24560,24572,28668,30716,31228,31236,31264,31296,31344,31360,31364,31584,31604,31760,31768,32112,32176,32512,32524,32540,32552,32568,32624,32656,32672,32704,32720,32724,32756,32764,33280,33504,33552,33584,33744,34080,34362,34432,34512,34864,35024,35064,35303,35980,35996,36256,36368,36612,36624,36664,36708,37536,37564,37572,37580,37776,37920,37952,38176,38304,38368,38416,38456,38592,38624,38656,38784,39088,39168,39216,40384,40608,41100,41116,41136,41539,41547,41984,42080,42336,42416,42448,42479,42481,42483,42485,42491,42495,42720,43088,43136,43168,43648,43736,43768,43992,44011,44032,44288,44296,44400,44408,44512,44608,44668,45280,45984,46064,46208,46288,46344,46364,46448,46624,46784,48384,48464,48568,48896,48964,48980,48988,49152],[4,10,18,24,42,45,47,81,83,90,96,104,113,115,122,128,130,134,137,142,144,146,148,150,152,177,224,260,274,282,321,323,326,332,346,353,357,359,364,509,576,585,624,638,652,662,664,668,672,692,708,721,726,738,741,748,836,840,843,848,864,873,880,888,891,903,907,911,1156,1158,1175,1179,1198,1204,1210,1229,1232,1251,1254,1284,1287,1289,1291,1301,1324,1326,1332,1336,1340,1394,1398,1400,1452,1460,1462,1465,1468,1470,1475,1494,1498,1667,1672,1674,1678,1686,1693,1695,1760,1784,1921,1930,1939,1942,1950,1984,1992,2048,2056,2071,2079,2118,2130,2134,2139,2158,2163,2214,2217,2221,2232,2234,2238,2240,2245,2247,2251,2257,2261,2263,2265,2268,2336,2340,2361,2367,2369,2374,2376,2379,2381,2400,2404,2412,2462,2594,2616,2634,2644,2648,2655,2685,2886,2892,2898,2900,2916,2925,2933,2938,2942,2952,2957,2959,2996,3024,3088,3091,3096,3129,3137,3142,3159,3167,3172,3175,3186,3190,3202,3209,3268,3276,3283,3291,3298,3312,3346,3352,3372,3408,3416,3420,3501,3552,3555,3561,3608,3617,3640,3645,3688,3698,3702,3746,3768,3776,3778,3798,3815,3830,3840,3860,3862,3927,3929,3945,3952,3970,3989,3991,3996,4014,4067,4072,4080,4086,4106,4108,4112,4123,4134,4145,4147,4154,4229,4257,4282,4324,4334,4336,4341,4354,4370,4380,4391,4408,4426,4440,4488,4516,4539,4542,4583,4585,4600,4607,4610,4612,4615,4639,4645,4656,4660,4680,4688,4695,4708,4713,4715,4718,4737,4739,4741,4752,4761,4807,4816,4819,4823,4882,4888,4894,4896,4905,4908,4910,4922,4924,4928,4932,4936,4965,4975,4995,4997,5008,5013,5020,5040,5042,5072,5092,5097,5106,5112,5119,5137,5160,5168,5181,5185,5204,5209,5226,5235,5237,5239,5242,5246,5255,5263,5270,5350,5352,5356,5376,5378,5384,5386,5394,5409,5417,5420,5444,5458,5472,5500,5512,5521,5582,5656,5660,5663,5700,5708,5710,5716,5719,5724,5731,5738,5754,5763,5795,5798,5802,5808,5826,5874,5877,5884,5888,5935,5949,5951,5961,5973,5980,5986,5995,6000,6018,6028,6060,6070,6074,6080,6085,6092,6112,6114,6118,6137,6139,6157,6162,6171,6187,6200,6202,6211,6218,6223,6225,6228,6230,6234,6255,6260,6266,6289,6296,6301,6305,6311,6330,6343,6346,6356,6361,6363,6388,6419,6421,6446,6448,6464,6491,6499,6506,6531,6535,6538,6547,6553,6555,6564,6566,6574,6580,6582,6591,6599,6602,6608,6629,6635,6642,6668,6690,6705,6711,6713,6716,6721,6724,6732,6736,6740,6753,6758,6771,6785,6799,6804,6810,6814,6826,6829,6832,6841,6858,6866,6870,6878,6880,6884,6888,6912,6922,6927,6932,6934,6952,6957,6965,6977,6993,7000,7014,7021,7029,7033,7035,7037,7112,7114,7145,7153,7162,7178,7180,7201,7203,7211,7222,7224,7241,7244,7254,7256,7280,7299,7304,7308,7313,7333,7337,7346,7353,7355,7364,7394,7407,7426,7432,7437,7452,7470,7481,7485,7487,7493,7497,7505,7514,7519,7524,7527,7536,7544,7606,7611,7613,7629,7634,7641,7651,7655,7657,7672,7678,7696,7705,7707,7709,7746,7761,7767,7791,7801,7803,7832,7836,7842,7853,7855,7867,7874,7897,7900,7902,7912,7915,7920,7926,7930,7981,7985,7987,7990,8005,8008,8016,8021,8033,8041,8044,8060,8098,8110,8113,8117,8123,8125,8140,8156,8158,8161,8165,8184,8189,8212,8240,8248,8252,8254,8260,8268,8273,8276,8287,8294,8297,8322,8325,8332,8344,8378,8384,8388,8395,8397,8404,8452,8455,8463,8469,8474,8480,8511,8515,8521,8527,8548,8570,8577,8579,8593,8604,8606,8622,8633,8648,8650,8652,8654,8662,8672,8674,8681,8691,8698,8708,8725,8731,8743,8752,8758,8760,8771,8773,8780,8796,8810,8817,8851,8854,8856,8865,8891,8896,8908,8936,8944,8946,8949,8955,14082,14084,14090,14093,14102,14110,14173,14181,14189,14196,14199,14208,14226,14272,14276,14298,14301,14304,14337,14340,14348,14360,14374,14376,14382,14384,14404,14418,14431,14446,14457,14497,14505,14508,14511,14519,14521,14523,14528,14534,14537,14544,14546,14550,14552,14563,14568,14576,14588,14590,14597,14604,14620,14631,14638,14650,14653,14658,14661,14663,14665,14682,14693,14701,14715,14749,14792,14794,14798,14814,14816,14838,14841,14845,14847,15874,16003,16011,16033,16069,16100,16106,16118,19616,19624,19664,19672,19696,19892,20016,20124,20224,20256,20484,20512,20537,20612,20628,20636,20736,20752,20980,20992,21008,21104,21216,21248,21256,21304,21472,22016,22270,22560,22720,22784,22792,22920,23040,23048,23168,23232,23328,23392,23416,23552,23712,23808,24064,24320,24416,24480,24520,24528,24544,25352,25368,25424,25632,25648,25663,25680,25712,25792,26656,26976,27392,28320,28368,28392,28394,29264,29428,30400,30449,30456,30488,30496,30544,30549,30577,30705,30713,30717,30719,32800,32864,32992,33032,33312,33824,34544,34656,34720,36576,36960,37120,37888,37952,37968,37974,38236,38976,39040,39168,40128,40464,41064,41089,41152,41216,41396,41408,42656,42780,43008,43578,43776,44000,44548,44551,44640,44928,44992,45120,45224,47184,48032,48384,48390,48496,48576,48616,48624,48736,48889,48896,48912,48960,49040,49152,49632,49784,49984,50032,50048,50176,50204,51948,52544,52608,53056,53184,53248,53264,53280,53728,54272,54352,55272,55716,57024,57088,57104],0,0,0,0,0,0,[512,1280,1336,1408,1848,3072,3648,3696,3952,4016,4224,5376,5920,6400,10496,11520,12032,13056,13568,14528,18432,19456,19968,20288,20448,20992,22400,47552,49248],[16384,20480,24576,34816],0,0,0,0,0,0,[0,14336,22528,24576,25688,25816,25848,26624,27648,47552,47600,49152,61440,63744],[18432,20992,21376,23108,23116,32768,55296,59392,61952,62976],[26048,28672,39040,39424,40688,40960,49152,59136,59264,59456,59904,61952,63368,63488,64512],[0,2048,3072,3200,3328,3840,31232,32896,33408,33664,34272,34816,44032,46080,49152,50176,50688,50944,51072,51136,51168,59360,61408],[4096,20480,32000,32384,32768,40960,43008,51200,55296,61440,63488],[0,5120,7096,7632,7676,16384,24576,28672,29696,30720,32768,33288,36864,40960,42496,49152,50688,51456,51968,53248,56320,57264,61440,63488,64640,65024,65280,65516,65532],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],s=[[16],[1,0,3,5,0,5,4,3,2,1,1,0,6,5,4,3,2,8,6,5,4,3,2,1,0,8,3,1,6,5,4,2,0,10,11,8,10,11,10,12,10,10,9,11,10,10,9],0,0,0,0,0,0,0,0,[16],0,0,0,[3,2,2,2,2,2,12,2,2,12,11,8,9,9,12,2,2,9,9,12],0,0,0,0,0,0,0,0,0,0,0,0,[12,11,3,11,10,3,7,3,3,6,5,4,7,8,6,2,5,2,6,4,3,6,7,2,3,3,9,2,8,11,10,13,11,10],0,0,0,0,0,0,0,0,[2,8,7,6,5,4,3,10,12,10,8,5,1,4,3,0,11,9,8,11,15,10,8],0,0,[0,7,6,5,4,3,2,1,13,11,10,8,14],[9,7,6],0,[2,4,2,5,7,5,4,3,2,7,10,11,10,7,5,4,3,2,8,9,4,2,11,10,7,5,3,5,3,8,7,4,2,6,5,4,2,3,10,9,8,5,7,6,4,3,2,12,5,12,11,10,9,8,6,4,3,7,11,7,13,10,9,8,11,10,9],[2,2,2,3,3,2,2,2,3,2,2,2,4,2,2,2,2,2,3,2,2,3,2,5,2,6,4,3,2,6,4,3,5,6,4,3,2,5,5,2,2,6,4,2,2,3,3,3,2,2,2,2,2,2,2,2,2,2,2,3,2,5,3,3,2,2,3,2,2,2,2,5,2,4,5,5,4,9,8,5,4,2,3,3,2,2,3,3,2,2,4,6,2,5,3,2,2,4,2,2,4,2,2,5,2,3,4,3,4,3,4,3,2,4,3,2,2,3,2,2,3,2,4,2,2,2,2,3,2,2,2,2,3,2,6,5,2,2,2,3,3,2,2,4,2,3,3,4,6,2,2,2,2,6,3,2,5,2,3,2,3,2,2,2,3,4,3,2,2,2,2,3,2,3,2,2,4,3,2,3,2,3,2,2,3,2,2,2,3,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,3,3,2,4,3,3,4,3,2,4,3,4,2,2,2,4,2,2,2,2,2,2,2,2,2,4,3,2,2],0,[2,2,4,3,2,4,2,2,3,2,2,3,2,2,2,4,3,2,2,3,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,4,3,2,3,3,2,2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,5,4,3,2,5,4,3,2,5,4,3,2,3,2,5,4,2,3,2,3,2,4,3,2,2,5,2,2,3,2,2,2,3,2,2,3,2,3,3,3,2,2,3,5,2,3,2,4,2,2,3,2,2,2,3,3,2,2],0,[13,10],0,[10,10,8,13,11,10,0,2,1,9,10,10,10,10,6,6,5],0,0,[10],0,[9],0,0,0,[11,10,13,9,3,9,7,7,8,6,9,7,10,11,8,9,13,12],[13,12,10,10,8,7,4,3,4,3,2,2,4,2,2,2,3,5,8,10,7,14,4],[13,8,8,13,9,12,11,9,8,7,8,8,7,8],[4,4,4,3,2,3,7,7,6,4,6,11,6,14,10,9,10],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[2,2,2,10,13,9,3,2,8,2,8,3,11,10,9,2,5,12,3,2,4,7,5,5,0,4,3,1,5,1,0,4,3,10,5,4,3,2,10,9,8,2,5,4,3,10,9,8,12,11,9,5,3,4,2,10,11,9,3,5,4,2,11,10,9,2,9,8,7,6,5,4,3],0,[2,3,2,2,2,2,2,2,4,5,4,3,2,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,3,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,6,5,4,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,3,1,4,3,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,2,4,3,2,2,2,2,2,9,8,5,4,2,2,2,2,2,2,2,2,3,2,2,2,3,6,4,3,2,3,2,2,3,2,3,2,5,3,4,3,2,2,3,2,2,2,3,2,2,2,4,2,2,2,2,3,2,5,5,2,5,2,2,2,2,2,2,2,5,2,2,2,2,3,3,4,2,3,2,3,2,2,2,2,2,2,3,2,2,2,2,2,3,2,3,2,2,2,2,2,3,2,2,2,2,5,2,6,4,2,7,4,3,2,2,2,7,5,3,2,2,3,2,2,2,2,3,3,2,2,2,2,2,2,2,4,1,5,2,2,3,3,2,2,3,2,2,2,5,4,2,3,2,5,5,2,4,3,2,3,3,2,2,2,3,2,2,4,3,2,2,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,3,2,3,2,3,2,3,3,2,2,2,2,2,2,3,2,2,2,2,2,1,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,4,2,5,3,5,3,4,3,5,4,3,2,3,2,4,3,2,4,2,4,5,3,2,5,4,2,2,2,3,2,2,3,3,3,2,2,3,5,2,1,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,3,5,2,2,2,3,3,2,3,5,4,3,2,5,4,3,2,5,3,5,4,7,4,3,6,4,3,2,5,4,3,2,2,5,4,3,3,5,2,2,3,2,2,3,2,2,2,2,4,2,2,3,3,3,2,2,3,2,0,4,2,3,2,2,2,3,2,2,4,2,2,2,3,2,2,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,3,2,2,3,2,2,3,2,3,2,2,2,3,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,3,4,3,2,2,2,7,3,2,2,2,2,5,3,2,2,2,6,4,3,5,3,2,3,2,2,3,5,2,2,3,3,2,2,3,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,3,2,3,2,2,2,2,2,2,2,2,4,3,2,1,2,2,2,2,0,2,2,2,3,3,3,2,3,3,2,2,2,1,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,4,3,2,2,2,2,2,2,2,2,2,2,3,2,2,2,3,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,4,2,2,2,0,2,2,3,3,2,2,3,2],0,0,[0,4,3,2,1,6,11,13,11,11,10,9,12,12,10,12],0,0,0,[9,10,3,10,2,4,8,9,8,11,9,9,8,6,2,2,2,7,6,11,10,2,5,13,9,10,9,5,9,6,5,4,6,5,13,12,10,5,9,12],[14,8,4,5,11,8,5,3,10,9,3,6,5,10,8,13,11,9,8,11,10,9,12,11,0,8,7,4,2,2,11,5,5,2],[14,10,9,8,12,11,7,10,9,8,11,9,8,3,10,13],[11,9,5,10,9,8,3,10,8,11,5,2,10,8,7,2,14,10,4,3,11,10,9,2,9,8,10,8,7,5,6,2,3,7,9,13,9],[8,3,9,11,8,6,12,11,10,4,6,5,5,11,8,8,9,3,3,6,9,3,13,12],[10,9,4,10,2,12,10,4,6,5,6,11,10,4,11,10,5,11,10,4,13,12,9],[3,3,11,9,8,8,12,4,10,9,4,4,10,7,3,3,8,7,10,8,4,4,3,8,10,9,14,8,5,4,2,2,3,9,8,3,8,7,5,9,10,8,4,3,7,6,5,4,10,8,7,12,11,6,9,3,7,7],[11,12,11,8,10,4,4,8,7,11,10,9,8,5,12,10,8,7,9,4,3,3,4,3,9,11,8,7,3,7,14,10],[9,8,10,9,8,4,11,9,9,8,7,6,5,4,4,3,4,11,10,9,8,5,10,10,8,10,8,9,8,9,8,4,5,4,10,9,7,5,10,9,9,10,9,8,8,8,11,10],[9,5,10,9,7,7,3,8,4,3,10,8,5,9,7,6,4,5,11,6,4,8,7,5,4,5,9,11,9,9,8,7,5,4,9,8,4,11,11,9,13,10,5,6,3,10,9,7,3,12,9,6,10,3,9],[12,10,12,10,10,11,5,7,11,10,3,9,8,9,11,3,6,7,5,14],[4,3,9,13,10,6,9,8,7,3,8,5,5,4,3,6,9,7,5,10,8,10,9,6,8,7,6,4,11,3,8,10,12,10,8],[7,6,10,9,8,7,9,8,8,6,8,13,9,4,5,10,8,2,3,11,7,6,10,11,8,3,6,4,10,12,11,3,4,3],[6,11,10,7,5,11,9,8,13,9,7,7,5,8,7,4,4,12,11,4,9,8,13,2,4,11,10,9,8,9,7,9,10,7,3,10,8,8,3],[6,10,10,7,6,8,6,5,4,2,8,6,9,7,11,10,8,11,3,3,3,11,11,9,7,9,8,11,10,9,8,11,12,10,7,6,8,6,7,9,8,6],[12,6,7,7,6,13,9,8,12,11,8,8,6,9,7,5,6,11,7],0,[16],0,0,0,0,0,0,0,0,0,[2],0,[8,8,8,8,8,8,8,8,8,8,12,10,8,9,8,8,9],[8,8,9,8,8,8,8,8,8,8,9,8],0,0,0,[8,8,8,8,8,8],0,0,0,0,0,[8,8,9,2,2,2,2,2,9,8,3,2,2,4,3,3,3,2,4,2,3,2,2,2,4,2,8],0,[7],[8,8,10,8,8,9],0,0,0,[8,8,8,8,8,8,8],0,[8],0,[8],[8],[8,2,4,5,5,4,2,4,2,2,2,8,8,8,8,8],0,0,[8],[8,8,2],[8],[8],0,[11,11,10,9,12,12,11,12],[12],0,0,[12,11,10,9,9,8,13,12,9,8,7,2,11,9,2,12,2,2,2,8,6,10,9,8],0,0,0,0,[10,9,8,10,3,4,3,13,7,8,7,11,3,3,5,3,5,5,12,11,3,6,10,7,2,9,8,2,9,2,5,9,8,5,6,5,2,5,2,2],0,[3,5,7,3,3,12,5,8,4,4,8,7,2,8,11,10,8,13,12,11,8,5,9,11,7,3,8,5,11,8],[14,11,3,2,2,2,9,2,4,3,10,13,11,9,8,10,5,14,11],0,0,0,0,0,0,0,0,[0,0,0,0,8,0],0,0,0,0,0,[9,0],0,0,0,[1,1,2,1,5,2,3,2,1,1,1,1,0,1,0,0,1,0,4,0,2,0,0,0,5,4,0,1,1,2,1,0,4,4,1,1,0,0,1,0,1,0,0,0,1,0,2,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,3,1,1,0,1,1,1,0,0,2,0,0,0,0,0,2,1,0,0,0,0,0,4,1,1,1,2,0,0,3,1,2,3,6,4,3,1,0,2,1,3,2,3,1,6,3,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,3,0,3,4,2,4,4,2,0,0,0,1,1,1,0,4,0,1,0,1,5,0,4,1,4,0,0,1,4,3,4,0,2,2,0,2,1,0,3,3,4,4,3,2,2,2,2,2,2,0,0,3,2,1,0,5,2,3,1,4,2,2,2,4,5,4,4,4,3,4,4,2,4,3,4,2,1,4,2,2,3,2,3,3,2,4,2,4,4,2,1,3,4,0,2,4,2,3,2,2,3,2,4,5,0,4,2,4,2,4,5,2,3,4,3,2,2,5,3,12,11,9,3,2,3,5,4,0,0,4,3,3,2,4,4,3,4,2,4,3,5,4,3,4,1,5,3,2,5,5,3,4,4,4,0,4,4,4,5,2,0,4,2,5,4,2,5,3,3,4,2,3,2,4,4,6,5,5,5,5,2,4,5,2,5,4,2,4,5,5,2,2,4,0,0,4,5,4,4,4,1,0,0,0,2,0,5,2,4,5,5,5,3,3,0,2,2,3,2,2,5,4,2,5,4,4,5,3,2,2,4,4,5,6,4,3,0,4,3,2,12],[2,1,0,0,1,1,0,1,0,1,1,3,1,0,0,0,2,1,0,0,0,0,0,1,0,0,0,2,0,1,1,0,1,1,0,2,1,0,0,1,3,0,3,1,0,0,2,1,3,1,1,0,1,1,0,1,0,1,0,3,2,0,3,0,0,0,0,0,1,0,2,0,1,0,0,0,2,0,1,1,1,0,0,1,0,1,2,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,4,1,0,1,0,1,0,1,0,0,0,3,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,2,1,0,0,0,0,1,0,0,0,1,0,1,0,2,1,0,0,0,0,1,2,0,0,0,0,2,0,2,2,0,0,0,0,2,1,0,2,2,0,0,0,0,1,1,3,0,1,0,0,0,0,0,3,2,0,0,0,2,0,0,1,3,1,2,0,1,0,0,2,0,0,1,0,1,0,0,3,0,1,0,0,0,4,1,0,1,0,0,3,1,0,0,2,0,0,3,1,0,0,1,3,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,2,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,3,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,2,0,1,0,0,0,1,0,0,0,0,0,0,2,0,0,1,0,0,0,0,3,0,1,1,1,0,0,1,0,0,0,2,0,0,0,0,1,0,0,1,0,1,2,0,2,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,3,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,4,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,3,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,3,2,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,3,1,2,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,1,0,1,0,0,0,0,0,0,2,0,0,2,2,3,2,3,2,4,2,4,4,1,4,0,4,3,2,3,4,2,1,3,4,4,2,3,3,4,7,1,5,5,2,3,2,2,3,6,5,5,4,3,2,5,8,5,3,6,5,3,2,5,4,3,4,4,3,0,5,4,4,4,6,7,5,4,1,0,4,2,5,0,2,3,2,2,0,7,3,2,1,0,5,5,3,3,5,5,3,5,4,5,5,5,6,4,2,1,2,5,5,2,6,3,3,0,5,2,0,5,5,2,5,1,2,4,0,0,5,5,7,5,3,4,5,1,1,2,5,3,2,4,0,1,4,6,4,5,5,3,5,3,7,4,2,2,5,7,7,6,4,2,5,5,4,4,3,2,4,4,3],0,0,0,0,0,0,[5,5,3,5,3,9,5,8,6,4,6,9,5,12,10,9,8,9,8,5,10,9,8,6,5,9,6,6,5],[11,12,11,13],0,0,0,0,0,0,[13,13,11,10,7,5,3,10,9,5,3,12,11,8],[8,8,7,3,2,13,12,11,10,9],[6,10,7,9,2,13,12,6,7,6,8,9,3,10,8],[11,10,7,6,9,8,9,9,8,7,5,9,11,10,10,9,8,7,6,4,13,11,5],[14,12,8,7,12,10,13,12,11,11,9],[12,9,2,2,2,13,12,10,9,11,9,2,12,10,9,9,9,9,8,11,9,5,11,10,7,8,7,2,1],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16]];
