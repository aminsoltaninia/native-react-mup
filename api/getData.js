import {Dishes} from '../shared/dishes';
import {Promotions} from '../shared/promotions';
import {Leaders} from '../shared/leaders';
import { Comments} from '../shared/comment';

export default {
  getDishes: (cb) => setTimeout(() => cb(Dishes), 1000),
  getCommenst: (cb) => setTimeout(() => cb(Comments), 1000),
  getPromotions: (cb) => setTimeout(() => cb(Promotions), 1000),
  getLeaders: (cb) => setTimeout(() => cb(Leaders), 1000)
}
