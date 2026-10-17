import React from 'react';

function TermsOfService() {
return (
<main className="pt-34 pb-20 bg-slate-50 min-h-screen">
<div className="max-w-4xl mx-auto px-6 md:px-12">

{/* HEADER */}
<div className="mb-12 border-b border-slate-200 pb-8">

<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
Terms of Service
</h1>
<p className="text-slate-500 font-bold uppercase tracking-wider text-sm">
Last Updated: August 5, 2026
</p>
</div>

{/* CONTENT */}
<div className="space-y-10 text-[16px] text-slate-700 leading-relaxed font-medium">

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">1. Agreement to Terms</h2>
<p>
These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>BharatTek</strong> ("we", "us", or "our"), concerning your access to and use of our website, as well as any other media form, media channel, mobile website, or application related, linked, or otherwise connected thereto. By accessing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">2. Our Services</h2>
<p>
BharatTek provides premium software engineering, mobile application development (Android, iOS, KMP), artificial intelligence integration, and cloud-native solutions. The specific deliverables, timelines, and payment structures for individual client projects will be outlined in separate Statements of Work (SOW) or Master Service Agreements (MSA) which work in conjunction with these base Terms.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">3. Intellectual Property Rights</h2>
<p className="mb-3">Unless otherwise indicated or stipulated in a specific client contract:</p>
<ul className="list-disc pl-6 space-y-2 text-slate-600">
<li><strong>Client Ownership:</strong> Upon full payment for our services, you retain all intellectual property rights to the final source code, designs, and deliverables custom-built for your business.</li>
<li><strong>BharatTek Property:</strong> The Site, our proprietary methodologies, pre-existing code libraries, and general knowledge remain the intellectual property of BharatTek.</li>
<li>You may not copy, reproduce, aggregate, republish, upload, post, publicly display, or distribute our proprietary website content without our express written permission.</li>
</ul>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">4. User Representations</h2>
<p className="mb-3">By using our Site or engaging our services, you represent and warrant that:</p>
<ul className="list-disc pl-6 space-y-2 text-slate-600">
<li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
<li>You are not a minor in the jurisdiction in which you reside.</li>
<li>You will not access the Site or our services through automated or non-human means (unless via approved APIs).</li>
<li>You will not use our services for any illegal or unauthorized purpose.</li>
</ul>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">5. Limitation of Liability</h2>
<p>
In no event will BharatTek, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site or our software deliverables, even if we have been advised of the possibility of such damages. All custom software is provided "as is" upon final delivery and acceptance.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">6. Term and Termination</h2>
<p>
These Terms of Service shall remain in full force and effect while you use the Site. We reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Site and our services to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these Terms.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">7. Governing Law</h2>
<p>
These Terms shall be governed by and defined following the laws of India. BharatTek and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
</p>
</section>

<section>
<h2 className="text-2xl font-black text-slate-900 mb-4">8. Contact Us</h2>
<p>
In order to resolve a complaint regarding the Site or to receive further information regarding the use of the Site, please contact us at:
</p>
<div className="mt-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
<p className="font-bold text-slate-900">BharatTek</p>
<p className="text-slate-600">India</p>
<p className="text-slate-600 mt-2"><strong>Email:</strong> legal@bharattek.com</p>
<p className="text-slate-600"><strong>Business Inquiries:</strong> contact@bharattek.com</p>
</div>
</section>

</div>
</div>
</main>
);
}

export default TermsOfService;