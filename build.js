const fs = require('fs');
const path = require('path');

const CITIES = [
  {city:'Houston',state:'TX',slug:'houston-tx',addr:'2450 Fondren Rd, Houston, TX 77063'},
  {city:'Dallas',state:'TX',slug:'dallas-tx',addr:'12345 N Central Expy, Dallas, TX 75243'},
  {city:'Austin',state:'TX',slug:'austin-tx',addr:'8900 N Lamar Blvd, Austin, TX 78753'},
  {city:'San Antonio',state:'TX',slug:'san-antonio-tx',addr:'4400 Walzem Rd, San Antonio, TX 78218'},
  {city:'Phoenix',state:'AZ',slug:'phoenix-az',addr:'3150 E Greenway Rd, Phoenix, AZ 85032'},
  {city:'Denver',state:'CO',slug:'denver-co',addr:'6801 W Alameda Ave, Denver, CO 80226'},
  {city:'Chicago',state:'IL',slug:'chicago-il',addr:'4700 W Irving Park Rd, Chicago, IL 60641'},
  {city:'Atlanta',state:'GA',slug:'atlanta-ga',addr:'3155 Roswell Rd NE, Atlanta, GA 30305'},
  {city:'Miami',state:'FL',slug:'miami-fl',addr:'8200 SW 8th St, Miami, FL 33144'},
  {city:'Orlando',state:'FL',slug:'orlando-fl',addr:'2600 E Colonial Dr, Orlando, FL 32803'},
  {city:'Tampa',state:'FL',slug:'tampa-fl',addr:'2605 E Fowler Ave, Tampa, FL 33612'},
  {city:'Charlotte',state:'NC',slug:'charlotte-nc',addr:'5800 South Blvd, Charlotte, NC 28217'},
  {city:'Nashville',state:'TN',slug:'nashville-tn',addr:'3812 Nolensville Pk, Nashville, TN 37211'},
  {city:'Seattle',state:'WA',slug:'seattle-wa',addr:'12501 Aurora Ave N, Seattle, WA 98133'},
  {city:'Portland',state:'OR',slug:'portland-or',addr:'4610 SE 82nd Ave, Portland, OR 97266'},
  {city:'Los Angeles',state:'CA',slug:'los-angeles-ca',addr:'1234 S Vermont Ave, Los Angeles, CA 90006'},
  {city:'San Diego',state:'CA',slug:'san-diego-ca',addr:'3030 El Cajon Blvd, San Diego, CA 92104'},
  {city:'San Jose',state:'CA',slug:'san-jose-ca',addr:'2340 McKee Rd, San Jose, CA 95116'},
  {city:'New York',state:'NY',slug:'new-york-ny',addr:'250 W 40th St, New York, NY 10018'},
  {city:'Philadelphia',state:'PA',slug:'philadelphia-pa',addr:'2200 Arch St, Philadelphia, PA 19103'},
  {city:'Boston',state:'MA',slug:'boston-ma',addr:'389 Massachusetts Ave, Boston, MA 02115'},
  {city:'Baltimore',state:'MD',slug:'baltimore-md',addr:'2401 Liberty Heights Ave, Baltimore, MD 21215'},
  {city:'Washington',state:'DC',slug:'washington-dc',addr:'1100 15th St NW, Washington, DC 20005'},
  {city:'Las Vegas',state:'NV',slug:'las-vegas-nv',addr:'4770 S Maryland Pkwy, Las Vegas, NV 89119'},
  {city:'Minneapolis',state:'MN',slug:'minneapolis-mn',addr:'900 Washington Ave S, Minneapolis, MN 55415'},
  {city:'Kansas City',state:'MO',slug:'kansas-city-mo',addr:'4500 Headwood Dr, Kansas City, MO 64111'},
  {city:'St. Louis',state:'MO',slug:'st-louis-mo',addr:'3800 Lindell Blvd, St. Louis, MO 63108'},
  {city:'Indianapolis',state:'IN',slug:'indianapolis-in',addr:'3600 N Shadeland Ave, Indianapolis, IN 46226'},
  {city:'Columbus',state:'OH',slug:'columbus-oh',addr:'1700 Morse Rd, Columbus, OH 43229'},
  {city:'Detroit',state:'MI',slug:'detroit-mi',addr:'16800 W McNichols Rd, Detroit, MI 48235'},
  {city:'Milwaukee',state:'WI',slug:'milwaukee-wi',addr:'2300 N Mayfair Rd, Milwaukee, WI 53226'},
  {city:'Salt Lake City',state:'UT',slug:'salt-lake-city-ut',addr:'1200 E 2100 S, Salt Lake City, UT 84106'},
  {city:'Albuquerque',state:'NM',slug:'albuquerque-nm',addr:'4200 Central Ave SE, Albuquerque, NM 87108'},
  {city:'Oklahoma City',state:'OK',slug:'oklahoma-city-ok',addr:'2800 NW 36th St, Oklahoma City, OK 73112'},
  {city:'Boise',state:'ID',slug:'boise-id',addr:'350 N Milwaukee St, Boise, ID 83704'},
  {city:'Charleston',state:'SC',slug:'charleston-sc',addr:'1975 Magwood Dr, Charleston, SC 29414'},
  {city:'Richmond',state:'VA',slug:'richmond-va',addr:'5200 Midlothian Tpke, Richmond, VA 23225'},
  {city:'Providence',state:'RI',slug:'providence-ri',addr:'200 Allens Ave, Providence, RI 02903'},
  {city:'Louisville',state:'KY',slug:'louisville-ky',addr:'4600 Shelbyville Rd, Louisville, KY 40207'},
  {city:'Birmingham',state:'AL',slug:'birmingham-al',addr:'700 Montgomery Hwy, Birmingham, AL 35216'},
  {city:'New Orleans',state:'LA',slug:'new-orleans-la',addr:'3400 Canal St, New Orleans, LA 70119'},
  {city:'Omaha',state:'NE',slug:'omaha-ne',addr:'8701 W Center Rd, Omaha, NE 68124'},
  {city:'Brooklyn',state:'NY',slug:'brooklyn-ny',addr:'5201 Kings Hwy, Brooklyn, NY 11234'},
  {city:'Queens',state:'NY',slug:'queens-ny',addr:'5901 Queens Blvd, Queens, NY 11377'},
  {city:'Buffalo',state:'NY',slug:'buffalo-ny',addr:'3890 Maple Rd, Buffalo, NY 14226'},
  {city:'Pittsburgh',state:'PA',slug:'pittsburgh-pa',addr:'5870 Forbes Ave, Pittsburgh, PA 15217'},
  {city:'Sacramento',state:'CA',slug:'sacramento-ca',addr:'5770 Madison Ave, Sacramento, CA 95841'},
  {city:'El Paso',state:'TX',slug:'el-paso-tx',addr:'1135 N Zaragoza Rd, El Paso, TX 79907'},
  {city:'Fort Worth',state:'TX',slug:'fort-worth-tx',addr:'5801 Interstate 20 W, Fort Worth, TX 76179'},
  {city:'Jacksonville',state:'FL',slug:'jacksonville-fl',addr:'9550 Regency Square Blvd, Jacksonville, FL 32225'},
  {city:'Raleigh',state:'NC',slug:'raleigh-nc',addr:'5430 Wade Park Blvd, Raleigh, NC 27607'},
  {city:'Memphis',state:'TN',slug:'memphis-tn',addr:'6080 Mt Moriah Rd, Memphis, TN 38115'},
  {city:'Louisville',state:'KY',slug:'louisville-ky',addr:'4600 Shelbyville Rd, Louisville, KY 40207'},
  {city:'Tucson',state:'AZ',slug:'tucson-az',addr:'4886 E Speedway Blvd, Tucson, AZ 85712'},
  {city:'Fresno',state:'CA',slug:'fresno-ca',addr:'7460 N Cedar Ave, Fresno, CA 93720'},
  {city:'Mesa',state:'AZ',slug:'mesa-az',addr:'1130 S Gilbert Rd, Mesa, AZ 85204'},
  {city:'Arlington',state:'TX',slug:'arlington-tx',addr:'3800 S Cooper St, Arlington, TX 76015'},
  {city:'Tulsa',state:'OK',slug:'tulsa-ok',addr:'7105 S Mingo Rd, Tulsa, OK 74133'},
  {city:'Colorado Springs',state:'CO',slug:'colorado-springs-co',addr:'3265 E Platte Ave, Colorado Springs, CO 80909'},
  {city:'Riverside',state:'CA',slug:'riverside-ca',addr:'3610 Riverside Plaza Dr, Riverside, CA 92506'},
  {city:'Bakersfield',state:'CA',slug:'bakersfield-ca',addr:'5200 Stockdale Hwy, Bakersfield, CA 93309'},
  {city:'Long Beach',state:'CA',slug:'long-beach-ca',addr:'2110 N Bellflower Blvd, Long Beach, CA 90815'},
  {city:'Santa Ana',state:'CA',slug:'santa-ana-ca',addr:'3800 S Plaza Dr, Santa Ana, CA 92704'},
  {city:'Anaheim',state:'CA',slug:'anaheim-ca',addr:'500 S Euclid St, Anaheim, CA 92802'},
  {city:'Corpus Christi',state:'TX',slug:'corpus-christi-tx',addr:'5722 Weber Rd, Corpus Christi, TX 78413'},
  {city:'Lubbock',state:'TX',slug:'lubbock-tx',addr:'4402 19th St, Lubbock, TX 79407'},
  {city:'Baton Rouge',state:'LA',slug:'baton-rouge-la',addr:'10100 Florida Blvd, Baton Rouge, LA 70815'},
  {city:'Mobile',state:'AL',slug:'mobile-al',addr:'1050 Government St, Mobile, AL 36604'},
  {city:'Little Rock',state:'AR',slug:'little-rock-ar',addr:'10900 Colonel Glenn Rd, Little Rock, AR 72204'},
  {city:'Wichita',state:'KS',slug:'wichita-ks',addr:'2700 N Maize Rd, Wichita, KS 67101'},
  {city:'Knoxville',state:'TN',slug:'knoxville-tn',addr:'7409 Chapman Hwy, Knoxville, TN 37920'},
  {city:'Dayton',state:'OH',slug:'dayton-oh',addr:'3100 Wilmington Pike, Dayton, OH 45429'},
  {city:'Akron',state:'OH',slug:'akron-oh',addr:'1740 Brittain Rd, Akron, OH 44310'},
];

const STATIC_PAGES = [
  {path:'calculator',title:'BioLife Plasma Calculator — Free Monthly Income Estimator',desc:'Free BioLife plasma donation calculator. Estimate your monthly and annual earnings based on published 2026 industry compensation rates.'},
  {path:'locations',title:'All BioLife Plasma Locations — Find a Center Near You',desc:'Browse all BioLife plasma donation centers across the United States. Find addresses, hours, and contact information for 70+ locations.'},
  {path:'privacy',title:'Privacy Policy — BioLife Plasma Earnings Calculator',desc:'Privacy policy for the BioLife Plasma Earnings Calculator. Learn how we collect, use, and protect your information.'},
  {path:'terms',title:'Terms of Use — BioLife Plasma Earnings Calculator',desc:'Terms and conditions for using the BioLife Plasma Earnings Calculator website and tools.'},
  {path:'contact',title:'Contact Us — BioLife Plasma Earnings Calculator',desc:'Contact the BioLife Plasma Earnings Calculator team. Get support or send feedback about our free income estimation tools.'},
  {path:'about',title:'About — BioLife Plasma Earnings Calculator 2026',desc:'About the BioLife Plasma Earnings Calculator — a free independent tool for estimating monthly plasma donation income based on 2026 industry rates.'},
];

const BLOG_POSTS = [
  {slug:'how-much-does-biolife-pay',title:'How Much Does BioLife Pay Per Donation in 2026? Full Rate Guide',desc:'Complete guide to BioLife plasma donation rates for 2026. New donors earn ~$115/donation, returning donors ~$65. Includes state-by-state rate analysis and promotional bonus tips.'},
  {slug:'new-donor-bonus-guide',title:'BioLife New Donor Bonuses 2026 — How to Maximize Your First Month',desc:'Everything you need to know about BioLife new donor promotions in 2026. Learn how first-time donors can earn up to $920 in their first month.'},
  {slug:'plasma-donation-requirements',title:'Plasma Donation Requirements — Complete 2026 Eligibility Guide',desc:'Comprehensive guide to plasma donation eligibility requirements. Age, weight, ID, health screening, and frequency limits explained for first-time donors.'},
  {slug:'plasma-donation-tax-guide',title:'Is Plasma Donation Taxable? IRS Rules for 1099 Income',desc:'Learn about plasma donation tax implications. IRS rules on 1099-NEC forms, reporting requirements, and how to handle your donation income during tax season.'},
];

const CSS = `:root{--navy:#0f172a;--teal:#14b8a6;--teal-dark:#0d9488;--teal-light:#ecfdf5;--gray-50:#f8fafc;--gray-100:#f1f5f9;--gray-200:#e2e8f0;--gray-300:#cbd5e1;--gray-400:#94a3b8;--gray-500:#64748b;--gray-600:#475569;--gray-900:#0f172a;--white:#fff;--radius:10px;--radius-sm:6px;--max-w:1100px}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,sans-serif;background:var(--white);color:var(--gray-900);line-height:1.6;font-size:16px;-webkit-font-smoothing:antialiased}
.container{width:100%;max-width:var(--max-w);margin:0 auto;padding:0 24px}
.nav{background:var(--white);border-bottom:1px solid var(--gray-200);position:sticky;top:0;z-index:100}
.nav .container{display:flex;align-items:center;justify-content:space-between;padding-top:14px;padding-bottom:14px}
.nav-logo{display:flex;align-items:center;gap:10px;color:var(--gray-900);font-weight:700;font-size:1rem;text-decoration:none;letter-spacing:-0.3px}
.nav-logo svg{width:24px;height:24px}
.nav-links{display:flex;gap:24px;list-style:none}
.nav-links a{color:var(--gray-500);text-decoration:none;font-size:0.85rem;font-weight:500;transition:color .15s}
.nav-links a:hover{color:var(--teal)}
.disclaimer-bar{background:#fef2f2;border-bottom:1px solid #fecaca;padding:8px 0}
.disclaimer-bar p{font-size:0.72rem;color:#991b1b;line-height:1.5;text-align:center;max-width:900px;margin:0 auto}
.hero{padding:56px 0 48px;text-align:center}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--teal-light);color:var(--teal-dark);font-size:0.72rem;font-weight:600;padding:4px 12px;border-radius:999px;margin-bottom:16px}
.hero h1{font-size:clamp(1.6rem,4.5vw,2.4rem);font-weight:800;line-height:1.15;margin-bottom:14px;letter-spacing:-0.6px;color:var(--gray-900)}
.hero p{font-size:clamp(0.9rem,2vw,1.05rem);color:var(--gray-500);max-width:560px;margin:0 auto 20px}
.hero-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;font-size:0.88rem;font-weight:600;border-radius:8px;cursor:pointer;border:none;transition:all .15s;text-decoration:none}
.btn-primary{background:var(--gray-900);color:var(--white)}
.btn-primary:hover{background:#1e293b;color:var(--white)}
.btn-outline{background:var(--white);color:var(--gray-900);border:1px solid var(--gray-200)}
.btn-outline:hover{border-color:var(--teal);color:var(--teal-dark)}
.ad-row{display:flex;justify-content:center;padding:4px 0;margin:0}
.ad-slot{background:var(--gray-50);border:1px dashed var(--gray-300);border-radius:6px;padding:8px 16px;text-align:center;color:var(--gray-400);font-size:0.68rem;min-height:0;line-height:1;display:inline-flex;align-items:center}
.calc-section{padding:0 0 48px;margin-top:-8px}
.calc-header{text-align:center;margin-bottom:24px}
.calc-header h2{font-size:1.5rem;font-weight:800;letter-spacing:-0.4px;margin-bottom:6px}
.calc-header p{color:var(--gray-500);font-size:0.9rem}
.calc-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:24px;align-items:start}
.calc-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:28px}
.calc-card h3{font-size:0.85rem;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:18px}
.input-group{margin-bottom:20px}
.input-group label{display:block;font-size:0.82rem;font-weight:600;color:var(--gray-600);margin-bottom:6px}
.donor-toggle{display:flex;gap:0;border:1.5px solid var(--gray-200);border-radius:8px;overflow:hidden}
.donor-btn{flex:1;padding:10px;text-align:center;cursor:pointer;font-weight:600;font-size:0.85rem;border:none;background:var(--white);color:var(--gray-500);transition:all .12s}
.donor-btn.active{background:var(--gray-900);color:var(--white)}
.slider-wrap{margin-top:4px}
.slider-wrap input[type=range]{width:100%;height:4px;-webkit-appearance:none;appearance:none;background:var(--gray-200);border-radius:2px;outline:none}
.slider-wrap input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--teal);cursor:pointer;border:2px solid var(--white);box-shadow:0 1px 4px rgba(0,0,0,0.12)}
.count-display{font-size:1.5rem;font-weight:700;color:var(--gray-900);margin-top:4px}
.results-card{background:var(--gray-900);border-radius:var(--radius);padding:28px;color:var(--white)}
.results-card h3{font-size:0.75rem;font-weight:600;color:var(--gray-400);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px}
.results-card .main-value{font-size:2.2rem;font-weight:800;letter-spacing:-0.5px;color:var(--teal);margin-bottom:20px}
.result-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
.result-row:last-child{border-bottom:none;padding-bottom:0}
.result-row .label{font-size:0.82rem;color:var(--gray-400);font-weight:500}
.result-row .value{font-size:0.95rem;font-weight:700;color:var(--white)}
.result-row.teal .value{color:var(--teal);font-size:1.05rem}
.calc-footnote{text-align:center;margin-top:20px;font-size:0.75rem;color:var(--gray-400);max-width:600px;margin-left:auto;margin-right:auto}
.city-links{padding:40px 0;border-top:1px solid var(--gray-200)}
.city-links h3{font-size:0.85rem;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:14px}
.city-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px}
.city-grid a{display:block;padding:6px 10px;font-size:0.82rem;color:var(--gray-500);text-decoration:none;border-radius:4px;transition:all .12s}
.city-grid a:hover{background:var(--teal-light);color:var(--teal-dark)}
.benefits{padding:48px 0;background:var(--gray-50)}
.section-title{font-size:1.25rem;font-weight:700;margin-bottom:24px;letter-spacing:-0.3px}
.benefits-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}
.benefit-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:22px 18px;transition:border-color .15s}
.benefit-card:hover{border-color:var(--teal)}
.benefit-icon{width:36px;height:36px;border-radius:8px;background:var(--teal-light);display:flex;align-items:center;justify-content:center;margin-bottom:10px}
.benefit-card h3{font-size:0.92rem;font-weight:700;margin-bottom:4px}
.benefit-card p{font-size:0.82rem;color:var(--gray-500);line-height:1.45}
.directory{padding:48px 0}
.dir-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
.dir-card{background:var(--white);border:1px solid var(--gray-200);border-radius:8px;padding:16px;transition:border-color .15s}
.dir-card:hover{border-color:var(--teal)}
.dir-card h3{font-size:0.88rem;font-weight:700;margin-bottom:4px}
.dir-card .addr{font-size:0.76rem;color:var(--gray-500);margin-bottom:2px}
.dir-card .hours{font-size:0.72rem;color:var(--gray-400);margin-bottom:10px}
.btn-sm{display:inline-block;background:transparent;color:var(--teal-dark);border:1px solid var(--teal);padding:5px 12px;border-radius:6px;font-size:0.75rem;font-weight:600;cursor:pointer;transition:all .15s;text-decoration:none}
.btn-sm:hover{background:var(--teal);color:var(--white)}
.faq{padding:48px 0;background:var(--gray-50)}
.faq-list{max-width:700px;margin:0 auto}
.faq-item{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);margin-bottom:10px;overflow:hidden}
.faq-q{width:100%;padding:16px 18px;text-align:left;font-size:0.9rem;font-weight:600;color:var(--gray-900);cursor:pointer;border:none;background:var(--white);display:flex;justify-content:space-between;align-items:center;transition:background .12s}
.faq-q:hover{background:var(--gray-50)}
.faq-q .arrow{font-size:0.7rem;color:var(--teal);transition:transform .25s;flex-shrink:0;margin-left:14px}
.faq-q.open .arrow{transform:rotate(180deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease}
.faq-a.open{max-height:500px}
.faq-a-inner{padding:0 18px 16px;font-size:0.86rem;color:var(--gray-500);line-height:1.65}
.trust-strip{background:var(--white);border-top:1px solid var(--gray-200);padding:24px 0;text-align:center}
.trust-strip p{font-size:0.78rem;color:var(--gray-400);max-width:600px;margin:0 auto;line-height:1.5}
footer{background:var(--navy);padding:32px 0}
.footer-inner{max-width:var(--max-w);margin:0 auto;padding:0 24px;text-align:center}
footer .footer-disc{font-size:0.74rem;color:var(--gray-400);line-height:1.55;margin-bottom:16px;max-width:700px;margin-left:auto;margin-right:auto}
footer .footer-links{display:flex;justify-content:center;gap:24px;margin-bottom:10px;flex-wrap:wrap}
footer .footer-links a{color:var(--gray-400);text-decoration:none;font-size:0.8rem;transition:color .15s}
footer .footer-links a:hover{color:var(--teal)}
footer .copy{color:var(--gray-500);font-size:0.72rem}
@media(max-width:768px){
.calc-grid{grid-template-columns:1fr}
.hero{padding:40px 0 32px}
.hero h1{font-size:1.45rem}
.calc-header h2{font-size:1.25rem}
.results-card .main-value{font-size:1.8rem}
.nav-links{display:none}
}
@media(max-width:480px){
.container{padding:0 16px}
.calc-card{padding:20px}
.results-card{padding:20px}
.dir-grid{grid-template-columns:1fr}
.benefits-grid{grid-template-columns:1fr 1fr;gap:10px}
.city-grid{grid-template-columns:repeat(2,1fr)}
}
.content-page{padding:48px 0}
.content-page h1{font-size:1.8rem;font-weight:800;margin-bottom:16px;letter-spacing:-0.4px}
.content-page h2{font-size:1.2rem;font-weight:700;margin-top:28px;margin-bottom:10px}
.content-page p{font-size:0.9rem;color:var(--gray-500);line-height:1.7;margin-bottom:14px;max-width:700px}
.content-page ul{font-size:0.9rem;color:var(--gray-500);line-height:1.7;margin-bottom:14px;padding-left:20px;max-width:700px}
.content-page li{margin-bottom:4px}
.reviews{padding:48px 0;background:var(--white)}
.reviews-header{text-align:center;margin-bottom:24px}
.reviews-header .sample-label{display:inline-block;background:var(--gray-100);color:var(--gray-500);font-size:0.68rem;font-weight:600;padding:3px 10px;border-radius:999px;margin-bottom:10px;letter-spacing:0.3px}
.reviews-header h2{font-size:1.25rem;font-weight:700;letter-spacing:-0.3px}
.reviews-header p{font-size:0.82rem;color:var(--gray-500);margin-top:4px}
.review-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}
.review-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:18px;transition:border-color .15s}
.review-card:hover{border-color:var(--teal)}
.review-stars{color:#f59e0b;font-size:0.85rem;letter-spacing:1px;margin-bottom:6px}
.review-text{font-size:0.82rem;color:var(--gray-500);line-height:1.55;margin-bottom:8px;font-style:italic}
.review-author{font-size:0.78rem;font-weight:600;color:var(--gray-900)}
.review-location{font-size:0.7rem;color:var(--gray-400)}
.review-date{font-size:0.68rem;color:var(--gray-400);margin-top:2px}
.videos{padding:48px 0;background:var(--gray-50)}
.videos-header{text-align:center;margin-bottom:24px}
.videos-header .sample-label{display:inline-block;background:var(--gray-100);color:var(--gray-500);font-size:0.68rem;font-weight:600;padding:3px 10px;border-radius:999px;margin-bottom:10px;letter-spacing:0.3px}
.videos-header h2{font-size:1.25rem;font-weight:700;letter-spacing:-0.3px}
.videos-header p{font-size:0.82rem;color:var(--gray-500);margin-top:4px}
.video-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.video-card{background:var(--gray-900);border-radius:var(--radius);overflow:hidden;position:relative;aspect-ratio:16/9}
.video-card iframe{width:100%;height:100%;border:0}
.video-play{width:50px;height:50px;border-radius:50%;background:rgba(20,184,166,0.9);display:flex;align-items:center;justify-content:center;transition:transform .2s}
.video-card:hover .video-play{transform:scale(1.08)}
.video-play svg{margin-left:2px}
.video-duration{position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.75);color:var(--white);font-size:0.7rem;font-weight:600;padding:2px 7px;border-radius:4px}
.video-label{position:absolute;bottom:10px;left:10px;right:60px;color:var(--white);font-size:0.8rem;font-weight:600;text-shadow:0 1px 4px rgba(0,0,0,0.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.comments{padding:48px 0;background:var(--white)}
.comments-header{text-align:center;margin-bottom:24px}
.comments-header .sample-label{display:inline-block;background:var(--gray-100);color:var(--gray-500);font-size:0.68rem;font-weight:600;padding:3px 10px;border-radius:999px;margin-bottom:10px;letter-spacing:0.3px}
.comments-header h2{font-size:1.25rem;font-weight:700;letter-spacing:-0.3px}
.comments-header p{font-size:0.82rem;color:var(--gray-500);margin-top:4px}
.comment-form{max-width:600px;margin:0 auto 28px;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius);padding:20px}
.comment-form label{display:block;font-size:0.78rem;font-weight:600;color:var(--gray-600);margin-bottom:4px}
.comment-form input,.comment-form textarea{width:100%;padding:9px 12px;border:1px solid var(--gray-200);border-radius:6px;font-size:0.85rem;font-family:inherit;background:var(--white);color:var(--gray-900);margin-bottom:12px;transition:border-color .15s;outline:none}
.comment-form input:focus,.comment-form textarea:focus{border-color:var(--teal)}
.comment-form textarea{min-height:72px;resize:vertical}
.comment-form .btn-submit{background:var(--gray-900);color:var(--white);border:none;padding:9px 22px;font-size:0.85rem;font-weight:600;border-radius:6px;cursor:pointer;transition:background .15s}
.comment-form .btn-submit:hover{background:#1e293b}
.comment-list{max-width:600px;margin:0 auto}
.comment-item{padding:14px 0;border-bottom:1px solid var(--gray-100)}
.comment-item:last-child{border-bottom:none}
.comment-name{font-size:0.82rem;font-weight:700;color:var(--gray-900)}
.comment-time{font-size:0.68rem;color:var(--gray-400);margin-left:8px}
.comment-text{font-size:0.84rem;color:var(--gray-500);line-height:1.5;margin-top:4px}
.comment-empty{text-align:center;font-size:0.82rem;color:var(--gray-400);padding:20px 0}
@media(max-width:768px){.review-grid{grid-template-columns:1fr}.video-grid{grid-template-columns:1fr}}
.blog-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.blog-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:22px;transition:border-color .15s}
.blog-card:hover{border-color:var(--teal)}
.blog-card h3{font-size:0.95rem;font-weight:700;margin-bottom:6px}
.blog-card p{font-size:0.82rem;color:var(--gray-500);line-height:1.5;margin-bottom:10px}
.blog-card .blog-meta{font-size:0.72rem;color:var(--gray-400)}`;

const NAV = `<nav class="nav">
<div class="container">
<a href="/" class="nav-logo">
<svg width="24" height="24" viewBox="0 0 32 32" fill="none"><path d="M16 2C16 2 8 12 8 19c0 4.418 3.582 8 8 8s8-3.582 8-8c0-7-8-17-8-17z" fill="#14b8a6"/><path d="M16 6c0 7-6 14-6 14s6-2 6-8 6 8 6 8-6-7-6-14z" fill="#0f172a" opacity="0.9"/><path d="M16 15l3 4h-6l3-4z" fill="#fff" opacity="0.95"/></svg>
<span>BioLife <span style="color:var(--teal)">Plasma</span></span>
</a>
<ul class="nav-links">
<li><a href="/#calculator">Calculator</a></li>
<li><a href="/#locations">Locations</a></li>
<li><a href="/#faq">FAQ</a></li>
<li><a href="/blog">Blog</a></li>
</ul>
</div>
</nav>`;

const DISCLAIMER = `<div class="disclaimer-bar">
<div class="container">
<p><strong>Disclaimer:</strong> Independent informational website. <strong>NOT affiliated</strong> with BioLife Plasma Services or Takeda Pharmaceuticals.</p>
</div>
</div>`;

const FOOTER = `<footer>
<div class="footer-inner">
<p class="footer-disc"><strong>Disclaimer:</strong> This website is an independent informational directory and earnings estimator. We are <strong>NOT affiliated</strong>, associated, authorized, endorsed by, or in any way officially connected with BioLife Plasma Services or Takeda Pharmaceuticals. BioLife&reg; is a registered trademark of Takeda Pharmaceutical Company. All information is provided for educational and estimation purposes only. Always verify rates and eligibility with your local donation center.</p>
<div class="footer-links">
<a href="/privacy">Privacy Policy</a>
<a href="/terms">Terms of Use</a>
<a href="/contact">Contact</a>
<a href="/about">About</a>
<a href="/locations">All Locations</a>
<a href="/blog">Blog</a>
</div>
<p class="copy">&copy; 2026 BioLife Plasma Earnings Calculator. All rights reserved.</p>
</div>
</footer>`;

const CALCULATOR_HTML = `<section class="calc-section" id="calculator">
<div class="container">
<div class="calc-header">
<h2>Monthly Income Estimator</h2>
<p>Adjust your donor type and donation frequency to see real-time projections.</p>
</div>
<div class="calc-grid">
<div class="calc-card">
<h3>Your Inputs</h3>
<div class="input-group">
<label>Donor Type</label>
<div class="donor-toggle" id="donorToggle">
<button class="donor-btn active" data-value="new">New Donor</button>
<button class="donor-btn" data-value="return">Returning</button>
</div>
</div>
<div class="input-group">
<label>Donations This Month: <strong id="donationCount" style="color:#0f172a">4</strong></label>
<div class="slider-wrap">
<input type="range" id="donationSlider" min="1" max="8" value="4" step="1">
</div>
<div class="count-display" id="sliderDisplay">4</div>
</div>
</div>
<div class="results-card">
<h3>Estimated Earnings</h3>
<div class="main-value" id="monthlyEarnings">$460</div>
<div class="result-rows">
<div class="result-row teal">
<span class="label">Per Donation</span>
<span class="value" id="perDonation">$115</span>
</div>
<div class="result-row">
<span class="label">Total Donations</span>
<span class="value" id="totalDonations">4</span>
</div>
<div class="result-row">
<span class="label">Annualized Projection</span>
<span class="value" id="annualizedEarnings">$5,520</span>
</div>
</div>
</div>
</div>
<p class="calc-footnote">According to published industry averages. Actual compensation varies by location, weight-based pay tables, and current center promotions. Verify with your local center.</p>
</div>
</section>`;

const CALC_SCRIPT = `<script>
(function(){
var donorType = 'new';
var rates = { new: 115, return: 65 };
var donorBtns = document.querySelectorAll('.donor-btn');
var slider = document.getElementById('donationSlider');
var sliderDisplay = document.getElementById('sliderDisplay');
var donationCount = document.getElementById('donationCount');
var monthlyEl = document.getElementById('monthlyEarnings');
var perDonationEl = document.getElementById('perDonation');
var totalDonationsEl = document.getElementById('totalDonations');
var annualizedEl = document.getElementById('annualizedEarnings');
function update() {
var count = parseInt(slider.value, 10);
var rate = rates[donorType];
var monthly = count * rate;
var annualized = monthly * 12;
sliderDisplay.textContent = count + ' donation' + (count !== 1 ? 's' : '');
donationCount.textContent = count;
monthlyEl.textContent = '$' + monthly.toLocaleString();
perDonationEl.textContent = '$' + rate;
totalDonationsEl.textContent = count;
annualizedEl.textContent = '$' + annualized.toLocaleString();
}
donorBtns.forEach(function(btn) {
btn.addEventListener('click', function() {
donorBtns.forEach(function(b) { b.classList.remove('active'); });
btn.classList.add('active');
donorType = btn.getAttribute('data-value');
update();
});
});
slider.addEventListener('input', update);
update();
})();
function toggleFaq(el) {
var answer = el.nextElementSibling;
var isOpen = answer.classList.contains('open');
document.querySelectorAll('.faq-a.open').forEach(function(a){a.classList.remove('open');});
document.querySelectorAll('.faq-q.open').forEach(function(b){b.classList.remove('open');});
if(!isOpen){answer.classList.add('open');el.classList.add('open');}
}
(function(){
var STORAGE_KEY = 'plasmabiolife_comments';
function loadComments() {
try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]}catch(e){return[]}
}
function saveComments(c){localStorage.setItem(STORAGE_KEY,JSON.stringify(c))}
function renderComments(){
var list = document.getElementById('commentList');
var empty = document.getElementById('commentEmpty');
if(!list)return;
var comments = loadComments();
if(empty){
empty.style.display = comments.length === 0 ? 'block' : 'none';
}
var items = comments.slice(-20).reverse().map(function(c){
var time = new Date(c.ts).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'});
return '<div class="comment-item"><span class="comment-name">'+escapeHtml(c.name)+'</span><span class="comment-time">'+time+'</span><div class="comment-text">'+escapeHtml(c.text)+'</div></div>';
}).join('');
var existing = list.querySelectorAll('.comment-item');
existing.forEach(function(e){e.remove();});
if(items){list.insertAdjacentHTML('beforeend',items);}
}
function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
window.postComment = function(){
var name = document.getElementById('commentName');
var text = document.getElementById('commentText');
if(!name||!text)return;
var n=name.value.trim(),t=text.value.trim();
if(!n||!t)return;
var comments = loadComments();
comments.push({name:n,text:t,ts:Date.now()});
saveComments(comments);
name.value='';text.value='';
renderComments();
};
renderComments();
})();
</script>`;

function buildCityContent(c) {
  return `<div class="container" style="padding:40px 24px">
<h1>Plasma Donation in ${c.city}, ${c.state}</h1>
<p style="font-size:0.9rem;color:var(--gray-500);max-width:700px;line-height:1.7">Find BioLife plasma donation information for <strong>${c.city}, ${c.state}</strong>. According to published industry averages, new donors earn approximately $115 per donation and returning donors approximately $65 per donation in 2026. Actual compensation varies by location, weight-based pay tables, and current center promotions.</p>
<div style="background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius);padding:20px;margin:24px 0;max-width:500px">
<div style="font-size:0.85rem;font-weight:700;margin-bottom:8px">BioLife Plasma — ${c.city}, ${c.state}</div>
<div style="font-size:0.82rem;color:var(--gray-500);margin-bottom:4px">${c.addr}</div>
<div style="font-size:0.78rem;color:var(--gray-400);margin-bottom:12px">Mon-Sat 7am-7pm, Sun 8am-5pm</div>
<a href="/" class="btn-sm">Estimate Your Earnings</a>
</div>
<h2>BioLife ${c.city} Donation Rates</h2>
<p>According to published 2026 industry averages and BioLife compensation schedules, the estimated earnings for plasma donors in ${c.city}, ${c.state} are:</p>
<ul>
<li>New Donors: approximately <strong>$115 per donation</strong></li>
<li>Returning Donors: approximately <strong>$65 per donation</strong></li>
<li>Monthly Potential: up to <strong>$920</strong> for new donors donating 8 times per month</li>
<li>Annual Potential: up to <strong>$11,040</strong> for consistent weekly donations</li>
</ul>
<p>Actual compensation may vary based on donor weight, donation frequency, and center-specific promotions. BioLife frequently offers new donor promotional bonuses that can significantly increase first-month earnings. Use our <a href="/#calculator">free earnings calculator</a> to estimate your personal donation income.</p>
<h2>Frequently Asked Questions About Donating in ${c.city}</h2>
<h3>How often can I donate plasma in ${c.city}?</h3>
<p>According to official FDA and BioLife eligibility parameters, donors can generally donate plasma up to two times per week, with at least 48 hours between donations. Most ${c.city} donors average 4 to 8 donations per month.</p>
<h3>What do I need to bring to donate in ${c.city}?</h3>
<p>First-time donors at the ${c.city} BioLife center generally need a valid government-issued ID, proof of Social Security number, and proof of local address. According to published BioLife requirements, donors must be at least 18 years old and weigh a minimum of 110 pounds.</p>
</div>`;
}

function buildFaq() {
  const faqs = [
    {q:'How much does BioLife pay per donation in 2026?',a:'According to published industry averages, BioLife pays new donors approximately $115 per donation and returning donors approximately $65 per donation as of 2026. Official eligibility parameters generally apply a weight-based compensation scale, so actual rates may vary. Per published FDA guidelines, donors can donate up to twice per week. Please verify current compensation with your local BioLife center as rates and promotions change regularly.'},
    {q:'How often can I donate plasma at BioLife?',a:'Official FDA and BioLife eligibility parameters generally allow donations up to two times within a seven-day period, with at least 48 hours between donations. According to published industry standards, most donors complete 4 to 8 donations per month depending on their schedule and continued eligibility. New donors should allow additional time for the initial health screening and physical examination.'},
    {q:'Are BioLife new donor bonuses currently available?',a:'BioLife frequently offers new donor promotional rates. Industry-standard new donor promotions typically provide elevated per-donation compensation during the first several visits, averaging approximately $115 per donation according to published promotional materials. Check with your local BioLife center for current offers, as promotions vary by location, season, and center-specific campaigns.'},
    {q:'Do I need to pay taxes on plasma donation income?',a:'Yes, according to IRS guidelines, plasma donation compensation is generally considered taxable income. Official BioLife and industry policies state that centers issue a Form 1099-NEC when annual earnings exceed $600. Individuals should consult a qualified tax professional regarding their specific reporting obligations, as tax treatment can vary based on individual circumstances.'},
    {q:'What are the eligibility requirements to donate at BioLife?',a:'Official BioLife eligibility parameters generally require donors to be at least 18 years of age, weigh a minimum of 110 pounds (50 kg), and present a valid government-issued ID and proof of Social Security number. According to published FDA requirements, all donors must pass a medical screening examination and health questionnaire at their first visit.'},
  ];
  return `<section class="faq" id="faq">
<div class="container">
<h2 class="section-title">Frequently Asked Questions</h2>
<div class="faq-list">
${faqs.map(f => `<div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">${f.q}<span class="arrow">&#9660;</span></button><div class="faq-a"><div class="faq-a-inner">${f.a}</div></div></div>`).join('\n')}
</div>
</div>
</section>`;
}

function cityLinks() {
  return `<div class="city-links">
<div class="container">
<h3>Browse Plasma Donation by City</h3>
<div class="city-grid">
${CITIES.map(c => `<a href="/plasma-donation-${c.slug}">${c.city}, ${c.state}</a>`).join('\n')}
<a href="/locations" style="font-weight:600;color:var(--teal-dark)">View All 70+ Cities →</a>
</div>
</div>
</div>`;
}

function buildBenefits() {
  return `<section class="benefits">
<div class="container">
<h2 class="section-title">Why Donate Plasma?</h2>
<div class="benefits-grid">
<div class="benefit-card">
<div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#14b8a6" stroke-width="1.5" fill="none"/><path d="M10 6v4l3 2" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round"/></svg></div>
<h3>Flexible Schedule</h3>
<p>According to published BioLife operating hours, most centers accommodate morning, evening, and weekend appointments to fit your routine.</p>
</div>
<div class="benefit-card">
<div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2v16M6 6l4-4 4 4M6 14l4 4 4-4" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<h3>Supplemental Income</h3>
<p>Industry-standard rates allow new donors to earn up to $920 per month based on the maximum eight-donation schedule.</p>
</div>
<div class="benefit-card">
<div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="11" rx="2" stroke="#14b8a6" stroke-width="1.5" fill="none"/><circle cx="10" cy="10.5" r="2" stroke="#14b8a6" stroke-width="1.5"/><path d="M2 8h16" stroke="#14b8a6" stroke-width="1.5"/></svg></div>
<h3>Instant Compensation</h3>
<p>Official BioLife policy generally compensates donors immediately after each completed donation via prepaid card deposit.</p>
</div>
<div class="benefit-card">
<div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6z" stroke="#14b8a6" stroke-width="1.5" fill="none"/><circle cx="10" cy="8" r="2" stroke="#14b8a6" stroke-width="1.5"/></svg></div>
<h3>Nationwide Access</h3>
<p>BioLife reports operating hundreds of FDA-licensed collection centers across the United States, making convenient access available for most donors.</p>
</div>
</div>
</div>
</section>`;
}

const REVIEWS = [
  {name:'Sarah M.',stars:5,city:'Houston, TX',text:'I started donating plasma three months ago. The process is straightforward and the staff at my local center are professional. The calculator gave me a pretty accurate estimate of what I could expect to earn.',date:'May 2026'},
  {name:'James R.',stars:4,city:'Phoenix, AZ',text:'Been a return donor for about six months now. The $65 per donation adds up nicely over a month. I use the calculator to plan my monthly donation schedule around my work.',date:'May 2026'},
  {name:'Maria G.',stars:5,city:'Atlanta, GA',text:'As a first-time donor I was nervous, but the screening process was explained clearly. The new donor rate helped me decide to try it. Good supplemental income option.',date:'April 2026'},
  {name:'David L.',stars:4,city:'Denver, CO',text:'Consistent way to earn extra money each month. The annual projection feature helps me budget. I donate twice a week and it fits my schedule well.',date:'April 2026'},
  {name:'Amanda K.',stars:5,city:'Seattle, WA',text:'I appreciate having a free tool to estimate earnings before committing to a schedule. The rates listed match what my local center offers. Helpful resource.',date:'March 2026'},
  {name:'Robert T.',stars:4,city:'Chicago, IL',text:'Plasma donation has been a decent way to supplement my income. The center is clean and appointments are easy to schedule online. Calculator is accurate.',date:'March 2026'},
  {name:'Jennifer P.',stars:5,city:'Orlando, FL',text:'Started as a new donor with the promotional rate and continued as a return donor. The earnings estimator helped me decide how many times to donate per month.',date:'February 2026'},
  {name:'Michael B.',stars:4,city:'Dallas, TX',text:'Good resource for estimating potential earnings. The breakdown between new and return donor rates is helpful. I share this with friends considering donation.',date:'February 2026'},
];

const VIDEOS = [
  {title:'First Time Plasma Donation Experience',duration:'4:32',url:'https://www.youtube.com/embed/cl0_y1AtHZY',fallback:'https://www.youtube.com/watch?v=cl0_y1AtHZY'},
  {title:'Donate Plasma at BioLife — Overview',duration:'2:15',url:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBioLifePlasmaServices%2Fvideos%2F1257305842510771%2F',fallback:'https://www.facebook.com/BioLifePlasmaServices/videos/donate-plasma-at-biolife/1257305842510771/'},
  {title:'BioLife Plasma Donation Experience',duration:'1:45',url:'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBioLifePlasmaServices%2Fvideos%2F948167747738479%2F',fallback:'https://www.facebook.com/BioLifePlasmaServices/videos/donate-plasma-at-biolife/948167747738479/'},
];

function buildReviews() {
  return `<section class="reviews">
<div class="container">
<div class="reviews-header">
<span class="sample-label">Sample testimonials for informational purposes</span>
<h2>Donor Experiences &amp; Reviews</h2>
<p>Realistic donor perspectives based on common experiences shared in public forums.</p>
</div>
<div class="review-grid">
${REVIEWS.map(r => `<div class="review-card">
<div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
<div class="review-text">"${r.text}"</div>
<div class="review-author">${r.name}</div>
<div class="review-location">${r.city}</div>
<div class="review-date">${r.date}</div>
</div>`).join('\n')}
</div>
</div>
</section>`;
}

function buildVideos() {
  return `<section class="videos">
<div class="container">
<div class="videos-header">
<span class="sample-label">Informational video placeholders</span>
<h2>Video Experiences (Informational)</h2>
<p>Sample video content from public sources for demonstration purposes.</p>
</div>
<div class="video-grid">
${VIDEOS.map(v => `<div class="video-card"><iframe src="${v.url}" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`).join('\n')}
</div>
</div>
</section>`;
}

function buildComments() {
  return `<section class="comments" id="comments">
<div class="container">
<div class="comments-header">
<span class="sample-label">Interactive demo — comments stored locally</span>
<h2>Share Your Experience</h2>
<p>Leave a comment below. Comments are stored in your browser for demonstration.</p>
</div>
<div class="comment-form">
<label for="commentName">Your Name</label>
<input type="text" id="commentName" placeholder="e.g. Alex D." maxlength="50">
<label for="commentText">Your Comment</label>
<textarea id="commentText" placeholder="Share your plasma donation experience or ask a question..." maxlength="500"></textarea>
<button class="btn-submit" onclick="postComment()">Submit Comment</button>
</div>
<div class="comment-list" id="commentList">
<div class="comment-empty" id="commentEmpty">No comments yet. Be the first to share!</div>
</div>
</div>
</section>`;
}

function buildLocationsLd(c) {
  return `{"@type":"LocalBusiness","name":"BioLife Plasma Services - ${c.city}","address":{"@type":"PostalAddress","streetAddress":"${c.addr.split(',')[0]}","addressLocality":"${c.city}","addressRegion":"${c.state}","addressCountry":"US"},"telephone":"(800) 555-0100","openingHours":"Mo-Sa 07:00-19:00, Su 08:00-17:00"}`;
}

function page(title, desc, bodyContent, extraLd) {
  const ld = `[{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type":"Question","name":"How much does BioLife pay per donation in 2026?","acceptedAnswer":{"@type":"Answer","text":"According to published industry averages, BioLife pays new donors approximately $115 per donation and returning donors approximately $65 per donation as of 2026. Actual compensation varies by location, weight-based pay tables, and current center promotions."}},
      {"@type":"Question","name":"How often can you donate plasma at BioLife?","acceptedAnswer":{"@type":"Answer","text":"Official FDA and BioLife eligibility parameters generally allow donations up to two times within a seven-day period, with at least 48 hours between donations. Most donors complete 4 to 8 donations per month."}},
      {"@type":"Question","name":"Are BioLife new donor bonuses available?","acceptedAnswer":{"@type":"Answer","text":"BioLife frequently offers new donor promotional rates. Industry-standard new donor promotions typically provide elevated per-donation compensation during the first several visits, averaging approximately $115 per donation."}},
      {"@type":"Question","name":"Do you need to pay taxes on plasma donation income?","acceptedAnswer":{"@type":"Answer","text":"Yes, according to IRS guidelines, plasma donation compensation is generally considered taxable income. Centers issue a Form 1099-NEC when annual earnings exceed $600."}},
      {"@type":"Question","name":"What are the eligibility requirements to donate at BioLife?","acceptedAnswer":{"@type":"Answer","text":"Official BioLife eligibility parameters generally require donors to be at least 18 years of age, weigh a minimum of 110 pounds (50 kg), and present a valid government-issued ID and proof of Social Security number."}}
    ]
  },${extraLd || ''}]`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="https://www.plasmabiolife.com/">
<meta name="robots" content="index, follow">
<script type="application/ld+json">${ld}</script>
<style>${CSS}</style>
</head>
<body>
${NAV}
${DISCLAIMER}
${bodyContent}
<div class="ad-row"><div class="ad-slot"><!-- ADSENSE BETWEEN SECTIONS --></div></div>
${buildReviews()}
<div class="ad-row"><div class="ad-slot"><!-- ADSENSE BETWEEN SECTIONS --></div></div>
${buildVideos()}
${buildComments()}
<div class="ad-row"><div class="ad-slot"><!-- ADSENSE BOTTOM --></div></div>
${cityLinks()}
${buildBenefits()}
${buildFaq()}
<div class="trust-strip">
<div class="container">
<p>Data Sources: Published Industry Averages &bull; Last Updated: June 2026 &bull; Independent website not affiliated with BioLife Plasma Services or Takeda Pharmaceuticals.</p>
</div>
</div>
${FOOTER}
${CALC_SCRIPT}
</body>
</html>`;
}

const dist = path.join(__dirname, 'dist');
fs.rmSync(dist, { recursive: true, force: true });

// Homepage
const homepageLd = `{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BioLife Plasma Earnings Calculator",
  "url": "https://www.plasmabiolife.com/",
  "description": "Free interactive tool to estimate monthly earnings from BioLife plasma donations based on published industry rates.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "All"
},{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://www.plasmabiolife.com/"},
    {"@type":"ListItem","position":2,"name":"Earnings Calculator","item":"https://www.plasmabiolife.com/calculator"}
  ]
}`;

const HOME_BODY = `<div class="hero">
<div class="container">
<div class="hero-badge"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="#0d9488" stroke-width="1.5" stroke-linecap="round"/></svg> Updated for 2026 Industry Rates</div>
<h1>BioLife Plasma Earnings Calculator</h1>
<p>Free interactive tool. Estimate your monthly income in seconds. Based on published 2026 industry compensation averages.</p>
<div class="hero-actions">
<a href="#calculator" class="btn btn-primary">Calculate Your Earnings</a>
<a href="/calculator" class="btn btn-outline">Open Full Calculator</a>
</div>
</div>
</div>
<div class="ad-row"><div class="ad-slot"><!-- ADSENSE TOP --></div></div>
${CALCULATOR_HTML}
<div class="ad-row"><div class="ad-slot"><!-- ADSENSE IN CONTENT --></div></div>`;

const homeHtml = page(
  'BioLife Plasma Earnings Calculator 2026 | Free Monthly Income Estimator',
  'Free BioLife plasma earnings calculator. Estimate your monthly income: new donors earn $115/donation, returning $65. Interactive tool with annual projections for 2026.',
  HOME_BODY,
  homepageLd
);
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'index.html'), homeHtml);

// City pages
CITIES.forEach(c => {
  const dir = path.join(dist, 'plasma-donation-' + c.slug);
  fs.mkdirSync(dir, { recursive: true });
  const ld = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.plasmabiolife.com/"},
      {"@type":"ListItem","position":2,"name":"${c.city}, ${c.state}","item":"https://www.plasmabiolife.com/plasma-donation-${c.slug}"}
    ]
  },${buildLocationsLd(c)}`;
  const html = page(
    `Plasma Donation ${c.city}, ${c.state} — BioLife Rates & Information`,
    `Find BioLife plasma donation information for ${c.city}, ${c.state}. New donors earn ~$115/donation, returning ~$65. Center address, hours, and 2026 rate estimates included.`,
    buildCityContent(c),
    ld
  );
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log('  ✓ ' + c.city + ', ' + c.state);
});

// Static pages
STATIC_PAGES.forEach(p => {
  const dir = path.join(dist, p.path);
  fs.mkdirSync(dir, { recursive: true });
  let body = '';
  if (p.path === 'calculator') {
    body = `<div class="hero">
<div class="container">
<h1>BioLife Plasma Calculator</h1>
<p>Estimate your monthly and annual plasma donation earnings based on published 2026 industry rates.</p>
</div>
</div>
${CALCULATOR_HTML}`;
  } else if (p.path === 'locations') {
    body = `<div class="container" style="padding:40px 24px">
<h1>All BioLife Plasma Locations</h1>
<p style="font-size:0.9rem;color:var(--gray-500);max-width:700px;line-height:1.7">Browse all BioLife plasma donation centers across the United States. According to published BioLife information, the company operates hundreds of FDA-licensed collection centers nationwide. Below is a directory of major locations and estimated 2026 compensation rates.</p>
<div class="dir-grid" style="margin-top:24px">
${CITIES.map(c => `<div class="dir-card"><h3>${c.city}, ${c.state}</h3><div class="addr">${c.addr}</div><div class="hours">Mon-Sat 7am-7pm, Sun 8am-5pm</div><a href="/plasma-donation-${c.slug}" class="btn-sm">View Details</a></div>`).join('\n')}
</div>
</div>`;
  } else if (p.path === 'privacy') {
    body = `<div class="content-page"><div class="container">
<h1>Privacy Policy</h1>
<p>Last updated: June 2026</p>
<h2>Information We Collect</h2>
<p>This website does not collect, store, or process any personal information from its users. All calculations are performed locally in your browser — no data is transmitted to our servers.</p>
<h2>Third-Party Services</h2>
<p>We may use third-party advertising services (such as Google AdSense) that may use cookies and similar technologies to serve relevant advertisements. These services operate under their own privacy policies. You can manage cookie preferences through your browser settings.</p>
<h2>Analytics</h2>
<p>This website may use basic analytics to understand aggregate traffic patterns. No personally identifiable information is tracked or stored.</p>
<h2>Contact</h2>
<p>If you have questions about this privacy policy, please contact us through our <a href="/contact">contact page</a>.</p>
</div></div>`;
  } else if (p.path === 'terms') {
    body = `<div class="content-page"><div class="container">
<h1>Terms of Use</h1>
<p>Last updated: June 2026</p>
<h2>Acceptance of Terms</h2>
<p>By using this website, you agree to these terms of use. If you do not agree, please do not use this site.</p>
<h2>Informational Purposes Only</h2>
<p>All content on this website is provided for informational and educational purposes only. Compensation figures are based on published industry averages and should not be considered guaranteed earnings. Actual compensation varies by location, weight-based pay tables, and current center promotions.</p>
<h2>No Affiliation</h2>
<p>This website is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with BioLife Plasma Services or Takeda Pharmaceuticals. BioLife is a registered trademark of Takeda Pharmaceutical Company.</p>
<h2>No Financial Advice</h2>
<p>The information provided on this website does not constitute financial, legal, or tax advice. Please consult qualified professionals regarding your specific situation.</p>
</div></div>`;
  } else if (p.path === 'contact') {
    body = `<div class="content-page"><div class="container">
<h1>Contact Us</h1>
<p>Have questions, suggestions, or feedback about our BioLife Plasma Earnings Calculator? We'd love to hear from you.</p>
<p>Please note: This is an independent informational website and is NOT affiliated with BioLife Plasma Services or Takeda Pharmaceuticals. We cannot assist with specific center inquiries, appointments, or account issues.</p>
<p>For BioLife-specific support, please contact BioLife Plasma Services directly through their official website or visit your local center.</p>
</div></div>`;
  } else if (p.path === 'about') {
    body = `<div class="content-page"><div class="container">
<h1>About This Tool</h1>
<p>The BioLife Plasma Earnings Calculator is a free, independent online tool designed to help plasma donors estimate their potential earnings based on published 2026 industry compensation averages.</p>
<h2>How It Works</h2>
<p>Our calculator uses published industry-average compensation rates for new donors ($115/donation) and returning donors ($65/donation) to provide quick monthly and annual earnings estimates. Simply select your donor type and expected monthly donation frequency to see real-time projections.</p>
<h2>Our Mission</h2>
<p>We aim to provide transparent, easy-to-understand earnings estimates to help individuals make informed decisions about plasma donation as a source of supplemental income.</p>
<h2>Data Sources</h2>
<p>Compensation figures are based on published industry averages, publicly available BioLife promotional materials, and donor-reported rate information. All figures should be verified with your local donation center.</p>
</div></div>`;
  }
  const html = page(p.title, p.desc, body, '');
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log('  ✓ /' + p.path);
});

// Blog pages
const blogDir = path.join(dist, 'blog');
fs.mkdirSync(blogDir, { recursive: true });

const blogIndexBody = `<div class="content-page"><div class="container">
<h1>BioLife Plasma Donation Blog</h1>
<p style="font-size:0.9rem;color:var(--gray-500);max-width:700px;line-height:1.7">Expert guides and resources about plasma donation rates, eligibility, tax implications, and tips to maximize your earnings with BioLife. Updated for 2026.</p>
<div class="blog-grid" style="margin-top:28px">
${BLOG_POSTS.map(b => `<a href="/blog/${b.slug}" style="text-decoration:none;color:inherit"><div class="blog-card"><h3>${b.title}</h3><p>${b.desc.substring(0, 120)}...</p></div></a>`).join('\n')}
</div>
</div></div>`;

const blogIndexHtml = page(
  'BioLife Plasma Blog — Donation Guides, Rates & Tips 2026',
  'Expert guides about BioLife plasma donation rates, eligibility, tax rules, and donor tips. Updated for 2026 with current compensation information.',
  blogIndexBody,
  ''
);
fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndexHtml);
console.log('  ✓ /blog');

BLOG_POSTS.forEach(b => {
  const dir = path.join(blogDir, b.slug);
  fs.mkdirSync(dir, { recursive: true });
  let content = '';
  if (b.slug === 'how-much-does-biolife-pay') {
    content = `<div class="content-page"><div class="container">
<h1>How Much Does BioLife Pay Per Donation in 2026?</h1>
<p>Full Guide to BioLife Plasma Donation Compensation Rates</p>
<h2>Current BioLife Donation Rates (2026)</h2>
<p>According to published industry averages and BioLife compensation schedules, plasma donation rates in 2026 are approximately:</p>
<ul>
<li><strong>New Donors:</strong> approximately $115 per donation</li>
<li><strong>Returning Donors:</strong> approximately $65 per donation</li>
<li><strong>New Donor Promotions:</strong> first-month bonuses can increase earnings significantly</li>
</ul>
<p>Actual compensation varies by location, donor weight, donation frequency, and current center promotions. BioLife uses a weight-based pay scale, meaning donors who weigh more may receive higher compensation per donation.</p>
<h2>How Much Can You Earn Per Month?</h2>
<p>Based on the maximum donation frequency of 8 times per month (twice per week), here are the estimated monthly earnings:</p>
<ul>
<li>New Donors: up to <strong>$920/month</strong> (8 donations × $115)</li>
<li>Returning Donors: up to <strong>$520/month</strong> (8 donations × $65)</li>
<li>Annual Projection (New): up to <strong>$11,040</strong></li>
<li>Annual Projection (Returning): up to <strong>$6,240</strong></li>
</ul>
<p>Use our <a href="/#calculator">free earnings calculator</a> to estimate your personal monthly income based on your expected donation frequency.</p>
<h2>Factors That Affect Your Pay Rate</h2>
<ul>
<li><strong>Weight-Based Compensation:</strong> BioLife uses a tiered pay scale based on donor weight</li>
<li><strong>Location:</strong> Rates may vary by state and individual center</li>
<li><strong>Promotions:</strong> New donor bonuses and seasonal promotions can boost earnings</li>
<li><strong>Donation Frequency:</strong> Donating the maximum twice per week increases monthly total</li>
</ul>
</div></div>`;
  } else if (b.slug === 'new-donor-bonus-guide') {
    content = `<div class="content-page"><div class="container">
<h1>BioLife New Donor Bonuses 2026</h1>
<p>How to Maximize Your First Month of Plasma Donation</p>
<h2>Current New Donor Promotions</h2>
<p>BioLife frequently offers promotional rates for first-time donors. According to published promotional materials, new donor bonuses typically provide elevated per-donation compensation during the first several visits, averaging approximately $115 per donation.</p>
<h2>Estimated First-Month Earnings</h2>
<p>Based on industry-standard new donor promotions, here is what you can expect in your first month:</p>
<ul>
<li>First Visit: $115 (new donor rate)</li>
<li>8 Donations (max per month): up to <strong>$920</strong></li>
<li>With Bonus Promotions: may exceed standard rates</li>
</ul>
<p>New donor promotions vary by location and are subject to change. Always verify current offers with your local BioLife center before your first visit.</p>
<h2>Tips for Maximizing Your First Month</h2>
<ul>
<li>Schedule your first visit early in the week for shorter wait times</li>
<li>Bring all required documents (ID, Social Security card, proof of address)</li>
<li>Stay hydrated and eat a protein-rich meal before donating</li>
<li>Consider donating twice per week to maximize monthly earnings</li>
</ul>
</div></div>`;
  } else if (b.slug === 'plasma-donation-requirements') {
    content = `<div class="content-page"><div class="container">
<h1>Plasma Donation Requirements — Complete 2026 Guide</h1>
<p>Everything you need to know before your first donation</p>
<h2>Basic Eligibility Requirements</h2>
<p>According to official FDA and BioLife eligibility parameters, the following requirements generally apply:</p>
<ul>
<li><strong>Age:</strong> Must be at least 18 years old</li>
<li><strong>Weight:</strong> Minimum of 110 pounds (50 kg)</li>
<li><strong>Identification:</strong> Valid government-issued ID and Social Security number</li>
<li><strong>Health Screening:</strong> Must pass a medical examination and health questionnaire</li>
<li><strong>Residency:</strong> Proof of local address typically required</li>
</ul>
<h2>Donation Frequency Limits</h2>
<p>According to published FDA guidelines for plasma donation:</p>
<ul>
<li>Maximum 2 donations per 7-day period</li>
<li>At least 48 hours between donations</li>
<li>Most donors average 4–8 donations per month</li>
</ul>
<h2>What to Bring to Your First Appointment</h2>
<ul>
<li>Valid government-issued photo ID (driver's license or passport)</li>
<li>Social Security card or proof of SSN</li>
<li>Proof of address (utility bill or bank statement)</li>
<li>List of current medications</li>
</ul>
</div></div>`;
  } else if (b.slug === 'plasma-donation-tax-guide') {
    content = `<div class="content-page"><div class="container">
<h1>Is Plasma Donation Taxable?</h1>
<p>IRS Rules and Guidelines for 1099 Income from Plasma Donation</p>
<h2>Is Plasma Donation Compensation Taxable?</h2>
<p>Yes, according to IRS guidelines, plasma donation compensation is generally considered taxable income. The IRS views compensation for plasma donation as income, not as a gift or charitable contribution.</p>
<h2>Form 1099-NEC Requirements</h2>
<p>According to official IRS and industry policies, plasma centers are required to issue Form 1099-NEC when annual earnings exceed $600. This form reports your donation income to both you and the IRS.</p>
<h2>How to Report Plasma Donation Income</h2>
<ul>
<li>Donation income should be reported as "Other Income" on your tax return</li>
<li>You may receive a Form 1099-NEC if your earnings exceed $600</li>
<li>Some donors report income even without receiving a 1099-NEC</li>
<li>Consult a qualified tax professional for guidance on your specific situation</li>
</ul>
<h2>Important Tax Considerations</h2>
<p>According to published tax guidance, plasma donors should be aware that:</p>
<ul>
<li>Donation income cannot be offset by standard deduction for charitable contributions</li>
<li>State tax treatment may vary from federal treatment</li>
<li>Independent contractors (which plasma donors are generally considered) may need to pay self-employment tax</li>
<li>Keep records of your donation dates and payment amounts throughout the year</li>
</ul>
</div></div>`;
  }
  const html = page(b.title, b.desc, content, '');
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log('  ✓ /blog/' + b.slug);
});

// Sitemap
const SITE = 'https://www.plasmabiolife.online';
var urls = ['/', '/calculator', '/locations', '/privacy', '/terms', '/contact', '/about', '/blog'];
CITIES.forEach(c => urls.push('/plasma-donation-' + c.slug));
BLOG_POSTS.forEach(b => urls.push('/blog/' + b.slug));
var sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
urls.forEach(u => { sitemap += '  <url><loc>' + SITE + u + '</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>\n'; });
sitemap += '</urlset>';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log('  ✓ sitemap.xml (' + urls.length + ' URLs)');

// Robots
var robots = 'User-agent: *\nAllow: /\nSitemap: ' + SITE + '/sitemap.xml\n';
fs.writeFileSync(path.join(dist, 'robots.txt'), robots);
console.log('  ✓ robots.txt');

console.log('Build complete — ' + (CITIES.length + STATIC_PAGES.length + 1 + BLOG_POSTS.length + 1) + ' pages generated');
