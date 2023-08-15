import React from 'react';

function Works() {
  return (
    <section id="works" class="home-section parallax text-center  py-32" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-offset-2">
            <div class="section-heading text-center">
              <h2 class="text-4xl text-center font-semibold py-2">Works</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 chronology">
            <table class="table table-hover ">
              <tbody>
                <tr>
                  <th scope="row">2019</th>
                  <td><a href="https://hacku.yahoo.co.jp/hacku2019osaka/" target="_blank" rel="noopener noreferrer">Hack U 2019 OSAKA</a></td>
                  <td>Unity</td>
                  <td>YahooのハッカソンでAR,音声認識を用いたスマホアプリを作成しました。</td>
                </tr>
                <tr>
                  <th scope="row">2019</th>
                  <td><a href="https://note.com/tiger59/n/n88ce2d98216d?magazine_key=mf16f774e730e"
                    target="_blank" rel="noopener noreferrer">アレクサスキル作成</a></td>
                  <td>Node.js</td>
                  <td>アレクサスキルのハッカソンで優勝しました。</td>
                </tr>
                <tr>
                  <th scope="row">2018</th>
                  <td><a href="https://aibic-spiral.enpit.jp/2018/10/13/aibic-up18/" target="_blank" rel="noopener noreferrer">需要予測AI</a></td>
                  <td>Python</td>
                  <td>スーパーにおいて各商品の需要を予測し自動で発注数を導き出すAIを作成しました。</td>
                </tr>
                <tr>
                  <th scope="row">2018</th>
                  <td><a href="http://www.nadasemi.ii.konan-u.ac.jp/robot_manzai/" target="_blank" rel="noopener noreferrer">漫才ロボット</a></td>
                  <td>Python</td>
                  <td>学内のプロジェクトで漫才ロボットの作成の手伝いをしました。</td>
                </tr>
                <tr>
                  <th scope="row">2018, 2019</th>
                  <td><a href="https://icpc.baylor.edu/" target="_blank" rel="noopener noreferrer">ICPC</a></td>
                  <td>Python</td>
                  <td>プログラミングの世界大会に参加しました。</td>
                </tr>
                <tr>
                  <th scope="row">2017</th>
                  <td><a href="https://github.com/konan-pbl-2017/teamE" target="_blank" rel="noopener noreferrer">ゲームエンジン</a></td>
                  <td>Java</td>
                  <td>研究室で作成しているゲームエンジンを使いゲームを作成しました。</td>
                </tr>
                <tr>
                  <th scope="row">2017</th>
                  <td>Webアプリ</td>
                  <td>Python@Flask</td>
                  <td>初めてWebアプリを作成し実際に学内で使用していただきました。</td>
                </tr>
                <tr>
                  <th scope="row">2016</th>
                  <td><a href="game.html" target="_blank">ゲーム</a></td>
                  <td>Processing</td>
                  <td>初めてプログラミングを学習し学内でゲームを作成し優秀作品に選ばれました。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Works;