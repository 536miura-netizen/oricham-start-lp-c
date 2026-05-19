import {
  ArrowRight,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  Crown,
  Gift,
  Laptop,
  Link2,
  Martini,
  MessageCircle,
  PackageOpen,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import { contactLinks } from './lib/tracking.js';

const assets = {
  hero: '/assets/hero-background-soft-green.png',
  heroBottles: '/assets/hero-bottles-background.png',
  glow: '/assets/transparent-green-glow-overlay.png',
  section: '/assets/section-card-background-pale-green.png',
  audienceC01: '/assets/audience-c-01.png',
  audienceC02: '/assets/audience-c-02.png',
  audienceC03: '/assets/audience-c-03.png',
  audienceC04: '/assets/audience-c-04.png',
};

const categories = ['オリシャン', 'OEM', '副業', 'サイドビジネス', 'フリーランス', '新規事業'];
const heroBadges = ['在庫負担なし', '専用設備不要', '受注ベース'];

const badges = [
  { label: '在庫負担', value: 'なし', Icon: PackageOpen },
  { label: '専用設備', value: '不要', Icon: ShieldCheck },
  { label: '制作発送', value: '代行', Icon: UsersRound },
  { label: '対応本数', value: '1本〜', Icon: Check },
];

const benefits = [
  {
    label: '在庫体制',
    title: '在庫を抱えずに始められる',
    text: '必要なボトルを自社で大量に抱える必要はありません。',
    Icon: PackageOpen,
  },
  {
    label: '専用設備',
    title: '設備投資なしで提案できる',
    text: '印刷機・制作環境を用意せずにスタートできます。',
    Icon: ShieldCheck,
  },
  {
    label: '制作運用',
    title: '制作から発送まで任せられる',
    text: '注文後の印刷・加工・発送まで洋サポが対応します。',
    Icon: Truck,
  },
];

const steps = [
  { number: '01', title: 'オンラインで契約', text: 'フォームからお申し込み、オンラインで開始', Icon: Laptop },
  { number: '02', title: '仕組みを受け取る', text: '専用ページや注文導線を整え、運用準備へ', Icon: Link2 },
  { number: '03', title: '制作・発送を任せる', text: '注文後の制作・印刷・発送まで弊社が対応', Icon: Truck },
];

const audiences = [
  { number: '01', title: ['飲食店・バーの', '新規展開に'], description: 'オリジナルシャンパンでお店の価値を高める', image: assets.audienceC01, Icon: Martini },
  { number: '02', title: ['ナイト事業の', 'イベントに'], description: 'バースデーや周年イベントを華やかに演出', image: assets.audienceC02, Icon: Crown },
  { number: '03', title: ['ブランド・企業の', 'ノベルティに'], description: 'オリジナルデザインでブランド価値を向上', image: assets.audienceC03, Icon: Gift },
  { number: '04', title: ['サイドビジネス・', '副業に'], description: '設備ゼロ・在庫ゼロで手軽に始められる', image: assets.audienceC04, Icon: ChartNoAxesCombined },
];

const ctaButtons = [
  { label: '公式LINEで無料相談', Icon: MessageCircle, href: contactLinks.line, eventLabel: 'line_consultation', primary: true },
  { label: 'オンライン相談を予約', Icon: CalendarDays, href: contactLinks.consultation, eventLabel: 'consultation' },
];

const faqs = [
  { question: '在庫を持たずに始められますか？', answer: 'はい。洋サポの在庫体制を使うため、事前に大量の在庫を抱える必要はありません。' },
  { question: 'デザインや印刷の知識が全くありません。', answer: '大丈夫です。制作・印刷・発送は洋サポ側で行うため、特別な準備物は不要です。' },
  { question: 'お酒の取り扱いも任せられますか？', answer: 'はい。酒販に対応した体制のもと、制作からお届けまで洋サポ側で対応します。' },
  { question: '資材価格や供給状況の影響が心配です。', answer: 'サプライヤーと年間契約を結び、常時半年分ほどの在庫を確保。年間50万本出荷を想定した体制です。' },
  { question: '導入後は受注だけで大丈夫ですか？', answer: 'はい。受注後のボトル準備・印刷・発送は洋サポ側で行うため、専用設備や制作作業は不要です。' },
];

function SectionHeading({ children }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-8 text-center">
      <span className="hidden h-px w-12 bg-[#9DBD99] sm:block" />
      <h2 className="section-title text-[22px] text-[#183826] md:text-[25px]">{children}</h2>
      <span className="hidden h-px w-12 bg-[#9DBD99] sm:block" />
    </div>
  );
}

function CtaAnchor({ label, Icon, href, eventLabel, primary = false, className = '' }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      data-track-event="cta_click"
      data-track-label={eventLabel}
      className={`button-text inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[10px] px-5 text-[15px] leading-none transition duration-300 hover:-translate-y-0.5 ${primary ? 'bg-[#1F5D34] text-white shadow-[0_14px_26px_rgba(31,93,52,0.22)]' : 'border border-[#C9DCC5] bg-white/78 text-[#1F5D34] shadow-[0_10px_22px_rgba(24,56,38,0.07)]'} ${className}`}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.9} />
      <span>{label}</span>
    </a>
  );
}

function BadgeCard({ label, value, Icon }) {
  return (
    <div className="group min-w-0 overflow-hidden rounded-[12px] border border-[#C9DCC5]/85 bg-white/82 px-2 py-2.5 text-center shadow-[0_10px_24px_rgba(24,56,38,0.055)] transition duration-300 hover:-translate-y-0.5 sm:rounded-[16px] sm:px-4 sm:py-4 md:px-5 md:py-5">
      <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-[7px] border border-[#C9DCC5] bg-[#EEF6EA] text-[#1F5D34] sm:h-9 sm:w-9 sm:rounded-[10px]">
        <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </div>
      <p className="button-text mt-1.5 text-[8.5px] leading-none text-[#183826]/82 sm:mt-2.5 sm:text-[12px] md:text-[13px]">{label}</p>
      <p className="button-text mt-1 text-[17px] leading-none text-[#1F5D34] sm:mt-1.5 sm:text-[28px] md:text-[34px]">{value}</p>
    </div>
  );
}

function BenefitCard({ label, title, text, Icon }) {
  return (
    <article className="rounded-[9px] border border-[#C9DCC5]/75 bg-white px-2.5 py-3 shadow-[0_10px_24px_rgba(24,56,38,0.04)] sm:rounded-[12px] sm:px-5 sm:py-5">
      <div className="flex items-center justify-center gap-1.5 sm:justify-start sm:gap-3">
        <span className="button-text rounded-full bg-[#EEF6EA] px-2 py-1 text-[10px] leading-none text-[#1F5D34] sm:px-3 sm:text-[12px]">{label}</span>
        <Icon className="h-4 w-4 text-[#B8A15A] sm:h-5 sm:w-5" strokeWidth={1.8} />
      </div>
      <h3 className="button-text mt-2 text-center text-[11px] leading-[1.45] text-[#183826] sm:mt-4 sm:text-left sm:text-[18px] sm:leading-[1.55]">{title}</h3>
      <p className="mt-1.5 text-center text-[8.5px] font-normal leading-[1.55] tracking-[0.01em] text-[#183826]/72 sm:mt-2 sm:text-left sm:text-[13px] sm:leading-[1.85]">{text}</p>
    </article>
  );
}

function StepCard({ step, index }) {
  const { number, title, text, Icon } = step;
  return (
    <div className="relative rounded-[8px] border border-[#C9DCC5] bg-white/95 px-2 pb-3 pt-5 transition duration-300 hover:-translate-y-1 sm:rounded-[9px] sm:px-4 sm:pb-5 sm:pt-7 md:px-5 md:pb-6">
      <span className="number-text absolute -left-1.5 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5D34] text-[11px] text-white shadow-[0_8px_20px_rgba(31,93,52,0.16)] sm:-left-3 sm:-top-3 sm:h-10 sm:w-10 sm:text-[15px] md:h-11 md:w-11 md:text-[17px]">{number}</span>
      <Icon className="mx-auto h-8 w-8 text-[#1F5D34] sm:h-11 sm:w-11 md:h-[52px] md:w-[52px]" strokeWidth={1.6} />
      <h3 className="button-text mt-3 text-center text-[10px] leading-[1.45] text-[#183826] sm:mt-5 sm:text-[16px] md:text-[19px]">{title}</h3>
      <p className="mx-auto mt-2 max-w-[92px] text-center text-[8.5px] font-normal leading-[1.65] tracking-[0.01em] text-[#183826]/85 sm:mt-3 sm:max-w-[170px] sm:text-[12px] md:max-w-[190px] md:text-[13px]">{text}</p>
      {index < steps.length - 1 && <ArrowRight className="absolute right-[-32px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 text-[#1F5D34] md:block" strokeWidth={1.7} />}
    </div>
  );
}

function AudienceCard({ number, title, description, image, Icon }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-[#D9C991]/70 bg-white shadow-[0_8px_18px_rgba(24,56,38,0.08)] transition duration-300 hover:-translate-y-1 sm:rounded-[18px] sm:shadow-[0_14px_30px_rgba(24,56,38,0.08)]">
      <div className="relative aspect-[354/425] overflow-hidden bg-[#EEF6EA]">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <span className="audience-card-number absolute left-[3%] top-[2.5%] z-20 flex aspect-square w-[20%] items-center justify-center rounded-full border border-[#B8A15A] bg-white font-semibold leading-none text-[#1F5D34] shadow-[0_8px_18px_rgba(184,161,90,0.08)]">{number}</span>
      </div>
      <div className="audience-card-body relative pt-0 text-center">
        <div className="audience-card-icon relative z-20 mx-auto flex items-center justify-center rounded-full bg-[#0E6039] ring-2 ring-white sm:ring-4">
          <Icon className="text-[#D2B75C]" strokeWidth={1.7} />
        </div>
        <h3 className="audience-card-title mx-auto max-w-[270px] text-[#1F5D34]">
          {title.map((line) => <span key={line} className="block whitespace-nowrap">{line}</span>)}
        </h3>
        <div className="audience-divider relative mx-auto h-px w-[86%] bg-[#D2B75C]/70">
          <span className="audience-divider-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B8A15A]" />
        </div>
        <p className="audience-card-description body-text mx-auto max-w-[260px] text-[#183826]">{description}</p>
      </div>
    </article>
  );
}

function FaqItem({ question, answer, index }) {
  return (
    <article className="relative grid grid-cols-[34px_1fr] gap-2.5 rounded-[10px] border border-[#C9DCC5]/80 bg-white/[0.92] px-3 py-3 shadow-[0_8px_18px_rgba(24,56,38,0.045)] sm:grid-cols-[42px_1fr] sm:gap-3.5 sm:px-4 sm:py-3.5">
      <span className="number-text flex h-7 w-7 items-center justify-center rounded-full border border-[#D9C991]/80 bg-[#FBFCF7] text-[10px] leading-none text-[#B8A15A] sm:h-8 sm:w-8 sm:text-[11px]">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3 className="button-text text-[12px] leading-[1.55] text-[#183826] sm:text-[14px]">{question}</h3>
        <p className="body-text mt-1 text-[10.5px] leading-[1.65] text-[#183826]/68 sm:text-[12px]">{answer}</p>
      </div>
    </article>
  );
}

function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(10px+env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-[820px] items-center gap-2 rounded-[14px] border border-[#C9DCC5]/90 bg-[#FBFCF7]/95 p-2 shadow-[0_14px_38px_rgba(24,56,38,0.18)] backdrop-blur-md">
        <div className="hidden min-w-0 flex-1 px-2 text-left sm:block">
          <p className="button-text text-[12px] leading-[1.5] text-[#1F5D34]">洋サポと組む導入方法を相談</p>
          <p className="body-text text-[11px] leading-[1.5] text-[#183826]/62">在庫・酒販・制作体制を使った始め方をご案内します。</p>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-2 sm:flex sm:flex-none">
          {ctaButtons.map((button) => <CtaAnchor key={button.label} {...button} className="sm:min-w-[176px]" />)}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[864px] overflow-x-hidden bg-[#FBFCF7] pb-[86px] font-sans text-[#183826] sm:pb-[92px]">
      <style>{`
        .hero-section { background-image: url('${assets.hero}'); background-size: cover; background-position: center top; }
        .bottle-photo {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, #000 24%, #000 100%), linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, #000 24%, #000 100%), linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
          mask-composite: intersect;
          filter: drop-shadow(0 22px 18px rgba(24, 56, 38, 0.1));
        }
      `}</style>

      <section className="hero-section relative">
        <img src={assets.glow} alt="" className="pointer-events-none absolute right-0 top-0 h-[58%] w-[72%] object-cover opacity-70" />
        <div className="relative mx-auto grid max-w-[790px] grid-cols-[minmax(0,62%)_minmax(0,38%)] gap-x-0 px-4 pb-4 pt-6 sm:px-9 md:grid-cols-[0.64fr_0.36fr] md:gap-4 md:px-0 md:pb-5 md:pt-9">
          <div className="nav-text col-span-2 flex max-w-full flex-wrap gap-x-1 gap-y-1.5 border-b border-[#C9DCC5] pb-3 text-[10px] leading-[1.6] text-[#1F5D34] md:flex-nowrap md:gap-x-1 md:pb-4 md:text-[13px]">
            {categories.map((category, index) => <span key={category}>{category}{index < categories.length - 1 && <span className="mx-1.5 text-[#B8A15A]">/</span>}</span>)}
          </div>

          <div className="relative z-10 min-w-0 pt-5 md:pt-4">
            <p className="button-text inline-flex bg-[#1F5D34] px-3 py-2 text-[12px] leading-[1.15] text-white shadow-[0_12px_26px_rgba(31,93,52,0.12)] sm:text-[16px] md:mt-4 md:px-7 md:py-3 md:text-[24px]">在庫負担なし・専用設備不要</p>
            <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
              {heroBadges.map((badge) => <span key={badge} className="button-text rounded-full border border-[#C9DCC5] bg-white/76 px-2.5 py-1 text-[9px] leading-none text-[#1F5D34] shadow-[0_8px_18px_rgba(24,56,38,0.05)] md:px-4 md:py-1.5 md:text-[13px]">{badge}</span>)}
            </div>
            <h1 className="hero-title mt-5 text-[24px] leading-[1.16] text-[#1F5D34] [letter-spacing:0.01em] sm:text-[42px] md:mt-8 md:text-[52px] md:[letter-spacing:0.035em]">
              <span className="whitespace-nowrap">在庫を抱えずに、</span><br />
              <span className="whitespace-nowrap">オリシャン事業を</span><br />
              <span className="whitespace-nowrap">かんたんスタート。</span>
            </h1>
            <p className="body-text mt-4 max-w-[410px] text-[12px] leading-[1.85] text-[#183826] md:mt-8 md:text-[17px]">
              制作・印刷・発送はすべて代行。<br />専門知識がなくても、<br />事業立ち上げを進められる仕組みです。
            </p>
            <div className="mt-7 hidden max-w-[430px] flex-col gap-3 sm:flex sm:flex-row">
              <CtaAnchor {...ctaButtons[0]} data-track-event="hero_cta_click" />
              <CtaAnchor {...ctaButtons[1]} data-track-event="hero_cta_click" />
            </div>
            <p className="body-text mt-3 hidden text-[11px] leading-[1.7] text-[#183826]/58 sm:block">洋サポの体制を使う前提で、導入目的に合わせた進め方をご案内します。</p>
          </div>

          <div className="relative z-0 flex min-h-[318px] min-w-0 items-start justify-end overflow-visible pt-3 md:min-h-[500px] md:pt-0">
            <img src={assets.heroBottles} alt="オリジナルシャンパンの白ボトルとグリーンボトル" className="bottle-photo relative z-0 -mr-8 mt-0 w-[202px] max-w-none object-contain sm:w-[300px] md:z-10 md:mr-[28px] md:w-[394px]" />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-3 sm:px-9 md:px-0">
        <div className="mx-auto grid max-w-[720px] grid-cols-4 gap-2 sm:gap-4 md:gap-5">{badges.map((badge) => <BadgeCard key={badge.label} {...badge} />)}</div>
      </section>

      <section className="px-4 py-6 sm:px-7 sm:py-8 md:px-0">
        <div className="mx-auto max-w-[806px]">
          <div className="mb-4 sm:mb-5">
            <p className="button-text text-[12px] leading-none text-[#B8A15A]">BENEFIT</p>
            <h2 className="section-title mt-2 text-[22px] leading-[1.45] text-[#183826] md:text-[30px]">初期負担を抑えて、<br />事業立ち上げを進めやすい。</h2>
            <p className="body-text mt-2 max-w-[560px] text-[12.5px] leading-[1.8] text-[#183826]/75 sm:mt-3 sm:text-[14px] sm:leading-[1.9]">在庫・専用設備・制作発送の実務を洋サポ側で持つため、<br className="hidden sm:block" />準備負担を抑えながら、オリシャン事業を始められます。</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">{benefits.map((benefit) => <BenefitCard key={benefit.title} {...benefit} />)}</div>
        </div>
      </section>

      <section id="steps" className="px-3 py-0 sm:px-6 md:px-0">
        <div className="mx-auto max-w-[820px] rounded-[16px] border border-[#C9DCC5]/70 bg-[#EEF6EA] bg-cover bg-center px-3 py-5 shadow-[0_18px_50px_rgba(24,56,38,0.04)] sm:px-7 sm:py-6" style={{ backgroundImage: `url(${assets.section})` }}>
          <SectionHeading>洋サポと進める3ステップ</SectionHeading>
          <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-12">{steps.map((step, index) => <StepCard key={step.number} step={step} index={index} />)}</div>
        </div>
      </section>

      <section className="px-2 py-8 sm:px-8 md:px-0">
        <div className="mx-auto max-w-[840px]">
          <div className="mb-7 text-center">
            <div className="mb-2 flex items-center justify-center gap-5">
              <span className="hidden h-px w-12 bg-[#B8A15A] sm:block" />
              <p className="button-text whitespace-nowrap text-[12px] leading-[1.7] text-[#B8A15A] sm:text-[16px] md:text-[20px]">多くの店舗・事業者様にご利用いただいています</p>
              <span className="hidden h-px w-12 bg-[#B8A15A] sm:block" />
            </div>
            <div className="mb-1 flex items-center justify-center gap-3"><span className="h-1.5 w-1.5 rotate-45 bg-[#B8A15A] /><span className="h-1.5 w-1.5 rotate-45 bg-[#B8A15A]" /><span className="h-1.5 w-1.5 rotate-45 bg-[#B8A15A]" /></div>
            <h2 className="hero-title whitespace-nowrap text-[23px] leading-[1.16] text-[#1F5D34] sm:text-[38px] md:text-[56px]">こんな方に選ばれています</h2>
            <span className="mx-auto mt-2 block h-2 w-24 rounded-[50%] border-t-[3px] border-[#B8A15A]" />
          </div>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-5">{audiences.map((audience) => <AudienceCard key={audience.number} {...audience} />)}</div>
          <p className="body-text mt-5 text-center text-[12px] leading-[1.7] text-[#183826]/60 md:text-[13px]">※業種や規模を問わず、1本からオリジナルシャンパンを制作いただけます。</p>
        </div>
      </section>

      <section className="px-5 pb-4 pt-0 sm:px-7 md:px-0">
        <div className="mx-auto max-w-[806px] rounded-[14px] border border-[#C9DCC5]/70 bg-[#EEF6EA] bg-cover bg-center px-5 py-5 shadow-[0_14px_34px_rgba(24,56,38,0.035)] sm:px-7" style={{ backgroundImage: `url(${assets.section})` }}>
          <div className="grid items-center gap-4 md:grid-cols-[0.8fr_1.2fr_auto]">
            <div className="text-center md:text-left"><p className="button-text text-[11px] leading-none text-[#B8A15A]">PRICE</p><h2 className="section-title mt-2 text-[20px] leading-[1.45] text-[#183826] md:text-[24px]">店舗を持たずに、<br />月額10万円から導入可能</h2></div>
            <p className="body-text text-center text-[13px] leading-[1.85] text-[#183826]/76 md:text-left md:text-[14px]">洋サポの在庫・酒販・制作体制を使って、オリシャン事業をスタート。運用内容や対応範囲は、事業規模に合わせてご提案します。</p>
            <CtaAnchor {...ctaButtons[0]} label="料金と仕組みを相談する" className="min-h-[44px] text-[14px]" />
          </div>
          <p className="body-text mt-3 text-center text-[10px] leading-[1.5] text-[#183826]/58 md:text-left">※表示価格は税抜です。詳細な対応範囲はご相談内容に合わせてご案内します。</p>
        </div>
      </section>

      <section className="px-5 pb-5 pt-0 sm:px-7 md:px-0">
        <div className="mx-auto max-w-[806px] rounded-[14px] border border-[#C9DCC5]/70 bg-[#EEF6EA]/70 bg-cover bg-center px-3 py-4 shadow-[0_12px_28px_rgba(24,56,38,0.035)] sm:px-5 sm:py-5" style={{ backgroundImage: `url(${assets.section})` }}>
          <div className="mb-3 flex items-center gap-3 sm:mb-4"><span className="h-px flex-1 bg-[#B8A15A]/55" /><h2 className="button-text whitespace-nowrap text-[15px] leading-none text-[#183826] sm:text-[18px]">よくある質問</h2><span className="h-px flex-1 bg-[#B8A15A]/55" /></div>
          <div className="grid gap-2 sm:gap-2.5">{faqs.map((faq, index) => <FaqItem key={faq.question} {...faq} index={index} />)}</div>
        </div>
      </section>

      <section id="cta" className="px-5 pb-0 pt-2 sm:px-7 md:px-0">
        <div className="relative mx-auto max-w-[806px] overflow-hidden rounded-[14px] bg-[#1F5D34] px-5 py-6 text-center text-white shadow-[0_16px_36px_rgba(24,56,38,0.14)] sm:px-8 sm:py-7">
          <span className="mx-auto mb-3 block h-px w-14 bg-[#B8A15A]" />
          <h2 className="section-title mx-auto max-w-[350px] text-[24px] text-white md:max-w-none md:text-[29px]">公式LINEで無料相談</h2>
          <p className="body-text mx-auto mt-1 max-w-[520px] text-[13px] leading-[1.8] text-[#EEF6EA] md:text-[15px]">洋サポと組んで始める導入方法を、<br /><span className="whitespace-nowrap">事業内容に合わせてご案内します。</span></p>
          <div className="mx-auto mt-5 grid max-w-[660px] gap-2 sm:grid-cols-2">
            {ctaButtons.map(({ label, Icon, primary, href, eventLabel }) => {
              const isExternal = href.startsWith('http');
              return (
                <a key={label} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} data-track-event="cta_click" data-track-label={eventLabel} className={`button-text inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[9px] border px-4 py-2.5 text-[14px] leading-[1.35] text-[#1F5D34] shadow-[0_8px_18px_rgba(6,28,15,0.12)] transition duration-300 hover:-translate-y-0.5 md:text-[15px] ${primary ? 'border-[#EEF6EA] bg-[#EEF6EA]' : 'border-[#EEF6EA] bg-[#FBFCF7]'}`}>
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.8} /><span>{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#FBFCF7] px-5 py-5 text-center">
        <a href="https://mononopu.com/" target="_blank" rel="noopener noreferrer" className="button-text text-[12px] leading-none text-[#1F5D34]/70 transition duration-300 hover:text-[#1F5D34]">株式会社洋樽本家酒造</a>
      </footer>
      <FloatingCta />
    </main>
  );
}
