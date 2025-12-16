import { Button } from "@/components/ui/button";
import { DollarSign, Users, FileText, Clock, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-rich">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 mb-6">
            <DollarSign className="w-10 h-10 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Payroll Management
            <span className="block text-gold mt-2">Made Simple</span>
          </h1>
          <p className="text-xl text-white-dim mb-8 max-w-2xl mx-auto">
            Streamline your payroll process with our comprehensive management system. 
            Handle employee compensation, tax calculations, and reporting with ease.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-gold-dark text-gold hover:bg-gold/10 font-semibold px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-black-card p-6 rounded-lg border border-gold-dark hover:border-gold transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Employee Management</h3>
              <p className="text-white-dim">
                Manage employee profiles, roles, and compensation structures all in one place.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-black-card p-6 rounded-lg border border-gold-dark hover:border-gold transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Payroll Processing</h3>
              <p className="text-white-dim">
                Automated payroll calculations with support for multiple pay schedules and deductions.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-black-card p-6 rounded-lg border border-gold-dark hover:border-gold transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Time Tracking</h3>
              <p className="text-white-dim">
                Integrated time tracking and attendance management for accurate payroll processing.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-black-card p-6 rounded-lg border border-gold-dark hover:border-gold transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Analytics & Reports</h3>
              <p className="text-white-dim">
                Comprehensive reporting and analytics to track payroll expenses and trends.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-black-card p-6 rounded-lg border border-gold-dark hover:border-gold transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Compliant</h3>
              <p className="text-white-dim">
                Bank-level security with compliance for tax regulations and labor laws.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-black-card p-6 rounded-lg border border-gold-dark hover:border-gold transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tax Management</h3>
              <p className="text-white-dim">
                Automated tax calculations and filing support to ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-black-card rounded-lg border border-gold-dark p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">10K+</div>
              <div className="text-white-dim">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">$50M+</div>
              <div className="text-white-dim">Processed Annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">99.9%</div>
              <div className="text-white-dim">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
