import React from 'react';

function PrivacyPolicy() {
return (
<main className="pt-34 pb-20 bg-slate-50 min-h-screen">
<div className="max-w-4xl mx-auto px-6 md:px-12">

{/* HEADER */}
<div className="mb-12 border-b border-slate-200 pb-8">

<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
Privacy Policy for BharatTek
</h1>
<p className="text-slate-500 font-bold uppercase tracking-wider text-sm">
Last Updated: August 5, 2026
</p>
</div>

{/* CONTENT */}
<div className="space-y-10 text-[16px] text-slate-700 leading-relaxed font-medium">

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">1. Introduction</h2>
<p>
Welcome to <strong>BharatTek</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website, use our mobile and web applications, or engage with our services, and tell you about your privacy rights and how the law protects you.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">2. The Data We Collect About You</h2>
<p className="mb-3">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:</p>
<ul className="list-disc pl-6 space-y-2 text-slate-600">
<li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
<li><strong>Contact Data:</strong> Includes billing address, delivery address, email address, and telephone numbers.</li>
<li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
<li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
</ul>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">3. How We Use Your Personal Data</h2>
<p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
<ul className="list-disc pl-6 space-y-2 text-slate-600">
<li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing software development services).</li>
<li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
<li>Where we need to comply with a legal or regulatory obligation.</li>
</ul>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">4. Data Security</h2>
<p>
At BharatTek, we have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We architect our scalable systems—from our Kotlin mobile apps to our Python and DOT NET backends—with enterprise-grade security and strict access controls. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">5. Cookies & Tracking Technologies</h2>
<p>
Our platform uses cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services optimally.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">6. Your Legal Rights</h2>
<p className="mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
<ul className="list-disc pl-6 space-y-2 text-slate-600">
<li>Request access to your personal data.</li>
<li>Request correction of your personal data.</li>
<li>Request erasure of your personal data.</li>
<li>Object to processing of your personal data.</li>
<li>Request restriction of processing your personal data.</li>
</ul>
<p className="mt-4">
If you wish to exercise any of the rights set out above, please contact us.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">7. Contact Us</h2>
<p>
If you have any questions about this privacy policy or our privacy practices, please contact us at:
</p>
<div className="mt-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
<p className="font-bold text-slate-900">BharatTek</p>
<p className="text-slate-600">India</p>
<p className="text-slate-600 mt-2"><strong>Email:</strong> legal@bharattek.com</p>
<p className="text-slate-600"><strong>Support:</strong> contact@bharattek.com</p>
</div>
</section>

</div>
</div>
</main>
);
}

export default PrivacyPolicy;