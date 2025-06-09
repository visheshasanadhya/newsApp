'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "89c2e12aa5136ab1c8dc54afd42c91ce",
".git/config": "69f2fc0ca80bc5bc492c8b505072afea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "585309c24253c47f8392a2ee87de0e9e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "832a78408d59b430c8443e5c82ba5b2c",
".git/logs/refs/heads/gh-pages": "832a78408d59b430c8443e5c82ba5b2c",
".git/logs/refs/remotes/origin/gh-pages": "951d2607b3399930c6de4cb3d54d9c68",
".git/objects/01/b73d3b6ffe5dbd9aa445dabfb31aaa8ed0c446": "48b48b6c4af28489e02e4ddcc54d2570",
".git/objects/0a/2b455f8fc8fd0a1bff229f9a2025b4bbe1b324": "5fa8275449fdbeac0c622c5ff9f6b3d5",
".git/objects/0a/66bacbe3f8f86e80ef79c00f548aa73f553481": "e137ffc851dde095bf94c8ed81104304",
".git/objects/0a/75d10f1fd71aa9a2e8ec7146d8f5cd8630e0e6": "be3110eaa5e9dd6014121bf09196a49f",
".git/objects/0b/a33659d44676cfa234ec1ca274922ffefbdf3e": "0183cb5e15cd0e87f870bdf437a351ff",
".git/objects/0e/4c35f64510e9a5f57fa40fc76e0a5dad1899b7": "a8fd2da5b6c42296e9336b25f5aba739",
".git/objects/0f/7fa39fd654352c469eefc046f74386898fdba4": "2172ffd46dfe142cb1fab88e7480ac5d",
".git/objects/11/8b9825d102f161699231fb46feabc21b656eba": "420f05785a3ee10f7a144cd5b041203d",
".git/objects/14/c50ecc7864a28237bd47772e23ff6b7560ae8a": "b824490a1b7873a36a22d1e9bd4c5976",
".git/objects/17/d25e875b9001eab514af09353e2e074d10935f": "8171838306e44804647b1d5e95c04d49",
".git/objects/18/1103f2e5427ce8f4d170c22abc8656a94c8b5c": "1432a5a96661eae7f8d50be3b5d6f8fc",
".git/objects/19/801488334bb7404e4288032c64d946ed9f3e34": "c37d0089d7e51451d087a81d1fe7237e",
".git/objects/1a/17ef2a2faa76d3a2a4396107032dcb7a85ac0f": "e15c663db202d28a4f8d27218cb1585c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/2295c70c02610c6362c1ad4a0585c63bac5a21": "bdabe344ee6eae235f21f3516c15c55a",
".git/objects/22/8b4b788ab710335ee8444c781037f9eec66ab3": "a1c8b3a153495925c950b386f5937c24",
".git/objects/24/89b3f23a4272406b6f4572e47d3e1c4f6625ca": "7297283e63062bda3c99b1a47b3fbe07",
".git/objects/2a/e3716c4a6c72cfc092d0405ab1225294a96ecc": "8f2bb8d031fa0aa3968b99c7de9fd746",
".git/objects/2c/b8f09e5dbe06d41ca8010f952d0ee76c1d81a8": "987237fa9e9d3c9ad6ce1947a97207bc",
".git/objects/32/b94b07d2aee3c61b02b20b78a2b2f8debcdb52": "4960c544641bc21e68ea477a4d979ca1",
".git/objects/32/e807babd665f2d6ba0d1c6a9d41f0215bf0622": "9c910210315c24ff5bc95803374203ae",
".git/objects/35/55ab2a36c636329eb98acd3881eceaeb5a2883": "b41c9b91a10d2d3dc70f400f2879fc6c",
".git/objects/36/d46f9f19bae840a8638b92fc2bbe06b1fb6000": "b505ddb9f445684edabfad4b3648c35b",
".git/objects/36/f920d4d295491c465663365303afd4527828f5": "fa11257ecb24cb92a32d3fa42cba1047",
".git/objects/38/492171f968857a08a69e910910ba12521823a3": "8d79b759157d8c05b4de009edf273a51",
".git/objects/3c/8973d8f67f09fded6eee9df900db4b230f7f5f": "78e5377a0e0d10c1061238841fb8c773",
".git/objects/3d/f57ce0ede3d36031a9fd881151143d1d21f151": "7f15cc5efe949361142013e810a55013",
".git/objects/40/3ef9ab0573ae60cd0099a6cd675f7904596595": "334f09adf6bf495e4b257a5f45fc338a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/9f612afd910669181d7eb3899caa3d604889c4": "bff5d7e5050de23f5e67e02ac09ab917",
".git/objects/47/810dbe2420cf58c3624a2ed4499df13e1e4da4": "048046b46a1ca102af2284de785f8f1b",
".git/objects/48/20d8ab0c87f045ddae85c728cb7ab0bb964628": "bd2ac4a1479007899d74bde0b2f26e21",
".git/objects/48/2e4cc17fb2ea7235703d56ce61ba91237b953f": "1792ddda1c2a7cbb99ecf0c7a2d70881",
".git/objects/48/e1142b1348e3494c291a8e224bf0fdbc7702dd": "1fe63f1714da77ba66a5ee3169570657",
".git/objects/49/0938c102278e6de965691ce383d75e0324bc3a": "97e5f1108f20aac014e6b7d2b07b3c7f",
".git/objects/49/811b441a423c851f7bfcc32299fe5b79d16050": "aa8b8651efcf49809e06bd8757a8f94e",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/cc2279c61860cf50e1d9b7c57bb9486cecbd79": "073c07e5a83926fe764ad84134dcf658",
".git/objects/4f/a8281a286ce18e6007746eff29d2326bee1d61": "2b8868033ff9cd9c85a3cd909c24f9da",
".git/objects/4f/f93ae231863e108b4439b647f84ec0367af353": "6ffe40881e524efa3f28994ac6a38d30",
".git/objects/51/27aed25f1c73e079f52b01b87f5cb6184736d9": "32788de4bc74a2f902c06405e99cd5d1",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/8c27cb005154881ce0bd5dd15cb543cf38f01f": "698320f437dc986ce540570d0cf95e0b",
".git/objects/54/ecfcf6aa063cc79622131428eec2e7fb5f41f4": "df5bbaa7e438e6bfcb05cc7f9231dcd2",
".git/objects/55/179c09271f4871bd269093007af3bd67ce21d4": "968203a64176691a9043bc96e2992d16",
".git/objects/57/af77a2f789087387f06d2748b7e8fc9239ebeb": "2d91538b7cc1a0d119851f510612803c",
".git/objects/57/d7df1fd2520e2501264b8fe9670ca01e5d834b": "a5079e9986f138c858260b6ea714b911",
".git/objects/5e/a54d7af34248eb3d1911bfcaed601813093cc8": "6533a5ff3fe838392be98bc69cabd3cb",
".git/objects/60/2bb9112a3504780ccdf7b1dfbe9a0248dc6060": "7c234aacda130a69dda87a1da7e55493",
".git/objects/60/e8007c2bce00125684a31f30dc28f3f1b00cf3": "903c4704342d1d9ac15a29adfd497a78",
".git/objects/62/2e0d15a7aa54e4525b5fe7e447264c115d2961": "7781fe469e4655564136136ed70818e2",
".git/objects/64/de2ffd849b74e24125a3be558fadcec0e94bdb": "145473c62d479b583ebe7e98704d6375",
".git/objects/66/6506b16df03b8b8cc73b8269f0c84152f9b219": "c32fc98db1b69d93f2e65d00b22e66fd",
".git/objects/66/d586b76f2c769c1a66e5d9ceddadc198e32dba": "dde1bebaf599fd33dc71a4633f7ddd05",
".git/objects/69/9c2af78f25a35da555155c704b4ccf62a14888": "436754f158aca5518c0bbb739cfea738",
".git/objects/6a/cadf8df2663b576eba90d3cfa414a8aab9fad4": "cc814f86a6a00a3c85cad931bd9e8189",
".git/objects/6c/049805bf561bfeb4f5d060347c277dcd320553": "0f24a62f99c2622d52983117240321c1",
".git/objects/6c/323c1bd7781f7dad244dcaca24e9764ac2b6a3": "fb346927bf6257448c74c72fe57c0851",
".git/objects/6d/2663643027adf8dfbb349ec84eb703a4bccf7b": "311809d1db34e1dd5c2bdd94f07b0c0f",
".git/objects/6d/92dde7ad40cf3d845067fd74baaf5d54a33466": "7b7b61c643288a1826014406ba4804ae",
".git/objects/6d/bc43d215c3cfe0e7d1570c97e86b176d483cb6": "77b477459c9711c8e618742ea99cfad4",
".git/objects/6d/c89032716123eb0661e5e37ac5d1c69a4f687c": "03c2028bed788be1394403d6e203de3b",
".git/objects/6e/cd627798ba6f5cbe00e80b7e0aba405f36d2ee": "49520601a855ac31b660e10fd12705f5",
".git/objects/6f/53891b11f9e49b431b9de98211f525be2da5c2": "ef79868cf9bdac22492b2185b81e4c88",
".git/objects/6f/5ef99cd80f5606d5e231fd9e3735d7fc3947e7": "fc74588a5cf7dc10fa011ed64ff13996",
".git/objects/6f/c5b63d681c01ad155706fe707ba1cdb22cb64c": "65e84fd86a5254277c1bf6569f44f40c",
".git/objects/70/4b1c911e119130706d509c126edd13ea96e25f": "a94aeb30ddf6b7f32e255d451b8e2f2e",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/d8713b528a553d3dd3aab22e54d41708a485d5": "f97e5947fb4da7c16ebdd1d6a991d6e5",
".git/objects/71/d0475fdd7d5c7c00cd7fc92c2f00171750233d": "c08f0f4a193ebb38821411854df68f4e",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/3c8750eaf082362874a0ef3744933e03374179": "5d24024ada93707719eef91b271c855e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7c/84345699ab1317c6d41183a9e1e180bda94212": "331ec0706a4e3f3e7eb90ef821b4b8e7",
".git/objects/7d/7214d94b1d46b6ffb14131f47b7fa63cd33641": "c79c4b44fc0bed10e3b990a098f96fad",
".git/objects/7e/b8b9d049f83bf09959a6eb79af90633a6e9cf4": "42f92b045716e95cb70ff74d7af1b3a7",
".git/objects/7f/cd78d4ac200458376110474d78b008dc988ace": "40c69de67b81fd18345b0f4862627dbd",
".git/objects/82/419970f9a036fca2b81eb93607cc2e2efcb296": "38e0c0cb0e9dcb92c4abdd4819953541",
".git/objects/83/9aba4576507473047ef7b4321915bcc08de9f1": "f7dfb4c2e53a6ec7274e9fa49c3104c1",
".git/objects/84/29841ba737acbbf5a4c888114eb9ab49380ce9": "ad7edcbba869b4284ce5913bca8b4a3e",
".git/objects/86/3579d6983a44390f417480bb6406cca408238c": "f1c8e444041f28e37edb28ebcf692b61",
".git/objects/86/e221ddbbcf4724ce51e76062da52001ee6fd23": "9c1fa613fc45f6da3f253bcf9fe70b5d",
".git/objects/88/56c74cf86cf1bf410fced77b2e4894e1400033": "bde128b71843d1d6de578316c1d2ca64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/a030ddfa4c0d0a601009134da7b36e00b411fe": "c84795073481f7fa934ac14a7d46d00f",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/4f2106b6c87bab961dccced1e9f6985b1ca970": "1485acd81993524da437ee9a70700777",
".git/objects/93/bcd9c0d69f207a6712bf6bcc8b3c67a5697539": "c80797ac8f9a47bb7332fd5e31bc3bc4",
".git/objects/94/6e68ca74edac1a873238401115b26be049b706": "3b03ddef81fb7309dc080a16cd7e5e25",
".git/objects/95/9eac4f8438de16006fb9754c5c96f4d812fe39": "581b3e54ba3f9552a623cf631a93e28c",
".git/objects/96/054b85b8c5160ae65b7d51a34be6b0261f74a5": "d09ffe8dee1dc316d0a39015b08abebc",
".git/objects/96/210d4e1fa0a5433e79bac4749f6f77975ffd23": "6e84f7fdfc298d384da005afa590f075",
".git/objects/97/5fdeb3ec6552add6c44536a34d5152f1e5b6c2": "034d82f2b63d298fd1f3745407b57e90",
".git/objects/98/06f14f77013bee960dbb1e556d796dad47167c": "8a7bf50566e1776afb6c5a7a5ee6f665",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/c1278839092fe8ea7c207b0c7daca66f54a258": "06fdc5b3779d1834cd4ee16c92d8a82e",
".git/objects/a2/f1674bfe93e74639727c550e3e89457ff7fa0a": "1f7f4fbadadb45338e2b7a850bc65767",
".git/objects/a4/0c42ffb93791a3bac5bbbeb7b9b0e1691402ba": "d586e503accdcd0b86a1ed40bcec9459",
".git/objects/a4/d5866dcc54329ce9c166b42bd888f94b8ac324": "fa4f2b7d11e0c37bf7d70821c52ab35c",
".git/objects/a6/124de723c4345faf0eb25dfe898948c8b16844": "a224c0d76f47fe0a2e61318252b0e421",
".git/objects/a6/e259665283b20ccfc901fb0d4ca06c5f11f634": "9d50c9bb330fce2995c382a36a599071",
".git/objects/a9/b11ce42265fc999749a75f4bb79f63ab463ef2": "17a4d45145b021950e76a9ac62682f18",
".git/objects/ab/cfc3aa50ea06fb87a4964473235769927dcda9": "109c7e6111c52094f88adf118d53a832",
".git/objects/ab/ea599831fc391a92a86b346e9427d9ed4cfe0f": "07116caed7e221e0a606970a33276fb3",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/892066707c1904a38b5d277135f36f0692ff10": "73561cc0e2ff0f959ac3eeb082a4a6a8",
".git/objects/b1/ee6e464f2c3f8ed3bb62e521da4b526663c067": "0a66673ded047f332e5c49ae0f83cf7c",
".git/objects/b3/46074167b0a3d377db955adf47c9e20e6ef155": "3e5b078ca09818ff8197faf3c4fad9f8",
".git/objects/b6/ee3895c257d4c8b799e4e3e418e9fae86d0965": "0b35d14fe9a81b1566abd43c31c1b975",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/379762514252eb7564f0fef2b9b861c2a0be9a": "1946ae9774e14f85918e64f02384c2c3",
".git/objects/bb/cbaa0a95c9d3296fe924b43ee696a0522b8de0": "9e143bb6a2af45bf5a8de8cc3073ab62",
".git/objects/bf/60dfb1d36ec1039a272f6c6358c83107b43cb2": "249583d00c5dc11fed1c461c65b3da77",
".git/objects/c0/ba0034e5a33bd29cdcea83ef6da1cc754a68a1": "2b862e86b60721c5b9b560e11af07346",
".git/objects/c1/26f9ff909313d6d2f13a8d83698ed85c529665": "88ed91a88ec71e36fc8444c5ff64a257",
".git/objects/c1/d1ee37b64285d252b023c57b113d54e2321347": "bfd0023ef6adca3b64b8b6267e70c48f",
".git/objects/c1/ea1bbe91959f395e24dd439b70f6cdbbb546c9": "6f55f2d566705b9a0074129cfcfaf09c",
".git/objects/c2/8f61acd96d517fc0290ee83d2f4fd216047ef2": "1b6b3c9ac1b0e1eeb5e561989ae3ff90",
".git/objects/c3/cd35c1eda636f4cd0bd088aa50726575b4ee40": "f9f999813d137d6b71c223b7c74ea779",
".git/objects/c4/f21bdd6a09e1ab3c412c1a032acde073689c61": "98297e8ed9890b7d60b45e180ba33998",
".git/objects/c5/1b48c0d1d5a6be1c2cb281ab2bd1d8238ad5fd": "ac331360cbb21c4a37ddc5978866b3af",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/a333d6a0a2b83950252b172a4db1f5ce1e8de3": "c11ab016184b8b3ccb01e797be16db33",
".git/objects/cd/fb83df2f2f621d232b38ea40aaa1582c91e0e5": "508f60da92ab856474944bbd3a8b585f",
".git/objects/cf/14feb9342fafdcaeccf5d8b7beaae34605b6fa": "0e5a66db03097287456aca0f72268ad1",
".git/objects/d0/3dd581a593d0ba6dc5414d4075b86aa209670a": "34b149270f5194bf653baa8c0a581309",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/572eaff17fe1558ab87a9aa308126a95b9a4c0": "5ffca175b29a4bdb8ac8984e3dbdebb9",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/34364d1f4236c9467c29a36830089a244dcb23": "c7fdb3e322e7dd9f3b01a3ed6ada0aa3",
".git/objects/d8/e100cfc8b31c791d66787c8d4f4b9c650cacd9": "c7cad60993e7d3f1eb6e1157600104d1",
".git/objects/d9/7ee63355a6f493ca317853f381e7bd5d71f2e4": "22139d2b6e0b6d44d91f76bba4109548",
".git/objects/d9/db3d9fe8356b40c25b3da004ca8655ad526543": "a55c4295f5483e60baaddf3f5dd7ce92",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/3d6045f9492f6b48c3d9c1cfed04d3c0cd5078": "9a7ca0e78163b254b8118f7f63cbe355",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/83578b3eba3627d0b6bed2d523e90da1e09b95": "8e72804975eb883acb0167655eb41a72",
".git/objects/e3/62cb40146e9a01a43c725bdd96efa9a7588091": "68294c0e7b9bbce8d644b1a8c71d2c74",
".git/objects/e4/53533f8e4ce6f942aa29f652700d0bdc4e62fb": "6770055ca485249c84a4f8dea9cca18a",
".git/objects/e5/5f712979f6da1d9bea27595c29eab4f6e880c1": "70625d43b09e912559c8dc22d7a1502e",
".git/objects/e6/d6fea55a47b594531d6fcb0d75d6ca0804bbd3": "e42158ecf83766638231ef2c23062b91",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5934d348b36603fa4dc23e329773c509778240": "f8c4fa79f0e3b8e86591933305af6503",
".git/objects/ee/e08d96e159981558efbfe532f579deb36f9dfe": "60bd96fd34244ec7ee885f3075dbd61a",
".git/objects/f1/0443ffdce3ab8d324d3a175b34a735bcae8e8b": "61a2b954c71d2a5a3e5c9a263078b511",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/682636662fb79ace46589b833078f8172f7fb2": "c1046200f0105325063139f6a6c33189",
".git/objects/f4/7e1ce59ba0bb8687901e0f9e950d838ec82b30": "30d8be04e776bb8d72aaf2d77b31e7f6",
".git/objects/f6/10750485695fedb6a4fdb8c251164a80a73985": "01c648be91a91e8cc4ca9368e1d19666",
".git/objects/f7/6159c6d82e35e1356522f41b31bbe7d6c70ed0": "95fe15d704f8d7051a74f8e0972af8be",
".git/objects/f8/50273452b26321a7cbcc18b50cb449410355da": "bb7b6bbc67fc952da4708a65e6ec12d5",
".git/objects/fb/db3c0412bdc8fc2e1d7343a2a388bf16a95be6": "b7b496a09418ce4f661ffc171e80f3d5",
".git/objects/fd/fd4ccc1ae25d11d7f28fd71efa69431c8e719e": "8b4776c04ec1f5f7d271f421e6667033",
".git/refs/heads/gh-pages": "836d081a90bea23cb8a94cb335343d88",
".git/refs/remotes/origin/gh-pages": "836d081a90bea23cb8a94cb335343d88",
"assets/AssetManifest.bin": "58204c2b6f1e16efb8b2f3fa582dee49",
"assets/AssetManifest.bin.json": "cf11e17ae197ced8479c2550e977b04b",
"assets/AssetManifest.json": "a8b47dbb3fadff9c2c9e371a8601997d",
"assets/assets/font/montserrat/Montserrat-Bold.otf": "9c71d42b6a840ecfda8fc555040a1c76",
"assets/assets/font/montserrat/Montserrat-Medium.otf": "d815b0a29adf3450c55f56e2fb813be4",
"assets/assets/font/montserrat/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/font/montserrat/Montserrat-SemiBold.otf": "bb3740d350b0186ce32b5678972bf061",
"assets/assets/image/flags/china.png": "d50f1039cb3d11e16dcd4d6b8843e438",
"assets/assets/image/flags/france.png": "7431536e2942d51c41da372ed284f00e",
"assets/assets/image/flags/germany.png": "29bb72c6f6547003aa40ab08ff8f9c83",
"assets/assets/image/flags/india.png": "a164838297f204705e13cc1556e1d22b",
"assets/assets/image/flags/italy.png": "1e30844869d670a614354b69c783ccfe",
"assets/assets/image/flags/japan.png": "b14bb068b769f865ae068af96263a69e",
"assets/assets/image/flags/russia.png": "7c1a6e2d760cfa3b1c3e8100a1eef5a3",
"assets/assets/image/flags/spain.png": "6fdab1f1ad9bdec6150ff446f9b7d4b3",
"assets/assets/image/flags/uk.png": "1f0567b161c9dec3da09284a89e3ea53",
"assets/assets/image/flags/usa.png": "2cc65a4d091091ed2430fee431a08497",
"assets/assets/image/home/backarrow.png": "75f52a50958ee29da8db21f2f6acc9b3",
"assets/assets/image/home/dropdown.png": "166d11939794d8822557229c5131753f",
"assets/assets/image/home/google.png": "c3f3b26d378c9c4f446acf47d0a01f29",
"assets/assets/image/home/google_theme.png": "85b6be472e8f6585c3efce89a072bfb3",
"assets/assets/image/home/Heart.png": "edefb75d8b0ec93cdcd3df8585515752",
"assets/assets/image/home/home.png": "2b00375a2b3594a03ee86c153759f99f",
"assets/assets/image/home/live.png": "abbd76897f2de6fb84bd9e531cdb2d40",
"assets/assets/image/home/loader.gif": "775cafb4a329633962f267adebb0ca04",
"assets/assets/image/home/loader_big.gif": "6facafe73b373318751f89aeeab2736f",
"assets/assets/image/home/NEWS.png": "1489650aec94f4d9b2121a24e7b2dc43",
"assets/assets/image/home/newsIcon.jpg": "9856911d922930787c279a68165b7678",
"assets/assets/image/home/nextarrow.png": "cfdd70cec3bbbc2dd63f9447c6d55b14",
"assets/assets/image/home/play.png": "e26c83dc7fb07c6166b4b8bed2f6d841",
"assets/assets/image/home/stop.png": "bed662f007d6f146030ba9ad8602ed83",
"assets/assets/image/home/translate_big.png": "635c8b023ad05096c10105c3e3d31271",
"assets/assets/image/home/translate_small.png": "90343116e97a9534352778e35f3bc64b",
"assets/assets/image/home/truemark.png": "6bcfcff0d7bf8d1b5a88523b4637dd6e",
"assets/assets/image/home/unfavorite.png": "43591fdf51a9d8b28995bf6a3f5c59fb",
"assets/assets/image/intro/Group%2520165.png": "b10f80c0fde4a69610a1ad4a032e2013",
"assets/assets/image/intro/Group%2520166.png": "2ef9a88d7f3c456357da1490c4db02fb",
"assets/assets/image/intro/Group%2520167.png": "3ab4d6f4874a999d90b29917d1bd154a",
"assets/assets/image/intro/Group%2520170.png": "87bcccf3b89c4a04f427670ac192d952",
"assets/assets/image/intro/intro1.png": "41cfd2495cc39153927c5cd8d910787b",
"assets/assets/image/intro/intro2.png": "fbaad3bc671daa5b3205edd9e384a515",
"assets/assets/image/intro/intro3.png": "a9ca0f0c761b578e2dce9182ac2247dc",
"assets/assets/image/intro/intro4.png": "788f0f9d2c8f8d6a78b470266f45ea91",
"assets/assets/image/intro/splash.gif": "32536d612f2ea5d318306a7b9498cd2a",
"assets/assets/image/news/china/chinaDaily.png": "f9455f19912fd10d30a89d197b9d9976",
"assets/assets/image/news/china/globalTimes.png": "43e625078b8e4e046023f25e90a4ef3e",
"assets/assets/image/news/china/peoplesDaily.png": "beff7c8c74af10a1f6be644960834ef2",
"assets/assets/image/news/france/leFigaro.png": "ef360a5d2aa78e596bfb143bcc7a5d4a",
"assets/assets/image/news/france/leMonde.png": "869ee113e2e17e0fb9c0e0768fbf9846",
"assets/assets/image/news/france/lePerisian.png": "b7d8eaf61de20da90196a6ac0e9062cc",
"assets/assets/image/news/france/lequipe.png": "ad01204c207ac122b060439c00a307e6",
"assets/assets/image/news/france/liberation.png": "d28a5173594cf12a78196bb3a88085ee",
"assets/assets/image/news/germany/bild.png": "30a7bcfb580cb9dc38394f6f7c04e57b",
"assets/assets/image/news/germany/D&W.png": "7076854e3c4b31b2b332718aaefcbf30",
"assets/assets/image/news/germany/Die_Welt.png": "d2e903f7b6df8a4a4f497b1432a3f148",
"assets/assets/image/news/germany/frankfurter_Allgemeine.png": "7ab8c488c0175fbc9293e4bc1c8527eb",
"assets/assets/image/news/germany/handelsbatt.png": "833bea9e8f306af17d28cd2749aff4f9",
"assets/assets/image/news/india/ananda.png": "62579648830f51b4c714c05462068802",
"assets/assets/image/news/india/dainikBhaskar.png": "d4780e546665d341d9354e38eb33eeb0",
"assets/assets/image/news/india/dinamalar.png": "55c6645ec13df94dc5ff2550d2fe307c",
"assets/assets/image/news/india/ennadu.png": "7677e421540c598092dab8ade81263a6",
"assets/assets/image/news/india/gujarat_samachar.png": "90c6a8e9855bfa887ebd4c5f7bcac79a",
"assets/assets/image/news/india/hindustantimes.png": "92938906d7fc8322759c15facbfb55c1",
"assets/assets/image/news/india/indianExpress.png": "958316885c20888c63514a056ce34b91",
"assets/assets/image/news/india/kashmir.png": "8393896b0824399a23fe3fd7e0f8bb8d",
"assets/assets/image/news/india/lokmat.png": "b985d19200c55f1ec8c5d80da1c547c5",
"assets/assets/image/news/india/mangalam.png": "e513452edec819a06f17f8075fdfcd86",
"assets/assets/image/news/india/punjabkesri.png": "a910a8e5946ac69def9f14a96655af05",
"assets/assets/image/news/india/TheEconomicTimes.png": "5c39c1752774b38732e23393f9dcf328",
"assets/assets/image/news/india/times%2520of%2520india.png": "2a56e4862435032d5987ca4a47a8041e",
"assets/assets/image/news/italy/avvenire.png": "e97af5d753c1e77ab7c3c970a9266473",
"assets/assets/image/news/italy/corrireDellaSera.png": "1e5843b04ed4d59099ad7f3fcdc7e95f",
"assets/assets/image/news/italy/Il_Gazzettino.png": "a554a0c9cf80dc3006738309ab5b17d3",
"assets/assets/image/news/italy/La_Repubblica.png": "ed3fbf7adcd5093612f02eeda40eba60",
"assets/assets/image/news/italy/la_stampa.png": "fcd02d48ed73712f09b94433cce7e992",
"assets/assets/image/news/japan/japannews.png": "351ecdf31e24358a8aed3ca4edd3ef05",
"assets/assets/image/news/japan/japantimes.png": "4606acb5426ffe494a791c4c54e5a81f",
"assets/assets/image/news/japan/japanToday.png": "ff7375c26d5cc2f57fe33d7f656e2eb9",
"assets/assets/image/news/japan/nikkeiAsia.png": "d236ac0febe180378355c226fca0ee77",
"assets/assets/image/news/japan/theAsahiShimbun.png": "92e03ab951f9b2a5d5867719510907b6",
"assets/assets/image/news/russia/argumentryFacty.png": "c1903ab6af46cb0fd9cd64037470d602",
"assets/assets/image/news/russia/kommersant.png": "5737a75e574b0d8a3db56f2590927ffc",
"assets/assets/image/news/russia/komsomolskayaPravda.png": "2cf6bd854bc444880b76ca599c142aa1",
"assets/assets/image/news/russia/theMoscowTimes.png": "e14b4187392b180579b26f7d75aee2ad",
"assets/assets/image/news/russia/trud.png": "36c52081f1d6cfb525fd700657c8f3a8",
"assets/assets/image/news/spain/abc_News.png": "8ff2e438d521fb2d8d27c214f898842f",
"assets/assets/image/news/spain/diariovasco.png": "e7995c5f92ecb3942f9088764b97ec08",
"assets/assets/image/news/spain/el_Mundo.png": "4281392d9fdd35d0a05a71f00d8220ae",
"assets/assets/image/news/spain/el_Pais.png": "853eb9b38459906f25ed06bf1da1e1eb",
"assets/assets/image/news/spain/la_Vanguardia.png": "105bd3cf7d80b34babb1ffce98f2bcef",
"assets/assets/image/news/uk/dailymail.png": "64707dffd94c2e55ad61f7f5b4b91895",
"assets/assets/image/news/uk/metro.png": "adf17e2b722689133fac5833cee3b0d7",
"assets/assets/image/news/uk/mirror.png": "eb75a0ffecbbc4eb5c4b7d310db25bb3",
"assets/assets/image/news/uk/thesun.png": "d8477ef2adee7c83e48e513f15cc1e49",
"assets/assets/image/news/uk/theTimes.png": "ee1e0ce4eddbed9d6baedeb18d9af208",
"assets/assets/image/news/usa/cicagoTribune.png": "bb6273beeff8f0b8d93675d2264ed9a9",
"assets/assets/image/news/usa/deseretNews.png": "983c99197dce9bd1f7101ebfc50a32f8",
"assets/assets/image/news/usa/NYpost.png": "7f1fce96e8ff75658eb245411ec504ad",
"assets/assets/image/news/usa/USAtoday.png": "0a39894cfabf1f43024bad3de1209760",
"assets/assets/image/news/usa/WSJ.png": "5e758e233d1f835f637660bbde402a83",
"assets/FontManifest.json": "81c90913f3d587bb16a0c8e5707a159a",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "a6481225c21a83b02276f76acd1b9d21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "af9e6e0d8e6c2717ffdb2d9d4ada5509",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c90363fbf58b93eb5271878f5c53a70d",
"/": "c90363fbf58b93eb5271878f5c53a70d",
"main.dart.js": "517e1172435e60b71d50fce066a596aa",
"manifest.json": "a32ab0eb001625a8d2612b54eb339056",
"version.json": "b5bbf8680e067fa5b5e63130b25cbe97"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
