import React from "react";
import {
  ArrowRight,
  Award,
  Bot,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  Images,
  Mail,
  MessageCircle,
  Settings,
  ShoppingCart,
  Sparkles,
  Wrench,
} from "lucide-react";

const CONTACT_URL = "#contact";

const painPoints = [
  "CSV加工に毎回時間がかかっている",
  "店舗ごとに仕様が異なり、運用が複雑になっている",
  "在庫更新や商品管理が手作業でミスが起きやすい",
  "画像作成やリネームに工数がかかっている",
  "何から効率化すべきか分からない",
  "既存ツールやサブスクのコストを見直したい",
];

const services = [
  {
    icon: FileSpreadsheet,
    title: "CSV加工・データ整形の自動化",
    desc: "モールごとに違う形式への変換や整形を、ミスなく素早く回せる形にします。",
  },
  {
    icon: Settings,
    title: "在庫更新・商品管理の効率化",
    desc: "日々の更新作業を減らし、運用の属人化や更新漏れを抑えます。",
  },
  {
    icon: Images,
    title: "画像制作フローの改善",
    desc: "一括処理、ファイル名変更、テンプレート化などで制作工数を圧縮します。",
  },
  {
    icon: Globe,
    title: "Web操作・スクレイピング自動化",
    desc: "繰り返しの入力や取得作業を自動化し、手作業の時間を削減します。",
  },
  {
    icon: Wrench,
    title: "社内向けツールの作成",
    desc: "現場で使いやすいシンプルな業務ツールを、実務に合わせて構築します。",
  },
  {
    icon: Bot,
    title: "業務整理・改善提案",
    desc: "現状の流れを整理し、優先順位をつけて改善しやすい形に落とし込みます。",
  },
];

const achievements = [
  "ネットショップ運営歴11年",
  "楽天での受賞実績あり",
  "Yahoo!ショッピング エリア賞受賞経験あり",
  "商品画像の一括作成ツールを制作",
  "商品の在庫更新を自動化",
  "スクレイピング・Web操作を自動化",
  "楽天メルマガ作成ツールを開発",
];

const scope = [
  "楽天",
  "Amazon",
  "Yahoo!ショッピング",
  "Shopify",
  "Qoo10",
  "ポンパレモール",
  "CSV運用",
  "Googleスプレッドシート",
  "FileMaker",
  "Adobe製品を活用した画像業務",
  "各種ローカルツールの作成",
  "作業手順の整理・テンプレート導入",
  "コスト削減の相談",
];

const processSteps = [
  "お問い合わせ",
  "ヒアリング",
  "困りごとをリスト化",
  "効率化できる内容・できない内容を整理",
  "優先順位を決定",
  "作成内容を選定",
  "お見積もり",
  "ご納得後に開発開始",
];

const faqs = [
  {
    q: "無料で相談できますか？",
    a: "はい、初回相談は無料です。まずは現状の課題整理から対応します。",
  },
  {
    q: "小さい依頼でも対応できますか？",
    a: "はい、可能です。小規模な改善や一部業務の効率化も歓迎です。",
  },
  {
    q: "料金はどの段階で決まりますか？",
    a: "ヒアリング後にお見積もりを作成し、ご納得いただけた段階で正式決定となります。",
  },
  {
    q: "社内ツールにも対応できますか？",
    a: "はい、可能です。実務に合わせた柔軟な対応を行っています。",
  },
  {
    q: "納品後の修正はできますか？",
    a: "一定期間内の軽微な修正は無料で対応可能です。継続的な調整やメンテナンスは別途対応となります。",
  },
];

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
        <Sparkles className="h-4 w-4" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {desc ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{desc}</p> : null}
    </div>
  );
}

export default function ECEfficiencyServiceSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              村
            </div>
            <div>
              <div className="text-sm text-slate-500">EC業務効率化サポート</div>
              <div className="text-base">村上</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">サービス</a>
            <a href="#achievements" className="transition hover:text-slate-900">実績</a>
            <a href="#profile" className="transition hover:text-slate-900">自己紹介</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
          </nav>
          <a
            href={CONTACT_URL}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
          >
            まずは相談する
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.08),_transparent_35%),radial-gradient(circle_at_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                <Award className="h-4 w-4" />
                ネットショップ運営11年 / 楽天受賞 / Yahoo!ショッピング エリア賞受賞
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
                ネットショップ業務の
                <span className="block">効率化・自動化を支援します</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
                Amazon、楽天、Yahoo!ショッピング、Qoo10、ポンパレモールなどの実務経験をもとに、
                CSV加工、在庫更新、画像制作、Web操作の自動化、社内ツール作成まで柔軟に対応します。
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                <span className="font-semibold text-slate-900">まずは人を増やす前に、業務の見直しから。</span>
                人を雇うよりも安く、現場に合った改善をご提案します。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  無料で相談する
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition hover:border-slate-400"
                >
                  できることを見る
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  "CSV加工の手間を削減",
                  "在庫更新の自動化",
                  "画像制作の工数圧縮",
                  "Web操作の自動化",
                  "社内向けツール作成",
                  "既存コストの見直し",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                      <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-300">対応スタイル</p>
                <p className="mt-2 text-lg font-semibold">相談 → 整理 → 見積もり → 開発</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  現状の流れを整理し、優先順位をつけて、必要なものだけを形にします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["11年", "ネットショップ運営歴"],
              ["複数モール", "Amazon / 楽天 / Yahoo! / Qoo10 など"],
              ["受賞実績", "楽天 / Yahoo!ショッピング"],
              ["柔軟対応", "現場に合わせた改善提案"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-2xl font-bold tracking-tight text-slate-950">{value}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="こんなお悩みはありませんか？"
            title="EC運営で積み重なる手作業を減らし、ミスを減らします"
            desc="現場でよくある面倒な作業や属人化したフローは、整理と自動化でかなり改善できます。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="提供できること"
            title="現場で役立つ形で、業務改善からツール化まで対応します"
            desc="相談だけで終わらず、実際に使いやすいフローやツールとして落とし込みます。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="achievements" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="実績・対応例"
              title="現場経験と改善実績をもとにご提案します"
              desc="受賞実績だけでなく、実務で使うための具体的な効率化も多数対応してきました。"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] bg-slate-900 p-7 text-white shadow-sm">
              <h3 className="text-xl font-semibold">楽天メルマガ作成ツールの開発経験あり</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                HTMLを直接触らなくても、直感的なUIでメルマガを構築し、最終的にHTMLとして書き出せるツールを制作。
                現場で使いやすいことを重視し、実務に合わせた改善を行っています。
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionTitle
                eyebrow="対応範囲"
                title="複数モール運営や周辺業務まで幅広く対応"
                desc="既存のサブスクや外部ツールを使い続けるより、自社専用の使いやすい仕組みに置き換えた方がコストを抑えられるケースもあります。"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {scope.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="ご相談から導入まで"
                title="現状整理から始めるので、相談段階でも大丈夫です"
                desc="何を作るべきかが決まっていなくても問題ありません。困りごとを整理しながら進めます。"
              />
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-6 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionTitle
                  eyebrow="料金について"
                  title="初回相談は無料。内容整理後にお見積もりします"
                  desc="まずは困りごとを整理し、改善できる内容を見極めたうえで費用をご提示します。"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">初回</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">無料相談</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    まずは現状の業務や困りごとを整理し、改善できるポイントを見極めます。
                  </p>
                </div>
                <div className="rounded-[28px] border border-slate-900 bg-slate-900 p-6 text-white shadow-sm">
                  <p className="text-sm text-slate-300">正式依頼</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">個別お見積もり</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    ヒアリング後にお見積もりを作成し、ご納得いただけた場合のみ開発を進めます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-2xl font-bold text-white shadow-sm">
                村
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">村上</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">ネットショップ運営 / 業務改善 / 自動化サポート</p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <ShoppingCart className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Amazon、楽天、Yahoo!ショッピング、Qoo10、ポンパレモールなどを経験</span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>楽天での受賞実績 / Yahoo!ショッピング エリア賞受賞経験あり</span>
                </div>
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="自己紹介"
                title="現場を知っているから、使いやすい改善案をご提案できます"
                desc="商品管理、画像制作、データ処理、業務改善など、カスタマーサポート以外の幅広いEC業務に対応してきました。"
              />
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  ネットショップ運営に11年間携わってきました。現場で実際に困るポイントを理解しているため、
                  どこを効率化すべきか、どういう形なら使いやすいかを具体的にイメージしながらご提案できます。
                </p>
                <p>
                  画像処理やデータ加工、作業フローの整理、社内ツールの構築まで幅広く対応可能です。業務の無駄を減らし、
                  運用しやすい仕組みに整えることを大切にしています。
                </p>
                <p>
                  比較的ラフで話しやすいタイプなので、まだ要件が固まっていない段階でも大丈夫です。まずは気軽にご相談ください。
                </p>
              </div>
              <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">普段使っているツール</h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Adobe製品", "Googleスプレッドシート", "VS Code", "FileMaker", "各種EC運用ツール"].map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="よくある質問"
            title="お問い合わせ前によくいただく内容をまとめました"
            desc="小さな相談からでも大丈夫です。まずは気軽にご相談ください。"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-slate-900 p-8 text-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.55)] md:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-slate-200">
                <Mail className="h-4 w-4" />
                お問い合わせ
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                まずは、今どこに手間がかかっているかを整理しませんか？
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                初回相談は無料です。まだ内容が固まっていなくても問題ありません。業務の流れや困りごとを伺いながら、
                改善できそうなポイントを一緒に整理します。
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                お問い合わせフォームを設置する
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white transition hover:bg-white/15"
              >
                Googleフォームやメールに差し替え可能
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              ※ この部分は、Googleフォーム・メールアドレス・ココナラリンクなどに差し替えてご利用ください。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
