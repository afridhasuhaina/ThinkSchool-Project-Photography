import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostdetailsService {
  [x: string]: any;

  constructor() { }
  PostInfo=[
    {
      id:1,
      blogName:"4,400 Photographers Donate over 25,000 Images to Support Wildlife",
      postDetails:"While visiting Moalboal in Cebu in the Philippines, the photographer Stijn Dijkstra embarked on a boat to the tiny island of Pescador. He saw countless colors while exploring reefs teeming with life. Ultimately, he happened upon a shimmering turtle, its belly full of sardines. Dijkstra is a passionate advocate for protecting our oceans, and this encounter served as an enduring reminder of what’s at stake for animals and ecosystems around the world.",
                
      blogImg:"https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1401938039465-OXSYJQVU6Q3PM19ZDWAD/hawaii+green+breathing.jpg?format=1500w"
    },
    {
      id:2,
      blogName:"Perspective and POV: Change Mine By Changing Yours.",
      postDetails:"I talk to myself when I am making photographs—mostly mumbling, and it’s always questions. Questions like the ones I addressed in the last email I sent you about time, including “Could I leave and find something else? Could I wait a little longer?” Questions about light as well: “Could I be more creative about this, perhaps by underexposing?” And there are of course the endless questions prompted by the gear, such as, “Could I use a tighter aperture and gain deeper focus? Could I use a wider lens, or perhaps go longer and try to isolate some particular detail?”",
      blogImg:"https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2021/11/20211106-duChemin-Churchill-Bears-11278-1-1200x800.jpg"
    },
    {
      id:3,
      blogName:"Outer Banks Photography: The Battered Strand",
      postDetails:"North Carolina’s Outer Banks is a land both infinitely brutal and beautiful as well as an amazing location for landscape and nature photography. For 125 miles, this narrow ribbon of barrier islands stretches from the Virginia state line south to Ocracoke Island, giving protection to the mainland from the raging Atlantic. In return for this natural amenity, the islands are the recipient of a safe harbor as well, by way of the establishment of the Cape Hatteras National Seashore, America’s first such designation.The most extensive stretch of undeveloped beach on the eastern seaboard, this wild and untamed verge of tidal forces and nomadic sand is at the mercy of nature’s primal forces – wind and water. When viewed on a map or from above, these islands display a stunning composition of coastal geography, boldly protruding into the Atlantic like the chin of a cocky prizefighter, daring each passing storm to give it their best punch. Its best defense is clever passivity, dodging and weaving, bending yet never quite breaking to the will of nature. This reality is a boon to the landscape photographer, as each new visit reveals yet a new wrinkle to the landscape. It’s never the same place twice.",
      blogImg:"https://i.pinimg.com/originals/b8/94/6d/b8946d6a992f788707c9562d0addbe39.png"
    },
    {
      id:4,
      blogName:"For Stronger Photographs: More Time",
      postDetails:"Three weeks ago, I found myself sitting on the banks of Hudson Bay, a stone’s throw from the Arctic circle, waiting for a polar bear to wake from his slumber. One can wait a long time for a polar bear to awaken. Several times, our group of photographers asked whether we should move on, and several times the answer was, “You don’t leave a bear to go look for a bear.” Solid wisdom, that. But no matter what you’re photographing, it’s always a gamble that it will pay off. One of the questions I’m most often asked is this: “So, how long do you wait? When do you cut your losses and move on?”. That, right there, is the question, and there’s no good (or easy) answer. Whether you’re sitting on a street corner in Italy or waiting for an anticipated moment to happen at an event, there’s always the chance that what you’re waiting for might never happen—and that the waiting might prevent you from being elsewhere, photographing something your imagination tells you is probably some kind of once-in-a-lifetime magic. The fear of missing out on something somewhere is a tough one to shake. I wish I could say, “Go with your gut,” but I seem to have two guts: one that’s impulsive and impatient and just wants to move on, and one that’s quieter and wiser and knows from experience that more often than not waiting pays off.",
      blogImg:"https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2021/11/20211103-duChemin-Churchill-Bears-8038-2-1200x800.jpg"
    },
    {
      id:5,
      blogName:"How To Photograph Stunning Autumn Color",
      postDetails:"Autumn color season is one of the most eagerly anticipated times of the year for restless nature photographers. The brilliant red, orange, and yellow foliage is like a jarring wake up call for all the creative energy atrophied by the listless and drab dog days of late summer (August through mid- September has always been my least favorite time of year). And since these photos aren’t going to just take themselves, here are 5 essential tips for photographers to capture the most wonderful time of the year, the autumn color season from filters, light, lenses, refections.",
      blogImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWpK3nff4_TiyIh0N62SCnpdCPmre-nzyZg&usqp=CAU"
    },
    {
      id:6,
      blogName:"Essential Photography: Embrace Backlight",
      postDetails:"Backlight can produce some of the most dramatic and jaw-dropping photographs you will ever create but it comes with a with a set challenges to overcome.Light is the lifeblood of the photograph. As a photographer – or an aspiring photographer – you might have heard the preceding phrase a time or two. You might have also been taught that the origin of the word photography is a fusion of two Greek derivatives: photos meaning “light” and graphe meaning to “write” or “draw.” The inference here being that photography means to write with light. George Eastman, the founder of the Eastman Kodak Company, knew a little something about light. “Light makes photography. Embrace light. Admire it. Love it. But above all, know light. Know it for all you are worth, and you will know the key to photography.” These are indeed lofty and inspiring words which happen to be mostly true. But he was also fond of saying:“You push the button and we do the rest.”It should be noted that Mr. Eastman is best known as a businessman, not a photographer. It might seem obvious to most of you, but it is light that you capture with your camera, not the subject in your viewfinder. This is pretty profound when you really think about it. Your subject is always the light reflecting off the scene; its direction, intensity, and color. Not only is light the lifeblood of the photograph, light is everything.",
      blogImg:"https://learn.zoner.com/wp-content/uploads/2016/06/151230_01_000_title_light_in_photography.jpg"
    },
    
  ]
}
