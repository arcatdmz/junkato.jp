
class Entry {
  public date: Date;
  public text: string;
  constructor(date: string, text: string) {
    this.date = new Date(date);
    this.text = text;
  }
  public getDateString(lang: string) {
    const d = this.date;
    return lang === 'en'
      ? `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
      : `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;
  }
}

class Entries {
  en: Entry[];
  ja: Entry[];
}

interface RawEntry {
  date: string;
  text: string;
}

interface RawEntries {
  [lang: string]: RawEntry[];
}

const rawEntries: RawEntries = {
  "en": [
    {
      "date": "11/8/2017",
      "text": "Provided a keynote talk at <a href=\"https://2017.splashcon.org/\" title=\"The ACM SIGPLAN conference on Systems, Programming, Languages and Applications: Software for Humanity\">SPLASH</a> <a href=\"https://2017.splashcon.org/track/live-2017#program\">LIVE 2017</a>. I'm writing a follow-up article about the talk, but for now, please refer to <a href=\"https://2017.splashcon.org/event/live-2017-keynote-a\">the talk abstract</a> and <a href=\"https://junkato.jp/publications/live2017-kato-keynote-slides.pdf\">slide deck</a>."
    },
    {
      "date": "9/23/2017",
      "text": "Will serve as a keynote speaker at <a href=\"https://2017.splashcon.org/\" title=\"The ACM SIGPLAN conference on Systems, Programming, Languages and Applications: Software for Humanity\">SPLASH</a> <a href=\"https://2017.splashcon.org/track/live-2017#program\">LIVE 2017</a>. See you in Vancouver!"
    },
    {
      "date": "6/29/2017",
      "text": "Visited Pittsburgh for <a href=\"http://uist.acm.org/uist2017\">ACM UIST 2017</a> <abbr title=\"Program Committee\">PC</abbr> meeting, gave a talk at <a href=\"https://www.scs.cmu.edu/calendar/mon-2017-06-26-1230/special-human-computer-interaction-talk\">CMU <abbr title=\"Human-Computer Interaction Institute\">HCII</abbr></a>, dropped by Seattle and visited <a href=\"https://dub.washington.edu\">UW</a> and <a href=\"https://www.microsoft.com/en-us/research/group/research-in-software-engineering-rise/\">Microsoft Research</a>."
    },
    {
      "date": "6/14/2017",
      "text": "Presented <a href=\"http://f3js.org\">f3.js</a> at <a href=\"http://www.dis2017.org/\">ACM DIS 2017</a>. Slides are available for download in <a href=\"/publications\">the publications</a> page."
    },
    {
      "date": "4/4/2017",
      "text": "Presented <a href=\"/ugv\">User-Generated Variables</a> at &lt;Programming&gt; <a href=\"http://programming-experience.org/px17/\"><abbr title=\"Programming Experience\">PX</abbr> workshop</a>. It's always good to get to know new people!"
    },
    {
      "date": "3/27/2017",
      "text": "Publicly demonstrated <a href=\"http://logs.f3js.org\">Robocam (f3js-logs)</a> for the first time at <a href=\"humanrobotinteraction.org/2017/\">ACM/IEEE HRI 2017</a>, which is an accompanying tool and web-based interface to f3.js that helps recording event logs of IoT applications and authoring their demo videos."
    },
    {
      "date": "12/18/2016",
      "text": "Attended <a href=\"http://sigchi.jp/symposium.html\">The First ACM SIGCHI Asian Symposium</a> and was named as a board member for <a href=\"http://sigchi.jp/\">Japan ACM SIGCHI Chapter</a>."
    },
    {
      "date": "10/19/2016",
      "text": "Served as a Student Volunteer Chair for <a href=\"http://www.acm.org/uist/uist2016/\">ACM UIST 2016</a>. Thanks all for coming to Tokyo!"
    },
    {
      "date": "8/7/2016",
      "text": "Organized <a href=\"http://sigpx.org/en/2\">The Second Workshop of <abbr title=\"Special Interest Group on Programming Experience\">SIGPX</abbr></a>."
    },
    {
      "date": "7/16/2016",
      "text": "Created a web page for the new <a href=\"http://2016.ecoop.org/track/LIVE-2016\">ECOOP 2016 LIVE</a> workshop paper that introduces <a href=\"/live-tuning\" title=\"Live Tuning: Expanding Live Programming Benefits to End-users\">&quot;Live Tuning&quot;</a>."
    },
    {
      "date": "7/15/2016",
      "text": "Created a web page for the new IEEE Computer journal article that introduces <a href=\"/programming-with-examples\" title=\"Programming with Examples to Develop Data-intensive User Interfaces\">&quot;Programming with Examples&quot;</a>."
    },
    {
      "date": "5/23/2016",
      "text": "Visited <a href=\"http://vpri.org/\"><abbr title=\"Viewpoints Research Institute\">VPRI</abbr></a>, <a href=\"https://blog.ycombinator.com/harc\">Y Combinator Research <abbr title=\"Human Advancement Research Community\">HARC</abbr></a>, and several other places around Bay Area. Organized <a href=\"http://hci.tokyo/\">Japanese HCI Symposium</a> at <a href=\"https://chi2016.acm.org/wp/workshops/\">ACM CHI 2016</a>."
    },
    {
      "date": "2/27/2016",
      "text": "Organized <a href=\"http://sigpx.org/en/1\">The First Workshop of <abbr title=\"Special Interest Group on Programming Experience\">SIGPX</abbr></a>. English translation of the press release that introduces the <a href=\"http://textalive.jp/\">TextAlive</a> web service is <a href=\"http://www.aist.go.jp/aist_e/latest_research/2016/20160125/en20160125.html\">now available</a>."
    },
    {
      "date": "12/18/2015",
      "text": "Received the Best Paper Award at <a href=\"http://www.maynoothuniversity.ie/smc15/\">SMC 2015</a> for co-authoring a paper about an interactive music puzzle named <a href=\"https://staff.aist.go.jp/jun.kato/CrossSong/\">CrossSong</a> - please enjoy :)"
    },
    {
      "date": "11/20/2015",
      "text": "Publicly demonstrated <a href=\"http://f3js.org\">f3.js</a> for the first time at <a href=\"http://uist.acm.org/uist2015/about\">ACM UIST 2015</a>, which is an <abbr title=\"Integrated Development Environment\">IDE</abbr> to create IoT applications purely by code."
    },
    {
      "date": "9/23/2015",
      "text": "My Ph.D dissertation finally got online on the university's repository. <a href=\"http://hdl.handle.net/2261/58372?locale=en\"><u>Jun Kato</u>, <b>&quot;Integrated Graphical Representations for Development of Programs with Real-world Input and Output&quot;</b>, Mar. 2014</a>."
    },
    {
      "date": "7/29/2015",
      "text": "Presented <a href=\"http://textalive.jp/paper\">TextAlive Online (ver.β<small>js</small>)</a> at <a href=\"http://iclc.livecodenetwork.org/\" title=\"The First International Conference on Live Coding\">ICLC 2015</a> and visited friends around UK!"
    },
    {
      "date": "5/14/2015",
      "text": "Presented <a href=\"/textalive/\">TextAlive</a> in the &quot;Programming Environments&quot; session and organized <a href=\"http://hci.tokyo/\">Japanese HCI Symposium</a> at <a href=\"http://chi2015.acm.org/program/full-schedule/?id=pn160\">ACM CHI 2015</a>.<!-- In July, I will attend <a href=\"http://iclc.livecodenetwork.org/\" title=\"The First International Conference on Live Coding\">ICLC 2015</a>, Leeds, UK. -->"
    },
    {
      "date": "4/11/2015",
      "text": "In preparation for the CHI presentation, <a href=\"http://textalive.jp/\">TextAlive</a> is finally released as ver.β<small>js</small>! Make videos within your browser."
    },
    {
      "date": "3/20/2015",
      "text": "Served as an organizing committee member for a special event named <a href=\"https://www.facebook.com/jun.kato/posts/10155228208505391\">IPSJ-ONE</a>. It gathered 19 top-notch researchers in Information Processing (computer science, information science, that sort of thing) from all over Japan, each of them giving 5-minutes talk introducing their work with their passion for research."
    },
    {
      "date": "3/2/2015",
      "text": "My paper about <a href=\"/textalive/\">TextAlive</a>, an <abbr title=\"Integrated Design Environment\">IDE</abbr> to create Kinetic Typography videos with live programming, is accepted to <a href=\"http://chi2015.acm.org/program/full-schedule/?id=pn160\">ACM CHI 2015</a>. It wins <abbr title=\"Best of CHI Honorable Mention award\">a silver medal</abbr>! See you in Korea :)"
    },
    {
      "date": "12/6/2014",
      "text": "Will hold <a href=\"http://hci.tokyo/\">a symposium on Emerging Japanese HCI Research Collection</a> at <a href=\"http://chi2015.acm.org/\">ACM CHI 2015</a>."
    },
    {
      "date": "11/1/2014",
      "text": "Chaired &quot;Novel Interaction Techniques&quot; session and presented <a href=\"/sharedo/\">Sharedo</a> which was nominated for the best paper at <a href=\"http://hai-conference.net/hai2014/\">HAI 2014</a>."
    },
    {
      "date": "8/9/2014",
      "text": "My paper about <a href=\"/sharedo/\">Sharedo</a> that discusses sharing tasks between human and agents is accepted to <a href=\"http://hai-conference.net/hai2014/\">HAI 2014</a>. See you in Japan this October!"
    },
    {
      "date": "6/19/2014",
      "text": "Visited <a href=\"http://www.dgp.toronto.edu/\">the University of Toronto <abbr title=\"Dynamic Graphics Project\">DGP</abbr></a> and gave a talk. I'm also visiting <a href=\"http://hci.cs.umanitoba.ca/\">the University of Manitoba <abbr title=\"Human-Computer Interaction\">HCI</abbr> Lab</a> in a few days and will give another talk. Both of these talks are about &quot;Live Programming&quot; in the real world, which is based on my Ph.D dissertation and discusses the direction of future work in my current position."
    },
    {
      "date": "4/25/2014",
      "text": "Serving as a program committee member for <a href=\"http://www.acm.org/uist/uist2014/organizers.php\">ACM UIST 2014</a> is exciting but difficult. Apart from it, I'm getting settled in the new environment and have just started to prepare for attending <a href=\"http://www.cs.mcgill.ca/~kry/gi2014/\">Graphics Interface 2014</a>. I'm going to present <a href=\"/visionsketch/\">VisionSketch</a> in the &quot;<a href=\"http://www.cs.mcgill.ca/~kry/gi2014/program.html#S5\">Video and Collaboration</a>&quot; session on 5/8."
    },
    {
      "date": "4/1/2014",
      "text": "Received a Ph.D degree in Computer Science and started to work as a researcher in <a href=\"http://www.aist.go.jp/aist_e/about_aist/\">AIST</a>, a research organization funded by the Japanese government in which over 2000 researchers work hard to contribute to both industry and science. My primary task won't change - to conduct interesting research, write good paper, and do some other stuff to make world better place with help of information technology :)"
    },
    {
      "date": "2/25/2014",
      "text": "Upgraded Bootstrap framework from v2 to v3 for better browsing experience. What a modern flat design!"
    },
    {
      "date": "2/20/2014",
      "text": "Defended my dissertation! Details will come later. My paper about <a href=\"/visionsketch/\">VisionSketch</a> is accepted to <a href=\"http://www.cs.mcgill.ca/~kry/gi2014/\">Graphics Interface 2014</a>."
    },
    {
      "date": "11/19/2013",
      "text": "Visited St. Andrews to for <a href=\"http://www.acm.org/uist/uist2013/\">ACM UIST 2013</a>, gave a talk at <a href=\"http://vimeo.com/77669396\">University of Washington <abbr title=\"Design Use Build\">dub</abbr></a>, met friends of the Microsoft campus, and finished the Adobe internship... I'm back in Japan!"
    },
    {
      "date": "8/12/2013",
      "text": "Started internship at <a href=\"http://www.adobe.com/technology/\">Adobe Creative Technologies Lab</a> in Seattle."
    },
    {
      "date": "8/4/2013",
      "text": "I am going to attend <a href=\"http://www.acm.org/uist/uist2013/\">ACM UIST 2013</a> ... expecting fruitful discussion at Doctoral Symposium. My paper describing the development process of <a href=\"/openpool/\">OpenPool</a> is accepted to present at <a href=\"http://www.ieee-gcce.org/2013/\">IEEE GCCE 2013</a>."
    },
    {
      "date": "6/24/2013",
      "text": "Got some sort of recognition at ACM conferences, <a href=\"http://chi2013.acm.org/\">ACM CHI</a> and <a href=\"http://pldi2013.ucombinator.org/\">ACM PLDI</a>, detailed in <a href=\"/publications/#awards\">Awards</a> section. Will work for <a href=\"http://www.adobe.com/technology/people-by-location.html#seattle\">Adobe Research Seattle</a> this summer."
    },
    {
      "date": "4/16/2013",
      "text": "My sole-authored poster about <a href=\"/visionsketch/\">VisionSketch</a> is accepted to present at Student Research Competition of <a href=\"http://pldi2013.ucombinator.org/\">ACM PLDI 2013</a>."
    },
    {
      "date": "3/5/2013",
      "text": "My colleagues are going to present <a href=\"/openpool/\">OpenPool</a> at <a href=\"http://sxsw.com/trade-shows/exhibitors?client_id=S13-6173\" title=\"South by Southwest 2013\">SXSW 2013</a>. I've worked on the project as one of the main programmers. Stay tuned for its open-source distribution!"
    },
    {
      "date": "3/2/2013",
      "text": "Collaboration with <abbr title=\"Programming Language\">PL</abbr> people turned out to be a full paper at <a href=\"http://pldi2013.ucombinator.org/\">ACM PLDI 2013</a>. It's about live programming on <a href=\"https://www.touchdevelop.com/app/\">TouchDevelop Web App</a>!"
    },
    {
      "date": "12/13/2012",
      "text": "My short paper about <a href=\"/picode/\">Picode</a> is conditionally accepted to <a href=\"http://chi2013.acm.org/\">ACM CHI 2013</a>. See you in Paris!"
    },
    {
      "date": "10/28/2012",
      "text": "Attended <a href=\"http://www.msra.cn/21CCC/xsjs_en.html\" title=\"Computing in the 21st Century Conference\">21 CCC</a> in Tianjin, China and received this year's <a href=\"http://blogs.technet.com/b/inside_microsoft_research/archive/2012/10/26/14-years-of-inspiring-asia-pacific-ph-d-candidates.aspx\">Microsoft Research Asia Fellowship</a>."
    },
    {
      "date": "10/15/2012",
      "text": "Finished my talk at <a href=\"http://www.acm.org/uist/uist2012/\">ACM UIST 2012</a> in the &quot;<a href=\"http://www.acm.org/uist/uist2012/program.html#Paper_211\">Toolkits</a>&quot; session on 10/9. Will serve as a Publicity Co-chair at <a href=\"http://www.acm.org/uist/uist2013/\">ACM UIST 2013</a>!"
    },
    {
      "date": "9/18/2012",
      "text": "Back in Japan again. The future plan includes a visit to Beijing in this month and Boston and New York in October."
    },
    {
      "date": "7/21/2012",
      "text": "My paper about an IDE named DejaVu is accepted to <a href=\"http://www.acm.org/uist/uist2012/\">ACM UIST 2012</a>. The details will come later."
    },
    {
      "date": "6/21/2012",
      "text": "Started to work with <a href=\"http://research.microsoft.com/en-us/projects/touchdevelop/\">TouchDevelop</a> team as a research intern in <a href=\"http://research.microsoft.com/en-us/groups/rise/\"><abbr title=\"Research in Software Engineering\">RiSE</abbr> Group</a>, Microsoft Research Redmond."
    },
    {
      "date": "5/5/2012",
      "text": "Back in Japan... In June, I will start an internship in Redmond."
    },
    {
      "date": "3/23/2012",
      "text": "My paper about <a href=\"/phybots/\">Phybots</a> is accepted to <a href=\"http://www.dis2012.org/\">ACM DIS 2012</a>. I will present the paper in the &quot;<a href=\"http://www.dis2012.org/program.php#session10\">Absolutely Fab</a>&quot; session on 6/13."
    },
    {
      "date": "3/19/2012",
      "text": "Renewed the website."
    },
    {
      "date": "1/9/2012",
      "text": "Started an internship at <a href=\"http://research.microsoft.com/hci\">HCI Group</a> of Microsoft Research Asia."
    }
  ],
  "ja": [
    {
      "date": "10/19/2017",
      "text": "国際会議<a href=\"https://2017.splashcon.org/\" title=\"The ACM SIGPLAN conference on Systems, Programming, Languages and Applications: Software for Humanity\">SPLASH</a> <a href=\"https://2017.splashcon.org/track/live-2017#program\">LIVE 2017</a>で<a href=\"https://junkato.jp/ja/blog/2017/10/8/live-programming/\">Live Programming</a>に関して基調講演します。<a href=\"https://sigpx.org/\">SIGPX</a>で扱ってきたさまざまなトピックをカバーした情報処理学会 学会誌の小特集「<a href=\"https://sigpx.org/ipsj2017\">プログラミング・エクスペリエンスの新潮流</a>」でエディタを務めました。"
    },
    {
      "date": "9/20/2017",
      "text": "日本ソフトウェア科学会 <a href=\"https://jssst2017.wordpress.com/\">第34回大会</a>の一般公開イベント<a href=\"https://jssst2017.wordpress.com/ftd/\">Future Technology Design</a>で招待講演とパネルディスカッションに参加しました。"
    },
    {
      "date": "8/6/2017",
      "text": "6月末の<abbr title=\"Carnegie Mellon University\">CMU</abbr> <abbr title=\"Human-Computer Interaction Institute\">HCII</abbr>での講演が<a href=\"https://scs.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fd1c36b4-c0ad-49ef-b50c-aab0e5fa36b7\">Web上でスライドとともに公開</a>されました。ほぼ最新の研究成果を盛り込んであり、これまでの研究生活を振り返る内容になっています。"
    },
    {
      "date": "8/2/2017",
      "text": "Web上の音楽と同期して多数のデバイスを駆動できる開発キット「<a href=\"http://api.songle.jp/sync\">Songle Sync</a>」が<a href=\"http://www.aist.go.jp/aist_j/press_release/pr2017/pr20170802/pr20170802.html\">プレスリリース</a>されました。ブランドデザイン、<a href=\"http://tutorial.songle.jp\">チュートリアル</a>、<a href=\"https://github.com/SongleJp/songle-widget\">サンプルコード</a>に貢献しました。"
    },
    {
      "date": "6/21/2017",
      "text": "国際会議<a href=\"http://dis2017.org/\">ACM DIS 2017</a>で、筐体設計とマイコンのプログラミングを同時に行えてIoTデバイスを手軽に開発でき、その内容をパラメトリックにカスタマイズして誰でも自分好みのデバイスを作れる「<a href=\"http://f3js.org\">f3.js</a>」について登壇発表しました。"
    },
    {
      "date": "5/21/2017",
      "text": "国際会議<a href=\"http://2017.programming-conference.org/\">&lt;Programming&gt; 2017</a>併催ワークショップ<a href=\"http://programming-experience.org/px17/\"><abbr title=\"Programming Experience 2017 Workshop\">PX/17</abbr></a>で、プログラミングの知識がないユーザでも変数宣言を通してプログラムにパラメタを追加できる「<a href=\"http://junkato.jp/ugv\">User-Generated Variables</a>」を登壇発表しました。"
    },
    {
      "date": "3/27/2017",
      "text": "国際会議<a href=\"http://humanrobotinteraction.org/2017/\">ACM/IEEE HRI 2017</a>で、ロボットやIoTデバイスのイベント情報を記録して字幕付きデモ動画を簡単に生成できる<a href=\"http://logs.f3js.org\">Robocam (f3js-logs)</a>をデモ発表しました。"
    },
    {
      "date": "10/19/2016",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2016/\">ACM UIST 2016</a>でStudent Volunteer Chairとして学生と一緒に学会運営しました。アジア初のUISTで過去最高の参加者を迎えられてよかったです。"
    },
    {
      "date": "10/16/2016",
      "text": "国際コンベンション<a href=\"http://docs.textalive.jp/nomaps2016/\">No Maps 2016</a>で研究成果のTextAliveをデモ展示しました。また、アイドルグループ<a href=\"http://www.brgh.tokyo/\">BELLRING少女ハート</a>のライブでTextAlive製の歌詞アニメーションが使われました。"
    },
    {
      "date": "8/7/2016",
      "text": "<a href=\"http://sigpx.org\">SIGPX</a>第2回を開催しました。私からはプログラム委員を務める<a href=\"http://2016.ecoop.org/track/LIVE-2016\">ECOOP 2016 LIVE</a>/<a href=\"http://2016.ecoop.org/track/PX-2016\"><abbr title=\"Programming Experience\">PX</abbr></a>の報告などを行いました。"
    },
    {
      "date": "7/17/2016",
      "text": "国際会議<a href=\"http://2016.ecoop.org/home\">ECOOP 2016</a>併催ワークショップ<a href=\"http://2016.ecoop.org/track/LIVE-2016\">LIVE 2016</a>で「<a href=\"http://junkato.jp/live-tuning/\">Live Tuning</a>」について登壇発表しました。プログラマ向け新技術として注目を集めるLive Programmingの利点をエンドユーザにまで広げる研究です。"
    },
    {
      "date": "7/15/2016",
      "text": "国際誌<a href=\"https://www.computer.org/web/computingnow/computer\">IEEE Computer</a> 7月号の特集「21世紀のユーザインタフェース」に「<a href=\"/programming-with-examples\">Programming with Examples to Develop Data-Intensive User Interfaces</a>」が採択され、掲載されました。"
    },
    {
      "date": "5/23/2016",
      "text": "<a href=\"http://vpri.org/\"><abbr title=\"Viewpoints Research Institute\">VPRI</abbr></a>に招かれ、プログラミング環境に関する研究紹介と議論を行ってきました。また、Pixar, <abbr title=\"Sony Interactive Entertainment\">SIE</abbr>, Adobeを訪問しました。お世話になったみなさま、ありがとうございました。国際会議<a href=\"https://chi2016.acm.org\">ACM CHI 2016</a>では昨年に続き<a href=\"http://hci.tokyo/chi2016/\">Symposium on Emerging Japanese HCI Research Collection</a>を運営しました。"
    },
    {
      "date": "3/13/2016",
      "text": "情報処理学会 <a href=\"http://ipsj-one.org/\">IPSJ-ONE</a>で<abbr title=\"Human-Computer Interaction\">HCI</abbr>研究会の推薦を受けて「<a href=\"http://junkato.jp/ja/blog/2016/3/16/ipsj-one-px-science-as-a-service/\">コンピュータを変幻自在の道具にするためのプログラミング環境技術</a>」と題して講演しました。また、<a href=\"http://sigpx.org\">SIGPX</a>初回は盛会でした！ご参加ありがとうございました。"
    },
    {
      "date": "3/4/2016",
      "text": "情報処理学会 <a href=\"http://www.interaction-ipsj.org/2016/\">インタラクション2016</a>で「<a href=\"http://f3js.org\">IoTアプリケーションのソフトウェア・ハードウェアを単一コードベースで開発できる統合開発環境f3.js</a>」と題して発表を行いました。"
    },
    {
      "date": "2/18/2016",
      "text": "今年も<a href=\"/ja/teaparty/\">お茶会</a>をつつがなく開催することができました。月末の27日(土)には<a href=\"http://sigpx.org\">SIGPX</a>というプログラミング体験に関する勉強会の初回を開催します。楽しみです。"
    },
    {
      "date": "2/5/2016",
      "text": "昨年<a href=\"http://www.aist.go.jp/aist_j/press_release/pr2015/pr20150908/pr20150908.html\">プレスリリース</a>して今年同内容が<a href=\"http://www.aist.go.jp/aist_e/latest_research/2016/20160125/en20160125.html\">英訳</a>され、まだ研究開発を続けている<a href=\"http://textalive.jp\">TextAlive</a>が<a href=\"http://textalive.jp/snowmiku2016/\">SNOW MIKU 2016</a>とタイアップしています。<a href=\"http://miraist.com/2016/2/textalive\">カフェでの上映</a>や<a href=\"http://blog.crypton.co.jp/l/2016/2/textalive/\">piaproとの連携</a>など盛りだくさんです！"
    },
    {
      "date": "12/7/2015",
      "text": "国内会議<a href=\"http://www.wiss.org/WISS2015/\">WISS 2015</a>で、先日<a href=\"http://www.acm.org/uist/uist2015/\">ACM UIST 2015</a>でも発表した<a href=\"http://f3js.org\">f3.js</a>をデモ発表しました。"
    },
    {
      "date": "11/20/2015",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2015/\">ACM UIST 2015</a>で、IoTアプリケーションのハードウェアとソフトウェアを両方JavaScriptで記述できる<a href=\"http://f3js.org\">f3.js</a>をデモ発表しました。"
    },
    {
      "date": "9/20/2015",
      "text": "情報処理学会 <a href=\"http://wakate.org/37\">第48回 情報科学若手の会</a>で若手特別講演者として「<a href=\"http://junkato.jp/ja/talks/people-are-programmers/\">ぼくらのプログラミングから、みんなのプログラミングへ</a>」と題して<a href=\"http://textalive.jp\">TextAlive</a>のデモを交えてお話しました。"
    },
    {
      "date": "9/8/2015",
      "text": "昨年より研究開発を続けていた歌詞アニメーション制作支援サービス<a href=\"http://textalive.jp\">TextAlive</a>を一般公開し、産総研から<a href=\"http://www.aist.go.jp/aist_j/press_release/pr2015/pr20150908/pr20150908.html\">プレスリリース</a>しました。ぜひ使ってみてください！"
    },
    {
      "date": "7/29/2015",
      "text": "国際会議<a href=\"http://iclc.livecodenetwork.org/\" title=\"The First International Conference on Live Coding\">ICLC 2015</a>で<a href=\"/ja/textalive/\">TextAlive Online (ver.β<small>js</small>)</a>の登壇発表を行いました。<a href=\"http://textalive.jp/paper\">発表対象となったシステムそのものを含む論文</a>がWeb上にアップロードされています。"
    },
    {
      "date": "7/1/2015",
      "text": "<a href=\"http://junkato.jp/ja/blog/2015/6/29/cs-research-internship-abroad/\">情報科学系 海外研究インターンのすすめ〔前</a>・<a href=\"http://junkato.jp/ja/blog/2015/6/30/cs-research-internship-abroad-2/\">後編〕</a>を書きました。学生の方はご参考にどうぞ。"
    },
    {
      "date": "6/19/2015",
      "text": "情報処理学会会誌「情報処理」今月号に<a href=\"http://id.nii.ac.jp/1001/00142321/\">ACM CHI 2015 参加報告</a>が掲載されました。<a href=\"http://junkato.jp/ja/blog/2015/5/3/acm-chi2015-japan/\">ブログ記事</a>と合わせて<a href=\"http://hci.tokyo/seminar/chi2015\">ACM CHI勉強会 2015</a>の予習教材にどうぞ。"
    },
    {
      "date": "5/14/2015",
      "text": "国際会議<a href=\"http://chi2015.acm.org/\">ACM CHI 2015</a>の参加報告をまとめて上梓したので、近々情報処理学会会誌に掲載されると思います。7月、<a href=\"http://iclc.livecodenetwork.org/\" title=\"The First International Conference on Live Coding\">ICLC 2015</a>に参加するためイギリスを訪問します。"
    },
    {
      "date": "5/3/2015",
      "text": "国際会議<a href=\"http://chi2015.acm.org/\">ACM CHI 2015</a>「Programming Environments」セッションで<a href=\"https://staff.aist.go.jp/jun.kato/TextAlive/\">TextAlive</a>の登壇発表を行い、<a href=\"http://hci.tokyo/\">Japanese HCI Symposium</a>を主催しました。シンポジウムの様子を<a href=\"/ja/blog/2015/5/3/acm-chi2015-japan/\">ブログ記事</a>に掲載しました。"
    },
    {
      "date": "3/20/2015",
      "text": "先日、情報処理学会全国大会初の試みとして、全分野からトップ研究者を集めて弾丸トークするイベント<a href=\"http://ipsj-one.org\">IPSJ-ONE</a>が開催されました。そのWebまわりを担当しました。関わったみなさまお疲れさまでした！"
    },
    {
      "date": "3/2/2015",
      "text": "国際会議<a href=\"http://chi2015.acm.org/program/full-schedule/?id=pn160\">ACM CHI 2015</a>に、<a href=\"https://staff.aist.go.jp/jun.kato/TextAlive/\">TextAlive</a>に関する論文がアクセプトされました。また、本論文がBest Paper Honorable Mention Awardに選ばれました。"
    },
    {
      "date": "12/7/2014",
      "text": "<a href=\"/ja/teaparty/\">お茶会</a>の季節が近づいてきました。"
    },
    {
      "date": "12/1/2014",
      "text": "国内会議<a href=\"http://www.wiss.org/WISS2014/\">WISS 2014</a>で<a href=\"https://staff.aist.go.jp/jun.kato/TextAlive/\" title=\"TextAlive: インタラクティブでプログラマブルなKinetic Typography制作環境\">TextAlive</a>に関する発表を行い、β版Webサイト<a href=\"http://textalive.jp\">textalive.jp</a>を公開しました。最優秀論文賞をいただきました！また、ナイトセッションでACM CHI 2015の若手研究者向けワークショップについて告知し、<a href=\"http://hci.tokyo\">hci.tokyo</a>を公開しました。"
    },
    {
      "date": "11/25/2014",
      "text": "明日から始まる国内会議<a href=\"http://www.wiss.org/WISS2014/\">WISS 2014</a>に、<a href=\"https://staff.aist.go.jp/jun.kato/TextAlive/\" title=\"TextAlive: インタラクティブでプログラマブルなKinetic Typography制作環境\">TextAlive</a>に関する論文がアクセプトされています。論文に書いてある以上の進展を発表できるかも？"
    },
    {
      "date": "11/1/2014",
      "text": "国際会議<a href=\"http://hai-conference.net/hai2014/\">HAI 2014</a>で「Novel Interaction Techniques」のセッションチェアを務め、<a href=\"/ja/sharedo/\">Sharedo</a>に関する発表を行いました。当該論文がBest Paper Nominee (62本の投稿論文中、Best Paperを除く2本)に選ばれました！"
    },
    {
      "date": "9/1/2014",
      "text": "8月31日の「<a href=\"http://kadecot.net/ouch-hack/\">おうちハック発表会</a>」でキーノートスピーカーとして「<a href=\"https://www.slideshare.net/arcatdmz/home-hack\" title=\"もっとおうちハックできるおうち開発環境に向けて─おうちハック事例集─\" target=\"_blank\">もっとおうちハックできるおうち開発環境に向けて─おうちハック事例集─</a>」と題してこれまでの<a href=\"/ja/homehack/\">家ハック</a>事例をまとめてご紹介しました。"
    },
    {
      "date": "8/28/2014",
      "text": "8月24日<a href=\"http://prosym.github.io/sprosym2014/\">情報処理学会 夏のプログラミングシンポジウム2014</a>で「<a href=\"http://www.slideshare.net/arcatdmz/live-programming\">実世界Live Programmingの実現に向けて</a>」と題して数年分の研究成果をご紹介し、プログラミングの未来について議論しました(<a href=\"http://togetter.com/li/710516\">反響</a>)。また、<a href=\"http://www.sigmus.jp/?page_id=2780\"><abbr title=\"情報処理学会 音楽情報科学研究会(音情研)\">SIGMUS</abbr></a> <a href=\"https://staff.aist.go.jp/jun.kato/TextAlive/\">TextAlive</a>の発表でベストプレゼンテーション賞をいただきました！<a href=\"http://www.ustream.tv/recorded/51869488\">Ustream</a>で発表の録画をご覧いただけます。(59分56秒-)"
    },
    {
      "date": "8/19/2014",
      "text": "8月26日<a href=\"http://www.sigmus.jp/?page_id=2780\">第104回 <abbr title=\"情報処理学会 音楽情報科学研究会\">SIGMUS(音情研)</abbr></a> 2日目に「TextAlive: 音楽に同期した歌詞アニメーションのKinetic Typography制作環境」と題した発表を行います。これに先立ち、8月23日<a href=\"http://ongacrest.jp/symposium2014\" title=\"OngaCRESTシンポジウム2014 - 音楽情報処理研究が切り拓く未来を探る\">OngaCRESTシンポジウム2014</a>でデモ展示します。"
    },
    {
      "date": "8/9/2014",
      "text": "国際会議<a href=\"http://hai-conference.net/hai2014/\">HAI 2014</a>に、<a href=\"/ja/sharedo/\">Sharedo</a>という人-エージェント間のタスク共有システムに関する論文がアクセプトされました。国内会議<a href=\"http://sharedo.digitalmuseum.jp/research/wiss2011\">WISS 2011</a>で同テーマの発表をして以来3年近くが経過していますが、今回の成果は産総研にきてから実装を書き直して拡張したものです。長かった！"
    },
    {
      "date": "5/23/2014",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2014/organizers.php\">ACM UIST 2014</a>のProgram Committeeミーティングで、来月またカナダに行きます。<a href=\"http://www.dgp.toronto.edu/\">トロント大学<abbr title=\"Dynamic Graphics Project\">DGP</abbr></a>と<a href=\"http://hci.cs.umanitoba.ca/\">マニトバ大<abbr title=\"Human-Computer Interaction\">HCI</abbr> Lab</a>で招待講演を行う予定です。"
    },
    {
      "date": "4/25/2014",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2014/organizers.php\">ACM UIST 2014</a>のProgram Committeeの役を仰せつかりまして、初めてだらけの経験にひーひー言っております。さておき、来月はカナダの国内会議で、歴史が古いため実質的に国際会議であるところの<a href=\"http://www.cs.mcgill.ca/~kry/gi2014/\">Graphics Interface 2014</a>に参加し、5月8日のセッション「<a href=\"http://www.cs.mcgill.ca/~kry/gi2014/program.html#S5\">Video and Collaboration</a>」で<a href=\"/ja/visionsketch/\">VisionSketch</a>について発表予定です。"
    },
    {
      "date": "4/1/2014",
      "text": "博士（情報理工学）になり、<a href=\"http://www.aist.go.jp/\">産業技術総合研究所</a>へ研究員として就職しました。9年間の大学生活を離れ、<a href=\"http://itri.aist-go.jp/\">情報技術研究部門</a> <a href=\"https://staff.aist.go.jp/m.goto/MIG/index-j.html\">メディアインタラクション研究グループ</a>で改めて研究活動に従事します。"
    },
    {
      "date": "3/8/2014",
      "text": "<a href=\"http://www.sighci.jp/events/view/29\">IPSJ 第157回 HCI研究会</a>で「プログラマだって人である―統合開発環境におけるHCI」と題して学生招待講演を行うことになりました！2日目（3月14日）の午後4時過ぎからです。"
    },
    {
      "date": "2/25/2014",
      "text": "Webデザインを更新しました。Bootstrap v2をv3にアップグレードして、今風のフラットデザインになりました。"
    },
    {
      "date": "2/20/2014",
      "text": "公聴会にお越しいただいた方々、ありがとうございました。無事、博論審査を通過しました。また、<a href=\"/ja/visionsketch/\">VisionSketch</a>について書いた論文が<a href=\"http://www.cs.mcgill.ca/~kry/gi2014/\">Graphics Interface 2014</a>に通りました。5月はモントリオールです。"
    },
    {
      "date": "2/8/2014",
      "text": "2月10日午前10時から東京大学<a href=\"http://www.s.u-tokyo.ac.jp/ja/map/map06.html\">本郷キャンパス理学部7号館</a>1階102教室で博士論文の公聴会があります。ご興味のある方はお気軽にお越しください。<a href=\"/ja/picode/\">Picode</a>, <a href=\"/ja/dejavu/\">DejaVu</a>, <a href=\"/ja/visionsketch/\">VisionSketch</a>を含む博士論文の内容について話します。"
    },
    {
      "date": "1/6/2014",
      "text": "あけましておめでとうございます。2月10日午前10時から学位論文審査を受けることになりました。詳細はまた追記しますが、前半は公開されるので、ご興味のある方はどなたでもお越しいただけます。"
    },
    {
      "date": "12/1/2013",
      "text": "<a href=\"http://www.gcl.i.u-tokyo.ac.jp/events/20131203-global-design-symposium/\" title=\"Global Design Symposium: シンポジウム「情報センシングの展開 ～HCI からUrban Informaticsまで～」\">東京大学主催・Microsoft共催で開かれるシンポジウム</a>で、<a href=\"http://junkato.jp/publications/msr2013-howto-internship.pdf\"><i class=\"glyphicon glyphicon-play-circle\"></i>スライド</a>をもとに10分だけ海外インターンの経験談を喋る予定です。東大とMicrosoft Research Asiaの研究者によるトークがメインコンテンツ…のはず。"
    },
    {
      "date": "11/19/2013",
      "text": "スコットランドで<a href=\"http://www.acm.org/uist/uist2013/\">ACM UIST 2013</a>に参加し、シアトルでは<a href=\"http://vimeo.com/77669396\">University of Washington <abbr title=\"Design Use Build\">dub</abbr></a>で講演し、Microsoftでお世話になった人たちと再会して、Adobeでのインターンを終えました。というわけで帰国しました！"
    },
    {
      "date": "9/19/2013",
      "text": "国内会議<a href=\"http://conference.vrsj.org/ac2013/\" title=\"第18回 日本バーチャルリアリティ学会大会\">VRSJ 2013</a>のオーガナイズドセッション「<a href=\"http://conference.vrsj.org/ac2013/program/252/\">世界を目指せ！ ～トップコンファレンス採択論文紹介～</a>」で、<a href=\"http://chi2013.acm.org/\">ACM CHI 2013</a>で発表したPicodeについて紹介します。関連リンクをはっておきます: <a href=\"http://junkato.jp/publications/vrsj2013-kato-topconf.pdf\"><i class=\"glyphicon glyphicon-play-circle\"></i>スライド</a> <a href=\"http://www.youtube.com/watch?v=UNFMikShLnE\"><i class=\"glyphicon glyphicon-play-circle\"></i>ACM CHIでのライブデモの様子</a>"
    },
    {
      "date": "8/12/2013",
      "text": "シアトルの<a href=\"http://www.adobe.com/technology/\">Adobe Creative Technologies Lab</a> (Adobe Research)でインターンを始めました。"
    },
    {
      "date": "8/4/2013",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2013/\">ACM UIST 2013</a> Doctoral Symposiumに採択されました。博士課程の研究について議論してきます。また、<a href=\"http://www.ieee-gcce.org/2013/\">IEEE GCCE 2013</a>のSpecial Session (Entertainment Computing)に<a href=\"/ja/openpool/\">OpenPool</a>の開発過程についてまとめた論文がアクセプトされました。"
    },
    {
      "date": "6/24/2013",
      "text": "国際会議<a href=\"http://chi2013.acm.org/\">ACM CHI</a>と<a href=\"http://pldi2013.ucombinator.org/\">ACM PLDI</a>で<a href=\"/ja/publications/#awards\">賞など</a>をいただきました。今年の夏は8月から<a href=\"http://www.adobe.com/technology/people-by-location.html#seattle\">Adobe Research Seattle</a>でインターンしてきます。"
    },
    {
      "date": "4/16/2013",
      "text": "<a href=\"http://research.microsoft.com/apps/pubs/default.aspx?id=189242\">共著論文</a>の発表がある国際会議<a href=\"http://pldi2013.ucombinator.org/\">ACM PLDI 2013</a>に、<a href=\"/ja/visionsketch/\">VisionSketch</a>に関する単著のポスター発表(Student Research Competition)がアクセプトされました。"
    },
    {
      "date": "3/10/2013",
      "text": "友人たちと開発を進めてきたオープンソースプロジェクトの<a href=\"/ja/openpool/\">OpenPool</a>が、<a href=\"http://sxsw.com/trade-shows/exhibitors?client_id=S13-6173\" title=\"South by Southwest 2013\">SXSW 2013</a>でお披露目されています。これは、Kinectの深度画像とプロジェクターを使ってビリヤード台をインタラクティブサーフェイスに変貌させ、かつてないビリヤード体験を提供するという試みです。"
    },
    {
      "date": "3/2/2013",
      "text": "国際会議<a href=\"http://pldi2013.ucombinator.org/\">ACM PLDI 2013</a>に、昨年Microsoft Research <a href=\"http://research.microsoft.com/en-us/groups/rise/\"><abbr title=\"Research in Software Engineering\">RiSE</abbr> Group</a>でインターンした成果をまとめた論文がアクセプトされました。開発環境<a href=\"https://www.touchdevelop.com/app/\">TouchDevelop Web App</a>のGUIプログラミングに関する内容です。"
    },
    {
      "date": "12/17/2012",
      "text": "国内会議WISSで発表してきた<a href=\"/ja/phybots/\">Phybots (旧名Matereal)</a>、<a href=\"/ja/sharedo/\">Sharedo</a>、<a href=\"/ja/picode/\">Picode (旧名Roboko)</a>について、論文に書いていた未来ビジョンを各紹介ページに転載しました。これらの研究の先にある未来に興味のある方はぜひご覧ください。"
    },
    {
      "date": "12/15/2012",
      "text": "国際会議<a href=\"http://chi2013.acm.org/\">ACM CHI 2013</a>に、<a href=\"/ja/roboko/\" title=\"Picode: Inline Photos Representing Posture Data in Source Code\">Picode (旧名Roboko)</a>に関する論文が条件付きアクセプトされました。元々ロボットの姿勢制御が主用途だったためRobokoという名前でしたが、実態にそぐわなくなってきたのでPicodeに改名しました。"
    },
    {
      "date": "11/6/2012",
      "text": "国内会議<a href=\"http://www.wiss.org/WISS2012/\">WISS 2012</a>に、<a href=\"/ja/roboko/\" title=\"Roboko: ソースコードに写真を貼り込める統合開発環境\">Roboko</a>に関する論文がアクセプトされました。今年は海外に出ている期間が長かったですが、しばらく日本に落ち着いている予定です！"
    },
    {
      "date": "10/28/2012",
      "text": "中国天津で開かれた<a href=\"http://www.msra.cn/21CCC/xsjs_en.html\">Computing in the 21st Century</a>という会議に参加して、今年の<a href=\"http://blogs.technet.com/b/inside_microsoft_research/archive/2012/10/26/14-years-of-inspiring-asia-pacific-ph-d-candidates.aspx\">Microsoft Research Asia Fellowship</a>を受賞しました。"
    },
    {
      "date": "10/15/2012",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2012/\">ACM UIST 2012</a>のセッション「<a href=\"http://www.acm.org/uist/uist2012/program.html#Paper_211\">Toolkits</a>」で<a href=\"/ja/dejavu/\" title=\"DejaVu: Integrated Support for Developing Interactive Camera-Based Programs\">DejaVu</a>を登壇発表し、デモ展示も行いました。来年の<a href=\"http://www.acm.org/uist/uist2013/\">ACM UIST 2013</a>でPublicity Co-chairの役を仰せつかりました。"
    },
    {
      "date": "9/18/2012",
      "text": "帰国しました。今月中に北京、来月はニューヨークとボストンを訪ねる予定です。"
    },
    {
      "date": "7/21/2012",
      "text": "国際会議<a href=\"http://www.acm.org/uist/uist2012/\">ACM UIST 2012</a>に、<a href=\"/ja/dejavu/\">DejaVu</a>という統合開発環境に関する論文がアクセプトされました。"
    },
    {
      "date": "6/21/2012",
      "text": "Microsoft Research Redmond <a href=\"http://research.microsoft.com/en-us/groups/rise/\"><abbr title=\"Research in Software Engineering\">RiSE</abbr> Group</a>の<a href=\"http://research.microsoft.com/en-us/projects/touchdevelop/\">TouchDevelop</a>チームでインターンを始めました。（11月追記; <a href=\"http://blogs.msdn.com/b/nikolait/archive/2012/10/22/announcing-touchdevelop-web-app-preview.aspx\">TouchDevelop Web App</a>の開発に携わっていました。）"
    },
    {
      "date": "5/5/2012",
      "text": "帰国しました…が、6月下旬からRedmondでインターンする予定です。"
    },
    {
      "date": "3/23/2012",
      "text": "国際会議<a href=\"http://www.dis2012.org/\">ACM DIS 2012</a>のプログラムが公開されました。6月13日のセッション「<a href=\"http://www.dis2012.org/program.php#session10\">Absolutely Fab</a>」でPhybotsを登壇発表します。デモにも参加予定です。"
    },
    {
      "date": "3/19/2012",
      "text": "Webページを改装しました。"
    },
    {
      "date": "1/9/2012",
      "text": "Microsoft Research Asiaの<a href=\"http://research.microsoft.com/hci\">HCI Group</a>にきました。北京に3ヶ月間滞在する予定です。"
    },
    {
      "date": "12/2/2011",
      "text": "国内会議<a href=\"http://www.wiss.org/WISS2011/\">WISS 2011</a>で<a href=\"http://sharedo.digitalmuseum.jp/research/wiss2011/\" title=\"Sharedo: To-doリストによる人-ロボット間のタスク共有\">Sharedo</a>について登壇発表しました。（<a href=\"http://d.hatena.ne.jp/arc_at_dmz/20120123/wiss_2011\">ブログ関連記事</a>）"
    }
  ]
};

const entries: Entries = { en: [], ja: [] };
for (const lang in rawEntries) {
  const res = rawEntries[lang];
  for (const re of res) {
    (<any>entries)[lang].push(new Entry(re.date, re.text));
  }
}

export default entries;
