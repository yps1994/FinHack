import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "coinname": "PPC-HA",
    "profilePic": "assets/img/speakers/bear.jpg",
    "desc": "Domestic Type A - Hong Kong."
  };


  constructor() {
    let items = [
      {
        "coinname": "PPC-HA",
        "profilePic": "assets/img/speakers/bear.jpg",
        "desc": "Domestic Type A - Hong Kong.",
        "xchgttl": "10",
        "onhandttl":"10"
      },
      {
        "coinname": "PPC-HB",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "desc": "Domestic Type B - Hong Kong.",
        "xchgttl": "10",
        "onhandttl":"10"
      },
      {
        "coinname": "PPC-HC",
        "profilePic": "assets/img/speakers/duck.jpg",
        "desc": "Domestic Type C - Hong Kong.",
        "xchgttl": "10",
        "onhandttl":"10"
      },
      {
        "coinname": "PPC-KA",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "desc": "Domestic Type A - Kowloon.",
        "xchgttl": "10",
        "onhandttl": "10"
      },
      {
        "coinname": "PPC-KB",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "desc": "Domestic Type B - Kowloon.",
        "xchgttl": "10",
        "onhandttl": "10"
      },
      {
        "coinname": "PPC-KC",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "desc": "Domestic Type C - Kowloon.",
        "xchgttl": "10",
        "onhandttl": "10"
      },
      {
        "coinname": "PPC-NA",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "desc": "Domestic Type A - New Terrerties.",
        "xchgttl": "10",
        "onhandttl": "10"
      },
      {
        "coinname": "PPC-NB",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "desc": "Domestic Type B - New Terrerties.",
        "xchgttl": "10",
        "onhandttl":"10"
      },
      {
        "coinname": "PPC-NC",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "desc": "Domestic Type C - New Terrerties.",
        "xchgttl": "10",
        "onhandttl":"10"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
