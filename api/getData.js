import {Dishes} from '../shared/dishes';
import {Promotions} from '../shared/promotions';
import {Leaders} from '../shared/leaders';
import { Comments} from '../shared/comment';

export default {
  getDishes: (cb) => setTimeout(() => cb(Dishes), 4000),
  getCommenst: (cb) => setTimeout(() => cb(Comments), 4000),
  getPromotions: (cb) => setTimeout(() => cb(Promotions), 4000),
  getLeaders: (cb) => setTimeout(() => cb(Leaders), 4000)
}
