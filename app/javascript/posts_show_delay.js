export function setupPostsShowDelay() {
  const postsLeft = Array.from(document.querySelectorAll('#login-histories .ease_in_left')).slice(0, 10);
  const postsRight = Array.from(document.querySelectorAll('#login-histories .ease_in_right')).slice(0, 10);
  if (postsLeft.length === 0 && postsRight.length === 0) {
    return;
  }
  // 初期状態: 要素を占有しつつ見えない状態にする
  postsLeft.forEach(post => {
    post.style.visibility = 'hidden';
  });

  postsRight.forEach(post => {
    post.style.visibility = 'hidden';
  });

  let indexLeft = 0;
  let indexRight = 0;

  const showPostLeft = () => {
    postsLeft[indexLeft].style.visibility = 'visible'; // 表示
    postsLeft[indexLeft].classList.add('animate-ease_in_left'); // アニメーション
    indexLeft++;

    if (indexLeft < postsLeft.length) {
      setTimeout(showPostLeft, 200);
    }
  };

  const showPostRight = () => {
    postsRight[indexRight].style.visibility = 'visible'; // 表示
    postsRight[indexRight].classList.add('animate-ease_in_right'); // アニメーション
    indexRight++;

    if (indexRight < postsRight.length) {
      setTimeout(showPostRight, 200);
    }
  };

  showPostLeft();
  showPostRight();
}
