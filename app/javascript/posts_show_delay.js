  // 投稿要素を取得
export function setupPostsShowDelay(mainButtonId, dropdownId) {
    const posts = document.querySelectorAll('#login-histories .ease_in');

    // 初期状態: 全ての投稿を非表示
    posts.forEach(post => {
        post.style.display = 'none';
    });

    // 表示処理
    let index = 0;
    const showPost = () => {
        posts[index].style.display = 'block'; // 表示
        posts[index].classList.add('animate-ease_in'); // アニメーション
        index++;

        if (index < posts.length) {
            setTimeout(showPost, 200);
        }
    };

    // 最初の投稿を表示
    showPost();
};