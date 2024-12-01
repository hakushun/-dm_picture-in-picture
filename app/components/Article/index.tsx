'use client';

import { useRef } from 'react';
import styles from './index.module.css';

export function Article() {
  // 動画プレーヤーの親要素の参照を保持（動画プレーヤーを Picture-in-Picture から戻すために使用）
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  // 動画プレーヤーの参照を保持
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // Picture-in-Picture の参照を保持
  const pipWindowRef = useRef<Window | null>(null);

  async function onClick() {
    // Document Picture-in-Picture API がサポートされてなければ早期リターン
    if (!('documentPictureInPicture' in window)) return;

    // Picture-in-Picture が立ち上がっていれば閉じる
    if (pipWindowRef.current) {
      pipWindowRef.current.close();
      pipWindowRef.current = null;
      return;
    }

    // Picture-in-Picture を開く
    pipWindowRef.current = await window.documentPictureInPicture.requestWindow({
      // ウィンドウのサイズを指定
      width: 400,
      height: 240,
      // [タブに戻る] ボタンを非表示にする
      disallowReturnToOpener: true,
      // デフォルトの位置とサイズで開く
      preferInitialWindowPlacement: true,
    });

    if (!pipWindowRef.current || !videoRef.current) return;

    // Picture-in-Picture に動画プレーヤーを移動
    pipWindowRef.current.document.body.append(videoRef.current);

    // Picture-in-Picture が閉じられたら、動画プレーヤーを元の位置に戻す
    pipWindowRef.current.addEventListener('pagehide', () => {
      if (!videoWrapperRef.current || !videoRef.current) return;

      videoWrapperRef.current.prepend(videoRef.current);
      pipWindowRef.current = null;
    });
  }

  return (
    <article className={styles.contents}>
      <h2>東京</h2>
      <div ref={videoWrapperRef} className={styles.video_wrapper}>
        <video controls width={800} ref={videoRef} style={{ width: '100%' }}>
          <source src="/sample-20s.mp4" />
        </video>
        <button type="button" className={styles.button} onClick={onClick}>
          動画を視聴しながらコンテンツを読む
        </button>
      </div>
      <h3>概要</h3>
      <h4>奠都に至った経緯</h4>
      <p>
        東京は、1868年9月3日（慶応4年7月17日）に、江戸幕府の所在地であった「江戸」が改称されて誕生しました（「江戸ヲ称シテ東京ト為スノ詔書」）。江戸時代には、江戸が徳川家や老中らによる政治の中心地でありつつも、朝廷は京都に位置していました。このように、江戸と京都の間には二重構造の「複都制的」な役割分担が存在していました。1869年3月28日に、京都を「都」としての地位に留めつつ、東京が新たな中心地として位置付けられる奠都が行われました。このようにして、東京は日本の実質的な首都としての役割を果たし始めました。
      </p>
      <h4>現在の東京</h4>
      <p>
        現代において、東京は日本の政治・経済・文化の中心地となっています。政治的には、国会議事堂や最高裁判所、内閣総理大臣官邸をはじめとする中央省庁が東京23区内に集中しています。一方、文化的な側面では、無数の劇場やライブハウス、さらには世界一の星付きレストランを擁する街として、多様な文化が育まれています。スポーツの分野では、東京オリンピックが過去2回開催され、2024年にはフォーミュラEの大会も市内で実施されました。
      </p>
      <h4>観光・移住</h4>
      <p>
        東京は国内外から多くの観光客を引きつける都市です。2023年4月から6月にかけて、国内旅行者は約1億1,511万人、海外旅行者は約521万人が東京を訪れました。東京に定住する外国人の数も多く、2020年時点で約57万人が生活しており、多文化共生の取り組みが進められています。
      </p>
      <h4>都市開発</h4>
      <p>
        東京は江戸時代から都市の再構築が頻繁に行われてきました。特に、20世紀後半の東京湾埋立やウォーターフロントの開発により、湾岸地域の超高層ビル群が目立つ景観が形成されています。
      </p>
      <h4>課題</h4>
      <p>
        これまでの歴史を振り返ると、東京は多くの困難を乗り越えて発展してきました。関東大震災や東京大空襲といった大規模な災害を経験しながらも、現在では世界有数の大都市に成長しました。しかし、人口密度の高さや犯罪率、通勤ラッシュなど、解決すべき課題も依然として残っています。
      </p>
      <h3>地名</h3>
      <p>
        「東京」という名前は、「東にある都」という意味を持ちます。江戸を東京に改名するアイデアは、江戸時代後期の経済学者である佐藤信淵が文政6年（1823年）に書いた『混同秘策』にすでに登場しています。佐藤は、日本が世界に進出するためには国内の防衛を強化する必要があり、そのためには都を江戸に移して「東京」と呼び、大阪を「西京」、そして東京・西京・京都の三つの京を形成するべきだと記しています。
      </p>
      <p>
        <small>
          ※記載の情報は<a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC">Wikipedia</a>
          から引用しました。
        </small>
      </p>
    </article>
  );
}
