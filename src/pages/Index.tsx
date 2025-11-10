import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/quant-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <img 
                src={logo} 
                alt="QUANT XLR8" 
                className="h-12 w-auto"
              />
              <p className="text-sm font-medium text-muted-foreground">
                From Pilot to Paid Deployment in 90 Days
              </p>
            </div>

            <nav className="flex items-center gap-6">
              <a 
                href="#projects" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors scroll-smooth"
              >
                Projects
              </a>
              <a 
                href="#partners" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors scroll-smooth"
              >
                Partners
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors scroll-smooth"
              >
                FAQ
              </a>
              <Link to="/contact">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <section className="mb-16">
            <p className="text-lg text-foreground max-w-4xl leading-relaxed">
              We operate a venture-client style accelerator: we match startups to enterprise 
              business units for real pilots and purchasing—not just equity investing.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-3 mb-24">
            <Card className="border-2 hover:border-primary transition-all duration-300 animate-bubble-in hover:animate-float hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl">For Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We act as a global bridge between startups and corporates, delivering 
                  strategically aligned matches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-bubble-in [animation-delay:150ms] hover:animate-float hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl">For Corporates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  De-risked innovation: pre-vetted startups mapped to your use-cases; clear ROI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-bubble-in [animation-delay:300ms] hover:animate-float hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl">For Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Proprietary pipeline from enterprise-validated problem statements and pilots.
                </CardDescription>
              </CardContent>
            </Card>
          </section>

          <section id="projects" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-8">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="animate-bubble-in">
                <CardHeader>
                  <CardTitle>AI-Powered Supply Chain Optimization</CardTitle>
                  <CardDescription>Enterprise pilot with Fortune 500 logistics company</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Successfully deployed machine learning solution reducing operational costs by 23% in pilot phase.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-bubble-in [animation-delay:100ms]">
                <CardHeader>
                  <CardTitle>Smart Manufacturing Platform</CardTitle>
                  <CardDescription>IoT integration for production monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Real-time analytics platform now in paid deployment across 5 manufacturing facilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-bubble-in [animation-delay:200ms]">
                <CardHeader>
                  <CardTitle>Financial Risk Analytics</CardTitle>
                  <CardDescription>Banking sector compliance automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automated risk assessment tool processing 10,000+ transactions daily in production.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-bubble-in [animation-delay:300ms]">
                <CardHeader>
                  <CardTitle>Healthcare Data Integration</CardTitle>
                  <CardDescription>Patient data management system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HIPAA-compliant platform now serving 15+ healthcare providers nationwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="partners" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-8">Partners</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center animate-bubble-in">
                <CardHeader>
                  <CardTitle>Enterprise Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Global corporations</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-bubble-in [animation-delay:150ms]">
                <CardHeader>
                  <CardTitle>Startups Accelerated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">120+</p>
                  <p className="text-muted-foreground">Successfully matched</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-bubble-in [animation-delay:300ms]">
                <CardHeader>
                  <CardTitle>Investment Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">25+</p>
                  <p className="text-muted-foreground">VC firms & angels</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="faq" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-8">FAQ</h2>
            <div className="max-w-3xl space-y-6">
              <Card className="animate-bubble-in">
                <CardHeader>
                  <CardTitle className="text-xl">How long is the accelerator program?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our program runs for 90 days, taking startups from initial pilot to paid deployment with enterprise partners.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-bubble-in [animation-delay:100ms]">
                <CardHeader>
                  <CardTitle className="text-xl">What industries do you focus on?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work across multiple sectors including manufacturing, logistics, finance, healthcare, and technology infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-bubble-in [animation-delay:200ms]">
                <CardHeader>
                  <CardTitle className="text-xl">Do you take equity?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We operate a venture-client model focused on facilitating real business relationships and purchasing agreements, not traditional equity investments.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-bubble-in [animation-delay:300ms]">
                <CardHeader>
                  <CardTitle className="text-xl">How can startups apply?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Reach out through our contact page. We review applications on a rolling basis and match startups with relevant corporate partners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
