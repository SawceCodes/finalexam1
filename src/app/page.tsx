"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  DollarSign, 
  Info, 
  RefreshCcw, 
  CheckCircle2 
} from "lucide-react";

// Assuming you have these shadcn components installed. 
// If not, standard HTML/Tailwind replacements are easy to swap in.
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function PayrollPage() {
  // --- STATE ---
  const [payPeriod, setPayPeriod] = useState<number>(52);
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [hoursWorked, setHoursWorked] = useState<string>("");
  
  // State to hold the calculation results
  const [result, setResult] = useState<{
    regPay: number;
    otPay: number;
    grossPay: number;
    ssTax: number;
    medTax: number;
    fedTax: number;
    totalTax: number;
    netPay: number;
  } | null>(null);

  // --- LOGIC ---
  const handleCalculate = () => {
    const rate = parseFloat(hourlyRate);
    const hours = parseFloat(hoursWorked);

    if (isNaN(rate) || isNaN(hours)) return;

    // 1. Gross Pay
    let regHours = hours;
    let otHours = 0;

    if (hours > 40) {
      regHours = 40;
      otHours = hours - 40;
    }

    const regPay = regHours * rate;
    const otPay = otHours * (rate * 1.5);
    const grossPay = regPay + otPay;

    // 2. FICA Taxes (Flat Rates)
    const ssTax = grossPay * 0.062;
    const medTax = grossPay * 0.0145;

    // 3. Federal Tax (2025 Brackets - Single)
    const annualGross = grossPay * payPeriod;
    const taxableIncome = annualGross - 15750; // 2025 Standard Deduction
    
    let annualFedTax = 0;

    if (taxableIncome > 0) {
      if (taxableIncome > 626350) {
        annualFedTax += (taxableIncome - 626350) * 0.37 + 186601.5; // (Simplified accumulation)
      } else if (taxableIncome > 250525) {
        annualFedTax += (taxableIncome - 250525) * 0.35 + 55062.75;
      } else if (taxableIncome > 197300) {
        annualFedTax += (taxableIncome - 197300) * 0.32 + 38030.75;
      } else if (taxableIncome > 103350) {
        annualFedTax += (taxableIncome - 103350) * 0.24 + 15482.75;
      } else if (taxableIncome > 48475) {
        annualFedTax += (taxableIncome - 48475) * 0.22 + 3409.25; // Adjusted accumulation for 22%
      } else if (taxableIncome > 11925) {
        annualFedTax += (taxableIncome - 11925) * 0.12 + 1192.5;
      } else {
        annualFedTax += taxableIncome * 0.10;
      }
    }

    const fedTax = Math.max(0, annualFedTax / payPeriod);

    // 4. Net Pay
    const totalTax = ssTax + medTax + fedTax;
    const netPay = grossPay - totalTax;

    setResult({
      regPay, otPay, grossPay, ssTax, medTax, fedTax, totalTax, netPay
    });
  };

  // Currency Formatter
  const fmt = (num: number) => 
    num.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="min-h-screen bg-black-rich text-white-dim p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
            <Calculator className="w-10 h-10 text-gold" />
            <span className="text-gold">2025</span> Payroll Calculator
          </h1>
          <p className="text-white-dim/60 max-w-lg mx-auto">
            Estimate your net pay using 2025 Federal Tax brackets. 
            Inputs are for a Single Filer with no additional deductions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* INPUT SECTION */}
          <Card className="bg-black-card border-gold/30 shadow-2xl shadow-black/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gold" />
                Employment Details
              </CardTitle>
              <CardDescription className="text-white-dim/50">
                Enter your wage details below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="payPeriod" className="text-gold-light">Pay Frequency</Label>
                {/* Standard select styled to match Shadcn input */}
                <select 
                  id="payPeriod"
                  className="flex h-10 w-full rounded-md border border-input bg-black-rich px-3 py-2 text-sm text-white ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gold/20"
                  value={payPeriod}
                  onChange={(e) => setPayPeriod(Number(e.target.value))}
                >
                  <option value={52}>Weekly (52 checks/year)</option>
                  <option value={26}>Bi-Weekly (26 checks/year)</option>
                  <option value={24}>Semi-Monthly (24 checks/year)</option>
                  <option value={12}>Monthly (12 checks/year)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate" className="text-gold-light">Hourly Rate ($)</Label>
                <Input 
                  id="rate" 
                  type="number" 
                  placeholder="25.00" 
                  className="bg-black-rich border-gold/20 text-white placeholder:text-gray-600"
                  value={hourlyRate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHourlyRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours" className="text-gold-light">Hours Worked</Label>
                <Input 
                  id="hours" 
                  type="number" 
                  placeholder="40" 
                  className="bg-black-rich border-gold/20 text-white placeholder:text-gray-600"
                  value={hoursWorked}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHoursWorked(e.target.value)}
                />
              </div>

            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleCalculate}
                className="w-full bg-gold hover:bg-gold-light text-black font-bold transition-all"
              >
                Calculate Paycheck
              </Button>
            </CardFooter>
          </Card>

          {/* RESULTS SECTION */}
          <Card className="bg-black-card border-gold/30 shadow-2xl shadow-black/50 flex flex-col justify-center">
            {!result ? (
              <div className="text-center p-10 opacity-40">
                <RefreshCcw className="w-16 h-16 mx-auto mb-4 text-gold" />
                <p>Enter your details and click calculate to view your paystub.</p>
              </div>
            ) : (
              <>
                <CardHeader className="bg-gold/10 border-b border-gold/10 pb-4">
                  <CardTitle className="text-gold flex justify-between items-center">
                    <span>Paystub Summary</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-white/10 text-sm">
                    {/* Gross Pay Breakdown */}
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Regular Pay</span>
                        <span className="text-white">{fmt(result.regPay)}</span>
                      </div>
                      <div className="flex justify-between text-white-dim/60">
                        <span>Overtime Pay</span>
                        <span>{fmt(result.otPay)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-white pt-2">
                        <span>GROSS PAY</span>
                        <span>{fmt(result.grossPay)}</span>
                      </div>
                    </div>

                    {/* Taxes Breakdown */}
                    <div className="p-4 space-y-2 bg-black/20">
                      <div className="flex justify-between text-red-300/80">
                        <span>Social Security (6.2%)</span>
                        <span>-{fmt(result.ssTax)}</span>
                      </div>
                      <div className="flex justify-between text-red-300/80">
                        <span>Medicare (1.45%)</span>
                        <span>-{fmt(result.medTax)}</span>
                      </div>
                      <div className="flex justify-between text-red-300/80">
                        <span>Federal Tax (Est.)</span>
                        <span>-{fmt(result.fedTax)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-red-400 pt-2 border-t border-white/10">
                        <span>Total Deductions</span>
                        <span>-{fmt(result.totalTax)}</span>
                      </div>
                    </div>

                    {/* Net Pay */}
                    <div className="p-6 bg-gold/5">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gold">NET PAY</span>
                        <span className="text-2xl font-bold text-gold">{fmt(result.netPay)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </div>

        {/* FOOTER INFO */}
        <div className="mt-12 p-4 rounded-lg border border-white/10 bg-black-card text-xs text-white-dim/40 flex items-start gap-3">
          <Info className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold mb-1">Disclaimer</p>
            <p>
              This calculation uses the 2025 Federal Tax Brackets for a Single filer with a standard deduction of $15,750. 
              It does not account for state taxes, local taxes, 401k contributions, or health insurance premiums. 
              This is a school project and should not be used for actual financial planning.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}