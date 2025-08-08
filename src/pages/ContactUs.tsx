
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This is a placeholder for your Contact Us page.
          </p>
          <p>
            Please replace this text with your contact information, such as an email address, a contact form, or social media links. This is essential for AdSense approval as it shows you are a legitimate and reachable entity.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
