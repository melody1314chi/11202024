export default () => {
 return {
  "type": "bubble",
  "hero": {
   "type": "image",
   "url": "https://developers-resource.landpress.line.me/fx/img/01_1_cafe.png",
   "size": "full",
   "aspectRatio": "20:13",
   "aspectMode": "cover",
   "action": {
    "type": "uri",
    "uri": "https://line.me/"
   }
  },
  "body": {
   "type": "box",
   "layout": "vertical",
   "contents": [
    {
     "type": "text",
     "text": "Brown Cafe",
     "weight": "bold",
     "size": "xl"
    }
   ]
  },
  "footer": {
   "type": "box",
   "layout": "vertical",
   "spacing": "sm",
   "contents": [
    {
     "type": "button",
     "style": "link",
     "height": "sm",
     "action": {
      "type": "uri",
      "label": "詳細資訊",
      "uri": "https://line.me/"
     }
    },
    {
     "type": "box",
     "layout": "vertical",
     "contents": [],
     "margin": "sm"
    }
   ],
   "flex": 0
  }
 }
}