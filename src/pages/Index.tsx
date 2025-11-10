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
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#partners" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Partners
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
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

          <section className="grid gap-8 md:grid-cols-3">
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
                  Access vetted innovative solutions and fast-track pilot programs with 
                  proven startups ready for deployment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-bubble-in [animation-delay:300ms] hover:animate-float hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl">For Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discover startups with validated product-market fit and real revenue 
                  traction through enterprise partnerships.
                </CardDescription>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
