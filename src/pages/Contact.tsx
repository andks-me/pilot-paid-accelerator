import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-block">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with us through our social channels or reach out via email
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
                <CardDescription>Direct contact</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@quantxlr8.com" 
                  className="text-primary hover:underline font-medium"
                >
                  info@quantxlr8.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </CardTitle>
                <CardDescription>Follow us for updates</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://linkedin.com/company/quantxlr8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  linkedin.com/company/quantxlr8
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  Twitter
                </CardTitle>
                <CardDescription>Latest news and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://twitter.com/quantxlr8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  @quantxlr8
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Facebook className="h-5 w-5" />
                  Facebook
                </CardTitle>
                <CardDescription>Join our community</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://facebook.com/quantxlr8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  facebook.com/quantxlr8
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
