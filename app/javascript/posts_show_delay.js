export function setupPostsShowDelay(mainButtonId, dropdownId) {
  const posts = document.querySelectorAll('#login-histories .ease_in');

  // 初期状態: 要素を占有しつつ見えない状態にする
  posts.forEach(post => {
    post.style.visibility = 'hidden';
  });

  let index = 0;
  const showPost = () => {
    posts[index].style.visibility = 'visible'; // 表示
    posts[index].classList.add('animate-ease_in'); // アニメーション
    index++;

    if (index < posts.length) {
      setTimeout(showPost, 100);
    }
  };

  showPost();
}