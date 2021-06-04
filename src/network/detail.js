import { request } from './request.js'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.shopLogo = shopInfo.shopLogo;
    this.fans = shopInfo.cFans;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.cSell = shopInfo.cSells;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注：images可能没有值(某些商品有值，某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}