import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, MessageSquare, CheckCircle2, Star, TrendingUp, Users, Zap } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-foreground">Outrev</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-thin text-foreground mb-6 leading-tight text-balance">
            {'Never miss another '}
            <span className="gradient-text">customer call</span>
            {' or appointment'}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {'AI-powered communication platform built for mechanic shops. Handle bookings, answer calls, and engage customers 24/7—all automated.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Get a Free Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-muted-foreground/30 hover:bg-muted bg-transparent">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2,200+", label: "Shops using Outrev" },
            { value: "98%", label: "Call answer rate" },
            { value: "40%", label: "More bookings" },
            { value: "24/7", label: "AI availability" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-4">Everything your shop needs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {'Streamline operations and increase revenue with our comprehensive platform'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Phone,
              title: "AI Voice Answering",
              description: "Never miss a call again. Our AI answers customer inquiries, schedules appointments, and provides quotes—day or night."
            },
            {
              icon: Calendar,
              title: "Smart Booking",
              description: "Customers book appointments instantly through your website, phone, or text. Syncs seamlessly with your shop calendar."
            },
            {
              icon: MessageSquare,
              title: "Customer Communication",
              description: "Automated text and email updates keep customers informed about their vehicle status, estimates, and pickup times."
            }
          ].map((feature, i) => (
            <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Real-Time Analytics</h3>
                  <p className="text-muted-foreground">Track call volume, booking rates, and customer satisfaction in one intuitive dashboard.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Customer Database</h3>
                  <p className="text-muted-foreground">Build lasting relationships with automated follow-ups and service reminders.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Seamless Integration</h3>
                  <p className="text-muted-foreground">Connects with your existing shop management software and POS systems.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Review Management</h3>
                  <p className="text-muted-foreground">Automatically request and manage reviews to build your online reputation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20 md:py-32 bg-secondary/50 -mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-4">Trusted by shop owners nationwide</h2>
            <p className="text-xl text-muted-foreground">{'See how Outrev is transforming mechanic shops'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Outrev increased our bookings by 45% in the first month. The AI answers calls even when we're swamped, and customers love the instant scheduling.",
                author: "Mike Rodriguez",
                shop: "Rodriguez Auto Repair",
                metric: "+$32,000/month",
                metricLabel: "Revenue increase"
              },
              {
                quote: "We were missing 30% of calls before Outrev. Now we capture every opportunity. The ROI was clear within two weeks.",
                author: "Sarah Chen",
                shop: "Precision Auto Service",
                metric: "98%",
                metricLabel: "Call answer rate"
              },
              {
                quote: "The automated follow-ups and reminders brought back customers we hadn't seen in years. It's like having a full-time customer service team.",
                author: "James Walker",
                shop: "Walker's Garage",
                metric: "+$18,500/month",
                metricLabel: "From repeat customers"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground mb-3">{testimonial.shop}</div>
                    <div className="text-2xl font-bold text-primary">{testimonial.metric}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.metricLabel}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6 text-balance">
              {'Ready to transform your mechanic shop?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {'Join thousands of shops already using Outrev to increase revenue and improve customer satisfaction.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Schedule Your Free Demo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-muted-foreground/30 hover:bg-muted bg-transparent">
                Call (877) 555-0123
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">{'No credit card required • Setup in under 24 hours'}</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">O</span>
                </div>
                <span className="text-lg font-bold text-foreground">Outrev</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {'AI-powered communication for the modern mechanic shop.'}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Docs</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2026 Outrev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
