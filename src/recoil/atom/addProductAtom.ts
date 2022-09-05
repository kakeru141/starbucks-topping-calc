import { atom } from 'recoil'
import { Product } from '../../types/productType'

export const addProductAtom = atom({
  key: 'addProductAtom',
  default: {
    productName: '',
    category: 'others',
    size: {
      takeout: {
        short: {
          select: false,
          value: NaN,
        },
        tall: {
          select: false,
          value: NaN,
        },
        grande: {
          select: false,
          value: NaN,
        },
        venti: {
          select: false,
          value: NaN,
        },
      },
      shop: {
        short: {
          select: false,
          value: NaN,
        },
        tall: {
          select: false,
          value: NaN,
        },
        grande: {
          select: false,
          value: NaN,
        },
        venti: {
          select: false,
          value: NaN,
        },
      },
    },
    topping: {
      whipGroup: {
        detail: {
          id: 'whipGroup',
          text: 'ホイップ量変更',
          exist: false,
        },
        content: {
          extraWhip: {
            text: 'エクストラホイップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightWhip: {
            text: 'ライトホイップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneWhip: {
            text: 'ノンホイップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          inWhip: {
            text: 'インホイップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneWhipGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      rawChocolateWhip: {
        text: '生チョコレートホイップに変更(期間限定)',
        select: false,
        exist: false,
        id: 'rawChocolateWhip',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      coffeeCream: {
        text: 'コーヒークリームに変更(期間限定)',
        select: false,
        exist: false,
        id: 'coffeeCream',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      milkGroup: {
        detail: {
          id: 'milkGroup',
          text: 'フォームミルク量変更',
          exist: false,
        },
        content: {
          foamMilk: {
            text: 'フォーミー',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightMilk: {
            text: 'ライトフォーム',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneMilk: {
            text: 'ノンフォーム',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneMilkGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      changeMilkGroup: {
        detail: {
          id: 'changeMilkGroup',
          text: 'ミルク種類変更',
          exist: false,
        },
        content: {
          lowFatMilk: {
            text: '低脂肪牛乳に変更',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          fatFreeMilk: {
            text: '無脂肪牛乳に変更',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          soyMilk: {
            text: '豆乳に変更',
            select: false,
            price: {
              takeout: 54,
              shop: 55,
            },
          },
          almondMilk: {
            text: 'アーモンドミルクに変更',
            select: false,
            price: {
              takeout: 54,
              shop: 55,
            },
          },
          oatMilk: {
            text: 'オーツミルク',
            select: false,
            price: {
              takeout: 54,
              shop: 55,
            },
          },
          breveMilk: {
            text: 'ブレべミルク',
            select: false,
            price: {
              takeout: 54,
              shop: 55,
            },
          },
          noneChangeMilkGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      allMilk: {
        text: 'オールミルク',
        select: false,
        exist: false,
        id: 'allMilk',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      powderGroup: {
        detail: {
          id: 'powderGroup',
          text: 'パウダー量変更',
          exist: false,
        },
        content: {
          extraPowder: {
            text: 'エクストラパウダー',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightPowder: {
            text: 'ライトパウダー',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          nonePowder: {
            text: 'ノンパウダー',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          nonePowderGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      sauceGroup: {
        detail: {
          id: 'sauceGroup',
          text: 'ソース量変更',
          exist: false,
        },
        content: {
          extraSauce: {
            text: 'エクストラソース',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightSauce: {
            text: 'ライトソース',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneSauce: {
            text: 'ノンソース',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneSauceGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      chocoSaucePlus: {
        text: 'チョコソース追加',
        select: false,
        exist: false,
        id: 'chocoSaucePlus',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      caramelSaucePlus: {
        text: 'キャラメルソース追加',
        select: false,
        exist: false,
        id: 'caramelSaucePlus',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      syrupGroup: {
        detail: {
          id: 'syrupGroup',
          text: 'シロップ量変更',
          exist: false,
        },
        content: {
          extraSyrup: {
            text: 'エクストラシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightSyrup: {
            text: 'ライトシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneSyrup: {
            text: 'ノンシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneSyrupGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      changeSyrupGroup: {
        detail: {
          id: 'changeSyrupGroup',
          text: 'シロップ種類変更',
          exist: false,
        },
        content: {
          vanilla: {
            text: 'バニラシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          caramel: {
            text: 'キャラメルシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          classic: {
            text: 'クラッシックシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          mocha: {
            text: 'モカシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          whiteMocha: {
            text: 'ホワイトモカシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          chai: {
            text: 'チャイシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          valencia: {
            text: 'バレンシアシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          ginger: {
            text: 'ジンジャーシロップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneChangeSyrupGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      vanillaPlus: {
        text: 'バニラシロップ追加',
        select: false,
        exist: false,
        id: 'vanillaPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      caramelPlus: {
        text: 'キャラメルシロップ追加',
        select: false,
        exist: false,
        id: 'caramelPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      classicPlus: {
        text: 'クラッシックシロップ追加',
        select: false,
        exist: false,
        id: 'classicPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      mochaPlus: {
        text: 'モカシロップ追加',
        select: false,
        exist: false,
        id: 'mochaPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      whiteMochaPlus: {
        text: 'ホワイトモカシロップ追加',
        select: false,
        exist: false,
        id: 'whiteMochaPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      chaiPlus: {
        text: 'チャイシロップ追加',
        select: false,
        exist: false,
        id: 'chaiPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      valenciaPlus: {
        text: 'バレンシアシロップ追加',
        select: false,
        exist: false,
        id: 'valenciaPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      gingerPlus: {
        text: 'ジンジャーシロップ追加',
        select: false,
        exist: false,
        id: 'gingerPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      chipGroup: {
        detail: {
          id: 'chipGroup',
          text: 'チョコレートチップ量変更',
          exist: false,
        },
        content: {
          extraChip: {
            text: 'エクストラチップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightChip: {
            text: 'ライトチップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneChip: {
            text: 'ノンチップ',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneChipGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      wristletShot: {
        text: 'リストレットショット変更',
        select: false,
        exist: false,
        id: 'wristletShot',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      changeEspresso: {
        text: 'エスプレッソ変更(期間限定)',
        select: false,
        exist: false,
        id: 'changeEspresso',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      iceGroup: {
        detail: {
          id: 'iceGroup',
          text: '氷の量変更',
          exist: false,
        },
        content: {
          extraIce: {
            text: 'エクストラアイス',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightIce: {
            text: 'ライトアイス',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneIceGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      hotGroup: {
        detail: {
          id: 'hotGroup',
          text: 'ミルクの温度変更',
          exist: false,
        },
        content: {
          extraHot: {
            text: 'エクストラホット',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          lightHot: {
            text: 'ライトホット',
            select: false,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
          noneHotGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      honeyPlus: {
        text: '蜂蜜追加',
        select: false,
        exist: false,
        id: 'honeyPlus',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      cocoa: {
        text: 'ココア(パウダー追加)',
        select: false,
        exist: false,
        id: 'cocoa',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      cinnamon: {
        text: 'シナモン(パウダー追加)',
        select: false,
        exist: false,
        id: 'cinnamon',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      teaLeafChange: {
        text: '茶葉変更',
        select: false,
        exist: false,
        id: 'teaLeafChange',
        price: {
          takeout: 0,
          shop: 0,
        },
      },
      whipPlus: {
        text: 'ホイップ追加',
        select: false,
        exist: false,
        id: 'whipPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      steamMilkPlus: {
        text: 'スチームミルク追加',
        select: false,
        exist: false,
        id: 'steamMilkPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      foamMilkPlus: {
        text: 'フォームミルク追加',
        select: false,
        exist: false,
        id: 'foamMilkPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      shotPlusGroup: {
        detail: {
          id: 'shotPlusGroup',
          text: 'ショット追加',
          exist: false,
        },
        content: {
          shotPlusOne: {
            text: 'ショット1杯追加',
            select: false,
            price: {
              takeout: 54,
              shop: 55,
            },
          },
          shotPlusTwo: {
            text: 'ショット2杯追加',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          shotPlusThree: {
            text: 'ショット3杯追加',
            select: false,
            price: {
              takeout: 162,
              shop: 165,
            },
          },
          noneShotPlusGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      coffeeRoastPlusGroup: {
        detail: {
          id: 'coffeeRoastPlusGroup',
          text: 'コーヒーロースト追加',
          exist: false,
        },
        content: {
          coffeeRoastOne: {
            text: 'コーヒーロースト1杯追加',
            select: false,
            price: {
              takeout: 54,
              shop: 55,
            },
          },
          coffeeRoastTwo: {
            text: 'コーヒーロースト2杯追加',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          coffeeRoastThree: {
            text: 'コーヒーロースト3杯追加',
            select: false,
            price: {
              takeout: 162,
              shop: 165,
            },
          },
          noneCoffeeRoastPlusGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      chocolateChipPlus: {
        text: 'チョコレートチップ追加',
        select: false,
        exist: false,
        id: 'chocolateChipPlus',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      decaf: {
        text: 'デカフェに変更',
        select: false,
        exist: false,
        id: 'decaf',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      mousseFoam: {
        text: 'ムースフォーム追加',
        select: false,
        exist: false,
        id: 'mousseFoam',
        price: {
          takeout: 54,
          shop: 55,
        },
      },
      citrusPulpPlusGroup: {
        detail: {
          id: 'citrusPulpPlusGroup',
          text: 'シトラス果肉追加',
          exist: false,
        },
        content: {
          citrusPulpPlusOne: {
            text: 'シトラス果肉1杯追加',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          citrusPulpPlusTwo: {
            text: 'シトラス果肉2杯追加',
            select: false,
            price: {
              takeout: 216,
              shop: 220,
            },
          },
          citrusPulpPlusThree: {
            text: 'シトラス果肉3杯追加',
            select: false,
            price: {
              takeout: 324,
              shop: 330,
            },
          },
          noneCitrusPulpPlusGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      teaLeafAddGroup: {
        detail: {
          id: 'teaLeafAddGroup',
          text: '茶葉追加',
          exist: false,
        },
        content: {
          englishBreakFast: {
            text: 'イングリッシュブレックファースト',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          earlGrey: {
            text: 'アールグレイ',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          chamomile: {
            text: 'カモミール',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          roastedGreenTea: {
            text: 'ほうじ茶',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          Youthberry: {
            text: 'ユースベリー',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          mintCitrus: {
            text: 'ミントシトラス',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          hibiscus: {
            text: 'ハイビスカス',
            select: false,
            price: {
              takeout: 108,
              shop: 110,
            },
          },
          noneTeaLeafAddGroup: {
            text: '無し',
            select: true,
            price: {
              takeout: 0,
              shop: 0,
            },
          },
        },
      },
      teaLeafPlus: {
        text: '茶葉増量',
        select: false,
        exist: false,
        id: 'teaLeafPlus',
        price: {
          takeout: 108,
          shop: 110,
        },
      },
    },
  },
})
