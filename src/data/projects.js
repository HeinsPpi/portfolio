import trackingImage from '../assets/projects/tracking.png'
import dconImage from '../assets/projects/dcon.png'
import wroImage from '../assets/projects/wro.png'
import fcTokushimaImage from '../assets/projects/fc-tokushima.png'
import utokyoGscImage from '../assets/projects/utokyo-gsc.jpg'

const projectHighlights = {
  tracking: {
    role: 'YOLOによる人物検出とByteTrackによるトラッキングの実装・検証',
    outcome: '複数人が映る環境で、人物ごとにIDを割り当てて継続追跡できるシステムを構築',
    learning: '複数の技術を組み合わせて目的に合ったシステムを構築する経験',
  },
  'dcon-2026': {
    role: '500枚以上の棚画像の収集と、YOLOを用いた欠品検出AIの構築・改善',
    outcome: 'DCON2026特別展示でオーディエンス賞を受賞',
    learning: 'AIの精度だけでなく、現場での使われ方まで考えて設計する重要性',
  },
  'fc-tokushima': {
    role: '選手データの整理、ACWRの算出、トレーニング負荷のグラフ化',
    outcome: '実データを公開せず、現場で確認しやすい分析プロセスを支援',
    learning: '計算結果を現場で判断に使える情報へ変換する重要性',
  },
  'utokyo-gsc-next': {
    role: '盤面画像からのストーン認識・データ化と、戦術提案AIの構築',
    outcome: '戦術AI自体は完成したが、十分な精度に到達することは今後の課題として残った',
    learning: '画像認識から意思決定までを接続する難しさと、入力精度が判断性能へ与える影響',
  },
  'wro-2024': {
    role: 'カメラやセンサーの情報を利用し、ロボットを動かすプログラム部分を担当',
    outcome: 'WRO 2024 Japan Future Innovators部門で決勝大会に出場し、神奈川工科大学賞を受賞',
    learning: 'プログラムだけでなく、実際の災害環境や利用状況まで考えて設計する重要性',
  },
  'nii-explorers': {
    role: '既存研究・技術の調査と、研究テーマの問い・検証方法の検討',
    outcome: '制作中心の視点から、自ら問いを立てて確かめる研究プロセスへ理解を拡張',
    learning: '技術を作るだけでなく、現象の理由と確かめ方を考える研究の視点',
  },
  'kaggle-pokemon-tcg-ai': {
    role: '対戦AIエージェントの実装、シミュレーション評価、負けログの分析と改善',
    outcome: '複数の相手との対戦結果から敗因を特定し、修正前後の勝率を比較する改善プロセスを構築',
    learning: '結果を検証し、失敗の原因を次の改善につなげることの重要性',
  },
}

const projectList = [
  { slug: 'tracking', number: 'Project 01', category: 'AI / DATA', title: '人物トラッキングシステム', description: 'YOLOとByteTrackを活用し、映像内の人物を検出・追跡するシステムを開発した。', detail: ['人に追従して移動するロボットを作るため、YOLOによる人物検出とByteTrackによるトラッキングを組み合わせ、映像内の人物を継続的に追跡するシステムを開発した。複数人が映る環境でも人物ごとにIDを割り当てて追跡できるよう実装・検証を行い、複数の技術を組み合わせて目的に合ったシステムを構築する経験につながった。'], tags: ['Python', 'YOLO', 'ByteTrack'], period: '2026', image: trackingImage, imageZoom: true },
  { slug: 'dcon-2026', number: 'Project 02', category: 'ROBOTICS', title: '高専DCON 2026', description: '自動走行するショッピングカートを開発し、DCON2026の特別展示でオーディエンス賞を受賞した。', detail: ['店舗で行われている欠品確認と店内清掃を効率化するため、自動走行するショッピングカート型ロボットの開発に取り組んだ。私は500枚以上の棚画像を収集し、YOLOを用いた欠品検出AIの構築と改善を担当したほか、チームで実際の店舗での活用方法も検討した。DCON2026では特別展示を行い、オーディエンス賞を受賞したことで、AIの精度だけではなく、現場でどう使われるかまで考えてシステムを作る重要性を学んだ。'], tags: ['Hardware', 'IoT', 'Physical AI'], period: '2025–2026', image: dconImage, imageZoom: true },
  { slug: 'fc-tokushima', number: 'Project 03', category: 'AI / DATA', title: 'FC徳島 データ分析', description: 'FC徳島の選手データを分析し、ACWRの算出とトレーニング負荷の可視化を行った。', detail: ['FC徳島でデータ分析を支援し、選手のトレーニング負荷を把握するためにACWRの算出やグラフ化を行った。日々蓄積される数値をそのまま見せるのではなく、負荷の変化や傾向を現場で確認しやすい形に整理することを意識し、データ分析では計算するだけでなく、結果を判断に使える情報へ変えることが重要だと学んだ。'], tags: ['Data', 'Analysis', 'Visualization'], period: '2025–2026', image: fcTokushimaImage },
  { slug: 'utokyo-gsc-next', number: 'Project 04', category: 'AI / DATA', title: 'UTokyoGSC-Next', description: 'カーリングの盤面を画像認識し、FESRAINを考慮して戦術を提案するAIの研究に取り組んだ。', detail: ['UTokyoGSC-Next第三段階プログラムに参加し、「FESRAINを考慮したカーリング戦術AIの開発」をテーマに研究を行った。実際のカーリング盤面を画像認識してストーンの位置関係をデータとして取得し、その情報をもとに戦術を提案するAIの構築を試みたことで、画像認識と意思決定AIを一つの流れとしてつなぐ難しさや、入力する情報の精度がシステム全体の判断に与える影響を学んだ。'], tags: ['AI', 'Curling', 'Research'], period: '2021-2025', image: utokyoGscImage },
  { slug: 'wro-2024', number: 'Project 05', category: 'ROBOTICS', title: 'WRO 2024 Japan', description: '冠水時の安全な避難を支援するロボットを開発し、WRO 2024 Japan決勝大会で神奈川工科大学賞を受賞した。', detail: ['冠水すると水によって地面の状態が見えなくなり、段差や障害物に気づきにくくなるという課題に着目し、水中や進行方向の様子を確認しながら安全な避難を支援するロボットを開発した。カメラやセンサーから得られる情報を使って人を安全な方向へ誘導する仕組みを考え、WRO 2024 JapanのFuture Innovators部門で決勝大会に出場し、神奈川工科大学賞を受賞した。実際の災害環境を想定して開発したことで、技術だけでなく、それが使われる状況まで考えて設計することの重要性を学んだ。'], tags: ['Robot', 'Control', 'Competition'], period: '2024', image: wroImage, imageZoom: true },
  { slug: 'nii-explorers', number: 'Project 06', category: 'AI / DATA', title: '情報科学の達人プログラム', description: '国立情報学研究所のプログラムに参加し、自ら問いを立てて検証する情報学研究のプロセスを学んだ。', detail: ['国立情報学研究所が実施する「情報科学の達人プログラム」に参加し、情報学分野の研究に触れながら、研究の進め方や課題への向き合い方を学んだ。単にプログラムを書くことを目的とするのではなく、自分で問いを立て、既存研究や技術を調べながら検証していく研究のプロセスを経験した。これまで制作を中心に取り組んできた中で、技術を「作る」だけではなく、「なぜそうなるのか」「どのように確かめるのか」という研究の視点を持つきっかけになった。'], tags: ['Research', 'Information Science', 'NII'], period: '2026' },
  { slug: 'kaggle-pokemon-tcg-ai', number: 'Project 07', category: 'AI / DATA', title: 'Kaggle Pokémon TCG AI Battle', description: 'ポケモンカードゲームを題材に、対戦状況から適切な行動を選択するAIエージェントを開発した。', detail: ['ポケモンカードゲームを題材に、ゲームの状況から適切な行動を選択するAIを開発するKaggleのコンペティションに参加した。対戦中の手札や盤面、相手の状態、残り山札など複数の情報をもとに行動を決定するエージェントを実装し、シミュレーションによる評価と負けログの分析を繰り返しながら戦略を改善した。特に、ある対面だけに勝つためのルールを追加するのではなく、複数の相手との大量の対戦結果から敗因を特定し、修正前後の勝率を比較しながら全体として強くなる判断ルールを探った。実装、評価、分析、修正を何度も繰り返したことで、AIの性能を高めるにはアルゴリズムを作るだけでなく、結果を検証し、失敗の原因を次の改善につなげることが重要だと学んだ。'], tags: ['AI', 'Kaggle', 'Agent'], period: '2026' },
]

export const projects = projectList.map((project) => ({ ...project, ...projectHighlights[project.slug] }))
