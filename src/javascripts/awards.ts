
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

interface I18nText {
  en: string;
  ja: string;
}

enum EntryDateType {
  Year, Month, Range
}

class Entry {
  public dateType: EntryDateType;
  public date: Date;
  public endDate: Date;
  public text: string | I18nText;
  public entryType: string | undefined;
  constructor(date: string, text: string | I18nText, entryType: string | undefined) {
    if (date.indexOf('/') < 0) {
      this.date = new Date('1/1/' + date);
      this.dateType = EntryDateType.Year;
    } else if (date.indexOf('-') >= 0) {
      const dates = date.split('-');
      this.date = new Date(dates[0]);
      this.endDate = new Date(dates[1]);
      this.dateType = EntryDateType.Range;
    } else {
      this.date = new Date(date);
      this.dateType = EntryDateType.Month;
    }
    this.text = text;
    this.entryType = entryType;
  }
  public getDateString(lang: string) {
    const d = this.date, ed = this.endDate;
    switch (this.dateType) {
      case EntryDateType.Year:
        return lang === 'en'
          ? `${d.getFullYear()}`
          : `${d.getFullYear()}年`;
      case EntryDateType.Month:
        return lang === 'en'
          ? `${months[d.getMonth()]}. ${d.getFullYear()}`
          : `${d.getFullYear()}年${d.getMonth()+1}月`;
      case EntryDateType.Range:  
        return lang === 'en'
          ? `${months[d.getMonth()]}. ${d.getFullYear()} - ${months[ed.getMonth()]}. ${ed.getFullYear()}`
          : `${d.getFullYear()}年${d.getMonth()+1}月-${ed.getFullYear()}年${ed.getMonth()+1}月`;
    }
  }
  public getText(lang: 'en'|'ja') {
    if (typeof this.text === 'string') {
      return lang === 'en' ? this.text : this.text + ' 受賞';
    }
    return this.text[lang];
  }
  public getIcon() {
    return this.entryType === 'domestic' ? 'circle' : 'world';
  }
}

interface RawEntry {
  date: string;
  text: string | I18nText;
  type?: string;
}

const rawEntries: RawEntry[] =
  [
    {
      "date": "3/1/2016",
      "text": {
        "en": "<a href=\"http://www.ipsj.or.jp/english/\"><abbr title=\"Information Processing Society of Japan\">IPSJ</abbr></a> <a href=\"http://www.interaction-ipsj.org/2016/award\">Interaction 2016 Interactive Presentation Award (Program Committee selection)</a>",
        "ja": "<a href=\"http://www.ipsj.or.jp/\">情報処理学会</a> <a href=\"http://www.interaction-ipsj.org/2016/award\">インタラクション 2016 インタラクティブ発表賞(<abbr title=\"プログラム委員会\">PC</abbr>推薦)</a> 受賞 (<a href=\"https://fukuchilab.org/projects-j/nightbirdaudiencenode-j\">Nightbird Audience Node</a>の共著発表に対して)"
      },
      "type": "domestic"
    },
    {
      "date": "7/1/2015",
      "text": {
        "en": "<a href=\"http://www.maynoothuniversity.ie/smc15/\"><abbr title=\"Sound and Music Conference\">SMC</abbr> 2015 Best Paper</a> (for the co-authored <a href=\"https://staff.aist.go.jp/jun.kato/CrossSong/\">CrossSong</a> paper)",
        "ja": "<a href=\"http://www.maynoothuniversity.ie/smc15/\"><abbr title=\"Sound and Music Conference\">SMC</abbr> 2015 Best Paper</a> 受賞 (<a href=\"https://staff.aist.go.jp/jun.kato/CrossSong/\">CrossSong</a>の共著論文に対して)"
      }
    },
    {
      "date": "4/1/2015",
      "text":
        "ACM <a href=\"http://chi2015.acm.org/program/full-schedule/?id=pn160\">CHI '15 Best Paper Honorable Mention Award</a>"
    },
    {
      "date": "11/1/2014",
      "text": {
        "en": "<a href=\"http://www.jssst.or.jp/\"><abbr title=\"Japan Society for Software Science and Technology\">JSSST</abbr></a> <a href=\"http://wiss.org/WISS2014/\"><abbr title=\"Workshop on Interactive Systems and Software\">WISS</abbr> 2014 Best Paper Award</a>",
        "ja": "<a href=\"http://www.jssst.or.jp/\">日本ソフトウェア科学会</a> <a href=\"http://wiss.org/WISS2014/\"><abbr title=\"Workshop on Interactive Systems and Software\">WISS</abbr> 2014 最優秀論文賞</a> 受賞"
      },
      "type": "domestic"
    },
    {
      "date": "11/1/2014",
      "text": {
        "en": "<a href=\"http://hai-conference.net/hai2014/program/#oct31\"><abbr title=\"Human-Agent Interaction\">HAI</abbr> 2014 Best Paper Nominee</a>",
        "ja": "<a href=\"http://hai-conference.net/hai2014/program/#oct31\"><abbr title=\"Human-Agent Interaction\">HAI</abbr> 2014 Best Paper Nominee</a> 受賞"
      }
    },
    {
      "date": "8/1/2014",
      "text": {
        "en": "<a href=\"http://www.ipsj.or.jp/english/index.html\"><abbr title=\"Information Processing Society of Japan\">IPSJ</abbr></a> <abbr title=\"Special Interest Group on Music and Computer\">SIGMUS</abbr> Best Presentation Award",
        "ja": "<a href=\"http://www.ipsj.or.jp/\">情報処理学会</a> <a href=\"http://www.sigmus.jp/?page_id=2780\">第104回 <abbr title=\"音楽情報科学研究会(SIGMUS)\">音情研</abbr></a> <a href=\"http://www.sigmus.jp/?page_id=61\">ベストプレゼンテーション賞</a> 受賞"
      },
      "type": "domestic"
    },
    {
      "date": "7/1/2014",
      "text": {
        "en": "PhD dissertation selected for <a href=\"http://www.ipsj.or.jp/english/index.html\"><abbr title=\"Information Processing Society of Japan\">IPSJ</abbr></a> <a href=\"http://www.ipsj.or.jp/magazine/hakase/index.html\">Quick Report on Doctoral Theses Recommended by <abbr title=\"Special Interest Groups\">SIGs</abbr></a>",
        "ja": "<a href=\"http://www.ipsj.or.jp/\">情報処理学会</a> <a href=\"http://www.ipsj.or.jp/magazine/hakase/index.html\">研究会推薦博士論文速報</a> 選出"
      },
      "type": "domestic"
    },
    {
      "date": "10/1/2013",
      "text": {
        "en": "<a href=\"http://www.jidp.or.jp/en/\"><abbr title=\"Japan Institute of Design Promotion\">JDP</abbr></a> <a href=\"http://www.g-mark.org/award/describe/40508\">Good Design Award</a> for <a href=\"/openpool/\">OpenPool</a> Project",
        "ja": "<a href=\"http://www.g-mark.org/award/describe/40508?locale=ja\">グッドデザイン賞</a> 受賞 (<a href=\"/ja/openpool/\">OpenPool プロジェクト</a>)"
      },
      "type": "domestic"
    },
    {
      "date": "6/1/2013",
      "text":
        "ACM <a href=\"http://www.cs.wm.edu/~idillig/pldi13-src/\">PLDI '13 Student Research Competition</a> Finalist"
    },
    {
      "date": "4/1/2013",
      "text":
        "ACM <a href=\"http://chi2013.acm.org/program/best-of-chi/#NTQ\">CHI '13 Best Paper Honorable Mention Award</a>"
    },
    {
      "date": "2012",
      "text": {
        "en": "<a href=\"https://www.microsoft.com/en-us/research/academic-program/fellowships-microsoft-research-asia/#!fellows\">Microsoft Research Asia Fellowship 2012 Award</a>",
        "ja": "<a href=\"https://www.microsoft.com/en-us/research/academic-program/fellowships-microsoft-research-asia/#!fellows\">Microsoft Research Asia Fellowship 2012</a> 採択"
      }
    },
    {
      "date": "4/1/2011-3/31/2012", "text": {
        "en": "Microsoft Research <a href=\"http://research.microsoft.com/en-us/collaboration/global/asia-pacific/regions/japan-core.aspx\">7th Collaborative Research (CORE7) Program</a> Principal Investigator",
        "ja": "Microsoft Research <a href=\"http://www.microsoft.com/ja-jp/ijarc/core/ifp_07_j_result.aspx\">第7回連携研究(CORE7)プログラム</a> 採択"
      }
    },
    {
      "date": "4/1/2011-3/31/2014", "text": {
        "en": "JSPS <a href=\"http://www.jsps.go.jp/english/e-pd/pddc.htm\">Research Fellowships for Young Scientists (DC1)</a>",
        "ja": "日本学術振興会 <a href=\"http://www.jsps.go.jp/j-pd/\">特別研究員(DC1)</a> 採択"
      },
      "type": "domestic"
    },
    {
      "date": "11/1/2011",
      "text": {
        "en": "<a href=\"http://rit.rakuten.co.jp/conf/rrds4/index_en.html\">4th Rakuten Research &amp; Development Symposium Best Research &amp; Development Award</a>",
        "ja": "<a href=\"http://rit.rakuten.co.jp/conf/rrds4/\">第4回 楽天研究開発シンポジウム Best Research &amp; Development Award</a> 受賞"
      },
      "type": "domestic"
    },
    {
      "date": "2010", "text":
        "ACM <a href=\"http://src.acm.org/candidates2010.html\">Student Research Competition Grand Finals</a> Finalist"
    },
    {
      "date": "8/1/2009", "text":
        "ACM <a href=\"http://mi-lab.org/projects/cristal/\">SIGGRAPH '09 Laval Virtual Award</a> (Best of Emerging Technologies)"
    },
    {
      "date": "4/1/2009", "text":
        "ACM <a href=\"http://src.acm.org/previouswinners.html\">CHI '09 Student Research Competition</a> 1st Place"
    },
    {
      "date": "12/1/2008-8/1/2009", "text": {
        "en": "IPA <a href=\"http://www.ipa.go.jp/english/humandev/third.html\">Exploratory IT Human Resources Project (MITOH)</a>",
        "ja": "IPA <a href=\"http://www.ipa.go.jp/jinzai/mitou/2008/2008_2/hontai/gaiyou/1.html\">2008年度下期未踏IT人材育成発掘事業(未踏本体)</a> 採択"
      },
      "type": "domestic"
    }
  ];

const entries: Entry[] = [];
for (const re of rawEntries) {
  entries.push(new Entry(re.date, re.text, re.type));
}

export default entries;
