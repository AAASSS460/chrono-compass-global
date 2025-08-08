
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">About Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Welcome to ChronoCompass!</p>
          <p>
            This is a placeholder for your About Us page. Please replace this text with information about your website, your mission, and the team behind it.
          </p>
          <p>
            A compelling About Us page helps build trust and credibility with your audience and with services like Google AdSense.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
