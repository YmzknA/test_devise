export function setupPostsShowDelay(mainButtonId, dropdownId) {
  const postsLeft = document.querySelectorAll('#login-histories .ease_in_left');
  const postsRight = document.querySelectorAll('#login-histories .ease_in_right');

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
      setTimeout(showPostLeft, 100);
    }
  };

  const showPostRight = () => {
    postsRight[indexRight].style.visibility = 'visible'; // 表示
    postsRight[indexRight].classList.add('animate-ease_in_right'); // アニメーション
    indexRight++;

    if (indexRight < postsRight.length) {
      setTimeout(showPostRight, 100);
    }
  };

  showPostLeft();
  showPostRight();
}