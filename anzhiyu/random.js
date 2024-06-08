var posts=["2024/06/06/help/","2024/06/06/project/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };