import React from "react";
import Logo from "../Assets/Bharatteklogo.png"

export default function PrivacyPolicyIOSLight() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>iOS App Privacy Policy - BharatTek</title>
      
      <style>{`
        body {
          background-color: #f9fafb;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        ::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        .glass-nav {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      {/* Navbar */}
      <nav className="border-b border-gray-200 glass-nav sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <img
            src={Logo}
            alt="BharatTek Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="h-6 w-px bg-gray-300" />
          <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase">
            Legal
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy for iOS Apps
          </h1>
          <p className="text-sm text-[#00A651] uppercase tracking-widest font-bold">
            Last Updated: October 11, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-10 text-base text-gray-600">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              BharatTek Private Limited ("BharatTek", "we", "our", or "us") is
              committed to protecting your privacy. This Privacy Policy applies to
              all iOS mobile applications developed and published by BharatTek
              on the Apple App Store (collectively, the "Apps").
            </p>
            <p>
              This policy explains how we collect, use, disclose, and safeguard your
              information when you download, install, and use our Apps on your iPhone or iPad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways when you use
              our iOS Apps:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-800">Personal Information:</strong> If
                you create an account within our Apps, we may collect identifiable
                information such as your name, email address, and phone number.
              </li>
              <li>
                <strong className="text-gray-800">Device Information:</strong> We
                automatically collect device-specific information, including your
                hardware model, operating system version (iOS), unique device
                identifiers (such as IDFV), and mobile network information.
              </li>
              <li>
                <strong className="text-gray-800">App Activity &amp; Usage:</strong>{" "}
                We log data regarding your interactions with the App, such as
                features used, crash reports, and performance diagnostics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. iOS Permissions & Features
            </h2>
            <p className="mb-4">
              Depending on the specific functionality of the App you are using, we may request specific iOS system permissions.
              We only access these features if you grant explicit consent via the Apple permission prompts:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-800">Camera &amp; Photo Library:</strong> To
                allow you to upload profile pictures, scan QR codes, or save images to your device.
              </li>
              <li>
                <strong className="text-gray-800">Location Services:</strong> To
                show you nearby facilities or gyms. We only access your location while using the app unless you authorize "Always Allow."
              </li>
              <li>
                <strong className="text-gray-800">Push Notifications:</strong> To
                send you alerts regarding your account, subscriptions, or app updates via the Apple Push Notification service (APNs).
              </li>
              <li>
                <strong className="text-gray-800">Face ID / Touch ID:</strong> Used locally on your device for secure authentication. We do not collect or store your biometric data on our servers.
              </li>
              <li>
                <strong className="text-gray-800">App Tracking Transparency (ATT):</strong> We will ask for your permission before tracking your activity across other companies' apps and websites for targeted advertising or measurement purposes.
              </li>
            </ul>
            <p className="mt-4 text-sm bg-gray-100 border border-gray-200 text-gray-700 p-4 rounded-xl">
              <em>
                Note: You can revoke these permissions at any time by navigating to
                your device settings: Settings &gt; [App Name].
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Third-Party Services &amp; APIs
            </h2>
            <p className="mb-4">
              Our Apps may utilize third-party services that may collect information
              used to identify you. These services are bound by their own Privacy
              Policies. Key third-party services we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Apple Services (including In-App Purchases and Sign in with Apple)</li>
              <li>Google Firebase Analytics (for crash reporting and usage analytics)</li>
              <li>Secure Payment Gateways (for processing external subscriptions or UPI payments)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Retention &amp; Deletion
            </h2>
            <p className="mb-4">
              We retain your Personal Data only for as long as is necessary for the
              purposes set out in this Privacy Policy. In accordance with Apple's App Store Review Guidelines, you have the right to request the deletion of your account and associated data directly within the app.
            </p>
            <p>
              <strong className="text-gray-800">How to request deletion:</strong> You can delete your account
              directly through the settings/profile menu inside the App, or by emailing us
              at{" "}
              <a
                href="mailto:privacy@bharattek.com"
                className="text-[#00A651] hover:underline font-medium"
              >
                help@bharattek.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Security of Your Data
            </h2>
            <p className="mb-4">
              The security of your data is important to us. All data transmissions
              between your iOS device and our servers are encrypted using
              industry-standard TLS/SSL protocols. However, remember that no method
              of transmission over the internet, or method of electronic storage, is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Compliance with Indian Laws
            </h2>
            <p className="mb-4">
              This Privacy Policy is published in compliance with the Information
              Technology Act, 2000, and the Digital Personal Data Protection (DPDP)
              Act, 2023 of India. Any disputes arising under this Policy shall be
              governed by the laws of India and subject to the exclusive
              jurisdiction of the courts in Delhi/NCR.
            </p>
          </section>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Contact our Data Protection Officer:
            </p>
            <a
              href="mailto:privacy@bharattek.com"
              className="text-[#00A651] hover:text-green-700 transition-colors font-medium"
            >
              help@bharattek.com
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 BharatTek Private Limited.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  );
}