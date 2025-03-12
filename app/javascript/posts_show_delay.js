export function setupPostsShowDelay() {
  const posts = Array.from(document.querySelectorAll('.posts')).slice(0, 20);

  if (posts.length === 0) {
    return;
  }

  posts.forEach(post => {
    post.style.visibility = 'hidden';
  });

  let indexpost = 0;

  const showPost = () => {
    posts[indexpost].style.visibility = 'visible';

    if (posts[indexpost].classList.contains('ease_in_right')) {
      posts[indexpost].classList.add('animate-ease_in_right');
    }
    if (posts[indexpost].classList.contains('ease_in_left')) {
      posts[indexpost].classList.add('animate-ease_in_left');
    }

    indexpost++;

    if (indexpost< posts.length) {
      setTimeout(showPost, 200);
    }
  };


  showPost();
}
