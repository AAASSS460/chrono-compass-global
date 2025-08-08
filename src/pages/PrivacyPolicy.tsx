
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h2 className="font-semibold text-lg">1. Introduction</h2>
          <p>
            <strong>This is a template and not a legal document.</strong> You must replace this content with a comprehensive privacy policy that accurately reflects your data handling practices.
          </p>
          <p>
            Our website is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information.
          </p>

          <h2 className="font-semibold text-lg">2. Information We Collect</h2>
          <p>
            Detail the types of information you collect from users (e.g., name, email address, usage data).
          </p>

          <h2 className="font-semibold text-lg">3. Use of Cookies and Advertising</h2>
          <p>
            For AdSense, you must disclose the following:
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
            </ul>
          </p>

          <h2 className="font-semibold text-lg">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
