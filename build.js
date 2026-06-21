const fs = require('fs');
const path = require('path');

const locations = JSON.parse(fs.readFileSync('src/data/locations.json', 'utf8'));
const dist = p => path.join(__dirname, 'dist', p);
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* ===== CONTENT VARIATIONS ===== */

const introVars = [
  c => `Plasma donors in ${c} can earn estimated compensation based on local promotions and donation frequency.`,
  c => `Looking to donate plasma in ${c}? Local donors earn competitive compensation at BioLife centers throughout the area.`,
  c => `${c} residents can earn significant extra income by donating plasma at their local BioLife center.`,
  c => `If you live in ${c}, plasma donation offers a flexible way to earn hundreds of dollars each month.`,
  c => `BioLife plasma donation in ${c} provides a reliable source of supplemental income for qualified donors.`,
  c => `Residents of ${c} are turning to plasma donation as a steady source of extra monthly income.`,
  c => `The BioLife center in ${c} offers competitive compensation for both new and returning plasma donors.`,
  c => `Donating plasma in ${c} is a convenient way to earn money while helping produce life-saving therapies.`
];

const earningsVars = [
  c => `New donors in ${c} can earn approximately $115 per donation, while returning donors earn around $65 per donation on average.`,
  c => `In ${c}, new donor compensation starts at approximately $115 per session, with returning donors earning competitive rates.`,
  c => `${c} donors can maximize their earnings by donating up to 8 times per month, with new donors earning the highest rates.`,
  c => `The average per-donation rate for BioLife ${c} is $115 for new donors and $65 for returning donors in 2026.`,
  c => `${c} plasma donors can earn between $65 and $115 per donation depending on their donor status and current promotions.`,
  c => `Compensation rates at BioLife ${c} vary by donor status, with first-time donors receiving premium rates.`
];

const locationVars = [
  c => `The BioLife Plasma center in ${c} is conveniently located and welcomes new donors throughout the week.`,
  c => `${c}'s BioLife donation center offers flexible appointment scheduling, including weekend hours for busy donors.`,
  c => `Located in the heart of ${c}, the BioLife center provides a clean, professional environment for plasma donation.`,
  c => `BioLife in ${c} features modern facilities and trained staff to ensure a comfortable donation experience.`,
  c => `${c} donors appreciate the convenient location and extended hours at their local BioLife Plasma center.`,
  c => `The ${c} BioLife center is designed for donor comfort, with efficient check-in and short wait times.`
];

const freqVars = [
  c => `Most ${c} donors donate 4 to 8 times per month, earning hundreds in supplemental income.`,
  c => `${c} residents can donate plasma up to twice per week, making it possible to earn significant monthly income.`,
  c => `With 48 hours required between donations, ${c} donors can easily fit plasma donation into their weekly routine.`,
  c => `Donors in ${c} typically schedule 2 to 3 visits per week to maximize their monthly earnings potential.`,
  c => `The recommended donation frequency for ${c} donors is 2 times per week, yielding up to 8 donations per month.`
];

const ctaVars = [
  c => `Ready to start earning? Visit the BioLife center in ${c} today and ask about new donor promotions.`,
  c => `Don't wait — check the latest coupon offers for the ${c} BioLife center and maximize your first donation.`,
  c => `Contact your local ${c} BioLife center to schedule your first appointment and start earning today.`,
  c => `Stop by the ${c} BioLife location to learn about current bonuses and begin your plasma donation journey.`,
  c => `New donors in ${c} can take advantage of special introductory rates. Schedule your appointment now.`,
  c => `The ${c} BioLife center is accepting new donors. View current promotions and book your visit online.`
];

const getPara = (arr, idx, city) => arr[idx % arr.length](city);

/* ===== BLOG DATA ===== */

const blogPosts = [
  {
    slug: 'how-much-does-biolife-pay',
    title: 'How Much Does BioLife Pay for Plasma Donation in 2026?',
    excerpt: 'BioLife pays new donors approximately $115 per donation and returning donors $65 per donation. Learn about factors that affect your pay.',
    meta: 'How much does BioLife pay for plasma donation in 2026? New donors earn ~$115/session, returning donors ~$65. See full breakdown of pay rates and bonuses.',
    h1: 'How Much Does BioLife Pay for Plasma Donation in 2026?',
    content: `
<p>If you're considering donating plasma at BioLife, the most common question is: how much does BioLife pay? In 2026, compensation varies based on your donor status, location, and current promotional offers.</p>
<h2>BioLife Pay Rates for 2026</h2>
<p>BioLife uses a tiered compensation structure that rewards both new and loyal donors:</p>
<ul>
<li><strong>New Donors:</strong> Approximately $115 per donation during the introductory period</li>
<li><strong>Returning Donors:</strong> Approximately $65 per donation on average</li>
<li><strong>Frequent Donors:</strong> Additional bonuses for consistent donation schedules</li>
<li><strong>Referral Bonuses:</strong> Earn extra when you refer friends and family</li>
</ul>
<h2>How Much Can You Earn Per Month?</h2>
<p>With the ability to donate up to 8 times per month, new donors can earn up to $920 in their first month. Returning donors typically earn $260 to $520 per month depending on donation frequency.</p>
<h2>Factors That Affect Your Pay</h2>
<p>Several factors influence your actual earnings at BioLife:</p>
<ul>
<li><strong>Location:</strong> Pay rates vary by center and state regulations</li>
<li><strong>Weight:</strong> Higher weight donors may qualify for higher compensation</li>
<li><strong>Promotions:</strong> Seasonal and new donor promotions can boost earnings</li>
<li><strong>Frequency:</strong> Donating more frequently increases total monthly income</li>
</ul>
<h2>Getting Paid</h2>
<p>BioLife pays donors via a prepaid debit card immediately after each donation session. Funds are available instantly, making it a flexible income option.</p>`
  },
  {
    slug: 'plasma-donation-requirements',
    title: 'Plasma Donation Requirements: Complete Eligibility Guide',
    excerpt: 'Learn the complete requirements for donating plasma at BioLife including age, weight, health, and identification requirements.',
    meta: 'Complete guide to plasma donation requirements at BioLife. Learn about age, weight, health, ID, and screening requirements before your first visit.',
    h1: 'Plasma Donation Requirements: Complete Eligibility Guide',
    content: `
<p>Before donating plasma at BioLife, you must meet specific eligibility requirements. This guide covers everything you need to know before your first appointment.</p>
<h2>Basic Eligibility Requirements</h2>
<ul>
<li><strong>Age:</strong> Must be 18 years or older (some states allow 16-17 with parental consent)</li>
<li><strong>Weight:</strong> Minimum 110 pounds (50 kg)</li>
<li><strong>Health:</strong> Generally good health with no chronic illnesses</li>
<li><strong>Identification:</strong> Valid government-issued photo ID, proof of SSN, and proof of address</li>
</ul>
<h2>Medical Screening Process</h2>
<p>Before your first donation, you'll undergo a comprehensive medical screening that includes:</p>
<ul>
<li>Health history questionnaire</li>
<li>Vital signs check (blood pressure, pulse, temperature)</li>
<li>Hemoglobin and protein level testing</li>
<li>Physical examination by a medical professional</li>
</ul>
<h2>Lifestyle Considerations</h2>
<p>Certain lifestyle factors may temporarily defer you from donating, including recent tattoos or piercings, travel to certain countries, or recent vaccinations. Always check with your local BioLife center for specific guidelines.</p>
<h2>How Long Does the First Visit Take?</h2>
<p>Your first visit to BioLife typically takes 2 to 3 hours, including registration, screening, and your first donation. Subsequent visits are usually 60 to 90 minutes.</p>`
  },
  {
    slug: 'new-donor-bonus-guide',
    title: 'New Donor Bonus Guide: Maximize Your BioLife Earnings',
    excerpt: 'Learn how to maximize your BioLife new donor bonus. Strategies to earn the most during your first month of plasma donation.',
    meta: 'Maximize your BioLife new donor bonus with our complete guide. Learn strategies to earn more during your first month of plasma donation.',
    h1: 'New Donor Bonus Guide: Maximize Your First Month Earnings',
    content: `
<p>BioLife offers attractive new donor bonuses that can significantly boost your first month earnings. This guide explains how the bonuses work and how to maximize them.</p>
<h2>How the New Donor Bonus Works</h2>
<p>New donors at BioLife typically earn approximately $115 per donation during their introductory period. This is nearly double the standard return donor rate of $65 per donation.</p>
<h2>Maximize Your First Month</h2>
<p>Here's how to get the most from your new donor bonus:</p>
<ul>
<li><strong>Donate frequently:</strong> You can donate up to 8 times in your first month</li>
<li><strong>Complete all visits:</strong> Some promotions require completing multiple donations</li>
<li><strong>Refer friends:</strong> Combine new donor bonuses with referral bonuses</li>
<li><strong>Check local promotions:</strong> Centers may offer additional incentives</li>
</ul>
<h2>Potential First Month Earnings</h2>
<p>A new donor who donates 8 times at $115 per donation can earn up to $920 in their first month. Even at 4 donations per month, that's $460 in supplemental income.</p>
<h2>Tips for New Donors</h2>
<p>Stay hydrated, eat a protein-rich meal before donating, and get adequate sleep. These factors help ensure a smooth donation experience and may help you donate more frequently.</p>`
  },
  {
    slug: 'plasma-donation-tax-guide',
    title: 'Is Plasma Donation Taxable? Complete Tax Guide for Donors',
    excerpt: 'Learn about the tax implications of plasma donation. Find out if you need to report earnings and how to prepare for tax season.',
    meta: 'Is plasma donation taxable income? Complete tax guide for plasma donors. Learn about 1099-NEC forms, reporting requirements, and tax tips.',
    h1: 'Is Plasma Donation Taxable? Complete Tax Guide for Plasma Donors',
    content: `
<p>If you earn money from plasma donation, you may be wondering about the tax implications. Here's what every plasma donor needs to know about taxes.</p>
<h2>Is Plasma Donation Taxable Income?</h2>
<p>Yes. The IRS considers plasma donation compensation as taxable income. You are required to report earnings from plasma donation on your annual tax return.</p>
<h2>Form 1099-NEC</h2>
<p>If you earn $600 or more from BioLife in a calendar year, you will receive a Form 1099-NEC (Non-Employee Compensation). This form reports your earnings to both you and the IRS.</p>
<h2>How to Report Plasma Donation Income</h2>
<p>Report your plasma donation earnings on Schedule 1 (Form 1040), line 8i as "Other Income." Keep records of your donation sessions and payment amounts throughout the year.</p>
<h2>Tax Tips for Plasma Donors</h2>
<ul>
<li><strong>Track your earnings:</strong> Keep a log of each donation and payment received</li>
<li><strong>Save for taxes:</strong> Set aside 15-30% of your earnings for tax payments</li>
<li><strong>Consult a professional:</strong> Tax laws vary, so consult a CPA or tax professional</li>
<li><strong>Consider quarterly payments:</strong> If you earn significantly, you may need to make estimated quarterly tax payments</li>
</ul>
<h2>Deductions</h2>
<p>While you cannot deduct your time, you may be able to deduct mileage to and from the donation center. Consult a tax professional for guidance on eligible deductions.</p>`
  }
];

/* ===== SCHEMA GENERATORS ===== */

const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
});

const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url
  }))
});

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BioLife Plasma Earnings Calculator',
  url: 'https://www.plasmabiolife.com',
  description: 'Free online tool to estimate BioLife plasma donation earnings.'
};

const webPageSchema = (title, desc, url) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: desc,
  url: url
});

const renderSchema = s => `<script type="application/ld+json">${JSON.stringify(s, null, 0)}<\/script>`;

/* ===== LOCATION FAQS ===== */

const getFaqs = city => [
  { q: `How much does BioLife pay in ${city} for 2026?`, a: `BioLife pays new donors in ${city} approximately $115 per donation and return donors approximately $65 per donation on average in 2026. Actual compensation varies by location, promotions, and donation frequency.` },
  { q: `How often can I donate plasma at BioLife ${city}?`, a: `You can donate plasma up to two times per week, with at least 48 hours between donations. Most ${city} donors average 8 donations per month.` },
  { q: `Are new donor bonuses available at BioLife ${city}?`, a: `Yes, BioLife ${city} frequently offers new donor bonuses and promotions. First-time donors can earn higher rates during their first month, typically around $115 per donation.` },
  { q: `Is plasma donation taxable in ${city}?`, a: `Yes, plasma donation compensation is considered taxable income by the IRS. You will receive a Form 1099-NEC if your earnings exceed $600 in a calendar year.` }
];

/* ===== CSS ===== */

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Georgia,"Times New Roman",serif;background:#fff;color:#1a1a2e;line-height:1.75;font-size:16px;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4,h5,h6,.nav-logo,.btn-coupon,.donor-btn,.result-item .label,.trust-badge,.hero p,.nav-links a{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
.container{width:100%;max-width:1060px;margin:0 auto;padding:0 24px}
.topbar{height:4px;background:linear-gradient(90deg,#0f172a 0%,#14b8a6 100%);}
/* nav */
.nav{background:#fff;border-bottom:1px solid #e8ecf0;position:sticky;top:0;z-index:100}
.nav .container{display:flex;align-items:center;justify-content:space-between;height:54px}
.nav-logo{color:#0f172a;font-weight:700;font-size:1rem;text-decoration:none;letter-spacing:-0.2px}
.nav-links{display:flex;gap:22px;list-style:none}
.nav-links a{color:#5a6a7a;text-decoration:none;font-size:0.82rem;font-weight:500}
.nav-links a:hover{color:#0f172a}
/* hero */
.hero{background:#f6f8fa;border-bottom:1px solid #e8ecf0;padding:48px 0 40px;text-align:center}
.hero h1{font-size:clamp(1.25rem,3.6vw,1.85rem);font-weight:700;line-height:1.3;margin-bottom:10px;color:#0f172a}
.hero p{font-size:clamp(0.88rem,2vw,1rem);color:#5a6a7a;max-width:600px;margin:0 auto 14px;line-height:1.6}
.trust-badge{display:inline-flex;align-items:center;gap:6px;background:#eef7f6;color:#0d7a6e;padding:5px 14px;border-radius:3px;font-size:0.75rem;font-weight:600;border:1px solid #c8e6e0}
.trust-badge::before{content:"";display:inline-block;width:14px;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%230d7a6e'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3E%3C/svg%3E") no-repeat 50%/contain}
/* section */
.section{padding:44px 0}
.section h2{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:1.3rem;font-weight:700;margin-bottom:20px;color:#0f172a}
.section h2 .sub{display:block;font-size:0.82rem;font-weight:400;color:#5a6a7a;margin-top:4px}
/* ad */
.ad-placeholder{background:#f3f5f7;text-align:center;padding:20px;color:#8a9aa8;font-size:0.72rem;margin:28px 0;min-height:70px;display:flex;align-items:center;justify-content:center;border:1px solid #e0e4e8;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;text-transform:uppercase;letter-spacing:1px}
/* calc */
.calc-wrap{background:#fafbfc;border:1px solid #e0e4e8;padding:28px 24px;margin:16px 0}
.calc-wrap h2{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #e8ecf0;color:#0f172a}
.form-group{margin-bottom:18px}
.form-group label{display:block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-weight:600;font-size:0.82rem;margin-bottom:6px;color:#2a3a4a}
.donor-toggle{display:flex;gap:0;border:1px solid #d0d4d8;overflow:hidden}
.donor-btn{flex:1;padding:9px 12px;text-align:center;cursor:pointer;font-weight:500;font-size:0.82rem;border:none;background:#fff;color:#5a6a7a;border-right:1px solid #d0d4d8}
.donor-btn:last-child{border-right:none}
.donor-btn.active{background:#0f172a;color:#fff}
.slider-value{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:1.5rem;font-weight:700;color:#0d7a6e;text-align:center;margin-top:4px}
.slider-wrap input[type=range]{width:100%;height:5px;-webkit-appearance:none;appearance:none;background:#dce0e4;border-radius:2px;outline:none;margin:6px 0}
.slider-wrap input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#0f172a;cursor:pointer;border:2px solid #fff}
/* results table */
.results-table{width:100%;border-collapse:collapse;margin-top:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
.results-table td{padding:10px 14px;border-bottom:1px solid #e8ecf0;font-size:0.88rem}
.results-table td:first-child{color:#5a6a7a;font-weight:500}
.results-table td:last-child{text-align:right;font-weight:700;color:#0f172a}
.results-table .currency{color:#0d7a6e;font-size:1.05rem}
.results-table tr:last-child td{border-bottom:none}
.results-table tr:last-child td:last-child{font-size:1.15rem}
.calc-note{margin-top:14px;font-size:0.78rem;color:#8a9aa8;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;text-align:center}
/* benefits */
.benefits-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}
.benefit-card{background:#f6f8fa;border:1px solid #e0e4e8;padding:20px}
.benefit-card h3{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.9rem;font-weight:700;margin-bottom:4px;color:#0f172a}
.benefit-card p{font-size:0.85rem;color:#5a6a7a;line-height:1.6}
/* directory */
.dir-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.dir-card{background:#fafbfc;border:1px solid #e0e4e8;padding:16px}
.dir-card h3{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.9rem;font-weight:700;margin-bottom:3px;color:#0f172a}
.dir-card .addr{font-size:0.82rem;color:#5a6a7a;margin-bottom:2px}
.dir-card .hours{font-size:0.78rem;color:#8a9aa8;margin-bottom:10px}
.btn-coupon{display:inline-block;background:#0f172a;color:#fff;border:none;padding:6px 14px;font-size:0.75rem;font-weight:500;cursor:pointer;text-decoration:none}
.btn-coupon:hover{background:#1e2a3a}
/* search */
.search-wrap{max-width:440px;margin:0 auto 20px}
.search-wrap input{width:100%;padding:10px 14px;border:1px solid #d0d4d8;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.85rem;outline:none}
.search-wrap input:focus{border-color:#0f172a}
/* faq */
.faq-list{max-width:680px;margin:0 auto}
.faq-item{border:1px solid #e0e4e8;margin-bottom:6px}
.faq-q{width:100%;background:#fafbfc;border:none;padding:13px 16px;text-align:left;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.85rem;font-weight:600;color:#0f172a;cursor:pointer;display:flex;justify-content:space-between;align-items:center}
.faq-q:hover{background:#f3f5f7}
.faq-q .arrow{transition:transform .25s;font-size:0.65rem;color:#8a9aa8}
.faq-q.open .arrow{transform:rotate(180deg)}
.faq-a{padding:0 16px;max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease}
.faq-a.open{max-height:300px;padding:0 16px 12px}
.faq-a p{font-size:0.85rem;color:#5a6a7a;line-height:1.7}
/* trust */
.trust{background:#f6f8fa;border-top:1px solid #e0e4e8;padding:28px 0;text-align:center}
.trust .updated{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#0d7a6e;font-weight:600;font-size:0.8rem;margin-bottom:6px}
.trust p{font-size:0.78rem;color:#8a9aa8;max-width:560px;margin:0 auto}
/* footer */
footer{background:#0f172a;padding:28px 0;text-align:center}
footer .links{display:flex;justify-content:center;gap:22px;margin-bottom:8px;flex-wrap:wrap}
footer .links a{color:#8a9aa8;text-decoration:none;font-size:0.78rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
footer .links a:hover{color:#fff}
footer .copy{color:#5a6a7a;font-size:0.72rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
/* coupon cards */
.coupon-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:16px 0}
.coupon-card{background:#fafbfc;border:1px solid #e0e4e8;padding:20px 16px;position:relative}
.coupon-card .tag{display:inline-block;background:#0f172a;color:#fff;padding:2px 10px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px}
.coupon-card h3{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.92rem;font-weight:700;margin-bottom:4px}
.coupon-card p{font-size:0.82rem;color:#5a6a7a;margin-bottom:10px}
.coupon-card .btn-coupon{display:inline-block;background:#0f172a;color:#fff;border:none;padding:7px 16px;font-size:0.75rem;font-weight:500;cursor:pointer}
.coupon-card .btn-coupon:hover{background:#1e2a3a}
/* location page layout */
.loc-layout{display:grid;grid-template-columns:1fr 260px;gap:28px;align-items:start}
.loc-sidebar{position:sticky;top:72px}
/* related */
.related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
.related-card{background:#fafbfc;border:1px solid #e0e4e8;padding:14px;text-align:center;text-decoration:none;color:#0f172a;display:block}
.related-card:hover{border-color:#0f172a}
.related-card strong{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.85rem;display:block}
.related-card span{font-size:0.72rem;color:#8a9aa8}
/* blog */
.blog-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.blog-card{background:#fafbfc;border:1px solid #e0e4e8;padding:20px;text-decoration:none;color:#0f172a;display:block}
.blog-card:hover{border-color:#0f172a}
.blog-card h3{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.9rem;font-weight:700;margin-bottom:6px}
.blog-card p{font-size:0.82rem;color:#5a6a7a;margin-bottom:8px;line-height:1.6}
.blog-card .read-more{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#0d7a6e;font-size:0.78rem;font-weight:600}
/* blog article */
.blog-article{max-width:700px;margin:0 auto;background:#fff;padding:28px 0}
.blog-article h1{font-size:1.6rem;font-weight:700;margin-bottom:14px;color:#0f172a;line-height:1.3}
.blog-article h2{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:1.15rem;font-weight:700;margin:28px 0 10px;color:#0f172a;padding-bottom:6px;border-bottom:1px solid #e8ecf0}
.blog-article p,.blog-article li{font-size:0.92rem;color:#3a4a5a;line-height:1.8}
.blog-article ul{padding-left:22px;margin:12px 0}
.blog-article li{margin-bottom:6px}
.blog-article strong{color:#0f172a}
/* content block */
.content-block p{font-size:0.92rem;color:#3a4a5a;line-height:1.8;margin-bottom:14px}
.content-block p:first-child{font-size:1rem;color:#1a1a2e;font-weight:500}
/* loc info */
.loc-info{background:#fafbfc;border:1px solid #e0e4e8;padding:18px 20px;margin:16px 0}
.loc-info h3{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.9rem;font-weight:700;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #e8ecf0}
.loc-info .detail{font-size:0.85rem;color:#5a6a7a;margin-bottom:5px;line-height:1.5}
.loc-info .detail strong{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-weight:600;color:#0f172a;display:inline-block;min-width:65px}
/* responsive */
@media(max-width:768px){
.loc-layout{grid-template-columns:1fr}
.loc-sidebar{position:static;margin-top:20px}
}
@media(max-width:600px){
.hero{padding:32px 0 28px}
.section{padding:28px 0}
.calc-wrap{padding:20px 16px}
.dir-grid{grid-template-columns:1fr}
.nav-links{display:none}
.coupon-grid{grid-template-columns:1fr}
.benefits-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:400px){
.benefits-grid{grid-template-columns:1fr}
}
`;

/* ===== CALCULATOR JS ===== */

const CALC_JS = `
(function(){var d='new',m={new:115,return:65},b=document.querySelectorAll('.donor-btn'),s=document.getElementById('s'),v=document.getElementById('v'),c=document.getElementById('c'),e=document.getElementById('e'),a=document.getElementById('a'),p=document.getElementById('p'),t=document.getElementById('t');
function u(){var n=parseInt(s.value,10),r=m[d],o=n*r;v.textContent=n;c.textContent=n;e.textContent='$'+o.toLocaleString();a.textContent='$'+(o*12).toLocaleString();p.textContent='$'+r;t.textContent=n}
b.forEach(function(bn){bn.addEventListener('click',function(){b.forEach(function(b2){b2.classList.remove('active')});bn.classList.add('active');d=bn.getAttribute('data-value');u()})});
s.addEventListener('input',u);u()})();
`;

/* ===== FAQ JS ===== */

const FAQ_JS = `
document.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var a=this.nextElementSibling,o=a.classList.contains('open');document.querySelectorAll('.faq-a.open').forEach(function(x){x.classList.remove('open')});document.querySelectorAll('.faq-q.open').forEach(function(x){x.classList.remove('open')});if(!o){a.classList.add('open');this.classList.add('open')}})});
`;

/* ===== SEARCH JS ===== */

const SEARCH_JS = `
(function(){var input=document.getElementById('searchInput'),grid=document.getElementById('dirGrid'),cards=grid.querySelectorAll('.dir-card');input.addEventListener('input',function(){var q=input.value.toLowerCase();cards.forEach(function(c){var t=c.textContent.toLowerCase();c.style.display=t.indexOf(q)>-1?'':'none'})})})();
`;

/* ===== TEMPLATE HELPERS ===== */

const nav = () => `<nav class="nav"><div class="container"><a href="/" class="nav-logo">BioLife Plasma</a><ul class="nav-links"><li><a href="/#calculator">Calculator</a></li><li><a href="/locations">Locations</a></li><li><a href="/blog/">Blog</a></li></ul></div></nav>`;

const footer = () => `<footer><div class="container"><div class="links"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a><a href="/contact">Contact</a></div><p class="copy">&copy; 2026 BioLife Plasma Earnings Calculator. All rights reserved.</p></div></footer>`;

const ad = (label) => `<div class="ad-placeholder"><!-- ADSENSE: ${label} -->&nbsp;Advertisement</div>`;

const trust = () => `<section class="trust"><div class="container"><p class="updated">Last Updated: June 2026</p><p>Earnings are estimates based on publicly available industry averages and may vary by location, donor eligibility, and current promotions. Always confirm rates with your local BioLife center.</p></div></section>`;

const blogLinks = () => `
<div class="blog-grid" style="margin-top:16px">
${blogPosts.map(p => `<a href="/blog/${p.slug}" class="blog-card"><h3>${p.title}</h3><p>${p.excerpt}</p><span class="read-more">Read More</span></a>`).join('')}
</div>`;

const metaTags = (title, desc, url, isPost) => `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="https://www.plasmabiolife.com${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="${isPost ? 'article' : 'website'}">
<meta property="og:url" content="https://www.plasmabiolife.com${url}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">`;

const basePage = (title, desc, url, body, schemas, isPost) => `<!DOCTYPE html>
<html lang="en">
<head>${metaTags(title, desc, url, isPost)}
<style>${CSS}</style>
${schemas.map(renderSchema).join('\n')}
</head>
<body>
<div class="topbar"></div>
${nav()}
${body}
${trust()}
${footer()}
</body>
</html>`;

/* ===== PAGE GENERATORS ===== */

function genIndex() {
  const faqs = [
    { q: 'How much does BioLife pay in 2026?', a: 'BioLife pays new donors approximately $115 per donation and return donors approximately $65 per donation on average in 2026. Actual compensation varies by location, promotions, and donation frequency.' },
    { q: 'How often can I donate plasma?', a: 'You can donate plasma up to two times per week, with at least 48 hours between donations. Most donors average 8 donations per month.' },
    { q: 'Are new donor bonuses available?', a: 'Yes, BioLife frequently offers new donor bonuses and promotions. First-time donors can earn higher rates during their first month.' },
    { q: 'Is plasma donation taxable?', a: 'Yes, plasma donation compensation is considered taxable income by the IRS. You will receive a Form 1099-NEC if your earnings exceed $600 in a calendar year.' }
  ];
  const schemas = [
    faqSchema(faqs),
    webPageSchema('BioLife Plasma Earnings Calculator (2026 Updated)', 'Calculate your estimated BioLife plasma donation earnings for 2026. New donors earn up to $115 per donation. Free online earnings estimator.', 'https://www.plasmabiolife.com/'),
    orgSchema
  ];
  const body = `
<section class="hero">
<div class="container">
<h1>BioLife Plasma Earnings Calculator (2026 Updated)</h1>
<p>Estimate your monthly earnings from plasma donations. Based on current 2026 industry rates for both new and returning donors.</p>
<div class="trust-badge">&#10003; Updated for 2026 Industry Rates</div>
</div>
</section>
<div class="container">${ad('ABOVE ESTIMATOR')}</div>
<section class="section" id="calculator">
<div class="container">
<div class="calc-wrap">
<h2>Earnings Calculator</h2>
<div class="form-group">
<label>Donor Type</label>
<div class="donor-toggle">
<button class="donor-btn active" data-value="new">New Donor</button>
<button class="donor-btn" data-value="return">Return Donor</button>
</div>
</div>
<div class="form-group">
<label>Donations Per Month: <strong id="c">4</strong></label>
<div class="slider-wrap">
<input type="range" id="s" min="1" max="8" value="4" step="1">
</div>
<div class="slider-value" id="v">4</div>
</div>
<table class="results-table">
<tbody>
<tr><td>Estimated Monthly Earnings</td><td class="currency" id="e">$460</td></tr>
<tr><td>Annual Projection</td><td class="currency" id="a">$5,520</td></tr>
<tr><td>Average Per Donation</td><td class="currency" id="p">$115</td></tr>
<tr><td>Total Donations</td><td id="t">4</td></tr>
</tbody>
</table>
<p class="calc-note">Earnings are estimates. Actual pay varies by location, weight, and current promotions.</p>
</div>
</div>
</section>
<section class="section">
<div class="container">
<h2>Find Your Local BioLife Center</h2>
<div class="search-wrap"><input type="text" id="searchInput" placeholder="Search by city or state..." autocomplete="off"></div>
<div class="dir-grid" id="dirGrid">
${locations.map(l => `<div class="dir-card"><a href="/biolife-${l.slug}" style="text-decoration:none;color:inherit"><h3>${l.city}, ${l.state}</h3></a><div class="addr">${l.address}</div><div class="hours">${l.hours}</div><a href="/biolife-${l.slug}" class="btn-coupon">View Center</a></div>`).join('')}
</div>
</div>
</section>
<section class="section" style="background:#fff">
<div class="container">
<h2>Why Donate with BioLife?</h2>
<div class="benefits-grid">
<div class="benefit-card"><h3>Flexible Schedule</h3><p>Book appointments that fit your life, including weekends and evenings.</p></div>
<div class="benefit-card"><h3>Extra Monthly Income</h3><p>Earn hundreds per month with just a few hours of your time each week.</p></div>
<div class="benefit-card"><h3>Fast Payments</h3><p>Get paid instantly after each donation via prepaid debit card.</p></div>
<div class="benefit-card"><h3>Multiple Locations</h3><p>Hundreds of centers nationwide with convenient neighborhood access.</p></div>
</div>
</div>
</section>
<div class="container">${ad('BETWEEN CALCULATOR AND DIRECTORY')}</div>
<section class="section" id="faq">
<div class="container">
<h2>Frequently Asked Questions</h2>
<div class="faq-list">
${faqs.map((f, i) => `<div class="faq-item"><button class="faq-q">${f.q}<span class="arrow">&#9660;</span></button><div class="faq-a"><p>${f.a}</p></div></div>`).join('')}
</div>
</div>
</section>
<section class="section" style="background:#fff">
<div class="container">
<h2>Latest Articles</h2>
${blogLinks()}
</div>
</section>
<script>${CALC_JS}${FAQ_JS}${SEARCH_JS}<\/script>`;
  return basePage('BioLife Plasma Earnings Calculator (2026 Updated)', 'Calculate your estimated BioLife plasma donation earnings for 2026. New donors earn up to $115 per donation. Free online earnings estimator.', '/', body, schemas);
}

function genLocation(loc, idx) {
  const city = loc.city, state = loc.state, slug = loc.slug;
  const title = `BioLife Plasma ${city} ${state} | Earnings Calculator & Donation Pay`;
  const desc = loc.meta;
  const url = `/biolife-${slug}`;
  const relatedLocations = loc.related.map(r => locations.find(l => l.slug === r)).filter(Boolean);
  const faqs = getFaqs(city);
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', url: 'https://www.plasmabiolife.com/' },
      { name: `${city}, ${state}`, url: `https://www.plasmabiolife.com${url}` }
    ]),
    webPageSchema(title, desc, `https://www.plasmabiolife.com${url}`),
    orgSchema
  ];
  const intro = getPara(introVars, idx, city);
  const earnings = getPara(earningsVars, idx + 1, city);
  const locationText = getPara(locationVars, idx + 2, city);
  const freq = getPara(freqVars, idx + 3, city);
  const cta = getPara(ctaVars, idx + 4, city);
  const body = `
<section class="hero">
<div class="container">
<h1>BioLife Plasma ${city}, ${state} — Earnings Calculator (2026)</h1>
<p>Calculate estimated plasma donation earnings at the BioLife center in ${city}, ${state}. Updated rates for 2026.</p>
<div class="trust-badge">&#10003; Updated for 2026 Industry Rates</div>
</div>
</section>
<div class="container">${ad('ABOVE ESTIMATOR')}</div>
<section class="section" id="calculator">
<div class="container">
<div class="loc-layout">
<div>
<div class="content-block">
<p>${intro}</p>
<p>${earnings}</p>
<p>${locationText}</p>
<p>${freq}</p>
</div>
<div class="calc-wrap">
<h2>Earnings Calculator</h2>
<div class="form-group">
<label>Donor Type</label>
<div class="donor-toggle">
<button class="donor-btn active" data-value="new">New Donor</button>
<button class="donor-btn" data-value="return">Return Donor</button>
</div>
</div>
<div class="form-group">
<label>Donations Per Month: <strong id="c">4</strong></label>
<div class="slider-wrap">
<input type="range" id="s" min="1" max="8" value="4" step="1">
</div>
<div class="slider-value" id="v">4</div>
</div>
<table class="results-table">
<tbody>
<tr><td>Estimated Monthly Earnings</td><td class="currency" id="e">$460</td></tr>
<tr><td>Annual Projection</td><td class="currency" id="a">$5,520</td></tr>
<tr><td>Average Per Donation</td><td class="currency" id="p">$115</td></tr>
<tr><td>Total Donations</td><td id="t">4</td></tr>
</tbody>
</table>
<p class="calc-note">Earnings are estimates. Pay varies by location, weight, and current promotions.</p>
</div>
<div class="loc-info">
<h3>${city} BioLife Center Information</h3>
<div class="detail"><strong>Address:</strong> ${loc.address}</div>
<div class="detail"><strong>Hours:</strong> ${loc.hours}</div>
<div class="detail"><strong>Phone:</strong> ${loc.phone}</div>
</div>
<p>${cta}</p>
<h2 style="margin-top:28px">Current Coupons &amp; Promotions</h2>
<div class="coupon-grid">
<div class="coupon-card"><div class="tag">Best Value</div><h3>New Donor Bonus</h3><p>Earn up to <strong>$${115}</strong> per donation as a new donor in ${city}.</p><button class="btn-coupon" onclick="alert('Visit the ${city} BioLife center for current new donor offers.')">View Latest Promotions</button></div>
<div class="coupon-card"><div class="tag">Weekly</div><h3>Monthly Donor Bonus</h3><p>Extra compensation for completing 4+ donations in a month at ${city}.</p><button class="btn-coupon" onclick="alert('Check with ${city} BioLife for monthly bonus details.')">View Latest Promotions</button></div>
<div class="coupon-card"><div class="tag">Referral</div><h3>Referral Bonus</h3><p>Earn referral rewards for every friend you refer to ${city} BioLife.</p><button class="btn-coupon" onclick="alert('Ask about referral bonuses at the ${city} BioLife center.')">View Latest Promotions</button></div>
</div>
${ad('BETWEEN CALCULATOR AND DIRECTORY')}
<h2>Plasma Donation Resources</h2>
${blogLinks()}
</div>
<aside class="loc-sidebar">
${ad('SIDEBAR')}
<div style="margin-top:16px">
<h3 style="font-size:0.9rem;font-weight:700;margin-bottom:10px">Nearby Centers</h3>
<div class="related-grid">
${relatedLocations.map(r => `<a href="/biolife-${r.slug}" class="related-card"><strong>${r.city}</strong><span>${r.state}</span></a>`).join('')}
</div>
</div>
</aside>
</div>
</div>
</section>
<section class="section" style="background:#fff" id="faq">
<div class="container">
<h2>Frequently Asked Questions — ${city}</h2>
<div class="faq-list">
${faqs.map((f, i) => `<div class="faq-item"><button class="faq-q">${f.q}<span class="arrow">&#9660;</span></button><div class="faq-a"><p>${f.a}</p></div></div>`).join('')}
</div>
</div>
</section>
<section class="section">
<div class="container">
<h2>Related Locations</h2>
<div class="related-grid">
${relatedLocations.map(r => `<a href="/biolife-${r.slug}" class="related-card"><strong>${r.city}</strong><span>${r.state}</span></a>`).join('')}
</div>
</div>
</section>
<script>${CALC_JS}${FAQ_JS}<\/script>`;
  return basePage(title, desc, url, body, schemas);
}

function genLocationsIndex() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: 'https://www.plasmabiolife.com/' },
      { name: 'Locations', url: 'https://www.plasmabiolife.com/locations' }
    ]),
    webPageSchema('BioLife Plasma Locations | Find a Center Near You', 'Find your local BioLife plasma donation center. Complete directory of locations with addresses, hours, and earnings information.', 'https://www.plasmabiolife.com/locations'),
    orgSchema
  ];
  const body = `
<section class="hero">
<div class="container">
<h1>BioLife Plasma Locations</h1>
<p>Find a BioLife donation center near you. Browse all locations or search by city or state.</p>
</div>
</section>
<section class="section">
<div class="container">
<div class="search-wrap"><input type="text" id="searchInput" placeholder="Search by city or state..." autocomplete="off"></div>
<div class="dir-grid" id="dirGrid">
${locations.map(l => `<div class="dir-card"><a href="/biolife-${l.slug}" style="text-decoration:none;color:inherit"><h3>${l.city}, ${l.state}</h3></a><div class="addr">${l.address}</div><div class="hours">${l.hours}</div><a href="/biolife-${l.slug}" class="btn-coupon">View Center</a></div>`).join('')}
</div>
</div>
</section>
<script>${SEARCH_JS}<\/script>`;
  return basePage('BioLife Plasma Locations | Find a Center Near You', 'Find your local BioLife plasma donation center. Complete directory of locations with addresses, hours, and earnings information.', '/locations', body, schemas);
}

function genBlogIndex() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: 'https://www.plasmabiolife.com/' },
      { name: 'Blog', url: 'https://www.plasmabiolife.com/blog/' }
    ]),
    webPageSchema('BioLife Plasma Blog | Donation Guides & Resources', 'Learn about plasma donation pay rates, requirements, bonuses, and tax information. Expert guides for BioLife donors.', 'https://www.plasmabiolife.com/blog/'),
    orgSchema
  ];
  const body = `
<section class="hero">
<div class="container">
<h1>BioLife Plasma Blog & Resources</h1>
<p>Expert guides and resources to help you maximize your plasma donation earnings.</p>
</div>
</section>
<section class="section">
<div class="container">
<div class="blog-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
${blogPosts.map(p => `<a href="/blog/${p.slug}" class="blog-card"><h3>${p.title}</h3><p>${p.excerpt}</p><span class="read-more">Read More &rarr;</span></a>`).join('')}
</div>
</div>
</section>
<section class="section" style="background:#fff">
<div class="container">
<h2>Browse BioLife Locations</h2>
<p style="text-align:center;color:#64748b;margin-bottom:20px;font-size:0.9rem">Find a donation center near you</p>
<div class="dir-grid">
${locations.slice(0,12).map(l => `<div class="dir-card"><a href="/biolife-${l.slug}" style="text-decoration:none;color:inherit"><h3>${l.city}, ${l.state}</h3></a><div class="addr">${l.address}</div><a href="/biolife-${l.slug}" class="btn-coupon" style="margin-top:8px">View Center</a></div>`).join('')}
</div>
</div>
</section>
<script>${FAQ_JS}<\/script>`;
  return basePage('BioLife Plasma Blog | Donation Guides & Resources', 'Learn about plasma donation pay rates, requirements, bonuses, and tax information. Expert guides for BioLife donors.', '/blog/', body, schemas);
}

function genBlogPost(post) {
  const schemas = [
    faqSchema(getFaqs('your area')),
    breadcrumbSchema([
      { name: 'Home', url: 'https://www.plasmabiolife.com/' },
      { name: 'Blog', url: 'https://www.plasmabiolife.com/blog/' },
      { name: post.title, url: `https://www.plasmabiolife.com/blog/${post.slug}` }
    ]),
    webPageSchema(post.title, post.meta, `https://www.plasmabiolife.com/blog/${post.slug}`),
    orgSchema
  ];
  const body = `
<section class="section">
<div class="container">
<div class="blog-article">
${post.content}
</div>
<div style="max-width:720px;margin:24px auto 0">
${ad('BLOG IN-CONTENT')}
</div>
</div>
</section>
<section class="section" style="background:#fff">
<div class="container">
<h2 style="text-align:center">More Articles</h2>
<div class="blog-grid" style="margin-top:16px">
${blogPosts.filter(p => p.slug !== post.slug).map(p => `<a href="/blog/${p.slug}" class="blog-card"><h3>${p.title}</h3><p>${p.excerpt}</p><span class="read-more">Read More &rarr;</span></a>`).join('')}
</div>
</div>
</section>
<section class="section">
<div class="container">
<h2>Find Your Local BioLife Center</h2>
<p style="text-align:center;color:#64748b;margin-bottom:20px;font-size:0.9rem">Search for a center near you</p>
<div class="dir-grid">
${locations.slice(0,8).map(l => `<div class="dir-card"><a href="/biolife-${l.slug}" style="text-decoration:none;color:inherit"><h3>${l.city}, ${l.state}</h3></a><div class="addr">${l.address}</div><a href="/biolife-${l.slug}" class="btn-coupon" style="margin-top:8px">View Center</a></div>`).join('')}
</div>
</div>
</section>
<script>${FAQ_JS}<\/script>`;
  return basePage(post.title, post.meta, `/blog/${post.slug}`, body, schemas, true);
}

/* ===== BUILD ===== */

function writePage(filePath, content) {
  const fullPath = dist(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log('  ' + filePath);
}

console.log('Building BioLife Plasma SEO Website...\n');

// Homepage
writePage('index.html', genIndex());

// Location pages
locations.forEach((loc, idx) => {
  writePage(`biolife-${loc.slug}/index.html`, genLocation(loc, idx));
});

// Locations index
writePage('locations/index.html', genLocationsIndex());

// Blog index
writePage('blog/index.html', genBlogIndex());

// Blog posts
blogPosts.forEach(post => {
  writePage(`blog/${post.slug}/index.html`, genBlogPost(post));
});

// Static pages (placeholder)
['privacy', 'terms', 'contact'].forEach(p => {
  writePage(`${p}/index.html`, basePage(
    `${p.charAt(0).toUpperCase() + p.slice(1)} | BioLife Plasma Earnings Calculator`,
    `BioLife Plasma ${p} page.`,
    `/${p}`,
    `<section class="section"><div class="container"><h1>${p.charAt(0).toUpperCase() + p.slice(1)}</h1><p style="color:#64748b;margin-top:12px">This page is under construction. Please check back soon.</p></div></section>`,
    [webPageSchema(`${p.charAt(0).toUpperCase() + p.slice(1)} | BioLife Plasma`, `BioLife Plasma ${p} page.`, `https://www.plasmabiolife.com/${p}`), orgSchema]
  ));
});

console.log(`\nDone! Generated ${locations.length + 5 + blogPosts.length + 3} pages.`);
console.log(`Output: ${path.resolve('dist')}`);
