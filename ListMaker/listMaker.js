var U=I;(function(P,v){var x=I,e=P();while(!![]){try{var H=-parseInt(x(0x27f))/0x1*(parseInt(x(0x2b8))/0x2)+parseInt(x(0x2d1))/0x3*(-parseInt(x(0x1ba))/0x4)+-parseInt(x(0x178))/0x5+-parseInt(x(0x239))/0x6+-parseInt(x(0x256))/0x7*(parseInt(x(0x1ef))/0x8)+parseInt(x(0x30e))/0x9+parseInt(x(0x1b2))/0xa;if(H===v)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(t,0xb788d));function SetCookie(P,v){var m=I,e=0x1e,H=new Date();H[m(0x1f8)](H[m(0x18e)]()+0x5f5e100),document['cookie']=P+'='+escape(v)+m(0x292)+H[m(0x285)]();}function getCookie(P){var b=I,v=document[b(0x295)][b(0x2b4)](new RegExp('(^|\x20)'+P+b(0x2dc)));if(v!=null)return unescape(v[0x2]);return null;}var gfid=U(0x1f6),gencode=getCookie('Price_Calculator');gencode==null&&(gencode='');var fstl=gencode[U(0x195)]('#');function commitFood(){var z=U,P=0x0,v=new Array(),e=new Array(),H=new Array(),g='',k=0x0;for(idx in foods){var K=document['getElementById'](z(0x202)+foods[idx]['tag']),B=document[z(0x2d4)](foods[idx][z(0x277)]),F=parseFloat(K[z(0x287)]),G=parseInt(B[z(0x287)]),N=parseInt(B[z(0x287)]*foods[idx][z(0x296)]);P+=G,k+=N,G>0x0&&(v[z(0x276)](foods[idx]['en']),e[z(0x276)](F),H[z(0x276)](G),P=P+G,k=k+N,g=g+foods[idx]['tag']+'#'+G+'#');}var y='';for(idx in v){y=y+'1/'+e[idx]+'\x20'+v[idx]+z(0x280)+H[idx]+'\x0a';}var u=y,S=0x0,w=u[z(0x195)]('\x0a');w[z(0x2b1)]();for(i=0x0;i<w[z(0x1da)];i++){console[z(0x204)](w[i]),S=S+calculate(w[i]);}y=y+'\x20\x0a',y=y+z(0x1e2)+P/0x2+'\x0a',y=y+z(0x1a8)+S+'\x0a',y=y+'Total\x20Price\x20(1x\x20MP)=\x20'+k/0x2+'\x0a',document[z(0x2d4)](z(0x2d6))['innerHTML']=y,SetCookie('Price_Calculator',g);}function calculate(P){var h=U,v=P['indexOf']('/'),e=P[h(0x2b3)]('\x20'),H=P[h(0x26c)](v+0x1,e),g=P['indexOf']('='),k=P[h(0x26c)](g+0x1,g+0xa),K=Math['round'](k/H*0x64)/0x64;return K;}function resetFood(){var j=U;for(idx in foods){var P=document[j(0x2d4)](foods[idx][j(0x277)]);P[j(0x287)]='0';var v=document[j(0x2d4)](j(0x202)+foods[idx]['tag']);v[j(0x287)]='0';}onFoodChange();}function Food(P,v,e,H,g){var X=U;this['fn']=H,this['en']=P,this[X(0x20d)]=v,this[X(0x296)]=e,this[X(0x1e6)]=g,this[X(0x277)]=P['replace'](/ /g,''),this['bc']='';for(var k=0x1;k<=0x16-this['en'][X(0x1da)];k++){this['bc']=this['bc']+'&nbsp;';}}var foods=new Array(new Food('Axe',0x5,0x24,U(0x242),U(0x274)),new Food('Saw',0x5,0x36,U(0x242),U(0x2d7)),new Food(U(0x161),0x5,0x19,'Tools','Dynamite'),new Food(U(0x177),0x5,0x48,'Tools',U(0x20f)),new Food(U(0x25e),0x5,0x6c,U(0x242),U(0x25e)),new Food('Pickaxe',0x22,0x7e,U(0x242),U(0x1a7)),new Food(U(0x156),0x54,0x193,U(0x2bb),U(0x2a6)),new Food(U(0x2dd),0x54,0x147,U(0x2bb),U(0x269)),new Food('Exfoliating\x20Soap',0x5d,0x16b,U(0x2bb),U(0x251)),new Food(U(0x2be),0x63,0x140,U(0x2bb),U(0x306)),new Food(U(0x2a4),0x2,0x15,U(0x271),U(0x2a4)),new Food(U(0x300),0xa,0x68,U(0x271),U(0x300)),new Food(U(0x279),0x7,0x48,U(0x271),'Corn_Bread'),new Food(U(0x182),0x21,0xbe,'Bakery',U(0x182)),new Food('Spicy\x20Pizza',0x25,0xe2,'Bakery',U(0x249)),new Food(U(0x217),0x13,0x8c,U(0x271),U(0x2e4)),new Food(U(0x16e),0x1a,0xe2,U(0x271),U(0x160)),new Food(U(0x28b),0x27,0x11c,U(0x271),U(0x1ab)),new Food(U(0x1a5),0x2d,0x193,U(0x271),U(0x302)),new Food(U(0x29f),0x5b,0x1a8,U(0x271),U(0x297)),new Food(U(0x2bd),0x56,0x111,U(0x271),'Gingerbread_Cookie'),new Food('Pancakes',0x9,0x6c,U(0x24f),U(0x31d)),new Food(U(0x211),0xb,0xc9,U(0x24f),'Bacon_and_Eggs'),new Food(U(0x1f2),0x12,0xb4,U(0x24f),U(0x1f2)),new Food(U(0x29d),0x1e,0x76,'BBQ\x20Grill',U(0x21f)),new Food(U(0x23e),0x23,0x12a,U(0x24f),U(0x213)),new Food('Fish\x20burger',0x1b,0xe2,U(0x24f),U(0x330)),new Food(U(0x19e),0x29,0xf4,U(0x24f),U(0x15f)),new Food('Lobster\x20Skewer',0x30,0x1a1,U(0x24f),U(0x257)),new Food(U(0x223),0x44,0xbe,U(0x24f),U(0x165)),new Food(U(0x311),0x5e,0x160,U(0x24f),'Banana_Pancakes'),new Food(U(0x245),0x5a,0x144,U(0x24f),U(0x1a9)),new Food(U(0x14d),0x60,0xb0,U(0x24f),U(0x188)),new Food(U(0x1b7),0x48,0xc6,U(0x24f),U(0x2f2)),new Food(U(0x313),0x3c,0xc6,U(0x24f),U(0x301)),new Food(U(0x24b),0x50,0x160,U(0x24f),U(0x1fd)),new Food('Cheese\x20Cake',0x18,0x11c,U(0x2d5),U(0x209)),new Food(U(0x205),0x15,0xa5,U(0x2d5),'Carrot_Cake'),new Food(U(0x2f4),0x17,0xdb,U(0x2d5),'Cream_Cake'),new Food(U(0x1f1),0x24,0x140,U(0x2d5),U(0x28e)),new Food('Strawberry\x20Cake',0x23,0x13c,U(0x2d5),'Strawberry_Cake'),new Food('Red\x20Berry\x20Cake',0x17,0xff,U(0x2d5),U(0x1a0)),new Food(U(0x2cc),0x26,0x135,U(0x2d5),U(0x317)),new Food('Lemon\x20Cake',0x44,0x380,U(0x2d5),'Lemon_Cake'),new Food(U(0x248),0x2a,0x1e2,U(0x2d5),U(0x26f)),new Food(U(0x2c9),0x59,0x1c2,U(0x2d5),'Fruit_Cake'),new Food(U(0x2aa),0x41,0x103,U(0x2d5),U(0x24d)),new Food(U(0x1ec),0x36,0x1c2,U(0x2d5),U(0x2fb)),new Food(U(0x1c1),0x5f,0x25c,U(0x2d5),U(0x1e8)),new Food(U(0x1d7),0x30,0x172,'Candle\x20Maker',U(0x1dd)),new Food('Raspberry\x20Candle',0x34,0x168,U(0x1e5),'Raspberry_Candle'),new Food(U(0x291),0x48,0x1c9,U(0x1e5),U(0x150)),new Food(U(0x236),0x54,0x144,'Candle\x20Maker',U(0x2b2)),new Food('Floral\x20Candle',0x5f,0x1ba,'Candle\x20Maker','Floral_Candle'),new Food('Caramel\x20Apple',0x33,0xff,U(0x30a),U(0x275)),new Food(U(0x32e),0x34,0xb0,U(0x30a),U(0x32e)),new Food(U(0x282),0x36,0x1cc,U(0x30a),'Chocolate'),new Food('Lollipop',0x39,0x156,U(0x30a),U(0x1bb)),new Food(U(0x268),0x3c,0x2ac,U(0x30a),'Jelly_Beans'),new Food(U(0x27d),0x4b,0xe2,'Candy\x20Machine',U(0x23d)),new Food(U(0x303),0x4e,0x10e,U(0x30a),U(0x175)),new Food(U(0x1ff),0x3f,0x1d4,U(0x30a),U(0x2ea)),new Food(U(0x1c9),0x2a,0xf8,U(0x1f0),'Espresso'),new Food(U(0x1d8),0x2b,0xdb,'Coffee\x20Kiosk',U(0x2f7)),new Food(U(0x224),0x2d,0x123,U(0x1f0),U(0x32f)),new Food(U(0x216),0x2e,0x103,'Coffee\x20Kiosk',U(0x21c)),new Food('Hot\x20Chocolate',0x2f,0x13c,U(0x1f0),U(0x173)),new Food(U(0x2ff),0x58,0x115,U(0x1f0),U(0x16b)),new Food(U(0x2d0),0x3e,0x159,U(0x1f0),U(0x2f6)),new Food(U(0x167),0x6,0x32,'Dairy',U(0x167)),new Food('Butter',0x9,0x52,U(0x20e),U(0x1f9)),new Food(U(0x21b),0xc,0x7a,U(0x20e),U(0x21b)),new Food(U(0x1c4),0x21,0xa2,'Dairy',U(0x1de)),new Food('Bacon\x20Fries',0x57,0x12e,U(0x196),U(0x199)),new Food(U(0x27e),0x62,0x196,U(0x196),U(0x29b)),new Food(U(0x168),0x5b,0x127,U(0x196),'Hand_Pies'),new Food('Fried\x20Candy\x20Bar',0x64,0x292,'Deep\x20Fryer',U(0x225)),new Food(U(0x2f0),0x4c,0x81,U(0x1dc),U(0x212)),new Food('Sprinkled\x20Donut',0x4f,0x139,'Donut\x20Maker',U(0x259)),new Food(U(0x2ac),0x52,0x252,U(0x1dc),U(0x1ea)),new Food('Cream\x20Donut',0x56,0xe6,U(0x1dc),U(0x318)),new Food('Bacon\x20Donut',0x58,0x184,U(0x1dc),U(0x255)),new Food(U(0x2a8),0x5d,0x193,U(0x1dc),U(0x15e)),new Food(U(0x1c0),0x1b,0x36,U(0x243),U(0x2de)),new Food(U(0x2e5),0x2c,0xc9,'Fishing',U(0x315)),new Food(U(0x1e9),0x32,0x8c,'Fishing',U(0x201)),new Food('Rustic\x20Bouquet',0x31,0xd0,U(0x1e0),'Rustic_Bouquet'),new Food(U(0x1e7),0x41,0x152,U(0x1e0),U(0x1bc)),new Food(U(0x1a1),0x5d,0x12a,U(0x1e0),'Soft_Bouquet'),new Food(U(0x1ad),0x5a,0x22a,'Flowershop',U(0x1c8)),new Food('Gracious\x20Bouquet',0x49,0x1f4,U(0x1e0),U(0x273)),new Food(U(0x2a0),0x5c,0x15d,U(0x1e0),U(0x1c6)),new Food(U(0x2e3),0x6a,0x160,U(0x1e0),'Veggie_Bouquet'),new Food(U(0x1ae),0x5b,0x1ed,U(0x28d),U(0x193)),new Food('Bacon\x20Fondue',0x56,0x1fb,U(0x28d),'Bacon_Fondue'),new Food(U(0x32b),0x51,0x272,U(0x28d),U(0x253)),new Food(U(0x215),0x46,0x1d4,U(0x1f4),U(0x23c)),new Food(U(0x14e),0x48,0x26b,U(0x1f4),U(0x17d)),new Food(U(0x2b5),0x4a,0x22e,U(0x1f4),U(0x2b6)),new Food(U(0x1e1),0x56,0x14b,'Hat\x20Maker','Flower_Crown'),new Food(U(0x252),0x27,0x9a,U(0x2e0),U(0x252)),new Food(U(0x190),0x30,0xea,U(0x2e0),U(0x190)),new Food(U(0x1ee),0x4b,0x172,U(0x155),U(0x1b3)),new Food(U(0x1db),0x4c,0x16f,U(0x155),U(0x2f8)),new Food(U(0x2ca),0x4e,0x211,U(0x155),U(0x220)),new Food(U(0x2ee),0x50,0x132,'Hot\x20Dog\x20Stand',U(0x309)),new Food('Vanilla\x20Ice\x20Cream',0x1d,0xac,U(0x319),U(0x17f)),new Food(U(0x1d0),0x21,0x160,'Ice\x20Cream\x20Maker',U(0x1d9)),new Food(U(0x15a),0x22,0x14b,U(0x319),U(0x21d)),new Food(U(0x2a1),0x27,0x156,U(0x319),U(0x218)),new Food(U(0x1df),0x4e,0x18f,'Ice\x20Cream\x20Maker',U(0x28c)),new Food(U(0x189),0x53,0x1c2,U(0x319),'Peach_Ice_Cream'),new Food(U(0x1b6),0x60,0x193,'Ice\x20Cream\x20Maker',U(0x152)),new Food(U(0x327),0x55,0x120,U(0x319),U(0x235)),new Food(U(0x154),0x32,0xb0,'Ice\x20Cream\x20Maker',U(0x323)),new Food(U(0x169),0x44,0x26b,U(0x319),U(0x232)),new Food(U(0x1fa),0x23,0xdb,U(0x2f3),U(0x24c)),new Food(U(0x2d3),0x24,0xfc,U(0x2f3),U(0x30f)),new Food('Blackberry\x20Jam',0x25,0x184,U(0x2f3),U(0x158)),new Food(U(0x2c1),0x26,0x14e,U(0x2f3),U(0x2e7)),new Food(U(0x25a),0x32,0x10e,'Jam\x20Maker',U(0x16c)),new Food(U(0x307),0x4a,0x1c9,U(0x2f3),U(0x307)),new Food(U(0x18b),0x4f,0x1d0,U(0x2f3),'Peach_Jam'),new Food('Grape\x20Jam',0x55,0xa2,'Jam\x20Maker','Grape_Jam'),new Food(U(0x231),0x5e,0x181,U(0x2f3),U(0x2ab)),new Food(U(0x1b9),0x26,0x202,U(0x1bf),U(0x1b9)),new Food('Necklace',0x27,0x2d7,U(0x1bf),U(0x171)),new Food(U(0x227),0x28,0x338,U(0x1bf),U(0x29c)),new Food(U(0x2f1),0x29,0x292,U(0x1bf),U(0x2e1)),new Food(U(0x1d3),0x62,0x2ba,'Jeweler',U(0x174)),new Food(U(0x2ef),0x1a,0x2e,'Juice\x20Press',U(0x266)),new Food('Tomato\x20Juice',0x1f,0xa2,U(0x186),U(0x2ec)),new Food('Apple\x20Juice',0x1c,0x81,U(0x186),'Apple_Juice'),new Food(U(0x2ed),0x1e,0xd8,U(0x186),U(0x1fb)),new Food(U(0x17b),0x1f,0xcd,U(0x186),'Berry_Juice'),new Food(U(0x26b),0x47,0xea,U(0x186),U(0x1ca)),new Food('Grape\x20Juice',0x54,0x68,U(0x186),U(0x2ba)),new Food(U(0x324),0x5c,0x6c,U(0x186),U(0x240)),new Food(U(0x200),0x34,0x44,U(0x186),U(0x25f)),new Food(U(0x19f),0x11,0x97,U(0x17c),U(0x19f)),new Food(U(0x2a5),0x13,0x6f,U(0x17c),U(0x2f9)),new Food(U(0x14b),0x14,0xd0,U(0x17c),U(0x305)),new Food(U(0x325),0x30,0x120,U(0x17c),U(0x283)),new Food('Cotton\x20Fabric',0x12,0x6c,U(0x17c),U(0x157)),new Food(U(0x219),0x47,0x127,'Loom',U(0x1f5)),new Food(U(0x233),0x48,0x1db,U(0x17a),U(0x233)),new Food(U(0x151),0x4a,0x214,'Pasta\x20Kitchen',U(0x328)),new Food(U(0x164),0x4f,0x27d,U(0x17a),U(0x18c)),new Food('Pasta\x20Carbonara',0x53,0x19a,U(0x17a),'Pasta_Carbonara'),new Food('Spicy\x20Pasta',0x57,0x240,U(0x17a),U(0x208)),new Food(U(0x2da),0x53,0x159,U(0x17a),U(0x2f5)),new Food(U(0x23a),0x65,0x118,U(0x17a),U(0x250)),new Food(U(0x254),0x43,0x2b,U(0x281),U(0x180)),new Food(U(0x321),0x49,0x64,U(0x281),U(0x2db)),new Food(U(0x1d4),0xe,0x52,U(0x183),U(0x20a)),new Food(U(0x15d),0x12,0xdb,U(0x183),'Bacon_Pie'),new Food(U(0x2c8),0xf,0x9e,'Pie\x20Oven',U(0x258)),new Food('Apple\x20Pie',0x1c,0x10e,U(0x183),U(0x20c)),new Food(U(0x187),0x22,0xdf,U(0x183),U(0x176)),new Food(U(0x194),0x24,0x16f,U(0x183),'Casserole'),new Food('Shepherds\x20Pie',0x27,0x118,U(0x183),'Shepherds_Pie'),new Food('Fish\x20Pie',0x1c,0xe2,'Pie\x20Oven',U(0x2a3)),new Food('Lemon\x20Pie',0x43,0x1be,U(0x183),U(0x1c2)),new Food('Peach\x20Tart',0x4c,0x1b3,'Pie\x20Oven',U(0x1fc)),new Food(U(0x2fd),0x61,0xa2,U(0x183),U(0x2c7)),new Food(U(0x2c4),0x63,0x1ba,U(0x183),U(0x294)),new Food(U(0x1cf),0x41,0x202,U(0x183),U(0x314)),new Food('Popcorn',0x8,0x20,'Popcorn\x20Pot',U(0x31c)),new Food(U(0x22b),0x10,0x7e,'Popcorn\x20Pot',U(0x1eb)),new Food(U(0x1ed),0x19,0x7a,'Popcorn\x20Pot',U(0x270)),new Food(U(0x286),0x2c,0xf8,'Popcorn\x20Pot','Chocolate_Popcorn'),new Food('Honey\x20Popcorn',0x28,0x168,U(0x326),'Honey_Popcorn'),new Food('Snack\x20Mix',0x40,0x135,U(0x326),U(0x32d)),new Food(U(0x172),0x3a,0x2e9,U(0x25d),U(0x1c7)),new Food(U(0x310),0x3e,0x2d3,U(0x25d),'BLT_Salad'),new Food('Seafood\x20Salad',0x40,0x2fb,U(0x25d),U(0x241)),new Food('Pasta\x20Salad',0x43,0x2f7,U(0x25d),'Pasta_Salad'),new Food(U(0x2d2),0x52,0x255,'Salad\x20Bar',U(0x22c)),new Food('Summer\x20Salad',0x54,0x22a,U(0x25d),U(0x19a)),new Food(U(0x1e4),0x4e,0x13c,U(0x25d),U(0x203)),new Food(U(0x222),0x4b,0x1d4,U(0x25d),U(0x222)),new Food(U(0x1cd),0x4a,0x10a,'Salad\x20Bar',U(0x234)),new Food(U(0x22a),0x59,0xd8,U(0x25d),'Mushroom_Salad'),new Food(U(0x2bf),0x4c,0xea,U(0x25d),U(0x2df)),new Food(U(0x30b),0x41,0x288,'Sandwich\x20Bar','Bacon_Toast'),new Food(U(0x16f),0x3d,0x214,'Sandwich\x20Bar',U(0x1ce)),new Food(U(0x19b),0x42,0x247,U(0x159),U(0x32c)),new Food('Honey\x20Toast',0x45,0xff,U(0x159),U(0x322)),new Food(U(0x1d2),0x5c,0x12e,U(0x159),U(0x2fc)),new Food(U(0x19c),0x54,0x1d7,U(0x159),U(0x18a)),new Food(U(0x26d),0x4f,0x1d0,'Sandwich\x20Bar',U(0x21e)),new Food(U(0x26a),0x47,0x259,U(0x159),'Peanut_Butter_and_Jelly_Sandwich'),new Food(U(0x2b7),0x36,0x9a,U(0x2e2),'Soy_Sauce'),new Food(U(0x29a),0x3c,0x115,U(0x2e2),U(0x214)),new Food(U(0x230),0x3e,0x16f,'Sauce\x20Maker',U(0x230)),new Food(U(0x22d),0x42,0x17a,U(0x2e2),U(0x289)),new Food(U(0x2cd),0x45,0xe6,U(0x2e2),'Tomato_Sauce'),new Food(U(0x210),0x4d,0xfc,'Sauce\x20Maker',U(0x210)),new Food(U(0x260),0x3e,0x1d4,U(0x2e2),'Olive_Dip'),new Food(U(0x181),0x13,0xf1,U(0x31e),'Cotton_Shirt'),new Food(U(0x1c3),0x15,0x135,U(0x31e),'Wooly_Chaps'),new Food(U(0x261),0x19,0x147,'Sewing\x20Machine',U(0x278)),new Food(U(0x2e9),0x33,0x2a4,U(0x31e),U(0x2e9)),new Food(U(0x20b),0x3b,0x44a,'Sewing\x20Machine',U(0x20b)),new Food('Silver\x20Bar',0x18,0x93,U(0x264),U(0x2bc)),new Food(U(0x24a),0x19,0xb4,U(0x264),U(0x27c)),new Food(U(0x14f),0x19,0xcd,U(0x264),U(0x1a4)),new Food(U(0x1fe),0x21,0x6c,U(0x264),'Refined_Coal'),new Food(U(0x185),0x22,0x81,U(0x264),U(0x32a)),new Food(U(0x15b),0x42,0x140,U(0x153),U(0x229)),new Food('Berry\x20Smoothie',0x40,0x223,U(0x153),U(0x1b1)),new Food(U(0x1d1),0x46,0x15d,U(0x153),U(0x1f7)),new Food(U(0x1b4),0x58,0x1f8,U(0x153),U(0x30d)),new Food(U(0x197),0x64,0x1ff,'Smoothie\x20Mixer','Cocoa_Smoothie'),new Food(U(0x27a),0x66,0x20a,U(0x153),U(0x272)),new Food('Cucumber\x20Smoothie',0x46,0x10a,U(0x153),U(0x1a6)),new Food(U(0x293),0x5d,0x139,U(0x153),U(0x1cb)),new Food('Lobster\x20Soup',0x2e,0x264,'Soup\x20Kitchen',U(0x166)),new Food(U(0x2c0),0x2f,0x1de,U(0x27b),U(0x26e)),new Food('Fish\x20Soup',0x35,0x12a,U(0x27b),U(0x2d9)),new Food(U(0x2e8),0x31,0x188,U(0x27b),U(0x221)),new Food(U(0x31a),0x48,0x147,U(0x27b),'Onion_Soup'),new Food(U(0x1b0),0x49,0x1b0,U(0x27b),U(0x244)),new Food(U(0x19d),0x41,0x10e,'Soup\x20Kitchen',U(0x162)),new Food(U(0x2ae),0x4e,0xff,'Soup\x20Kitchen',U(0x25c)),new Food(U(0x1be),0x51,0x1b7,U(0x27b),U(0x31b)),new Food('Broccoli\x20Soup',0x57,0xed,U(0x27b),'Broccoli_Soup'),new Food(U(0x21a),0x68,0xb0,U(0x27b),U(0x2fa)),new Food(U(0x23f),0x3e,0xea,U(0x207),U(0x23f)),new Food('Brown\x20Sugar',0x7,0x20,U(0x22e),U(0x237)),new Food(U(0x1af),0xd,0x32,U(0x22e),U(0x290)),new Food('Syrup',0x12,0x5a,U(0x22e),U(0x267)),new Food(U(0x1cc),0x38,0x1e9,U(0x29e),'Sushi_Roll'),new Food(U(0x198),0x3b,0x27d,'Sushi\x20Bar',U(0x22f)),new Food(U(0x1ac),0x3f,0x226,U(0x29e),U(0x308)),new Food(U(0x206),0x4c,0x288,U(0x29e),U(0x265)),new Food(U(0x2a2),0x6e,0x1d0,U(0x29e),U(0x288)),new Food('Taco',0x4d,0x18c,U(0x2c5),U(0x16a)),new Food('Fish\x20Taco',0x4f,0x188,'Taco\x20Kitchen',U(0x1d5)),new Food(U(0x2c6),0x52,0xf1,U(0x2c5),'Quesadilla'),new Food(U(0x238),0x57,0x1b0,'Taco\x20Kitchen',U(0x238)),new Food(U(0x17e),0x50,0xf1,U(0x298),'Green_Tea'),new Food(U(0x15c),0x51,0xbe,U(0x298),'Milk_Tea'),new Food(U(0x191),0x53,0x139,U(0x298),U(0x263)),new Food('Lemon\x20Tea',0x56,0xf1,U(0x298),U(0x304)),new Food(U(0x1a2),0x59,0xff,'Tea\x20Stand',U(0x1d6)),new Food('Iced\x20Tea',0x5c,0xfc,U(0x298),U(0x226)),new Food('Mint\x20Tea',0x61,0xff,U(0x298),'Mint_Tea'),new Food(U(0x25b),0x58,0xa9,U(0x298),'Apple_Ginger_Tea'),new Food(U(0x1c5),0x45,0xcd,U(0x2c3),'Fried_Rice'),new Food('Tofu\x20Stir\x20Fry',0x59,0x132,'Wok\x20Kitchen',U(0x28f)),new Food('Spicy\x20Fish',0x4f,0x21f,U(0x2c3),'Spicy_Fish'),new Food(U(0x2a7),0x56,0x255,'Wok\x20Kitchen','Peanut_Noodles'));function I(P,v){var e=t();return I=function(H,g){H=H-0x14b;var k=e[H];return k;},I(P,v);}function onFoodChange(P){var l=U,v=0x0;for(idx in foods){var e=document[l(0x2d4)](foods[idx][l(0x277)]);v=v+parseInt(e[l(0x287)]);}var H=document['getElementById'](l(0x247));H[l(0x170)]='Total\x20Food\x20Number:\x20'+v;var g='';for(idx in foods){if(idx==0x0)g=foods[idx]['fn'];else{if(g!=foods[idx]['fn']){var H=document[l(0x2d4)](foods[idx]['fn']);H[l(0x170)]=foods[idx]['fn']+'\x20(Total:'+v+')',g=foods[idx]['fn'];}}}}function getDefaultFoodValue(P){var q=U;for(var v=0x0;v<fstl[q(0x1da)];v++){if(fstl[v]==P)return parseInt(fstl[v+0x1]);}return 0x0;}var last_fn='';for(idx in foods){idx==0x0?(console[U(0x204)](foods[idx]['fn']),document[U(0x14c)](U(0x1b8)+U(0x312)+'>'),document[U(0x14c)]('<h3\x20class=\x22machineHeading\x22>\x20'+foods[idx]['fn']+U(0x299)),document[U(0x14c)](U(0x1aa)+foods[idx]['fn']+'\x22>'),document[U(0x14c)](U(0x2eb)),document[U(0x14c)](U(0x18d)),document[U(0x14c)](U(0x2c2)),document[U(0x14c)](U(0x2eb)),document[U(0x14c)](U(0x28a)),document['write'](U(0x184)),document['write'](U(0x2eb)),document[U(0x14c)]('<div\x20class=\x22col-3\x20heading\x22>'),document[U(0x14c)](U(0x31f)),document['write'](U(0x2eb)),document['write'](U(0x329)),document[U(0x14c)](U(0x284)),document[U(0x14c)](U(0x2eb)),last_fn=foods[idx]['fn']):last_fn!=foods[idx]['fn']&&(document['write'](U(0x2d8)),document[U(0x14c)]('<div\x20class='+U(0x30c)+'>'),document[U(0x14c)](U(0x1f3)+foods[idx]['fn']+U(0x1bd)+foods[idx]['fn']+U(0x299)),document['write'](U(0x1aa)+foods[idx]['fn']+'\x22>'),document[U(0x14c)](U(0x2eb)),document[U(0x14c)]('<div\x20class=\x22col-4\x20heading\x22>'),document[U(0x14c)](U(0x2c2)),document['write'](U(0x2eb)),document[U(0x14c)](U(0x28a)),document[U(0x14c)]('<h4>Level</h4>\x20'),document[U(0x14c)](U(0x2eb)),document[U(0x14c)]('<div\x20class=\x22col-3\x20heading\x22>'),document[U(0x14c)](U(0x31f)),document[U(0x14c)](U(0x2eb)),document[U(0x14c)](U(0x329)),document[U(0x14c)](U(0x284)),document[U(0x14c)](U(0x2eb)),last_fn=foods[idx]['fn']),document[U(0x14c)](U(0x1a3)),document[U(0x14c)](foods[idx]['en']),document['write'](U(0x2eb)),document[U(0x14c)](U(0x163)),document[U(0x14c)](U(0x2cf)+foods[idx][U(0x1e6)]+U(0x23b)),document[U(0x14c)](U(0x2eb)),document['write'](U(0x18f)),document[U(0x14c)](foods[idx][U(0x20d)]),document[U(0x14c)]('</div>'),document[U(0x14c)]('<div\x20class=\x22col-3\x20ratioInput\x22>'),document[U(0x14c)](U(0x1b5)+U(0x2cb)+U(0x2fe)+'rat'+foods[idx]['tag']+U(0x2b0)+getDefaultFoodValue(foods[idx][U(0x277)])+U(0x2af)),document[U(0x14c)]('</div>'),document['write']('<div\x20class=\x22col-3\x20quantityInput\x22>'),document['write'](U(0x1b5)+U(0x179)+'\x20type=\x22number\x22\x20id=\x22'+foods[idx][U(0x277)]+U(0x2ad)+getDefaultFoodValue(foods[idx][U(0x277)])+U(0x2af)),document[U(0x14c)](U(0x2eb));}onFoodChange();function copyToClipboard(P){var V=U,v=$('<textarea>'),e=/<br\s*[\/]?>/gi;$(V(0x192))[V(0x24e)](v),v[V(0x228)]($(P)[V(0x2a9)]()[V(0x1e3)](e,'\x0d\x0a'))[V(0x320)](),document[V(0x16d)](V(0x316)),v['remove']();}function t(){var L=['Fried_Candy_Bar','Iced_Tea','Diamond\x20Ring','val','Green_Smoothie','Mushroom\x20Salad','Buttered\x20Popcorn','Fruit_Salad','Lemon\x20Curd','Sugar\x20Mill','Lobster_Sushi','Mayonnaise','Plum\x20Jam','Peanut_Butter_Milkshake','Gnocchi','Veggie_Platter','Mint_Ice_Cream','Colorful\x20Candle','Brown_Sugar','Nachos','2141178OTNFGg','Mushroom\x20Pasta','.png\x22>','Cloche_Hat','Cotton_Candy','Baked\x20Potato','Peanuts','Watermelon_Juice','Seafood_Salad','Tools','Fishing','Noodle_Soup','Grilled\x20Eggplant','text','total','Honey\x20Apple\x20Cake','Spicy_Pizza','Gold\x20Bar','Stuffed\x20Peppers','Apple_Jam','Pineapple_Cake','append','BBQ\x20Grill','Mushroom_Pasta','Exfoliating_Soap','Honey','Chocolate_Fondue','Fresh\x20Pasta','Bacon_Donut','7OJPCVx','Lobster_Skewer','Pumpkin_Pie','Sprinkled_Donut','Strawberry\x20Jam','Apple\x20Ginger\x20Tea','Potato_Soup','Salad\x20Bar','Shovel','Pineapple_Juice','Olive\x20Dip','Violet\x20Dress','checked','Honey_Tea','Smelter','Big_Sushi_Roll','Carrot_Juice','Syrup','Jelly\x20Beans','Honey_Soap','Peanut\x20Butter\x20and\x20Jelly\x20Sandwich','Orange\x20Juice','substring','Cucumber\x20Sandwich','Tomato_Soup','Honey_Apple_Cake','Chili_Popcorn','Bakery','Plum_Smoothie','Gracious_Bouquet','Axes','Caramel_Apple','push','tag','Violet_Dress','Corn\x20Bread','Plum\x20Smoothie','Soup\x20Kitchen','Gold_Bar','Cotton\x20Candy','Chili\x20Poppers','109DGVRBM','\x20=\x20','Pasta\x20Maker','Chocolate','Red_Scarf','<h4>Quantity</h4>','toGMTString','Chocolate\x20Popcorn','value','Rice_Ball','Lemon_Curd','<div\x20class=\x22col-2\x20heading\x22>','Potato\x20Bread','Orange_Sorbet','Fondue\x20Pot','Chocolate_Cake','Tofu_Stir_Fry','White_Sugar','Lemon\x20Candle',';expires=','Black\x20Sesame\x20Smoothie','Eggplant_Parmesan','cookie','price','Banana_Bread','Tea\x20Stand','</h3>','Olive\x20Oil','Chili_Poppers','Diamond_Ring','Roasted\x20Tomatoes','Sushi\x20Bar','Banana\x20Bread','Birthday\x20Bouquet','Chocolate\x20Ice\x20Cream','Rice\x20Ball','Fish_Pie','Bread','Blue\x20Woolly\x20Hat','Lemon_Lotion','Peanut\x20Noodles','Filled\x20Donut','html','Pineapple\x20Cake','Plum_Jam','Crunchy\x20Donut','\x22\x20step=\x221\x22\x20min=\x220\x22\x20value=\x22','Potato\x20Soup','\x22\x20onchange=\x22onFoodChange(this.id)\x22>','\x22\x20step=\x220.5\x22\x20min=\x220\x22\x20value=\x22','pop','Colorful_Candles','indexOf','match','Sun\x20Hat','Sun_Hat','Soy\x20Sauce','7166hWGcEs','none','Grape_Juice','Bath\x20Kiosk','Silver_Bar','Gingerbread\x20Cookie','Honey\x20Face\x20Mask','Beetroot\x20Salad','Tomato\x20Soup','Cherry\x20Jam','<h4>Name</h4>','Wok\x20Kitchen','Eggplant\x20Parmesan','Taco\x20Kitchen','Quesadilla','Mushroom_Pot_Pie','Pumpkin\x20Pie','Fruit\x20Cake','Corn\x20Dog','ratio','Potato\x20Feta\x20Cake','Tomato\x20Sauce','style','<img\x20class=\x22foodPicSize\x22\x20src=\x22../HD_Foods/','Caramel\x20Latte','200721vTPZTw','Fruit\x20Salad','Raspberry\x20Jam','getElementById','Cake\x20Oven','display','Saw','<hr>','Fish_Soup','Broccoli\x20Pasta','Rice_Noodles','=([^;]*)(;|$)','Honey\x20Soap','Fish_Fillet','Beetroot_Salad','Honey\x20Extractor','Iron_Bracelet','Sauce\x20Maker','Veggie\x20Bouquet','Raspberry_Muffin','Lobster\x20Tail','block','Cherry_Jam','Pumpkin\x20Soup','Pillow','Honey_Peanuts','</div>','Tomato_Juice','Cherry\x20Juice','Onion\x20Dog','Carrot\x20Juice','Plain\x20Donut','Iron\x20Bracelet','Winter_Veggies','Jam\x20Maker','Cream\x20Cake','Broccoli_Pasta','Caramel_Latte','Caffe_Latte','Tofu_Dog','Blue_Woolly_Hat','Mushroom_Soup','Fancy_Cake','Goat_Cheese_Toast','Mushroom\x20Pot\x20Pie','\x20type=\x22number\x22\x20id=\x22','Iced\x20Banana\x20Latte','Cookie','Garlic_Bread','Frutti_di_Mare_Pizza','Sesame\x20Brittle','Lemon_Tea','Blue_Sweater','Honey_Face_Mask','Marmalade','Egg_Sushi','Onion_Dog','Candy\x20Machine','Bacon\x20Toast','col-12\x20','Mixed_Smoothie','6842853gKKBAB','Raspberry_Jam','BLT\x20Salad','Banana\x20Pancakes','col-12','Garlic\x20Bread','Chocolate_Pie','Lobster_Tail','copy','Potato_Feta_Cake','Cream_Donut','Ice\x20Cream\x20Maker','Onion\x20Soup','Bell_Pepper_Soup','Popcorn','Pancake','Sewing\x20Machine','<h4>Ratio</h4>','select','Rice\x20Noodles','Honey_Toast','Sesame_Ice_Cream','Watermelon\x20Juice','Red\x20Scarf','Popcorn\x20Pot','Mint\x20Ice\x20Cream','Veggie_Lasagna','<div\x20class=\x22col-3\x20heading\x22>','Iron_Bar','Chocolate\x20Fondue','Egg_Sandwich','Snack_Mix','Toffee','Caffe_Mocha','Fish_burgers','Blue\x20Sweater','write','Fish\x20Skewer','Top\x20Hat','Platinum\x20Bar','Lemon_Candle','Veggie\x20Lasagna','Banana_Split','Smoothie\x20Mixer','Sesame\x20Ice\x20Cream','Hot\x20Dog\x20Stand','Lemon\x20Lotion','Cotton_Fabric','Blackberry_Jam','Sandwich\x20Bar','Strawberry\x20Ice\x20Cream','Green\x20Smoothie','Milk\x20Tea','Bacon\x20Pie','Filled_Donut','Fish_and_Chips','Blackberry_Muffin','Dynamite','Cabbage_Soup','<div\x20class=\x22col-2\x20foodPic\x22>','Lobster\x20Pasta','Grilled_Onion','Lobster_Soup','Cream','Hand\x20Pies','Peanut\x20Butter\x20Milkshake','Taco','Iced_Banana_Latte','Strawberry_Jam','execCommand','Blackberry\x20Muffin','Veggie\x20Bagel','innerHTML','Necklace','Feta\x20Salad','Hot_Chocolate','Flower_Pendant','Sesame_Brittle','Feta_Pie','TNT\x20barrel','1093085YfJTng','numinp','Pasta\x20Kitchen','Berry\x20Juice','Loom','Top_Hat','Green\x20Tea','Vanilla_Ice_Cream','Fresh_Pasta','Cotton\x20Shirt','Pizza','Pie\x20Oven','<h4>Level</h4>\x20','Iron\x20Bar','Juice\x20Press','Feta\x20Pie','Fish_Skewer','Peach\x20Ice\x20Cream','Onion_Melt','Peach\x20Jam','Lobster_Pasta','<div\x20class=\x22col-4\x20heading\x22>','getTime','<div\x20class=\x22col-1\x20foodLevel\x22>','Beeswax','Honey\x20Tea','body','Cheese_Fondue','Casserole','split','Deep\x20Fryer','Cocoa\x20Smoothie','Lobster\x20Sushi','Bacon_Fries','Summer_Salad','Egg\x20Sandwich','Onion\x20Melt','Cabbage\x20Soup','Fish\x20and\x20Chips','Sweater','Red_Berry_Cake','Soft\x20Bouquet','Orange\x20Tea','<div\x20class=\x22col-3\x20foodName\x22>','Platinum_Bar','Frutti\x20di\x20Mare\x20Pizza','Cucumber_Smoothie','Pickaxe','Total\x20Bems\x20Required=\x20','Grilled_Eggplant','<ul\x20type=\x22','Potato_Bread','Egg\x20Sushi','Candy\x20Bouquet','Cheese\x20Fondue','White\x20Sugar','Noodle\x20Soup','Berry_Smoothie','15033400ujJCSz','Hot_Dog','Mixed\x20Smoothie','<input\x20class=','Banana\x20Split','Winter\x20Veggies','<div\x20class=','Bracelet','4NJaUUv','Lollipop','Bright_Bouquet','\x22\x20\x20+\x20class=\x22machineHeading\x22\x20>','Bell\x20Pepper\x20Soup','Jeweler','Fish\x20Fillet','Chocolate\x20Roll','Lemon_Pie','Wooly\x20Chaps','Goat\x20Cheese','Fried\x20Rice','Birthday_Bouquet','Feta_Salad','Candy_Bouquet','Espresso','Orange_Juice','Black_Sesame_Smoothie','Sushi\x20Roll','Veggie\x20Platter','Veggie_Bagel','Chocolate\x20Pie','Cherry\x20Popsicle','Yogurt\x20Smoothie','Goat\x20Cheese\x20Toast','Flower\x20Pendant','Carrot\x20Pie','Fish_Taco','Orange_Tea','Strawberry\x20Candle','caffe\x20Latte','Cherry_Popsicle','length','Tofu\x20Dog','Donut\x20Maker','Strawberry_Candle','Goat_Cheese','Orange\x20Sorbet','Flowershop','Flower\x20Crown','Total\x20Foods=\x20','replace','Summer\x20Rolls','Candle\x20Maker','imgid','Bright\x20Bouquet','Chocolate_Roll','Duck\x20Feather','Crunchy_Donut','Buttered_Popcorn','Fancy\x20Cake','Chili\x20Popcorn','Hot\x20Dog','3831728eoNzeK','Coffee\x20Kiosk','Chocolate\x20Cake','Hamburger','<h3\x20id=\x22','Hat\x20Maker','Flower_Shawl','123456789','Yogurt_Smoothie','setTime','Butter','Apple\x20Jam','Cherry_Juice','Peach_Tart','Stuffed_Peppers','Refined\x20Coal','Honey\x20Peanuts','Pineapple\x20Juice','Duck_Feather','rat','Summer_Rolls','log','Carrot\x20Cake','Big\x20Sushi\x20Roll','Squirrel\x20Tree','Spicy_Pasta','Cheese_cake','Carrot_Pie','Blanket','Apple_Pie','lvl','Dairy','TNT_Barrel','Salsa','Bacon\x20and\x20Eggs','Plain_Donut','Baked_Potato','Olive_Oil','Cloche\x20Hat','Raspberry\x20Mocha','Raspberry\x20Muffin','Chocolate_Ice_Cream','Flower\x20Shawl','Mushroom\x20Soup','Cheese','Raspberry_Mocha','Strawberry_Ice_Cream','Cucumber_Sandwich','Roasted_Tomatoes','Corn_Dog','Pumpkin_Soup','Coleslaw','Grilled\x20Onion','Caffe\x20Mocha'];t=function(){return L;};return t();}function toggleRatio(){var Q=U,P=document[Q(0x2d4)]('toggle'),v=document[Q(0x2d4)](Q(0x246));P[Q(0x262)]==!![]?v[Q(0x2ce)]['display']=Q(0x2e6):v[Q(0x2ce)][Q(0x2d6)]=Q(0x2b9);}