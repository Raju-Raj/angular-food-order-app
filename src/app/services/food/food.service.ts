import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag == 'All'?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
    // if(tag == 'All'){
    //   return this.getAll()
    // }else{
    //   return this.getAll().filter(food => food.tags?.includes(tag));
    // }
  }

  getAllTag():Tag[]{
   return [
    {name:'All',count:8},
    {name:'FastFood',count:4},
    {name:'Rice',count:2},
    {name:'Noodles',count:1},
    {name:'Pizza',count:2},
    {name:'Burger',count:1},
    {name:'Biryani',count:1},
    {name:'Chicken',count:1},
   ]
  }

  getAll():Foods[]{
    return[
      {
    id:1,
    price:20,
    name:'Biryani',
    favorite:true,
    star:4.0,
    tags:['Rice','Biryani'],
    imageUrl:'/assets/images/food-1.jfif',
    cookTime:'30-40',
    origins:['indian'],
      },
      {
        id:2,
        price:30,
        name:'Burger',
        favorite:false,
        star:2.0,
        tags:['FastFood','Burger'],
        imageUrl:'/assets/images/food-2.jfif',
        cookTime:'10-20',
        origins:['indian','US'],
          },
          {
            id:3,
            price:10,
            name:'Chicken',
            favorite:true,
            star:3.5,
            tags:['Chicken'],
            imageUrl:'/assets/images/food-3.jfif',
            cookTime:'20-40',
            origins:['indian','Chainies'],
              },
              {
                id:4,
                price:60,
                name:'Pizza',
                favorite:false,
                star:4.0,
                tags:['FastFood','Pizza'],
                imageUrl:'/assets/images/food-4.jfif',
                cookTime:'10-20',
                origins:['indian','Italy'],
                  },
                  {
                    id:5,
                    price:30,
                    name:'Noodles',
                    favorite:true,
                    star:2.0,
                    tags:['FastFood','Noodles'],
                    imageUrl:'/assets/images/food-5.jfif',
                    cookTime:'30-40',
                    origins:['indian'],
                      },
                      {
                        id:6,
                        price:25,
                        name:'Panner With Roti',
                        favorite:false,
                        star:4.0,
                        tags:['Panner'],
                        imageUrl:'/assets/images/food-6.jfif',
                        cookTime:'30-40',
                        origins:['indian','Dubai'],
                          },
                          {
                            id:7,
                            price:20,
                            name:'Pizza',
                            favorite:true,
                            star:5.0,
                            tags:['FastFood','Pizza'],
                            imageUrl:'/assets/images/food-7.jfif',
                            cookTime:'15-25',
                            origins:['indian'],
                              },
                              {
                                id:8,
                                price:20,
                                name:'Bagara with curry',
                                favorite:false,
                                star:3.0,
                                tags:['Rice'],
                                imageUrl:'/assets/images/food-8.jfif',
                                cookTime:'20-30',
                                origins:['indian'],
                                }
    ]
  }
}
