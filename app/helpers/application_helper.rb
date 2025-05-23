module ApplicationHelper
  def default_meta_tags
    {
      site: '本日も！',
      title: '本日も！',
      reverse: true,
      charset: 'utf-8',
      description: '本日も！は、人から程よく遠いSNSです。今日も頑張る宣言をして、張り切っていきましょう！',
      keywords: 'SNS',
      canonical: request.original_url,
      separator: '|',
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        image: image_url('ogp.jpg'), # 配置するパスやファイル名によって変更すること
        local: 'ja-JP'
      },
      # Twitter用の設定を個別で設定する
      twitter: {
        card: 'summary', # Twitterで表示する場合は大きいカードにする
        site: '@', # アプリの公式Twitterアカウントがあれば、アカウント名を書く
        image: image_url('ogp.jpg') # 配置するパスやファイル名によって変更すること
      }
    }
  end
end
